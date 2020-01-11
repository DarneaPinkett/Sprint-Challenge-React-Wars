import React, {useState, useEffect} from "react";
import axios from "axios";
import SCard from './SCard';
import styled from 'styled-components';

const MainC = styled.div`
background-color: lightgray;
border-radius: 16px`

function CardList (){
    const [cards, setCards] = useState([]);

    useEffect (() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            const starData = response.data.results;

            setCards(starData);
        })
        .catch(error => {
            console.log('Sorry', error)
        })
    }, []);

    return (
        <MainC className = "container">
            <div className = "people">
                {cards.map((card, index)=>{
                return(
                    <SCard
                    key={index}
                    name={card.name}
                    birth_year={card.birth_year}
                    eye_color={card.eye_color}
                    gender={card.gender}
                    created={card.created}
                    />
                )
                })
            }
            </div>
        </MainC>
    )
}

export default CardList