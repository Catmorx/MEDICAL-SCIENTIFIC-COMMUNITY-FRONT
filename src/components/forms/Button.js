import React from 'react';
import "./forms.css"


export default function Button({children, onClick, type, className, id}){





    return(<button className={"button " + className} id={id} type={type} onClick={onClick}>{children}</button>)
}