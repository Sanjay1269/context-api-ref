import React, { Component } from 'react';

export class RefClassComponents extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.current.focus()
    }
  render() {
    return <div>
        <input ref={this.inputRef} type="text" placeholder='enter the mail' />
        <input ref={this.passwordRef} type="password" placeholder='enter the password' />
        <button onClick={ () => {
            this.passwordRef.current.focus()
        }}>Login</button>
    </div>;
  }
}

export default RefClassComponents;
