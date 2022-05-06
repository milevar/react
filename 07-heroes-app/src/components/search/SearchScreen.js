import {useForm} from "../../hooks/useForm";
import {getHeroesByName} from "../../selectors/getHeroesByName";
import {HeroCard} from "../hero/HeroCard";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {useMemo} from "react";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const {searchText} = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText)
        navigate(`?q=${searchText}`);

    }

    return (
        <>
            <h1>Search a Hero</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button className="btn btn-outline-primary mt-1"
                                type="submit">
                            Search</button>
                    </form>
                </div>
                <div className="col-5">
                    <h4>Results</h4>
                    <hr/>
                    {
                        (q === '')
                        ? <div className="alert alert-info">You should to search a hero.</div>
                        : (heroesFiltered.length === 0)
                            && <div className="alert alert-danger">No found results to: {q} </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                { ...hero}
                            />
                        ))
                    }
                </div>
            </div>


        </>
    );

}
