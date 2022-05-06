import {getHeroesByPublisher} from "../../selectors/getHeroesByPublisher";
import {HeroCard} from "./HeroCard";
import {useMemo} from "react";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            <h3>Hero List - {publisher}</h3>
            <ul>
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id}
                                  {...hero}/>
                    ))
                }

            </ul>
        </div>

    )

}
