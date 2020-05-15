import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Messages/Messages";

export let DialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Sanya'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Marina'}
]

export let MessageData = [
    {name: "Ivan", txt: "hi"},
    {name: "Dima", txt: "hi"},
    {name: "Ivan", txt: "how are you"},
    {name: "Dima", txt: "im fine thank you"}
]

export type DialogItemType = {
    id: number;
    name: string;
}
export type MessageType = {
    txt: string;
    name: string;
}
export let DialogElements = DialogsData.map(
    (d) =>
        <DialogItem name={d.name} id={d.id}/>
)

export let MessagElements = MessageData.map(
    (m) =>
        <Message name={m.name} txt={m.txt}/>
)

