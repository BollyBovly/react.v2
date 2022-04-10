import { useDebugValue, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import { addChat, deleteChat } from '../../Store/chats/action'
import { selectChats } from '../../Store/chats/selectors'
import { addMessage } from '../../Store/messages/action'
import { selectMessage } from '../../Store/messages/selectors'
import {Chat} from '../Chat/chat'
import { ChatList } from '../ChatList/chatList'
import  ProfileToConnect, {Profile} from '../Profile/profile'
import { ThemeContext } from '../utils/themeContext'

const Home = () => <h2>Home page</h2>

export const Router = () => {
    const [messageColor, setMessageColor] = useState('gray');
    

    return (
        <ThemeContext.Provider value={{ messageColor, setMessageColor }} >
            <BrowserRouter >
            <div>
            <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/chats'>Chats</Link>
            </div>
            <div>
            <Link to='/profile'>Profile</Link>
            </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<ProfileToConnect />} />
                    <Route path="/chats" element={<ChatList/>}>
                        <Route path=":chatId" element={<Chat/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}