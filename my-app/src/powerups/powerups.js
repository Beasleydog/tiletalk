import { FaPlusCircle } from "react-icons/fa";
import { BsDice5Fill } from "react-icons/bs";
const powerups = [
    {
        id: "hint",
        humanName: "Hint",
        icon: FaPlusCircle,
        effect: (letters, real) => {
            console.log(letters, real)
            let newList = letters;
            if (newList[0] != real[0]) {
                console.log("not equal")
                newList[newList.indexOf(real[0])] = newList[0]
                newList[0] = real[0];
            }
            console.log(newList);
            return newList;
        }
    },
    {
        id: "rescr",
        humanName: "Re-Scramble",
        icon: BsDice5Fill,
        effect: (letters) => {
            return letters.sort(() => Math.random() - 0.5);
        }
    }
]
function getRandomPowerup() {
    return powerups[Math.floor(Math.random() * powerups.length)];
}
export default getRandomPowerup;
export { powerups };