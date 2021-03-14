import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1>web developer, developer and it analyst </h1>
                <Typed 
                    className="typed-text"
                    strings={["ReactJS", "ExpressJS", "Swing", "UML",
                    "NodeJS", "Java", "Python", "Spring", "Hibernate", "Django"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>    
        </div>
    )
}

export default Header
