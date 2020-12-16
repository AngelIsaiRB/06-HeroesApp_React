import React from 'react'
import {useParams, Redirect } from "react-router-dom"
import { getHeroeById } from '../../selectors/getHeroById';

export const HeroScreen = () => {


    const {heroeId} = useParams();
    const heroe = getHeroeById(heroeId);
    if(!heroe){
        return <Redirect to="/"/>
    }
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }=heroe;
    return (
        <div>
            <h1>Hero Screen</h1>
        </div>
    )
}
