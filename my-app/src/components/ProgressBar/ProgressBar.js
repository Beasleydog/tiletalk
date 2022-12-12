import { useState, useEffect } from "react";
import "./ProgressBar.css";
export default function ProgressBar({ color, totalSections, currentSection }) {
    return (
        <div id="progressBarContainer">
            <div id="barContainer">
                <div id="barOuter">
                    <div id="barInner" style={{ background: color, width: `${((currentSection - 3) / totalSections) * 100}%` }}></div>
                </div>
            </div>
            Level {currentSection - 2}
        </div>
    )
}