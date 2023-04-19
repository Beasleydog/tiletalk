import { useState, useEffect } from "react";
import "./HeatBar.css";
import useInterval from "../../functions/useInterval";
export default function HeatBar({ onFire, coolDown }) {
    const [heat, setHeat] = useState(0);
    const MAX_HEAT = 100;
    const BAR_WIDTH = window.innerWidth * .8;
    useInterval(() => {
        setHeat((u) => u + 1);
        if (heat >= MAX_HEAT) onFire();
    }, 500);
    useEffect(() => {
        if (coolDown) {
            setHeat(u => u - 10);
        }
    }, [coolDown]);

    return (
        <>
            <div id="heatBarContainer">
                <div id="heatbarContainer">
                    <span style={{ marginRight: "10px", color: "white" }}>
                        Heat
                    </span>
                    <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                        🧊
                    </span>
                    <div id="heatBarOuter">
                        <div id="heatBarInner" style={{
                            background: `linear-gradient(to right, #a1c4ff ${BAR_WIDTH * .1}px ,rgba(210,164,63,1) ${BAR_WIDTH * .5}px ,#FF4500 ${BAR_WIDTH * .75}px,red ${BAR_WIDTH}px)`,
                            width: `${heat * 100 / MAX_HEAT}%`
                        }}></div>
                    </div>
                    <span style={{ marginRight: "10px" }}>
                        🔥
                    </span>
                </div>
            </div >
            <div id="fireDisplay" style={{
                bottom: `${-80 + (1 * heat * 100 / MAX_HEAT)}px`,

                transform: `scale(${1 + (5 * heat * 100 / MAX_HEAT) / 100}) rotate(${Math.sin(heat)}deg)`
            }}>
                🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
                🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
                🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
            </div>
        </>
    )
}