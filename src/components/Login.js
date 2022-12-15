import React, {useState} from 'react';

import Card from './utils/Card';
import Gap from './utils/Gap';
import Input from './forms/Input';
import Button from './forms/Button';

export default function Login(){

    function onSubmit(e){
        e.preventDefault()
        alert("user: "+user+", password: "+password)
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form onSubmit={onSubmit}>
            <Card padding="2rem" flexDirection="colum" borderRadius="1rem">
                <h1>Login</h1>
                <Gap>2rem</Gap>
                <Input value={user} onChange={(v) =>setUser(v.target.value)}>User Name</Input>
                <Gap>0.5rem</Gap>
                <Input type="password" onChange={(v) =>setPassword(v.target.value)}>Contraseña</Input>
                <Gap>2rem</Gap>
                <Button type={"submit"}><b>INGRESAR </b></Button>
            </Card>
        </form>
    )
}