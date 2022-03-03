import {Accordion, Divider, Icon} from "semantic-ui-react";
import Head from "next/Head";
import {useState} from "react";

const Home = () => {

    const [tabIndex, setTabIndex] = useState(-1)
    const tabClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = tabIndex === index ? -1 : index
        setTabIndex(newIndex)
    }

    return (
        <div>
            <Head>
                <title>HOME | SBT</title>
                <meta name="description" content="sbt 홈피입니다."></meta>
            </Head>
            <>
                <Accordion fluid styled>
                    <Accordion.Title
                        active={tabIndex === 0}
                        index={0}
                        onClick={tabClick}
                    >
                        <Icon name='dropdown' />
                        Solana(501)
                    </Accordion.Title>
                    <Accordion.Content active={tabIndex === 0}>
                        <SolanaTag></SolanaTag>
                    </Accordion.Content>
                    <Accordion.Title
                        active={tabIndex === 1}
                        index={1}
                        onClick={tabClick}
                    >
                        <Icon name='dropdown' />
                        Tron(195)
                    </Accordion.Title>
                    <Accordion.Content active={tabIndex === 1}>
                        <TronTag/>
                    </Accordion.Content>
                    <Accordion.Title
                        active={tabIndex === 2}
                        index={2}
                        onClick={tabClick}
                    >
                        <Icon name='dropdown' />
                        Klaytn(8217)
                    </Accordion.Title>
                    <Accordion.Content active={tabIndex === 2}>
                        준비중
                    </Accordion.Content>
                </Accordion>
            </>
        </div>
    )
}

const TronTag = () =>{
    const [activeIndex, setActiveIndex] = useState(-1)
    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    return <>
        <Accordion fluid styled>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                트론 정보
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <p>
                    BIP44 규격 m/44&#39;/195&#39;/0&#39;/0&#39;<br/><br/>
                    먼저 TRC10,은 TRC20보다 쉽게 발행됨. 그냥 입력만 쭈욱 하면 바로 발행됨.<br/>
                    단 TRC10은 각 계정별 1번만 발행됨.<br/><br/>

                    TRC721가 NFT 전용 토큰.<br/><br/>

                    * 수수료 관련<br/><br/>
                    대역폭(Bandwidth)과, 에너지(Energy)<br/><br/>
                    - TRC10 대역폭을 수수료로 발생함, 대역폭이없을경우 TRX 지불<br/>
                    - TRC20 대역폭과 에너지를 수수료로 지불, 없는경우 TRX 지불<br/><br/>

                    대역폭 : TRON에서는 모든 거래에서 대역폭이 소모되지만 시스템은 매일 1500개의 대역폭을 활성화된 각 계정에 부여합니다. 사용자는 TRX를 동결하여 대역폭을 확보할수 있습니다.<br/>
                    에너지 : TRON에서는 스마트 컨트랙트 생성하고 실행하면 애너지가 소비됩니다, 사용자는 TRX 동결을 통해 애너지를 얻을수 있습니다.

                </p>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                트론 관련 URI
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <p>
                    <a href={"https://tron.network/"} rel="noreferrer" target={"_blank"}>https://tron.network/</a><br/>
                    <a href={"https://tronscan.org/#/"} rel="noreferrer" target={"_blank"}>https://tronscan.org/#/</a><br/>
                    <a href={"https://github.com/tronprotocol"} rel="noreferrer" target={"_blank"}>https://github.com/tronprotocol</a><br/>
                    <a href={"https://developers.tron.network/reference/walletcreateaccount-1"} rel="noreferrer" target={"_blank"}>https://developers.tron.network/reference/walletcreateaccount-1</a><br/>
                    <a href={"https://blog.naver.com/PostView.naver?blogId=mulgogy0223&logNo=222368164854"} rel="noreferrer" target={"_blank"}>메인넷/테스트넷 trc20 트론 토큰 만들기</a><br/>
                </p>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                트론 Netwrok
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                <p>
                    Mainnet	https://api.trongrid.io<br/>
                    Shasta Testnet	https://api.shasta.trongrid.io<br/>
                    Nile Testnet	https://nile.trongrid.io<br/>
                </p>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                트론 토큰 발행
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <div id="en-note" className="editable viewmode uno" g_editable="true">
                    <div><span style={{fontWeight : "bold"}}>TronLink </span></div>
                    <ul>
                        <li>
                            <div><a href="https://www.tronlink.org/"
                                    rev="en_rl_none">https://www.tronlink.org/</a> 또는 크롭확장 프로그램 tronlink 설치
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>노드</span></div>
                    <ul>
                        <li>
                            <div>메인넷 : https://api.trongrid.io<a href={"https://tronscan.org/#/"} rel="noreferrer"  target={"_blank"}>https://tronscan.org/#/</a></div>
                        </li>
                        <li>
                            <div>테스트넷(여러가지 있지만 그중 shasta) : https://api.shasta.trongrid.io/
                                <a href={"https://shasta.tronscan.org/#/"} rel="noreferrer"  target={"_blank"}>https://shasta.tronscan.org/#/</a>
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>테스트넷 코인 받기</span></div>
                    <ul>
                        <li>
                            <div>TronLink 노드 변경 : 트론링크 -&gt; 설정-&gt; node-&gt; 테스트 노드 선택</div>
                        </li>
                    </ul>
                    <div><img className="en-media en-media-image"
                              src="/images/tron/image1.png"
                              width={"100%"}
                              /><br/></div>
                    <div><br/></div>
                    <ul>
                        <li>
                            <div>코인받기</div>
                        </li>
                        <ul>
                            <li>
                                <div><a href="https://www.trongrid.io/faucet"
                                        rev="en_rl_none">https://www.trongrid.io/faucet</a> 에 접속
                                </div>
                            </li>
                        </ul>
                    </ul>
                    <div><img className="en-media en-media-image" data-hash="752fc4c82e7813443e8f41877d60dcea"
                              data-type="image/png"
                              src="/images/tron/image2.png"
                              /><br/></div>
                    <ol start="2">
                        <ul>
                            <li>
                                <div>접속 이후 @TronTest2 클릭&nbsp; </div>
                            </li>
                            <li>
                                <div>Twitter 이동 아래 문구 확인</div>
                            </li>
                        </ul>
                    </ol>
                    <div >Follow our account Twitter account <a
                        href="https://twitter.com/TronTest2" rev="en_rl_none">@TronTest2</a>.
                    </div>
                    <div >Write your address in your tweet and <a
                        href="https://twitter.com/TronTest2" rev="en_rl_none">@TronTest2</a>.
                    </div>
                    <div >We will transfer 10,000 test TRX (usually within five
                        minutes).
                    </div>
                    <div >Each address can only be obtained once a day.</div>
                    <div >If you need TRX for the nile testnet, please add &#34;NILE&#34; in your
                        tweet.
                    </div>
                    <ul>
                        <ul>
                            <li>
                                <div>트위터 계정으로 본인 테스트 address 트윗(@TronTest2 [address입력])</div>
                            </li>
                        </ul>
                    </ul>
                    <div><br/></div>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>ERC-20 Token Interface 작성(sol)</span></div>
                    <div><a target={"_blank"} rel="noreferrer"  href={"/token.sol"} type={"download"}>token.sol</a></div>
                    <div><br/></div>
                    <ul>
                        <li>
                            <div>가장 아래 부분만 수정 (<span style={{"color":"red"}}>decimals : 8, 18로 하면 생성안된다는 이야기가 있음</span>)
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>token.sol 업로드</span></div>
                    <div><img className="en-media en-media-image" data-hash="82e4b9202e0c59f8d1de384d48188b73"
                              width="763px" data-width="763px"
                              src="/images/tron/image3.png"
                              /><br/></div>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" data-hash="fc21c9216b4de72e92d2f4678c78c5c0"
                              width="823.2556848228451px" data-width="823.2556848228451px"
                              src="/images/tron/image4.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>업로드 성공 시 정상적으로 파일 읽은 상태</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image"
                              width="336px" data-width="336px"
                              src="/images/tron/image5.png"/><br/></div>
                    <ul>
                        <li>
                            <div>컴파일 버전 선택 0.5.8_Odyssey_v3.6.0 선택</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image"
                              width="710px" data-width="710px"
                              src="/images/tron/image6.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>컴파일 완료</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image"
                              width="505.1124945440357px" data-width="505.1124945440357px"
                              src="/images/tron/image7.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>Deploy 클릭 -&gt; Contract Name 변경</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image8.png"/><br/></div>
                    <ul>
                        <li>
                            <div>TronLink에서 사인(<span style={{"color":"red"}}>Fee 5.454 trx</span>), 디플로이(한
                                2~3분걸림)
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image9.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>디플로이가 완료되면 비용 <span style={{"color":"red"}}>230.92552trx</span> 발생하고 해당
                                Contract가 생성됨.
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>토큰 등록</span></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image10.png"
                              /><br/></div>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image11.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>입력 시 잘못된 정보가 있으면. alert이 아닌 입력 창 아래에 error 표기되니 next 버튼 눌럿을 때 반응 없으면 입력한 정보들 다시
                                확인.
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"} src="/images/tron/image12.png"/>
                        <img className="en-media en-media-image" width={"100%"} src={"/images/tron/image13.png"}/><br/></div>
                    <div><br/></div>
                    <ul>
                        <li>
                            <div>완료. 토큰 생성및 발행후 일정 시간이 지나면 발행된 코인을 검색/ 추가 할 수 있음.</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div>결과 <a href={"https://shasta.tronscan.org/#/contract/TTUzyAFPwjuJBMDXRuRJ8yWCFiKmKrTzZq"} rel="noreferrer"  target={"_blank"}>https://shasta.tronscan.org/#/contract/TTUzyAFPwjuJBMDXRuRJ8yWCFiKmKrTzZq</a></div>
                </div>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                트론 토큰 발행후 이전
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
                <a href={"https://www.evernote.com/shard/s259/sh/197c43d4-eaec-e07f-2682-58a42c88b691/2b3e6fcb1824d8f43d0af2ad484d1fb6"} rel="noreferrer" target={"_blank"}>박성빈 노트 보기</a>
            </Accordion.Content>
        </Accordion>
    </>
}
const SolanaTag = () =>{

    const [activeIndex, setActiveIndex] = useState(-1)
    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    return <Accordion fluid styled>
        <Accordion.Title
            active={activeIndex === 99}
            index={99}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            솔라나 정보
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 99}>
            <p>
                <a href={"evernote:///view/34205509/s259/9130748f-1746-5979-55e3-b9cf07365ed8/aee03a5a-a3e1-4bc2-aafa-5943bab3bcbe"} rel="noreferrer" target={"_blank"}>솔라나 설치 설명 문서(Evernote)</a><br/>
                <a href={"https://github.com/solana-labs/solana"} rel="noreferrer" target={"_blank"}>솔라나 GIT</a><br/>
                <a href={"https://solscan.io/"} rel="noreferrer" target={"_blank"}>https://solscan.io/</a><br/>
                BIP44 규격 m/44&#39;/501&#39;/0&#39;/0&#39;<br/>
            </p>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            솔라나 설치
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
            <p>
                Install rustc, cargo and rustfmt.<br/>
                $ curl https://sh.rustup.rs -sSf | sh<br/>
                $ source $HOME/.cargo/env<br/>
                $ rustup component add rustfmt<br/>
                $ rustup update<br/>
                $ rustup install VERSION<br/>
                $ sudo apt-get update<br/>
                $ sudo apt-get install libssl-dev libudev-dev pkg-config zlib1g-dev llvm clang make<br/>
                softwareupdate --install-rosetta<br/>
            </p>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            Download the source code.
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <p>
                $ git clone https://github.com/solana-labs/solana.git<br/>
                $ cd solana
            </p>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            CARGO build
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <p>
                $ cargo build<br/><br/>
                Binary 생성 확인<br/>
                $ cd solana/target/debug/<br/>
                $ ./solana --version<br/>
            </p>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            SOLANA 지갑 생성
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
            <h5>linux 환경에서 생성</h5>
            <p>
                $ mkdir ~/my-solana-wallet<br/>
                $ cd solana/target/debug/<br/>
                $ ./solana-keygen new --outfile ~/my-solana-wallet/my-keypair.json<br/>
                $ ./solana-keygen pubkey ~/my-solana-wallet/my-keypair.json<br/>
                결과 : Vhtqv2iFRNFMjuwTcNsC2VM16nTxkVJjRN4bQoVwvY9 지갑 주소 생성<br/>
                my-keypair.json 안에 64byte 배열 생성됨 복구에 사용<br/>
            </p>
            <h5>web3.js 에서 생성</h5>
            <p>
                const wallet = web3.Keypair.generate();<br/>
            </p>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            SOLANA지갑 설정(복구)
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
            <h5>key bytes 설정(복구)</h5>
            <p>
                const keypair_bytes = [0,0,0,0,0...0,0]; //total length : 64<br/>
                var private_key_bytes = new Uint8Array(keypair_bytes.slice(0, 32))<br/>
                var public_key_bytes = new Uint8Array(keypair_bytes.slice(32, keypair_bytes.length))<br/>
                console.log(&#34;private_key_bytes &#34;, private_key_bytes)<br/>
                console.log(&#34;public_key_bytes &#34;, public_key_bytes)<br/>
                console.log(Keypair.fromSeed(private_key_bytes).publicKey.toString())<br/><br/>
            </p>
            <h5>니모닉 설정(복구)</h5>
            <p>
                let mnemonic = &#34;bid cloth bleak jaguar lens situate play gospel visual sweet west suit&#34;<br/>
                let pw = &#34;&#34;;<br/>

                bip39.mnemonicToSeed(mnemonic, pw).then((bytes) =&gt; &#123;<br/>
                const derivedSeed = ed25519.derivePath(derivePath, bytes.toString(&#39;hex&#39;)).key;<br/>
                const keypair = Keypair.fromSeed(derivedSeed)<br/>

                console.log(&#34;publickKey&#34;, keypair.publicKey.toString())<br/>
                console.log(&#34;secretKey&#34;, keypair.secretKey)<br/>
                &#125;)
            </p>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            트랜잭션 생성(Web3.js)
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
            <p>
                솔라나 발송 정보<br/>
                Create Simple Transaction<br/>
                let transaction = new web3.Transaction();<br/><br/>

                Add an instruction to execute<br/>
                transaction.add(web3.SystemProgram.transfer(&#123;<br/>
                fromPubkey: payer.publicKey,<br/>
                toPubkey: toAccount.publicKey,<br/>
                lamports: 1000,<br/>
                &#125;));<br/>
            </p>
            <Divider/>
            <p>
                토큰 발송관련 정보<br/><br/>
                const fromWallet =  Keypair.fromSeed(private_key_bytes)<br/>
                const toPublicKey = new PublicKey(toAddress)<br/>

                const mint = new PublicKey(&#39;토큰주소 여기&#39;)<br/><br/>

                const token = new Token(connection, mint, TOKEN_PROGRAM_ID, fromWallet)<br/><br/>

                const fromTokenAccount = await token.getOrCreateAssociatedAccountInfo(fromWallet.publicKey)<br/>
                const toTokenAccount = await token.getOrCreateAssociatedAccountInfo(toPublicKey)<br/><br/>

                transaction = new Transaction().add(<br/>
                Token.createTransferInstruction(<br/>
                TOKEN_PROGRAM_ID,<br/>
                fromTokenAccount.address,<br/>
                toTokenAccount.address,<br/>
                fromWallet.publicKey,<br/>
                [],<br/>
                sendAmount * LAMPORTS_PER_SOL,<br/>
                ),<br/>
                );<br/>
            </p>
            <Divider/>
            <p>
                발송<br/><br/>
                Sign transaction, broadcast, and confirm<br/><br/>
                const signature = await sendAndConfirmTransaction(<br/>
                connection,<br/>
                transaction,<br/>
                [fromWallet],<br/>
                );<br/>
            </p>
        </Accordion.Content>
    </Accordion>
}

export default Home