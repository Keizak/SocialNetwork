import React from "react";
import style from './css.module.css';
import {MessageType} from "../Data/DialogsData";


function Message(props: MessageType) {

    return (
        <div className={style.messages}>
            <div className={style.message}>
                <div className={style.ava}>
                    <img src="https://sun9-50.userapi.com/c858332/v858332074/df3d3/17BM2G_eB-A.jpg?ava=1"/>
                    {props.name}
                </div>
                <div className={style.ava}>
                    {props.txt}
                </div>
            </div>
        </div>)
}

export default Message;