export default function getRandomHappyMsg() {
    const happyMsgs =
        `Wow!
        Awesome!
        Nice!
        Bravo!
        Super!
        Fantastic!
        Impressive!
        Yay!
        Congrats!
        Yippee!`.split("\n");
    return happyMsgs[Math.floor(Math.random() * happyMsgs.length)];
}