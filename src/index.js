import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import './css/myStyle.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        formControls: {
            email: {
              value: ''
            },
            name: {
              value: ''
            },
            password: {
              value: ''
            }
        }
    }
  
}

changeHandler = event => {
    
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({
      formControls: {
          ...this.state.formControls,
          [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
}


 render() {
    return (
        <form>

            <input type="email" 
                   name="email" 
                   value={this.state.formControls.email.value} 
                   onChange={this.changeHandler} 
            />

            <input type="text" 
                   name="name" 
                   value={this.state.formControls.name.value} 
                   onChange={this.changeHandler} 
            />

            <input type="password" 
                   name="password" 
                   value={this.state.formControls.password.value} 
                   onChange={this.changeHandler} 
            />

        </form>      
    );
 }
}

ReactDOM.render(<App />, document.getElementById('app'));