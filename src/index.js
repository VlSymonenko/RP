import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import './css/myStyle.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: ''
    }
  }
  
  changeHandler = event => {
    this.setState({
      email: event.target.value
    });
  }

  render () {
    return (
      <form>
          <input type="email"  name="email" value={this.state.email} onChange={this.changeHandler} />
      </form>
    );        
  }
}

ReactDOM.render(<App />, document.getElementById('app'));