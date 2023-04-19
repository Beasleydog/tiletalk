import "./Start.css";
import FancyBackground from "../../components/FancyBackground/FancyBackground";
import React, { useState } from "react";
import getRandomColor from "../../functions/getRandomColor";
import { useEffect } from "react";

export default function Start() {
    const [themeColor, setThemeColor] = useState(getRandomColor());
    const [test, setTest] = useState(0);
    const alp = "abcdefghijklmnopqrstuvwxyz";
    useEffect(() => {
        setInterval(() => {
            setTest(Math.random());
        }, 5000);
    }, [])
    return (
        <div id="top">
            <FancyBackground color={themeColor}>
                <div style={{ display: "none" }}>{test}</div>
                <div id="startContainer">
                    <div id="title" style={{ zIndex: 99999999999 }}>
                        Scrambled
                    </div>
                    <div id="buttonContainer" style={{ zIndex: 99999999999 }}>
                        <div class="button" onClick={() => { window.location.replace("/game") }}>
                            Start
                        </div>
                        <div class="button" onClick={() => {
                            window.location.replace("/instructions");
                        }}>
                            Instructions
                        </div>
                        <div class="button" onClick={() => {
                            document.write("Game successfully quit, you may now close the tab.");
                        }}>
                            Quit
                        </div>
                    </div>
                    {new Array(10).fill(0).map((_, i) => {
                        return (
                            <div class="letter" style={{
                                animation: `ambientHover ${Math.round((Math.random() * 2) + 1)}s infinite ease-in-out, fadeIn 2s ease-in`
                                , marginLeft: `${Math.random() * 200 - 10}px`,
                                top: `${Math.random() * (window.innerHeight - 200)}px`,
                                left: `${Math.random() * (window.innerWidth - 200)}px`,
                                position: "absolute",
                                opacity: ".1",
                            }}>{alp[Math.floor(Math.random() * 26)]}</div>
                        )
                    })}
                </div>
            </FancyBackground >
        </div >
    )
}