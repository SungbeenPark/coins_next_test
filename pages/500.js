import {Icon} from "semantic-ui-react";

export default function Error404(){

    return (
        <div style={{padding:"200px 0", textAlign:"center", fontSize:30}}>
            <Icon name={"warning circle"} color={"red"}/>
            500 : 알수 없는 에러 발생. 잠시후 다시 시도해주세요.
        </div>
    )
}