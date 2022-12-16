import React from 'react';
import { Link } from "react-router-dom";
import Card from "../components/utils/Card"
import Gap from '../components/utils/Gap';

function User() {

    return (
        <>
            <nav className='flex'>
                <Link to="/"><h2 className='topmenu'>HOME</h2></Link>
                <Link to="/login"><h1 className='topmenu'>INICIAR</h1></Link>
                <Link to="/register"><h1 className='topmenu'>REGISTRARSE</h1></Link>
                <Link to="/user"><h1 className='topmenu'>USUARIOS</h1></Link>

            </nav>
            <Card>
                <table class="table">
                    <thead>
                        <tr>
                            <Gap>5rem</Gap>
                            <th scope="col">Id</th>
                            <Gap>5rem</Gap>
                            <th scope="col">Nombre</th>
                            <Gap>5rem</Gap>
                            <th scope="col">Apellido</th>
                            <Gap>5rem</Gap>
                            <th scope="col">Correo</th>
                        </tr>
                    </thead>
                </table>
            </Card>
        </>
    )
}

export default User;