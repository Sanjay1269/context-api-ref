import React, { Component } from 'react';
import UserContext ,{ UserConsumer } from '../Context-api/UserContext';

class ComponentG extends Component {
    static contextType = UserContext

    componentDidMount(){
        console.log(this);
        console.log(this.context);
    }

  render() {
    return <div>
        <UserConsumer>
            {
                (contextData)=>{

                    return <p>ComponentG - {contextData}</p>//if we do like this it cant be accessed outside the function.
                }
            }
        </UserConsumer>
        <p>
            Name-{this.context}
        </p>
    </div>;
  }
}

export default ComponentG;

