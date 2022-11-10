import React from 'react';
import "../styles/homepage.css";
import News from "../components/News.jsx";

function Home(props) {

    return (
        <div>
            <h2>How To Use The Quick Start Project</h2>
            <div>
                <News/>
            </div>

        </div>
    );
}

export default Home;
