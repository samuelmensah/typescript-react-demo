import * as React from 'react';
import logo from '../logo.svg'
import '../Hello.css'
// import {StoreState} from "../types/index.tsx";
// import {func} from "prop-types";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement ?: ()=> void;
    onDecrement ?: ()=> void;
}

interface State {
    currentEnthusiasm: number;
}

// Notice that the class extends React.Component<Props, object>.
// The TypeScript-specific bit here are the type arguments we're passing to React.Component: Props and object.
// Here, Props is the type of our class's this.props, and object is the type of this.state.



class Hello extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {currentEnthusiasm: props.enthusiasmLevel || 0};
    }

    // We're using class property initializer with arrow functions
    // onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm +1);
    // onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);


    render() {
        const {name} = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }

        return(

            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>

                </div>

                <div className="hello">
                    <div className="greeting">
                        Hello {name + getExclamationMarks(this.props.enthusiasmLevel)}
                    </div>

                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>

                </div>
            </div>

        );
    }



}

export default Hello;


function getExclamationMarks(numChars:number | undefined){
        if (numChars === undefined) {
            return '!'
        }else{
            return Array(numChars + 1).join('!');

        }

}



