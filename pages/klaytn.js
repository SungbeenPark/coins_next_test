import {useEffect} from "react";
// import Caver from "caver-js";

const Klaytn = () => {


    useEffect(async () => {

        const tokenAddress = '0xce76ccddcabd6bc89da0acb0fa73b75a7ce509bc'
        const tokenSymbol = 'SBT'
        const tokenDecimals = 8
        const tokenImage = 'https://www.playgrounds.co.kr/images/logo.png'
        if (typeof window.klaytn !== 'undefined') {
            // Kaikas user detected. You can now use the provider.
            const provider = window['klaytn']

            try {
                // const accounts = await klaytn.enable()
                // You now have an array of accounts!
                // Currently only one:
                // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']

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
            } catch (error) {
                // Handle error. Likely the user rejected the login
                console.error(error)
            }

        }

    },[])


    return <div>
        <a href={"https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"} rel="noreferrer" target={"_blank"}>kaikas setup</a>
    </div>
}


export default Klaytn;