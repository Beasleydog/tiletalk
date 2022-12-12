import React, { useState } from 'react';
import './LivesBar.css';

export default function LivesBar({ lives }) {
    return (
        <div id="livesBarContainer">
            <div id="livesBar">
                {"❤️".repeat(lives)}
            </div>
        </div>
    )
}