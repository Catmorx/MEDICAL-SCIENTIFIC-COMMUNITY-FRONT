import React from 'react';
// import "./Card.css"


export default function Card(props){

    const {children, padding="2rem", flexDirection="column" , borderRadius="1rem", backgroundColor="rgb(255, 248, 245)", width="30rem", display= "flex", alignItems= "center"} = props

    return(<div style={{padding: padding, flexDirection: flexDirection , borderRadius:borderRadius, backgroundColor:backgroundColor, width:width, display:display, alignItems:alignItems}} className='card'>{children}</div>)
}