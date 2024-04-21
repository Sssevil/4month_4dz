import './App.css'
import MainPage from "./pages/mainPage/MainPage"
import ErrorPage from "./pages/errorPage/ErrorPage"
import {useLayoutEffect, useState} from "react"

const name = prompt('Введите имя')
const lastname =prompt('Введите фамилию')
function App() {
    const [user,setUser] = useState({})

    useLayoutEffect(() => {

        setUser({name, lastname })

    }, [])

    if (!user.name || !user.lastname) {
        return null
    }

    return (user.name.trim() ==='John' && user.lastname.trim() ==='Johns') ? <MainPage user={user}/> : <ErrorPage user={user}/>
}

export default App
