import {combineReducers, createStore} from 'redux';
import { messagesReducer } from './reducers/messageReducer/messageReducer';
import { chatsReducer } from './reducers/chatReducer/chatReducer'

export const reducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer,
});
export const store = createStore(reducer);