function Restaurant(props) {
    return(
        <div className="wrapper">
            <h3>{props.name}</h3>
            <p>{`Location: ${props.location}`}</p>
            <p>{`Score: ${props.score}`}</p>
        </div>

    );
}

export default Restaurant;