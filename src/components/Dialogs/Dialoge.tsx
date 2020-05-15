import React from "react";
import style from './css.module.css';
import {NavLink} from "react-router-dom";


type DialogType = {
    id: string;
    title: string;
    isDone: boolean;
}

type DialogItemType = {
    id: string;
    name: string;
}
type MessageType = {
    txt: string;
    name: string;
}

function DialogItem(props:DialogItemType) {

    return (
        <div className={style.dialog}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>)
}
function Message(props:MessageType) {

    return (
        <div className={style.messages}>
            <div className={style.message}>
                <div className={style.ava}>
                    <img  src="https://sun9-50.userapi.com/c858332/v858332074/df3d3/17BM2G_eB-A.jpg?ava=1"/>
                    {props.name}
                </div>
                <div>
                    {props.txt}
                </div>
            </div>
        </div>)
}

function Dialogs() {
    return (
        <div className={style.body}>
            <div className={style.dialogs}>
                <DialogItem name="me" id="1"/>
                <DialogItem name="Sanya" id="2"/>
                <DialogItem name="Dima" id="3"/>
                <DialogItem name="Marina" id="4"/>
            </div>

            <div className={style.messages}>
                <Message name="me" txt="hi" />
                <Message name="Dima" txt="hi" />
                <Message name="me" txt="how are you" />
                <Message name="Dima" txt="im fine than you" />

            </div>
        </div>

    )
};
export default Dialogs;