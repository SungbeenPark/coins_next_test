import {Accordion, Button, Divider, Form, Grid, Header, Icon, Radio} from "semantic-ui-react";
import {useState} from "react";
import TronWeb from "tronweb";
import {mnemonicToSeed, validateMnemonic} from 'bip39';
import {fromSeed} from 'bip32';
import {numComma} from "../utils/utils";

const Tron = () => {
    const derivePath = "m/44'/195'/0'/0/0";

    const TRON_URL = "https://api.shasta.trongrid.io/";
    // const mainOptions = {
    //     fullNode: 'https://api.trongrid.io/',
    //     solidityNode: 'https://api.trongrid.io/',
    //     eventServer: 'https://api.trongrid.io/'
    // };
    // const sideOptions = {
    //     fullNode: 'https://api.shasta.trongrid.io/',
    //     solidityNode: 'https://api.shasta.trongrid.io/',
    //     eventServer: 'https://api.shasta.trongrid.io/',
    // };
    // const privateKey = '';
    // // polar bench okay craft essay slim object ghost junior hidden wool hair
    // const mainGatewayAddress = 'TACPxXYN8vEgVxsciuVhqyT1ihKB1hZQNh';
    // const sideGatewayAddress = 'TFLtPoEtVJBMcj6kZPrQrwEdM3W3shxsBU';
    // const sideChainId = '413AF23F37DA0D48234FDD43D89931E98E1144481B';
    //
    // //been778@gmail.com 박성빈 api key
    // const API_KEY = "a426b269-8f18-4b66-9c8b-f235e49c36f8";

    const [activeIndex,setActiveIndex] = useState(-1);
    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const [mnemonic,setMnemonic] = useState("polar bench okay craft essay slim object ghost junior hidden wool hair");
    const [pw,setPw] = useState("")
    const [generateAddress,setGenerateAddress] = useState({privateKey:"",address:"",hexAddress:""})
    const [createAddress,setCreateAddress] = useState({base58checkAddress:"",value:""})

    const [walletInfo,setWalletInfo] = useState({balance:0,address:"",privateKey:""})
    const [tokens,setTokens] = useState([])

    const [sendType,setSendType] = useState("TRX")
    const [signature,setSignature] = useState("")

    const [toAddress,setToAddress] = useState("")
    const [sendAmount,setSendAmount] = useState(0)
    const generateAddressProc = (e)=>{
        e.preventDefault()

        const options = {method: 'GET', headers: {Accept: 'application/json'}};

        fetch(TRON_URL+'wallet/generateaddress', options)
            .then(response => response.json())
            .then(response => {
                setGenerateAddress(response)
            })
            .catch(err => console.error(err));

    }


    const createAddressProc = (e)=>{
        e.preventDefault()

        if(pw === ""){
            alert("비밀번호를 입력해주세요.")
            return
        }

        const options = {
            method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({value: pw})
        };

        fetch(TRON_URL+'/wallet/createaddress', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCreateAddress(response)
            })
            .catch(err => console.error(err));

    }

    const mnemonicProc = async (e) => {
        e.preventDefault()

        let mnemonicStr = mnemonic
        console.log("getAddress", mnemonicStr)
        if (pw === "" && !validateMnemonic(mnemonicStr)) {
            alert("니모닉을 확인해주세요.")
        } else {

            const seed = await mnemonicToSeed(mnemonicStr);
            const node = await fromSeed(seed);
            const child = await node.derivePath(derivePath);
            const privateKey = await child.privateKey.toString('hex');
            const address = await TronWeb.address.fromPrivateKey(privateKey);

            const options = {method: 'GET', headers: {Accept: 'application/json'}};

            const calNum = 1000000
            fetch(`https://api.shasta.trongrid.io/v1/accounts/${address}`, options)
                .then(response => response.json())
                .then(response => {
                    const data = response.data[0]
                    const balance = data.balance / calNum
                    console.log(privateKey)
                    setWalletInfo({balance:balance,address:address,privateKey:privateKey})

                    let tokenArr = []
                    if(data.trc20.length>0){
                        for (let i = 0; i < data.trc20.length; i++) {
                            const trc20 = data.trc20[i]
                            const key = Object.keys(trc20)[0];
                            tokenArr.push({publicKey:key,balance:trc20[key] / 1000})
                        }
                    }
                    if(data.assetV2.length>0){
                        for (let i = 0; i < data.assetV2.length; i++) {
                            const trc10 = data.assetV2[i]
                            tokenArr.push({publicKey:trc10.key,balance:trc10.value / calNum})
                        }
                    }
                    setTokens(tokenArr);
                })
                .catch(err => console.error(err));

        }
    }

    const sendProc = async (e) => {
        e.preventDefault();
        const calNum = 1000000
        // const from_address = await TronWeb.address.fromPrivateKey(walletInfo.privateKey);
        const HttpProvider = TronWeb.providers.HttpProvider;
        const fullNode = new HttpProvider(TRON_URL);
        const solidityNode = new HttpProvider(TRON_URL);
        const eventServer = new HttpProvider(TRON_URL);
        const privateKey = walletInfo.privateKey;
        const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
        //지갑설정
        let transaction;
        if (sendType === 'TRX') {
            const sendTx = await tronWeb.trx.sendTransaction(toAddress, sendAmount*calNum);
            console.log(sendTx)
            transaction = sendTx.txid
        } else if (sendType === 'SBP1') {
            const trc20ContractAddress = "TTUzyAFPwjuJBMDXRuRJ8yWCFiKmKrTzZq"
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            transaction = await contract.methods.transfer(toAddress, sendAmount*1000).send();

        } else if (sendType === 'SBP2') {
            const trc20ContractAddress = "TAYXSCjSkwQkaxtbB7gSbo95TB9vVcHuPi"
            let contract = await tronWeb.contract().at(trc20ContractAddress);
            transaction = await contract.methods.transfer(toAddress, sendAmount*1000).send();
        } else if (sendType === '1001148') {
            const trc10_ID = "1001148"
            // const sendResult = await tronWeb.transactionBuilder.sendToken(toAddress, sendAmount*calNum, trc10_ID, walletInfo.address);
            // transaction = sendResult.txID

            const tradeobj = await tronWeb.transactionBuilder.sendToken(
                toAddress,
                sendAmount*calNum,
                trc10_ID,
                walletInfo.address,
            ).then(output => {
                console.log('- Output:', output, '\n');
                return output;
            });
            //sign
            const signedtxn = await tronWeb.trx.sign(
                tradeobj,
                privateKey
            );
            //broadcast
            const receipt = await tronWeb.trx.sendRawTransaction(
                signedtxn
            ).then(output => {
                console.log('- Output:', output, '\n');
                return output;
            });
            transaction = receipt.txid

        }

        setSignature(transaction);

    }

    return <div>
        <Header as={"h3"} style={{paddingTop: 40}}>지갑 설정</Header>
        <Divider/>
            {generateAddress.hexAddress !== ""?
                <div>
                    <Header as={"h4"}>GenerateAddress Result</Header>
                    <Divider/>
                    <p>
                        address : {generateAddress.address}<br/>
                        hexAddress : {generateAddress.hexAddress}<br/>
                        privateKey : {generateAddress.privateKey}<br/>
                    </p>
                </div>
                :
                <Button primary className={"center"} onClick={generateAddressProc}>GenerateAddress</Button>
            }
            {createAddress.value !== ""?
                <div>
                    <Header as={"h4"}>CreateAddress Result</Header>
                    <Divider/>
                    <p>
                        value : {createAddress.value}<br/>
                        base58checkAddress : {createAddress.base58checkAddress}<br/>
                    </p>
                </div>
                :<div style={{padding:"20px 0px"}}>
                    <Form>
                        <Form.Field label='PASSWORD' placeholder={"비밀번호를 입력해주세요."} control='input' onKeyUp={(e)=>{e.preventDefault(); setPw(e.target.value)}}/>
                        <Button primary className={"center"} onClick={createAddressProc}>createAddress</Button>
                    </Form>
                </div>
            }

        <Divider/>
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Form>
                        <Form.Field label='MNEMONIC' placeholder={"니모닉을 입력해주세요."} control='textarea' rows='3' onKeyUp={(e)=>{e.preventDefault(); setMnemonic(e.target.value)}} />
                        <Form.Field label='PASSWORD' placeholder={"비밀번호를 입력해주세요."} control='input' onKeyUp={(e)=>{e.preventDefault(); setPw(e.target.value)}}/>
                        <div style={{textAlign:"center"}}>
                            <Button primary className={"center"} onClick={mnemonicProc}>지갑정보 가져오기</Button>
                        </div>
                    </Form>
                </Grid.Column>
                <Grid.Column>
                    {walletInfo.address === "" ? null:
                        <>
                            <Header as={"h3"} style={{paddingTop: 40}}>지갑 정보</Header>
                            <Divider/>
                            <Accordion fluid styled>
                                <Accordion.Title
                                    active={activeIndex === 0}
                                    index={0}
                                    onClick={handleClick}
                                >
                                    <Icon name='dropdown' />
                                    TRX({walletInfo.address})
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 0}>
                                    publicKey : {walletInfo.address}<br/>
                                    balance : {numComma(walletInfo.balance)} TRX<br/>

                                </Accordion.Content>

                                <Accordion.Title
                                    active={activeIndex === 1}
                                    index={1}
                                    onClick={handleClick}
                                >
                                    <Icon name='dropdown' />
                                    토큰 정보({tokens.length})
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 1} >
                                    {tokens.length > 0 ?
                                        <TokensAccordionTag list={tokens}/>
                                        :null}
                                </Accordion.Content>
                            </Accordion>
                        </>
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>

        <Header as={"h3"} style={{paddingTop: 40}}>SendTransaction (Default Fee 1.368 TRX , TRC20은 fee대신 에너지 사용 에너지 없으면 fee발생, TRC10 은 fee없는거같음)</Header>
        <Divider/>
        <Form>
            <Form.Field>
                <Radio
                    label='TRX'
                    name='sendType'
                    value='TRX'
                    checked={sendType === 'TRX'}
                    onChange={(e,{value})=>{setSendType(value)}}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio
                    label='TRC20 SBT2 TTU....zZq'
                    name='sendType'
                    value='SBP1'
                    checked={sendType === 'SBP1'}
                    onChange={(e,{value})=>{setSendType(value)}}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio
                    label='TRC20 SBT2 TAY....HuPi'
                    name='sendType'
                    value='SBP2'
                    checked={sendType === 'SBP2'}
                    onChange={(e,{value})=>{setSendType(value)}}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio
                    label='TRC10 SBT10'
                    name='sendType'
                    value='1001148'
                    checked={sendType === '1001148'}
                    onChange={(e,{value})=>{setSendType(value)}}
                />
            </Form.Field>
            <Form.Field label='Address' placeholder={"받으실분 주소를 입력해주세요."} control='input' onKeyUp={(e)=>{e.preventDefault(); setToAddress(e.target.value)}}/>
            <Form.Field label='Amount' placeholder={"보낼 금액을 입력해주세요."} control='input' onKeyUp={(e)=>{e.preventDefault(); setSendAmount(e.target.value)}}/>
            {signature===""?null:<div>{signature}</div>}
            <div style={{textAlign:"center"}}>
                <Button primary className={"center"} onClick={sendProc}>Send</Button>
            </div>
        </Form>
    </div>
}

const TokensAccordionTag = ({list})=>{
    let listTag = []

    for (let i = 0; i <= list.length ; i++) {
        const obj = list[i];
        if(obj !== undefined)
            listTag.push(
                <div key={i} style={{marginBottom:"15px"}}>
                    publicKey : {obj.publicKey}<br/>
                    uiAmount : {numComma(obj.balance)}<br/>
                </div>
            )
    }
    return listTag
}

export default Tron;