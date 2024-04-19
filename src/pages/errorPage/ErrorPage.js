import React from 'react'

function ErrorPage({user}) {
    return (
        <div>Тебе сюда нельзя - {user.name} {user.lastname}</div>
    )
}

export default ErrorPage