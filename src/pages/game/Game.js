import { useState, React, memo } from 'react';
import './Game.css';
import LetterSort from '../../components/LetterSort/LetterSort.js';
import envNounList from '../../wordLists/climateWords';
import scrambleWord from '../../functions/scrambleWord';
import FancyBackground from '../../components/FancyBackground/FancyBackground.js';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import HeatBar from '../../components/HeatBar/HeatBar';
import getRandomColor from '../../functions/getRandomColor';
import PowerUpBar from '../../components/PowerUpBar/PowerUpBar';
import LivesBar from '../../components/LivesBar/LivesBar';
import ConfettiExplosion from 'react-confetti-explosion';
import Timer from '../../components/Timer/Timer';
import useInterval from '../../functions/useInterval';
import { useEffect } from 'react';
import HappyMsg from '../../components/HappyMsg/HappyMsg';
import getRandomHappyMsg from '../../functions/getRandomHappyMsg';
import Scoreboard from '../../components/Scoreboard/Scoreboard';

const MemoizedConfetti = memo(function confetti({ isExploding }) {
  return (isExploding &&
    <ConfettiExplosion particleCount="60" />);
});
const MemoizedHappyMsg = memo(({ isHappy }) => {
  return (isHappy && <HappyMsg msg={getRandomHappyMsg()} />)
})
function Game() {
  const [wordLength, setWordLength] = useState(3);
  const [isExploding, setIsExploding] = useState(false);
  const [word, setWord] = useState(envNounList.getRandom(wordLength));
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(word));
  const [themeColor, setThemeColor] = useState(getRandomColor());
  const [lives, setLives] = useState(3);
  const [usedPowerup, setUsedPowerup] = useState(false);
  const [powerupsLeft, setPowerupsLeft] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [randNewPower, setRandNewPower] = useState(-1);
  const [isHappy, setIsHappy] = useState(false);
  const [times, setTimes] = useState([]);
  const [pastSeconds, setPastSeconds] = useState(0);
  useInterval(() => {
    setSeconds(seconds + 1);
  }, 1000);

  function solved() {
    //If the player has solved level 7, redirect to win screen
    if (wordLength === 8) {
      window.location.href = "/done#" + btoa(seconds);
    }

    //Turn off any exploding confetti
    setIsExploding(false);

    //Show congratulatory message
    setIsHappy(true);

    //Set next word length
    setWordLength(wordLength + 1);

    //Choose new background color
    setThemeColor(getRandomColor());

    //Start color
    setIsExploding(true);

    //Store time on leaderboard
    setPastSeconds(seconds);

    //Turn off confeti
    setTimeout(() => {
      setIsExploding(false);
      setIsHappy(false);
    }, 3000);
    setRandNewPower(Math.random());

    //Save leaderboard
    let temp = times;
    times.push(seconds - pastSeconds);
    setTimes(temp);
  }


  useEffect(() => {
    setWord(envNounList.getRandom(wordLength));
  }, [wordLength]);
  useEffect(() => {
    setScrambledWord(scrambleWord(word));
  }, [word]);

  function gotWrong() {
    setIsExploding(false);
    if (lives - 1 == 0) {
      lost();
    }
    setLives(lives - 1);

  }
  function usePowerup(powerup) {
    setUsedPowerup(powerup);
    setTimeout(() => {
      setUsedPowerup(false);
    }, 10);
  }
  function lost() {
    window.location.href = "/done#" + btoa("lost");
  }


  return (
    <FancyBackground color={themeColor}>
      <div className="Game">
        <div className="horizontalSection" style={{ height: "20vh" }}>
          <Timer seconds={seconds} />
          <LivesBar lives={lives} />
        </div>
        <div>
          <LetterSort usedPowerup={usedPowerup} scrambleWord={scrambledWord} solution={word} onSolve={solved} onWrong={gotWrong} />
        </div>
        <div>
          <PowerUpBar addNewPowerup={randNewPower} powerupsLeft={powerupsLeft} onUse={usePowerup} />
        </div>
        <div className="contentBottom" style={{ height: "20vh" }}>
          <HeatBar onFire={lost} coolDown={isExploding} />
          <ProgressBar color={themeColor} totalSections={7} currentSection={wordLength} />
        </div>
      </div>
      <div id="confettiCenter">
        <MemoizedConfetti isExploding={isExploding} />
      </div>
      <MemoizedHappyMsg isHappy={isHappy} />
      <Scoreboard times={times} />
    </FancyBackground>
  );
}

export default Game;
