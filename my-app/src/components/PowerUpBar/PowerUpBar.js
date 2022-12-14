import { useState, useEffect } from "react";
import "./PowerUpBar.css";
import getRandomPowerup from "../../powerups/powerups";
import * as Icons from "react-icons";
export default function PowerUpBar({ addNewPowerup, onUse }) {
    const [powerups, setPowerups] = useState(new Array(3).fill("").map(() => getRandomPowerup()));
    const [lastRandomAddPowerup, setLastRandomAddPowerup] = useState(-1);
    const numberOfPowerups = 3;

    function OnUseInternal(powerup) {
        console.log(powerups, powerup);
        onUse(powerup);
        setPowerups(powerups.filter((x) => {
            return powerup.randId != x.randId;
        }));
    }

    useEffect(() => {
        if (lastRandomAddPowerup != addNewPowerup) {
            if (powerups.length < numberOfPowerups) {
                setPowerups(p => [...p, getRandomPowerup()]);
            }
        }
        setLastRandomAddPowerup(addNewPowerup);
    }, [addNewPowerup, powerups, lastRandomAddPowerup]);

    return (
        <div id="powerUpBarContainer">
            <div>
                <div style={{ "font-size": "35px", "font-weight": "bold", "margin": "5px" }}>Powerups</div>
            </div>
            <div id="powerUpList">
                {powerups.map((x) => <PowerUp use={OnUseInternal} powerup={x} />)}
            </div>
        </div>
    )
}
function PowerUp({ use, powerup }) {
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