import {Accordion, Divider, Header, Icon} from "semantic-ui-react";
import Head from "next/Head";
import {useState} from "react";

const Home = () => {

    const [activeIndex, setActiveIndex] = useState(-1)


    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    return (
        <div>
            <Head>
                <title>HOME | SBT</title>
                <meta name="description" content="sbt 홈피입니다."></meta>
            </Head>
            <>
                <Header as={"h3"} style={{paddingTop: 40}}>Solana(501)</Header>
                <Divider/>
                <Accordion fluid styled>
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
                            <a href={"evernote:///view/34205509/s259/9130748f-1746-5979-55e3-b9cf07365ed8/aee03a5a-a3e1-4bc2-aafa-5943bab3bcbe"} target={"_blank"}>솔라나 설치 설명 문서(Evernote)</a><br/>
                            <a href={"https://github.com/solana-labs/solana"} target={"_blank"}>솔라나 GIT</a><br/>
                            BI44 규격 m/44'/501'/0'/0'<br/>
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
                            console.log("private_key_bytes ", private_key_bytes)<br/>
                            console.log("public_key_bytes ", public_key_bytes)<br/>
                            console.log(Keypair.fromSeed(private_key_bytes).publicKey.toString())<br/><br/>
                        </p>
                        <h5>니모닉 설정(복구)</h5>
                        <p>
                            let mnemonic = "bid cloth bleak jaguar lens situate play gospel visual sweet west suit"<br/>
                            let pw = "";<br/>

                            bip39.mnemonicToSeed(mnemonic, pw).then((bytes) => &#123;<br/>
                                const derivedSeed = ed25519.derivePath(derivePath, bytes.toString('hex')).key;<br/>
                                const keypair = Keypair.fromSeed(derivedSeed)<br/>

                                console.log("publickKey", keypair.publicKey.toString())<br/>
                                console.log("secretKey", keypair.secretKey)<br/>
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
                            // Create Simple Transaction<br/>
                            let transaction = new web3.Transaction();<br/><br/>

                            // Add an instruction to execute<br/>
                            transaction.add(web3.SystemProgram.transfer(&#123;<br/>
                            fromPubkey: payer.publicKey,<br/>
                            toPubkey: toAccount.publicKey,<br/>
                            lamports: 1000,<br/>
                            &#125;));<br/>
                        </p>
                    </Accordion.Content>
                </Accordion>
            </>
        </div>
    )
}

export default Home