import "./FancyBackground.css"

export default function FancyBackground({ children, color }) {

    return (
        <div id="background" style={{
            background: color
        }}>
            {children}
        </div >
    )
}