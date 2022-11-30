/**
 * Created by roman on 05.09.17.
 */
import React, {Component} from 'react';
import video from './../media/cover_video.mp4';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="video-container">
                    <video async autoPlay loop src={video} type="video/mp4"></video>
                </div>
                <nav className="top-menu">
                    <div className="menu-container">
                        <div className="logo-container">
                            <div className="logo">
                            </div>
                            <div className="logo-description">
                                <p>I Gede Setiawan</p>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        <div className="navbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">AboutMe</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#contacts">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href="javascript:window.print();" className="printit">print it!</a>
                </nav>
                <div className="jumbotron">
                    <p>Hello Every one</p>
                    <p>And welcome to my Reactjs CV, learn more about me and my skills</p>
                </div>
            </header>
        )
    }
}