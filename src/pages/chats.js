import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import {chatsSelector} from '../redux/reducers/chatReducer/chatSelector'



const Chats =()=>{
    const chats = useSelector(chatsSelector);
    return(
        <div>
            {chats.map((chat)=>{
                return (
                    <Link key={chat.id} to={`/message/${chat.id}`}>{chat.name}</Link>
                )
            })}
        </div>
    )
}

export default Chats;