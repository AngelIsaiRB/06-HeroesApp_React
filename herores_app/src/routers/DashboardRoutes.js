import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {Switch,Route, Redirect } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heores/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
         <Navbar/> 
         <div>
             <Switch>
                <Route  path="/marvel" component={MarvelScreen}/>
                <Route  path="/heroe/:heroeId" component={HeroScreen}/>
                <Route  path="/dc" component={DcScreen}/>
                <Redirect to="/marvel"/>

             </Switch>
        </div>  
        </>
    )
}
