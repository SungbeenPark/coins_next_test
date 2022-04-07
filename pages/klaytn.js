import {useEffect} from "react";

const Klaytn = () => {

    const tokenAddress = '0xcac25b35f3708acac59c505228597b0b664bc640'
    const tokenSymbol = 'SBPT'
    const tokenDecimals = 8
    const tokenImage = 'https://www.playgrounds.co.kr/images/logo.png'

    klaytn.sendAsync(
        {
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage // A string url of the token logo
                }
            },
            id: Math.round(Math.random() * 100000)
        },
        (err, added) => {
            if (added) {
                console.log('Thanks for your interest!')
            } else {
                console.log('Your loss!')
            }
        }
    )


    useEffect(()=>{

    },[])



    return <div> test
    </div>
}


export default Klaytn;