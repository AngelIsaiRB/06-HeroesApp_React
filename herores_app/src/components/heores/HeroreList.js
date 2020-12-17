import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHeroresByPublisher'
import { HeroCard } from './HeroCard';

export const HeroreList = ({publisher}) => {
    const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);
    // const heroes = getHerosByPublisher(publisher);
    return (
        <div className="card-column">
          {
              heroes.map(hero=>(
                  <HeroCard  
                        {...hero}
                        key={hero.id}
                   >
                    
                  </HeroCard>
              ))
          }  
        </div>
    )
}
