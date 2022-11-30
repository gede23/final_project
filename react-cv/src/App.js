import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <About/>
                <Contacts/>
                <Experience/>
                <Skills/>
                <Education/>
            </div>
        );
    }
}

export default App;
