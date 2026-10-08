// Lav en knap, der skifter sin tekst mellem “Tænd” og “Sluk”, når man klikker på den.
// To forskellige løsninger

import { useState } from "react"

export default function ChangeButtonTextV1() {

    const [show, setShow] = useState(true)
    function showHide() {
        setShow((prev) => !prev)
    }

    return (
        <section className="showhide">
            <button onClick={showHide}>Skjul / Vis text</button>
            <div className="showhide__text">
                <h2>{show ? <span>Vis</span> : <span>skjul</span>}</h2>
            </div>
        </section>
    )
}

// Denne løsning ligger op til en snak om spread operatoren
export function ChangeButtonTextV2() {

    const [text, setText] = useState({
        isOn: "Tænd",
        isOff: "Sluk",
        onOff: true
    })

    function handleClick(event) {
        console.log({ ...text });
        setText((currentVal) => ({ ...currentVal, onOff: !currentVal.onOff }))

    }
    return (
        <section className="changetext">
            <button onClick={handleClick}>{text.onOff ? text.isOn : text.isOff}</button>
        </section>
    )
}