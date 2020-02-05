import React from 'react';
import { changeBackground } from '../../Utility/Helpers';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const history = useHistory()

    // const background = 'linear-gradient(315deg, #BEEAF2 0%, rgba(130, 195, 228, 0.5) 50%), #82C3E4'

    return (
        <div>
            Landing page
            <button onClick={() => history.push('/auth')}>Log in</button>
        </div>
    );
}

export default LandingPage;
