import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()

    this.state = {
      filterString: '',
      noodles: ["lasagna", "spaghetti", "mastacoli", "penne"]
    }
  }

  handleChange(val){
    this.setState({
      filterString: val
    })
  }

  render(){
    let noodlesToDisplay = this.state.noodles
    .filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App">
      <input type="text" onChange = {e=> this.handleChange(e.target.value)}/>
      <h2>{noodlesToDisplay}</h2>
      </div>
    );
  }
}

export default App;
