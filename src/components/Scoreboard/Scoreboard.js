import "./Scoreboard.css"
export default function Scoreboard({ times }) {
    return (
        <div id="scoreboardContainer">
            {times.map((x, index) => {
                return <div key={index} className="scoreboardItem">Level {index + 1}: {Math.floor(x / 60)}:{x % 60 < 10 ? "0" + x % 60 : x % 60}</div>
            })}
        </div>
    )
}