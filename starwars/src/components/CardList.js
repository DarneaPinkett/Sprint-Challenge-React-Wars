import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from './Card';

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
        <div className = "container">
            <div className = "people">
                {cards.map((card, index)=>{
                return(
                    <Card
                    key={index}
                    name={card.name}
                    Birth Year={card.birth_year}
                    Eye Color={card.eye_color}
                    gender={card.gender}
                    created={card.created}
                    />
                )
                })
            }
            </div>
        </div>
    )
}

export default CardList