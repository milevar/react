import {getHeroesByPublisher} from "../../selectors/getHeroesByPublisher";
import {HeroCard} from "./HeroCard";
import {useMemo} from "react";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
            <h3>Hero List - {publisher}</h3>
            <ul>
                <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id}
                                  {...hero}/>
                    ))
                }
                </div>
            </ul>
        </>

    )

}
