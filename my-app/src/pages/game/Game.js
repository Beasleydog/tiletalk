import { useState, React } from 'react';
import './Game.css';
import LetterSort from '../../components/LetterSort/LetterSort.js';
import nounList from '../../wordLists/nouns';
import scrambleWord from '../../functions/scrambleWord';
import FancyBackground from '../../components/FancyBackground/FancyBackground.js';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import getRandomColor from '../../functions/getRandomColor';


function Game() {
  const [wordLength, setWordLength] = useState(3);
  const [word, setWord] = useState(nounList.getRandom(wordLength));
  const [themeColor, setThemeColor] = useState(getRandomColor());
  function solved() {
    setWordLength(wordLength + 1);
    setWord(nounList.getRandom(wordLength));
    setThemeColor(getRandomColor());
  }

  return (
    <FancyBackground color={themeColor}>
      <div className="Game">
        <div>
          <ProgressBar color={themeColor} totalSections={10} currentSection={wordLength} />
        </div>
        <div>
          <LetterSort scrambleWord={scrambleWord(word)} solution={word} onSolve={solved} />
        </div>
        <div></div>
      </div>
    </FancyBackground>
  );
}

export default Game;
