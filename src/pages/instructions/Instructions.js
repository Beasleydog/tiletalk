import FancyBackground from "../../components/FancyBackground/FancyBackground"
import "./Instructions.css";
import getRandomColor from "../../functions/getRandomColor";
export default function Instructions() {

    return (
        <FancyBackground color={getRandomColor()}>
            <iframe id="embed" src="https://docs.google.com/presentation/d/1NTAYDGh8j5nLsIZRzMqJplHW1AGuzKVg2WsoWbUbLVI/embed" />
            <div style={{
                position: "absolute",
                left: "50%",
                bottom: "10px",
                transform: "translateX(-50%)",
            }} class="button" onClick={() => { window.location.replace("#/") }}>
                Back
            </div>
        </FancyBackground>
    )
}