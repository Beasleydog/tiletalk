export default function scrambleWord(word) {
    if (word.length == 1) return word;

    let scramble = word;
    while (scramble === word) {
        scramble = word.split("").sort(() => {
            return Math.random() - 0.5;
        }).join("");
    }
    return scramble;
}