import {useParams, Navigate, useNavigate} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";
import {useMemo} from "react";


const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = () => {
    const { heroeId } = useParams();

    const hero =  useMemo(() => getHeroById(heroeId), [heroeId]);

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    }

    if(!hero) {
        return <Navigate to='/' />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    //const imgPath = heroImages(`${id}.jpg`);

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={heroImages(`./${id}.jpg`)}
                     className="img-thumbnail animate__animated animate__fadeInLeft"
                     alt={superhero}/>
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> {first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3">Charactertes</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info"
                        onClick={handleReturn}
                >Regresar</button>

            </div>
        </div>
    );

}
