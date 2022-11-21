import { floatingLabel } from 'material-components-web';
import React, { Component } from 'react';
import { MessageBox, InputBox } from './components/box';
import { FloatingButton, Button } from './components/button';

export class App extends Component {

    //whenever you defined constructur, yoy need super()
    constructor() {
        super();
        this.state = {
            message: "Pick my date for",
            view: 1,
            name: "",
            persons: [{ name: "" }, { name: "" }],
            myDate: ''

        };
        let random_val = 0;
        this.handlePersonNameChange = this.handlePersonNameChange.bind(this);
        this.handleAddPerson = this.handleAddPerson.bind(this);
        this.addPerson = this.addPerson.bind(this);
    }



    handlePersonNameChange = idx => evt => {
        const newPerson = this.state.persons.map((person, sidx) => {
            if (idx !== sidx) return person;
            return {...person, name: evt.target.value };
        });

        this.setState({ persons: newPerson });
    };


    addPerson() {
        if (this.state.persons.length < 5) {
            this.setState(state => ({
                persons: state.persons.concat([{ name: "" }])
            }));
        }

        if (this.state.persons.length === 4) {
            document.getElementById('add__people').style.display = 'none';
            document.getElementById('adding-error').style.display = 'flex';

        }

    }

    handleAddPerson(e) {

        console.log(this.state.persons[0].name, this.state.persons[1].name)
        if ((this.state.persons[0].name.length && this.state.persons[1].name.length) === 0) {
            document.getElementById('naming-error').style.display = 'flex';
            return;
        }


        this.random_val = Math.floor(Math.random() * this.state.persons.length);
        this.myDate = this.state.persons[this.random_val].name
        this.updateview();
    }


    updateview = () => {
        this.setState({ view: this.state.view + 1 });

    }


    //HomeScreen View
    setGreetings = () => {
        return ( <
            div className = 'container' >

            <
            MessageBox text = { this.state.message }

            / >

            <
            Button action = { this.updateview }
            label = "Let's Start" / >
            <
            /div>


        );
    }

    //Find Potential Suitor View
    findPerson = () => {
        return ( <
            div className = 'container' >
            <
            FloatingButton icon = 'add_circle'
            label = 'Add People'
            id = 'add__people'
            buttonClass = 'mdc-fab--pinkColor'
            action = { this.addPerson }
            / > <br/ > < br / > < div className = 'error__message'
            id = 'adding-error' > < span className = 'material-icons mdc-fab__icon error__message-icon' > notification_important < /span > <
            span className = 'error__message-text' > You can only be able to add up to 5 people! < /span>  < /div >

            <
            br / > < br / >
            <
            div className = 'error__message'
            id = 'naming-error' > < span className = 'material-icons mdc-fab__icon error__message-icon' > error < /span > <
            span className = 'error__message-text' > Please enter < b > person 1 and person 2 < /b> names! < /span > < /div >




            <
            br / > < br / > < br / > < br / >
            <
            hr / >
            <
            h1 > Enter their names < /h1> 


            {
                this.state.persons.map((person, idx) => ( <
                    InputBox value = { person.name }
                    id = { idx }
                    action = {
                        this.handlePersonNameChange(idx)
                    }
                    / >



                ))

            } <
            div className = 'icon__button' >
            <
            div className = "icon__button-icon icon__button-icon--generateResults"
            onClick = { this.handleAddPerson } >

            <
            /div > 

            <
            p className = 'icon__button-text'
            onClick = { this.handleAddPerson } >
            My Date is ? < /p> < /
            div >
            <
            /
            div >
        );
    }



    //Result View 
    showResult = () => {


        return ( <
            div className = 'container' >
            <
            div className = 'message__box message__box--result mdc-card'
            id = 'result_view' >

            <
            p className = 'message__box-Text message__box-Text--result' > { `${this.myDate} is your date
            today?` } < /p>

            <
            p className = 'message__box-footer' > Protect your heart! < /p>

            <
            /div><br/ > < br / > <
            a href = 'http://localhost:8080/'
            className = 'link' > Cancelled ?
            try back
            for someone better! < /a>


            <
            /
            div >
        );
    }


    render() {

        if (this.state.view === 1) {

            return (

                this.setGreetings()

            );
        } else if (this.state.view === 2) {
            return (

                this.findPerson()
            );
        } else if (this.state.view === 3) {
            return (
                this.showResult()
            );

        }
    }




}

export const app = new App();