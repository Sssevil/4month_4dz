import './App.css'
import MainPage from "./pages/mainPage/MainPage"
import ErrorPage from "./pages/errorPage/ErrorPage"
import {useLayoutEffect, useState} from "react"

function App() {
    const [user,setUser] = useState({})

    useLayoutEffect(() => {
        const name = prompt('Введите имя').trim()
        const lastname =prompt('Введите фамилию').trim()

        setUser({ name, lastname })

    }, [])

    if (!user.name || !user.lastname) {
        return null
    }

    return (user.name==='John' && user.lastname ==='Johns') ?
        <MainPage user={user}/> : <ErrorPage user={user}/>
}

export default App
