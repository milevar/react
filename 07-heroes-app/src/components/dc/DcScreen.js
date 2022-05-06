import {HeroList} from "../hero/HeroList";

export const DcScreen = () => {
    return (
        <div>
            <h1>DC Heroes</h1>

            <HeroList publisher={ 'DC Comics' }/>
        </div>
    );

}
