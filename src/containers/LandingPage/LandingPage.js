import React from 'react';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const history = useHistory()

    return (
        <div>
            Landing page
            <button onClick={() => history.push('/auth')}>Log in</button>
        </div>
    );
}

export default LandingPage;
