import {Accordion, Divider, Icon} from "semantic-ui-react";
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
                        <a href={"https://www.evernote.com/shard/s259/sh/ebbb29c4-23e0-ec72-e22e-ad57511a8369/371121c485cd5b5bde235ac811a25ecb"} rel="noreferrer" target={"_blank"}>Domex ě´ě ęłí</a><br/>
                        <a href={"https://www.evernote.com/shard/s259/sh/fde096f4-99ab-1952-9e24-6602290610f3/47e7f7a906e38bb01956942716989e1f"} rel="noreferrer" target={"_blank"}>Domex ě˝ě¸ ë°í ě˛´íŹëŚŹě¤í¸</a>
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
                í¸ëĄ  ě ëł´
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <p>
                    BIP44 ęˇę˛Š m/44&#39;/195&#39;/0&#39;/0&#39;<br/><br/>
                    ë¨źě  TRC10,ě TRC20ëł´ë¤ ě˝ę˛ ë°íë¨. ęˇ¸ëĽ ěë Ľë§ ě­ěą íëŠ´ ë°ëĄ ë°íë¨.<br/>
                    ë¨ TRC10ě ę° ęłě ëł 1ë˛ë§ ë°íë¨.<br/><br/>

                    TRC721ę° NFT ě ěŠ í í°.<br/><br/>

                    * ěěëŁ ę´ë ¨<br/><br/>
                    ëě­í­(Bandwidth)ęłź, ěëě§(Energy)<br/><br/>
                    - TRC10 ëě­í­ě ěěëŁëĄ ë°ěí¨, ëě­í­ě´ěěę˛˝ě° TRX ě§ëś(0.282 TRX)<br/>
                    - TRC20 ëě­í­(0.345 TRX)ęłź ěëě§(13,379ěëě§, 3.74612 TRX)ëĽź ěěëŁëĄ ě§ëś, ěëę˛˝ě° TRX ě§ëś<br/><br/>

                    ëě­í­ : TRONěěë ëŞ¨ë  ęą°ëěě ëě­í­ě´ ěëŞ¨ëě§ë§ ěě¤íě ë§¤ěź 1500ę°ě ëě­í­ě íěąíë ę° ęłě ě ëśěŹíŠëë¤. ěŹěŠěë TRXëĽź ëę˛°íěŹ ëě­í­ě íëł´í ě ěěľëë¤.<br/>
                    ěëě§ : TRONěěë ě¤ë§í¸ ěť¨í¸ëí¸ ěěąíęł  ě¤ííëŠ´ ě ëě§ę° ěëšëŠëë¤, ěŹěŠěë TRX ëę˛°ě íľí´ ě ëě§ëĽź ěťěě ěěľëë¤.

                </p>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                í¸ëĄ  ę´ë ¨ URI
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <p>
                    <a href={"https://tron.network/"} rel="noreferrer" target={"_blank"}>https://tron.network/</a><br/>
                    <a href={"https://tronscan.org/#/"} rel="noreferrer" target={"_blank"}>https://tronscan.org/#/</a><br/>
                    <a href={"https://github.com/tronprotocol"} rel="noreferrer" target={"_blank"}>https://github.com/tronprotocol</a><br/>
                    <a href={"https://developers.tron.network/reference/walletcreateaccount-1"} rel="noreferrer" target={"_blank"}>https://developers.tron.network/reference/walletcreateaccount-1</a><br/>
                    <a href={"https://blog.naver.com/PostView.naver?blogId=mulgogy0223&logNo=222368164854"} rel="noreferrer" target={"_blank"}>ëŠě¸ëˇ/íě¤í¸ëˇ trc20 í¸ëĄ  í í° ë§ë¤ę¸°</a><br/>
                </p>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                í¸ëĄ  Netwrok
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
                í¸ëĄ  í í° ë°í
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <div id="en-note" className="editable viewmode uno" g_editable="true">
                    <div><span style={{fontWeight : "bold"}}>TronLink </span></div>
                    <ul>
                        <li>
                            <div><a href="https://www.tronlink.org/"
                                    rev="en_rl_none">https://www.tronlink.org/</a> ëë íŹëĄ­íěĽ íëĄęˇ¸ë¨ tronlink ě¤ěš
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>ë¸ë</span></div>
                    <ul>
                        <li>
                            <div>ëŠě¸ëˇ : https://api.trongrid.io<a href={"https://tronscan.org/#/"} rel="noreferrer"  target={"_blank"}>https://tronscan.org/#/</a></div>
                        </li>
                        <li>
                            <div>íě¤í¸ëˇ(ěŹëŹę°ě§ ěě§ë§ ęˇ¸ě¤ shasta) : https://api.shasta.trongrid.io/
                                <a href={"https://shasta.tronscan.org/#/"} rel="noreferrer"  target={"_blank"}>https://shasta.tronscan.org/#/</a>
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>íě¤í¸ëˇ ě˝ě¸ ë°ę¸°</span></div>
                    <ul>
                        <li>
                            <div>TronLink ë¸ë ëłę˛˝ : í¸ëĄ ë§íŹ -&gt; ě¤ě -&gt; node-&gt; íě¤í¸ ë¸ë ě í</div>
                        </li>
                    </ul>
                    <div><img className="en-media en-media-image"
                              src="/images/tron/image1.png"
                              width={"100%"}
                              /><br/></div>
                    <div><br/></div>
                    <ul>
                        <li>
                            <div>ě˝ě¸ë°ę¸°</div>
                        </li>
                        <ul>
                            <li>
                                <div><a href="https://www.trongrid.io/faucet"
                                        rev="en_rl_none">https://www.trongrid.io/faucet</a> ě ě ě
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
                                <div>ě ě ě´í @TronTest2 í´ëŚ­&nbsp; </div>
                            </li>
                            <li>
                                <div>Twitter ě´ë ěë ëŹ¸ęľŹ íě¸</div>
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
                                <div>í¸ěí° ęłě ěźëĄ ëł¸ě¸ íě¤í¸ address í¸ě(@TronTest2 [addressěë Ľ])</div>
                            </li>
                        </ul>
                    </ul>
                    <div><br/></div>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>ERC-20 Token Interface ěěą(sol)</span></div>
                    <div><a target={"_blank"} rel="noreferrer"  href={"/token.sol"} type={"download"}>token.sol</a></div>
                    <div><br/></div>
                    <ul>
                        <li>
                            <div>ę°ěĽ ěë ëśëśë§ ěě  (<span style={{"color":"red"}}>decimals : 8, 18ëĄ íëŠ´ ěěąěëë¤ë ě´ěźę¸°ę° ěě</span>)
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>token.sol ěëĄë</span></div>
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
                            <div>ěëĄë ěąęłľ ě ě ěě ěźëĄ íěź ě˝ě ěí</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image"
                              width="336px" data-width="336px"
                              src="/images/tron/image5.png"/><br/></div>
                    <ul>
                        <li>
                            <div>ěť´íěź ë˛ě  ě í 0.5.8_Odyssey_v3.6.0 ě í</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image"
                              width="710px" data-width="710px"
                              src="/images/tron/image6.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>ěť´íěź ěëŁ</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image"
                              width="505.1124945440357px" data-width="505.1124945440357px"
                              src="/images/tron/image7.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>Deploy í´ëŚ­ -&gt; Contract Name ëłę˛˝</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image8.png"/><br/></div>
                    <ul>
                        <li>
                            <div>TronLinkěě ěŹě¸(<span style={{"color":"red"}}>Fee 5.454 trx</span>), ëíëĄě´(í
                                2~3ëśęą¸ëŚź)
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image9.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>ëíëĄě´ę° ěëŁëëŠ´ ëšěŠ <span style={{"color":"red"}}>230.92552trx</span> ë°ěíęł  í´ëš
                                Contractę° ěěąë¨.
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><span style={{fontWeight : "bold"}}>í í° ëąëĄ</span></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image10.png"
                              /><br/></div>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"}
                              src="/images/tron/image11.png"
                              /><br/></div>
                    <ul>
                        <li>
                            <div>ěë Ľ ě ěëŞťë ě ëł´ę° ěěźëŠ´. alertě´ ěë ěë Ľ ě°˝ ěëě error íę¸°ëë next ë˛íź ëëżě ë ë°ě ěěźëŠ´ ěë Ľí ě ëł´ë¤ ë¤ě
                                íě¸.
                            </div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div><img className="en-media en-media-image" width={"100%"} src="/images/tron/image12.png"/>
                        <img className="en-media en-media-image" width={"100%"} src={"/images/tron/image13.png"}/><br/></div>
                    <div><br/></div>
                    <ul>
                        <li>
                            <div>ěëŁ. í í° ěěąë° ë°íí ěźě  ěę°ě´ ě§ëëŠ´ ë°íë ě˝ě¸ě ę˛ě/ ěśę° í  ě ěě.</div>
                        </li>
                    </ul>
                    <div><br/></div>
                    <div>ę˛°ęłź <a href={"https://shasta.tronscan.org/#/contract/TTUzyAFPwjuJBMDXRuRJ8yWCFiKmKrTzZq"} rel="noreferrer"  target={"_blank"}>https://shasta.tronscan.org/#/contract/TTUzyAFPwjuJBMDXRuRJ8yWCFiKmKrTzZq</a></div>
                </div>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={handleClick}
            >
                <Icon name='dropdown' />
                í¸ëĄ  í í° ë°íí ě´ě 
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
                <a href={"https://www.evernote.com/shard/s259/sh/197c43d4-eaec-e07f-2682-58a42c88b691/2b3e6fcb1824d8f43d0af2ad484d1fb6"} rel="noreferrer" target={"_blank"}>ë°ěąëš ë¸í¸ ëł´ę¸°</a>
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
            ěëźë ě ëł´
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 99}>
            <p>
                <a href={"evernote:///view/34205509/s259/9130748f-1746-5979-55e3-b9cf07365ed8/aee03a5a-a3e1-4bc2-aafa-5943bab3bcbe"} rel="noreferrer" target={"_blank"}>ěëźë ě¤ěš ě¤ëŞ ëŹ¸ě(Evernote)</a><br/>
                <a href={"https://github.com/solana-labs/solana"} rel="noreferrer" target={"_blank"}>ěëźë GIT</a><br/>
                <a href={"https://solscan.io/"} rel="noreferrer" target={"_blank"}>https://solscan.io/</a><br/>
                BIP44 ęˇę˛Š m/44&#39;/501&#39;/0&#39;/0&#39;<br/>
            </p>
        </Accordion.Content>
        <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
        >
            <Icon name='dropdown' />
            ěëźë ě¤ěš
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
                Binary ěěą íě¸<br/>
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
            SOLANA ě§ę° ěěą
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
            <h5>linux íę˛˝ěě ěěą</h5>
            <p>
                $ mkdir ~/my-solana-wallet<br/>
                $ cd solana/target/debug/<br/>
                $ ./solana-keygen new --outfile ~/my-solana-wallet/my-keypair.json<br/>
                $ ./solana-keygen pubkey ~/my-solana-wallet/my-keypair.json<br/>
                ę˛°ęłź : Vhtqv2iFRNFMjuwTcNsC2VM16nTxkVJjRN4bQoVwvY9 ě§ę° ěŁźě ěěą<br/>
                my-keypair.json ěě 64byte ë°°ě´ ěěąë¨ ëłľęľŹě ěŹěŠ<br/>
            </p>
            <h5>web3.js ěě ěěą</h5>
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
            SOLANAě§ę° ě¤ě (ëłľęľŹ)
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
            <h5>key bytes ě¤ě (ëłľęľŹ)</h5>
            <p>
                const keypair_bytes = [0,0,0,0,0...0,0]; //total length : 64<br/>
                var private_key_bytes = new Uint8Array(keypair_bytes.slice(0, 32))<br/>
                var public_key_bytes = new Uint8Array(keypair_bytes.slice(32, keypair_bytes.length))<br/>
                console.log(&#34;private_key_bytes &#34;, private_key_bytes)<br/>
                console.log(&#34;public_key_bytes &#34;, public_key_bytes)<br/>
                console.log(Keypair.fromSeed(private_key_bytes).publicKey.toString())<br/><br/>
            </p>
            <h5>ëëŞ¨ë ě¤ě (ëłľęľŹ)</h5>
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
            í¸ëě­ě ěěą(Web3.js)
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
            <p>
                ěëźë ë°ěĄ ě ëł´<br/>
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
                í í° ë°ěĄę´ë ¨ ě ëł´<br/><br/>
                const fromWallet =  Keypair.fromSeed(private_key_bytes)<br/>
                const toPublicKey = new PublicKey(toAddress)<br/>

                const mint = new PublicKey(&#39;í í°ěŁźě ěŹę¸°&#39;)<br/><br/>

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
                ë°ěĄ<br/><br/>
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