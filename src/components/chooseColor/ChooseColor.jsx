// Lav knapperne “Rød”, “Grøn” og “Blå”. 
// Når man vælger en farve, skal en tekst på siden skifte til den farve.
// Hint: Gem farvenavnet i state.

import { useState } from "react"

export default function ChooseColor() {
    const [color, setColor] = useState("")

    function handleChange(color, event) {
        setColor(color)
    }
    return (
        <section className="color">
            <label htmlFor="color">Vælg en farve</label>
            <button onClick={() => handleChange("red")}>Vælg Rød fave</button>
            <button onClick={() => handleChange("green")}>Vælg Grøn fave</button>
            <button onClick={() => handleChange("blue")}>Vælg Blå fave</button>
            <h2 style={{ color }}>SKIFT DENNE TEKSTS FARVE</h2>
        </section>
    )
}

export function ChooseAllColor() {
    const [color, setColor] = useState("")

    function handleChange(event) {
        const color = event.target.value
        setColor(color)

    }
    return (
        <section className="color">
            <label htmlFor="color">Vælg en farve</label>
            <input type="color" name="color" id="color" onChange={handleChange} />
            <h2 style={{ color }}>SKIFT DENNE TEKSTS FARVE</h2>
        </section>
    )
}