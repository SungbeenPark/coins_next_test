import {Accordion, Divider, Header, Icon} from "semantic-ui-react";
import Head from "next/Head";
import {clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {useEffect, useState} from "react";
import * as ed25519 from 'ed25519-hd-key';

const bip39 = require('bip39')


import splToken from '@solana/spl-token'


// address
// GgPQQEK9LSDjD4VdupCRuDHr2hAbSFSgdWqf2hKU7XME

//
// mnemonic
// hobby prosper print beef portion special typical olive crazy resource tomorrow auto
// [236,84,6,41,137,217,159,103,148,91,234,254,24,52,56,94,20,10,151,63,133,2,204,173,163,68,0,114,102,85,45,218,232,246,73,128,159,44,98,231,77,233,207,158,36,35,127,121,88,40,22,18,144,192,228,85,250,72,133,246,243,138,32,45]

const Home = () => {
    const derivePath = "m/44'/501'/0'/0'";

    const [activeIndex, setActiveIndex] = useState(-1)


    useEffect(() => {
        const connection = new Connection(
            clusterApiUrl('mainnet-beta'),
            'confirmed',
        );

        // 한글 니모닉 wordlists
        // console.log(bip39.wordlists.korean)

        //Vhtqv2iFRNFMjuwTcNsC2VM16nTxkVJjRN4bQoVwvY9
        //FMybrtQLcHEf6UhJqA4qkHXeK3kfCrz8AgLX55fzJvfx
        let mnemonic = "bid cloth bleak jaguar lens situate play gospel visual sweet west suit"
        let pw = "";

        mnemonic = normalize(mnemonic)
        bip39.mnemonicToSeed(mnemonic, pw).then((bytes) => {
            const derivedSeed = ed25519.derivePath(derivePath, bytes.toString('hex')).key;
            const keypair = Keypair.fromSeed(derivedSeed)

            // console.log("publickKey", keypair.publicKey.toString())
            // console.log("secretKey", keypair.secretKey)
            connection.getAccountInfo(keypair.publicKey).then(console.log);
        })

        // const keypair_bytes = [236, 84, 6, 41, 137, 217, 159, 103, 148, 91, 234, 254, 24, 52, 56, 94, 20, 10, 151, 63, 133, 2, 204, 173, 163, 68, 0, 114, 102, 85, 45, 218, 232, 246, 73, 128, 159, 44, 98, 231, 77, 233, 207, 158, 36, 35, 127, 121, 88, 40, 22, 18, 144, 192, 228, 85, 250, 72, 133, 246, 243, 138, 32, 45];
        // var private_key_bytes = new Uint8Array(keypair_bytes.slice(0, 32))
        // var public_key_bytes = new Uint8Array(keypair_bytes.slice(32, keypair_bytes.length))
        // console.log("private_key_bytes ", private_key_bytes)
        // console.log("public_key_bytes ", public_key_bytes)
        //
        // console.log(Keypair.fromSeed(private_key_bytes).publicKey.toString())
    })

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
                <Header as={"h3"} style={{paddingTop: 40}}>Solana</Header>
                <a href={"https://www.evernote.com/shard/s259/sh/9130748f-1746-5979-55e3-b9cf07365ed8/3ee8cf7a9438c19b899c889f7bc46722"} target={"_blank"}>솔라나 설치 설명 문서</a>
                <Divider/>
                <Accordion fluid styled>
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
                        <p>
                            1. Keypair 생성<br/>
                            2. 지갑 생성<br/>

                            $ mkdir ~/my-solana-wallet<br/>
                            $ cd solana/target/debug/<br/>
                            $ ./solana-keygen new --outfile ~/my-solana-wallet/my-keypair.json<br/>
                            $ ./solana-keygen pubkey ~/my-solana-wallet/my-keypair.json<br/>
                            결과 : ErRr1caKzK8L8nn4xmEWtimYRiTCAZXjBtVphuZ5vMKy 지갑 주소 생성<br/><br/>

                            web3.js 에서처리<br/>
                            const wallet = web3.Keypair.generate();<br/>
                        </p>
                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 4}
                        index={3}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown' />
                        SOLANA지갑 설정(복구)
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <p>
                            <h5>key bytes 로 복구</h5>
                            const keypair_bytes = [0,0,0,0,0...0,0]; //total length : 64<br/>
                            var private_key_bytes = new Uint8Array(keypair_bytes.slice(0, 32))<br/>
                            var public_key_bytes = new Uint8Array(keypair_bytes.slice(32, keypair_bytes.length))<br/>
                            console.log("private_key_bytes ", private_key_bytes)<br/>
                            console.log("public_key_bytes ", public_key_bytes)<br/>
                            console.log(Keypair.fromSeed(private_key_bytes).publicKey.toString())<br/><br/>

                            <h5>니모닉으로 복구</h5>
                            let mnemonic = "bid cloth bleak jaguar lens situate play gospel visual sweet west suit"<br/>
                            let pw = "";<br/>

                            bip39.mnemonicToSeed(mnemonic, pw).then((bytes) =><br/>
                                const derivedSeed = ed25519.derivePath(derivePath, bytes.toString('hex')).key;<br/>
                                const keypair = Keypair.fromSeed(derivedSeed)<br/>

                                console.log("publickKey", keypair.publicKey.toString())<br/>
                                console.log("secretKey", keypair.secretKey)<br/>
                            )
                        </p>
                    </Accordion.Content>

                </Accordion>
            </>
        </div>
    )
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

export default Home