import { Component } from 'react';
import './App.css';

class RandomNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  Inc = () => {
    if (this.state.current >= 50) {
      alert("Число не может быть больше 50")
    }else{
      this.setState(state => ({
        current: state.current + 1
      }))
    }
  }

  Dec = () => {
    if (this.state.current <= 0) {
      alert("Число не может быть меньше 0")
    } else {
      this.setState(state => ({
        current: state.current - 1
      }))
    }
  }

  Rnd = () => {
    let rand = Math.floor(Math.random() * (49 - 1));
    this.setState(state => ({
      current: rand
    }))
  }
  
  Reset = () => {
    this.setState(state => ({
      current: 0
    }))
  }
  
  render() {
    return (
      <div div className="app" >
        <div className="counter">{this.state.current}</div>
        <div className="controls">
          <button onClick={this.Inc}>INC</button>
          <button onClick={this.Dec}>DEC</button>
          <button onClick={this.Rnd}>RND</button>
          <button onClick={this.Reset}>RESET</button>
        </div>
      </div>
    )
  }
}




function App() {
  return(
    <RandomNumber />
  )
}

export default App;
