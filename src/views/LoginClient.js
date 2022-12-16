import React, {useState} from 'react';

import Card from '../components/utils/Card';
import Gap from '../components/utils/Gap';
import Input from '../components/forms/Input';
import Button from '../components/forms/Button';

export default function Login(){

    async function onSubmit(e){
        e.preventDefault()
        
        const res = await fetch("http://localhost:4000/login", {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                user,
                password
            }
            
        })
        const{message} = await res.json()
        alert(message)
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form onSubmit={onSubmit}>
            <Card padding="2rem" flexDirection="colum" borderRadius="1rem">
                <h1>Iniciar como cliente</h1>
                <Gap>2rem</Gap>
                <Input  onChange={(v) =>setUser(v.target.value)}>User Name</Input>
                <Gap>0.5rem</Gap>
                <Input type="password" onChange={(v) =>setPassword(v.target.value)}>Contraseña</Input>
                <Gap>2rem</Gap>
                <Button type="submit"><b>INGRESAR </b></Button>
            </Card>
        </form> 
        
    )
    
}