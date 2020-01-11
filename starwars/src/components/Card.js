import React from 'react'
import styled from "styled-components"

const Starbox= styled.section `
border: solid-black;
text-align: center;
margin: 50px;
`

const Card = props => {
    return (
        <Starbox>
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Birth Year: {props.birth_year}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Created: {props.created}</h2>
            <h2>Eye Color: {props.eye_color}</h2>
        </div>
        </Starbox>
    )
}

export default Card;