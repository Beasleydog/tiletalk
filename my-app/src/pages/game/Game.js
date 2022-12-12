import { useState, React } from 'react';
import './Game.css';
import LetterSort from '../../components/LetterSort/LetterSort.js';
import nounList from '../../wordLists/nouns';
import scrambleWord from '../../functions/scrambleWord';
import FancyBackground from '../../components/FancyBackground/FancyBackground.js';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import getRandomColor from '../../functions/getRandomColor';
import PowerUpBar from '../../components/PowerUpBar/PowerUpBar';
import LivesBar from '../../components/LivesBar/LivesBar';
import ConfettiExplosion from 'react-confetti-explosion';
import { useEffect } from 'react';
function Game() {
  const [wordLength, setWordLength] = useState(3);
  const [isExploding, setIsExploding] = useState(false);
  const [word, setWord] = useState(nounList.getRandom(wordLength));
  const [scrambledWord, setScrambledWord] = useState(scrambleWord(word));
  const [themeColor, setThemeColor] = useState(getRandomColor());
  const [lives, setLives] = useState(3);
  const [usedPowerup, setUsedPowerup] = useState(false);
  const [powerupsLeft, setPowerupsLeft] = useState(3);
  function solved() {
    setIsExploding(false);
    setWordLength(wordLength + 1);
    setThemeColor(getRandomColor());
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 3000);
  }


  useEffect(() => {
    setWord(nounList.getRandom(wordLength));
  }, [wordLength]);
  useEffect(() => {
    setScrambledWord(scrambleWord(word));
  }, [word]);

  function gotWrong() {
    setIsExploding(false);

    setLives(lives - 1);
  }
  function usePowerup(powerup) {
    setUsedPowerup(powerup);
    setTimeout(() => {
      setUsedPowerup(false);
    }, 10);
  }
  return (
    <FancyBackground color={themeColor}>
      <div className="Game">
        <div className="horizontalSection">
          <ProgressBar color={themeColor} totalSections={10} currentSection={wordLength} />
          <LivesBar lives={lives} />
        </div>
        <div>
          <LetterSort usedPowerup={usedPowerup} scrambleWord={scrambledWord} solution={word} onSolve={solved} onWrong={gotWrong} />
        </div>
        <div>
          <PowerUpBar powerupsLeft={powerupsLeft} onUse={usePowerup} />
        </div>
      </div>
      <div id="confettiCenter">
        {isExploding && <ConfettiExplosion particleCount="60" />}
      </div>
    </FancyBackground>
  );
}

export default Game;
