import { ReactComponent as GladSmiley } from '../icons/smil_glad.svg';
import { ReactComponent as SjokkSmiley } from '../icons/smil_sjokk.svg';
import { ReactComponent as StrekSmiley } from '../icons/smil_strek.svg';
import { ReactComponent as SurSmiley } from '../icons/smil_sur.svg';

function Restaurant(props) {
    return(
        <div className="wrapper">
            <a href={`https://google.com/search?q=${props.name}+${props.location}`} target="_blank">
            <h3>{props.name}</h3>
            <p>{`Location: ${props.location}`}</p>
            <p>{`Score: ${props.grade}`}</p>
            <div className="svg-wrapper">
                {getIcon(props.grade)}
            </div>
            </a>
        </div>

    );
}

const getIcon = (grade) => {
    switch(grade) {
        case "0":
        case "1":  return <GladSmiley />;
        case "2":  return <StrekSmiley />;
        case "3":  return <SurSmiley />;

        default: return <SjokkSmiley />; 
    }

}

export default Restaurant;