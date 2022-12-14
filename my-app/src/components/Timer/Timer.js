import "./Timer.css";
export default function Timer({ seconds }) {
    //render the timer in minutes and seconds
    return (
        <div id="timer">
            {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60}
        </div>
    );
}