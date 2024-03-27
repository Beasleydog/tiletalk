import FancyBackground from "../../components/FancyBackground/FancyBackground";
import "./Done.css";
import React, { useState } from "react";
import getRandomColor from "../../functions/getRandomColor";
import getRandomHappyMsg from "../../functions/getRandomHappyMsg";
import ConfettiExplosion from 'react-confetti-explosion';
import Leaderboard from "../../components/Leaderboard/Leaderboard";

const time = Number(atob((window.location.hash.slice(7))))
const won = atob(window.location.hash.slice(7)) !== "lost";
export default function Done() {
    const [themeColor, setThemeColor] = useState(getRandomColor());
    return (
        <div>
            <FancyBackground color={themeColor}>
                <div id="doneContainer">
                    {won && <ConfettiExplosion />}
                    <div id="title">
                        {won && "You Win!"}
                        {!won && "Game over!"}
                    </div>
                    {won && <div id="time">
                        {Math.floor(time / 60)}:{time % 60 < 10 ? "0" + time % 60 : time % 60}
                    </div>
                    }
                    <div id="subTitle">
                        {won ? getRandomHappyMsg() : "You lose 😢"}
                    </div>
                    <div id="leaderboardDisplay">
                        <Leaderboard won={won} />
                    </div>
                </div>
            </FancyBackground>
        </div>
    );
}