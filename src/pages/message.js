import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {messageSelector} from '../redux/reducers/messageReducer/messageSelector'


const Message=()=>{
    const[text, setText]=useState('');
    const {id} =useParams();
    const messages = useSelector(messageSelector);
    const dispatch=useDispatch();

    const handleAdd=()=>{
        const obj = {
            id:Number(id),
            text:text
        }
        dispatch({type:'add',payload:obj})
    }

    return (
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>add</button>
            {messages.map((message)=>{
                return(
                <div key={message.id}>
                    {message.text}
                    <button onClick={()=>dispatch({type:'delete', payload: message.id})}>delete</button>
                </div>
                )
            })}
        </div>
    )
}

export default Message