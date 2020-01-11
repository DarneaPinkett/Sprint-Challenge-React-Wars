import React from 'react'
import styled from "styled-components"

const Starbox= styled.section `
background-color: #FDBB01;
font-size: 1rem;
border-radius: 15px;
display: flex;
`

const SCard = props => {
    return (
        <Starbox>
        <div>
            <h1>Name: {props.name}</h1>
            <h2>birth_year: {props.birth_year}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Created: {props.created}</h2>
            <h2>eye_color: {props.eye_color}</h2>
        </div>
        </Starbox>
    )
}

export default SCard;