import React from 'react';



function FloatingButton(props) {
    return ( <
        button className = { `mdc-fab mdc-fab--extended ${props.buttonClass}` }
        id = { props.id }
        onClick = { props.action } >
        <
        div className = "mdc-fab__ripple" > < /div> <
        span className = "material-icons mdc-fab__icon" > { props.icon } < /span> <
        span className = "mdc-fab__label" > { props.label } < /span> < /
        button >
    );
}


function Button(props) {
    return ( <
        button className = 'mdc-button mdc-button--outlined app__button'
        onClick = { props.action } > < div className = 'mdc-button__ripple' > < /div>  <span className="mdc-button__label">{props.label}</span > < /button > 
    );
}


export { FloatingButton, Button };