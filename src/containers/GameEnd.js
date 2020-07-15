import React from 'react';
import moveOn from '../components/MoveOn';
import { Link } from 'react-router-dom';
import HomePage from './Home'
function GameEnd() {
    
    return (
        <div className='mainBody'>
            <Link to="/" component={HomePage}>            Game over
</Link>
        </div>
    );
}

export default GameEnd;