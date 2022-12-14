import { useState, useEffect } from "react";
import "./ProgressBar.css";
export default function ProgressBar({ color, totalSections, currentSection }) {
    return (
        <div id="progressBarContainer">
            <div id="barContainer">
                <span style={{ marginRight: "10px", color: "white" }}>
                    Level {currentSection - 2}
                </span>
                <div id="barOuter">
                    <div id="barInner" style={{ background: color, width: `${((currentSection - 3) / totalSections) * 98 + 2}%` }}></div>
                </div>
            </div>
        </div>
    )
}