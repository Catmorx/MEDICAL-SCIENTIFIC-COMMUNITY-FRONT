import React from 'react';
import Card from "../components/utils/Card"
import Gap from '../components/utils/Gap';

function User(){

    return(
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
        
    )
}

export default User;