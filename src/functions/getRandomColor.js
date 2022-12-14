const backgroundColors = [
    "#5FAD56",
    "#F2C14E",
    "#F78154",
    "#4D9078",
    "#B4436C"
]
export default function getRandomColor() {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}