import React from 'react';
import ss from './ss.png'
import Styled from 'styled-components';

function Image() {
    const Img = Styled.img`
        @media (min-width: 1200px) {
            height: 80%;
            width: 35%;
            object-fit: cover;
            float: left;
            margin-top: 2%;
            margin-left: 2%;
        }
        @media (max-width: 1200px) {
            display: none;
        }
    `;
    return (
        // return null if screen is small
        <div>
            <Img src={ss} alt="screenshot" />
        </div>
    )
}

export default Image;