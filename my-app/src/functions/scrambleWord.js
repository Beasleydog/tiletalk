export default function scrambleWord(word) {
    console.log(word);
    if (word.length == 1) return word;

    let scramble = word;
    while (scramble === word) {
        scramble = word.split("").sort(() => {
            return Math.random() - 0.5;
        }).join("");
    }
    console.log(scramble);
    return scramble;
}