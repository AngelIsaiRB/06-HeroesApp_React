import React, { useMemo } from 'react'
import {useParams, Redirect } from "react-router-dom"
import { getHeroeById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {


    const {heroeId} = useParams();
    const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);    
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


    const handleReturn=()=>{
        if(history.length<=2){
            history.push("/")
        }
        else
        history.goBack();
    }


    return (
        <div className="row mt-2">
            <div className="col-5 animate__animated animate__fadeInLeft">
                <img 
                src={`../assets/heroes/${heroeId}.jpg`}
                alt={superhero}
                clasname="img-thumbnail "
                />

            </div>
            <div className="col-5 animate__animated animate__fadeInLeft">
                <h3>{superhero}</h3>
                <ul className="list-goup list-group-flush">
                    <li className="list-group-item"> <b>alter Ego:</b>{alter_ego}</li>
                    <li className="list-group-item"> <b>publisher:</b>{publisher}</li>
                    <li className="list-group-item"> <b>first appearance:</b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                    Return
                </button>
            </div>
        </div>
    )
}
