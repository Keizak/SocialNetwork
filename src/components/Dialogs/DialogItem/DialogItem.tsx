import React from "react";
import style from './css.module.css';
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../Data/DialogsData";


function DialogItem(props: DialogItemType) {

    return (
        <div className={style.dialog}>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;