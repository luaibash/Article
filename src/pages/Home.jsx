import React from 'react';
import RedirectButton from '../components/RedirectButton';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            <PanelOne/>
            <PanelTwo/>
            <PanelThree/>
            <PanelFour/>
        </div>
    );
}

const PanelOne = () => {
    return (
        <div className='PanelOne'>
            Panel One
        </div>
    );
}

const PanelTwo = () => {
    return (
        <div className='PanelTwo'>
            Panel Two
        </div>
    );
}

const PanelThree = () => {
    return (
        <div className='PanelThree'>
            Panel Three
        </div>
    );
}

const PanelFour = () => {
    return (
        <div className='PanelFour'>
            <div className='PanelFourTextContainer'>
                <div className='Title'>
                    Contact Us.
                </div>
                <div className='Subtext' id='PanelFourSubtext'>
                    Here at Article, we are committed to providing users
                    with constant support, assistance, and a seamless
                    experience.
                </div>
            </div>
            <div className='PanelFourContactContainer'>
                <div className='PanelFourContactBox'>
                    <RedirectButton title="Contact Us" destination="Contact"/>
                </div>
            </div>
        </div>
    );
}

export default Home;