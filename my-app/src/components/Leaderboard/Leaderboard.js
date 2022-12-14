// Import usestate and useeffect
import React, { useState, useEffect } from 'react';
// Import the css file
import './Leaderboard.css';
const id = Math.random();
export default function Leaderboard({ won }) {
    const [data, setData] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    useEffect(updateBoard, []);
    function submitTime() {
        let name;
        if (window.location.hash.slice(1)) {
            name = prompt("Enter your name to be displayed on the leaderboard:");
            document.getElementById("scoreform").value = (atob((window.location.hash.slice(1))));
            document.getElementById("nameform").value = name;
            document.getElementById("idform").value = id;
            document.getElementById("sendform").click();
            let temp = data;
            temp.push({ name: name, score: Number(atob((window.location.hash.slice(1)))), id: id });
            setData(temp);
            console.log(temp, data);
            console.log(id);
            setSubmitted(true);
        }

    }
    function updateBoard() {
        (async () => {
            let data = await fetch("https://script.google.com/macros/s/AKfycbzv-mFPoqsmwkK7ctrzQ44xAWhg_JXlRpoHnBGa9aU-18KPaqLbIUpEE01EVVWJ-8tzoQ/exec");
            data = await data.json();
            setData(data);
        })();
    }
    return (
        <div id="leaderboardContainer">
            <div id="leaderboardTitle">
                Leaderboard
            </div>
            <div id="leaderboard">
                {data.sort((x, y) => x.score - y.score).map((item, index) => {
                    return (
                        <div className="leaderboardItem" style={{
                            ...(item.id == id && { background: "rgb(235 233 81 / 78%)" })
                        }}>
                            <div className="itemName">
                                {index + 1}. {item.name}:
                            </div>
                            <div className="itemTime">
                                {Math.floor(item.score / 60)}:{item.score % 60 < 10 ? "0" + item.score % 60 : item.score % 60}
                            </div>
                        </div>
                    )
                })}
                {data.length == 0 && "..."}
            </div>
            <div style={{ display: "none" }}>
                <iframe
                    name="dummyframe"
                    id="dummyframe"
                ></iframe>
                <form
                    id="form"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSea0FPu4FR6IaKZacLzf1kd5pbm61NJaKBNCbzuiiDnUFal1Q/formResponse"
                    target="dummyframe"
                    method="post"
                >
                    <input id="scoreform" name="entry.1724328111" type="text" />
                    <input id="nameform" name="entry.197504000" type="text" />
                    <input id="idform" name="entry.366312040" type="text" />
                    <input id="sendform" type="submit" value="Send" />
                </form>
            </div>
            {!submitted &&
                <button id="submit" style={{ ...(!won && { display: "none" }) }} onClick={submitTime}>Submit My Time</button>
            }
        </div>
    )
};