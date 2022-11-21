import React from 'react';




function getDate() {

    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date();
    let day = weekday[date.getDay()];

    return day;

}

function InputBox(props) {
    let counter = 0;

    return ( <
        div className = "input__bubble input__bubble-bottom-left"
        key = { counter++ } >
        <
        input type = 'text'
        placeholder = { `Person ${ props.id + 1 } ` }
        onChange = { props.action }
        value = { props.name }
        / > < /div >





    );


}

function MessageBox({ text }) {
    return ( < div className = 'message__box mdc-card' >

        <
        p className = 'message__box-Text' > { text } { getDate() } < /p>

        <
        /div>

    );
}





export { MessageBox, InputBox };