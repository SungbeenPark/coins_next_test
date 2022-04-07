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
    } else if (router.pathname === "/klaytn"){
        activeItem = "klaytn"
    }

    const goLink = (e,data)=>{
        if(data.name === 'home'){
            router.push("/", "/")
        } else if(data.name === "solana"){
            router.push("/solana","/solana")
        } else if(data.name === 'tron'){
            router.push("/tron","/tron")
        } else if(data.name === 'klaytn'){
            router.push("/klaytn","/klaytn")
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
                name='solana'
                active={activeItem === 'solana'}
                onClick={goLink}
            />
            <Menu.Item
                name='tron'
                active={activeItem === 'tron'}
                onClick={goLink}
            />
            <Menu.Item
                name='klaytn'
                active={activeItem === 'klaytn'}
                onClick={goLink}
            />
        </Menu>
    )
}