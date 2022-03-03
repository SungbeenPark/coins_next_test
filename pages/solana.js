import {Accordion, Button, Divider, Form, Grid, Header, Icon, Radio} from "semantic-ui-react";
import Head from "next/Head";
import {
    clusterApiUrl,
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction
} from '@solana/web3.js'

import {Token, TOKEN_PROGRAM_ID} from '@solana/spl-token'

import {useEffect, useState} from "react";
import * as ed25519 from 'ed25519-hd-key';

const bip39 = require('bip39')


// address
// GgPQQEK9LSDjD4VdupCRuDHr2hAbSFSgdWqf2hKU7XME

//
// mnemonic
// hobby prosper print beef portion special typical olive crazy resource tomorrow auto
// [236,84,6,41,137,217,159,103,148,91,234,254,24,52,56,94,20,10,151,63,133,2,204,173,163,68,0,114,102,85,45,218,232,246,73,128,159,44,98,231,77,233,207,158,36,35,127,121,88,40,22,18,144,192,228,85,250,72,133,246,243,138,32,45]

//bid cloth bleak jaguar lens situate play gospel visual sweet west suit

const Solana = () => {
    const derivePath = "m/44'/501'/0'/0'";

    const [mnemonic,setMnemonic] = useState("bid cloth bleak jaguar lens situate play gospel visual sweet west suit");
    const [pw,setPw] = useState("");
    const [keyBuffer,setKeyBuffer] = useState("");
    const [activeIndex,setActiveIndex] = useState(-1);

    const [walletInfo,setWalletInfo] = useState({balance:0,publicKey:"",secretKey:""})
    const [tokens,setTokens] = useState([])
    const [toAddress,setToAddress] = useState("")
    const [sendAmount,setSendAmount] = useState(0)
    const [sendType,setSendType] = useState("SOL")
    const [signature,setSignature] = useState("")

    const connection = new Connection(
        clusterApiUrl('mainnet-beta'),
        'confirmed',
    );


    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const mnemonicProc = (e)=>{
        e.preventDefault()
        let mnemonicStr = mnemonic

        if(pw==="" && !bip39.validateMnemonic(mnemonicStr)){
            alert("니모닉을 확인해주세요.")
        }else{
            mnemonicStr = normalize(mnemonicStr)
            bip39.mnemonicToSeed(mnemonicStr, pw).then((bytes) => {
                const derivedSeed = ed25519.derivePath(derivePath, bytes.toString('hex')).key;
                settingWallet(derivedSeed)
            })
        }
    }

    const keyBufferProc = (e)=>{
        e.preventDefault()
        const reg = keyBuffer.replace(/[^0-9,]/gi,"")
        const buf = reg.split(",")
        const private_key_bytes = new Uint8Array(buf.slice(0, 32))
        // const public_key_bytes = new Uint8Array(keyBuffer.slice(32, keypair_bytes.length))
        settingWallet(private_key_bytes)
    }

    const settingWallet = (privateByte)=>{
        const wallet =  Keypair.fromSeed(privateByte)
        connection.getAccountInfo(wallet.publicKey).then((obj)=>{
            setWalletInfo({
                balance:obj.lamports/LAMPORTS_PER_SOL,
                publicKey:wallet.publicKey.toString(),
                secretKey:wallet.secretKey.toString()
            })
        })

        // const TokenProgramId = new PublicKey(TOKEN_PROGRAM_ID)

        const SBTPubkey = new PublicKey("2BsZeLpEusAd7i6qkmCmiHUpocMTRghoBHzMb4suMnoi")
        const filter = {mint:SBTPubkey}

        let newToken = []
        connection.getTokenAccountsByOwner(wallet.publicKey,filter).then(async (obj) => {
            const tokenList = obj.value
            let tokenAddress = ""
            for (const token of tokenList) {
                tokenAddress = token.pubkey.toString()
                let balance = 0
                await connection.getTokenAccountBalance(token.pubkey).then((obj)=>{
                    balance = obj.value.uiAmount
                })
                newToken.push({publicKey:tokenAddress,balance:balance})
            }
        })
        setTokens(newToken)
    }


    useEffect(()=>{
        // console.log(walletInfo)
    },[walletInfo,tokens])

    const sendProc = async (e) => {
        e.preventDefault();

        const reg = walletInfo.secretKey.replace(/[^0-9,]/gi,"")
        const buf = reg.split(",")
        const private_key_bytes = new Uint8Array(buf.slice(0, 32))
        const fromWallet =  Keypair.fromSeed(private_key_bytes)
        const toPublicKey = new PublicKey(toAddress)

        let transaction
        if (sendType === 'SOL') {
            transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: fromWallet.publicKey,
                    toPubkey: toPublicKey,
                    lamports: LAMPORTS_PER_SOL * sendAmount,
                }),
            );

        } else {//sendToken
            const mint = new PublicKey('2BsZeLpEusAd7i6qkmCmiHUpocMTRghoBHzMb4suMnoi')

            const token = new Token(connection, mint, TOKEN_PROGRAM_ID, fromWallet)

            const fromTokenAccount = await token.getOrCreateAssociatedAccountInfo(fromWallet.publicKey)
            const toTokenAccount = await token.getOrCreateAssociatedAccountInfo(toPublicKey)

            transaction = new Transaction().add(
                Token.createTransferInstruction(
                    TOKEN_PROGRAM_ID,
                    fromTokenAccount.address,
                    toTokenAccount.address,
                    fromWallet.publicKey,
                    [],
                    sendAmount * LAMPORTS_PER_SOL,
                ),
            );

        }
        // Sign transaction, broadcast, and confirm
        const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [fromWallet],
        );
        setSignature(signature);

    }

    return (
        <div>
            <Head>
                <title>SOLANA | SBT</title>
                <meta name="description" content="솔라나 테스트"></meta>
            </Head>
            <Header as={"h3"} style={{paddingTop: 40}}>지갑 설정</Header>
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
                            <Form.Field label='KEY BUFFER' placeholder={"KeyBuffer내용을 입력해주세요"} control='textarea' rows='3' onKeyUp={(e)=>{
                                e.preventDefault()
                                setKeyBuffer(e.target.value)
                            }}/>
                            <div style={{textAlign:"center"}}>
                                <Button primary className={"center"} onClick={keyBufferProc}>지갑정보 가져오기</Button>
                            </div>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        {walletInfo.publicKey === "" ? null:
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
                                        Solana({walletInfo.publicKey})
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 0}>
                                        publicKey : {walletInfo.publicKey}<br/>
                                        balance : {walletInfo.balance} SOL<br/>

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
            <Header as={"h3"} style={{paddingTop: 40}}>SendTransaction (Default Fee 0.000005 SOL)</Header>
            <Divider/>
            <Form>
                <Form.Field>
                    <Radio
                        label='SOL'
                        name='sendType'
                        value='SOL'
                        checked={sendType === 'SOL'}
                        onChange={(e,{value})=>{setSendType(value)}}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Radio
                        label='SPB(TOKEN)'
                        name='sendType'
                        value='SBP'
                        checked={sendType === 'SBP'}
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
    )
}

const TokensAccordionTag = ({list})=>{
    let listTag = []

    for (let i = 0; i <= list.length ; i++) {
        const obj = list[i];
        if(obj !== undefined)
            listTag.push(
                <div key={i}>
                    publicKey : {obj.publicKey}<br/>
                    uiAmount : {obj.balance}<br/>
                </div>
            )
    }
    return listTag
}

function normalize(seed) {
    if (typeof seed !== 'string') {
        throw new TypeError('seed string required')
    }

    seed = seed.normalize('NFKD');// Normalization Form: Compatibility Decomposition
    seed = seed.replace(/\s+/g, ' ');// Remove multiple spaces in a row
    seed = seed.toLowerCase();
    seed = seed.trim();
    return seed
}

export default Solana