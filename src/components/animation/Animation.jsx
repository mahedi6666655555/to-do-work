import React from 'react';

import aneme from './/anime.json'
import Lottie from 'lottie-react'

const Animation = () => {
    return (
        <div>
            <div>
                <Lottie loop={true} animationData={aneme} />
                <div>
                </div>
            </div>
        </div>
    );
};

export default Animation;