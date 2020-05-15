import React from "react";
import style from './css.module.css';
import {DialogElements, MessagElements} from "./Data/DialogsData";


function Dialogs() {
    return (
        <div className={style.body}>
            <div className={style.dialogs}>
                {DialogElements}
            </div>

            <div className={style.messages}>
                {MessagElements}
            </div>
        </div>

    )
};
export default Dialogs;