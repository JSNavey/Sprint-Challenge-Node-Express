import React, { Component } from 'react';
import ProjectsList from './components/ProjectsList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    axios
      .get('http://localhost:5555/api/projects')
      .then(res => {
        console.log('project:', res.data.project)
        this.setState({ projects: res.data.project })
      })
  }


  render() {
    // console.log('state: ', this.state.projects)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Projects</h1>
        </header>
        <div className="App-intro">
        <ProjectsList projects={this.state.projects}/>
        </div>
      </div>
    );
  }
}

export default App;
