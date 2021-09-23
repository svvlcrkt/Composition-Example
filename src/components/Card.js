import "./Card.css"

function Card(props){
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
        // props.children ensures that displaying whatever you 
        // include between the opening and closing tags when 
        // invoking a component
    );
}

export default Card;