import {useRouter} from "next/router";
import { Menu } from 'semantic-ui-react'

export default function Gnb() {
    let activeItem = "home"
    const router = useRouter();

    if (router.pathname === "/") {
        activeItem = "home"
    } else if (router.pathname === "/solana") {
        activeItem = "solana"
    } else if (router.pathname === "/tron"){
        activeItem = "tron"
    } else if (router.pathname === "/klay"){
        activeItem = "send_spl"
    }

    const goLink = (e,data)=>{
        if(data.name === 'home'){
            router.push("/", "/")
        } else if(data.name === "solana"){
            router.push("/solana","/solana")
        } else if(data.name === 'tron'){
            router.push("/tron","/tron")
        } else if(data.name === 'klay'){
            router.push("/klay","/klay")
        }
    }

    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={goLink}
            />
            <Menu.Item
                name='SOLANA'
                active={activeItem === 'solana'}
                onClick={goLink}
            />
            <Menu.Item
                name='TRON'
                active={activeItem === 'tron'}
                onClick={goLink}
            />
            <Menu.Item
                name='KLAYTN'
                active={activeItem === 'klay'}
                onClick={goLink}
            />
        </Menu>
    )
}