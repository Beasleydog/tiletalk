import { useState, useEffect } from "react";
import "./PowerUpBar.css";
import getRandomPowerup from "../../powerups/powerups";
import * as Icons from "react-icons";
export default function PowerUpBar({ powerUpClicked, onUse }) {
    const numberOfPowerups = 3;
    return (
        <div id="powerUpBarContainer">
            <div>
                <h1>Powerups</h1>
            </div>
            <div id="powerUpList">
                {new Array(3).fill(<PowerUp use={onUse} />)}
            </div>
        </div>
    )
}
function PowerUp({ use }) {
    const [powerup, setPowerup] = useState(getRandomPowerup());
    function clicked() {
        use(powerup)
    }
    return (
        <div id="powerUpBox" onClick={clicked}>
            <div id="powerUpIcon">
                {powerup.icon({ size: "23px" })}
            </div>
            <div id="powerUpName">
                {powerup.humanName}
            </div>
        </div>
    )
}