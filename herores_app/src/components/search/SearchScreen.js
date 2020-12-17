import React, { useMemo } from 'react'
import queryString from "query-string"
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heores/HeroCard';
import { useForm } from '../hooks/useForm';
import {useLocation} from "react-router-dom";
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    // para parsear la busqueda ejemplo: ?q=btman
    const location = useLocation();
    const {q=""} = queryString.parse(location.search);
    // 
    
    // hook personalizado de useForm
    const initialForm = {
        search: q,        
    };    
    const [ values, handleInputChange, reset ] = useForm( initialForm );
    // end hook personalizado
    const heroesFilter = useMemo(() => getHeroesByName(q), [q])
    // const heroesFilter = getHeroesByName(values.search);
    
    const handleSearch=(e)=>{
        // evita el recargar la pagina
        e.preventDefault();

        // para mandar un query param en la barra de busqueda
        history.push(`?q=${values.search}`)
    }

    return (
        <div>
            <h1>Search Screen</h1> 
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4> SearchForm</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input type="text"
                        onChange={handleInputChange}    
                        value={values.search}                    
                        name="search"
                        placeholder="Find your heroe"
                        className="form-control">
                        </input>
                        <button
                        className="btn m-1 btn-block btn-outline-primary"
                        type="submit"
                        >Serach</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                    (q === "") && <div className="alert alert-info">
                            Search a hero
                                 </div>                    
                    }
                    {
                    (q !== "" && heroesFilter.length === 0) && <div className="alert alert-danger">
                            hero not found {q}
                                 </div>                    
                    }

                    {
                        
                        heroesFilter.map(hero=> (
                            <HeroCard 
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
