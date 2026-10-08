// Lav et tekstfelt, hvor man kan skrive en besked. Vis, hvor mange tegn beskeden indeholder.

import { useState } from "react"

export default function CountCharacters() {
    const [numberOfCharacters, setNumberOfCharacters] = useState(0)

    function handleChange(event) {
        const textareaDom = event.target
        const textareaValue = textareaDom.value;
        setNumberOfCharacters(textareaValue.length)
    }
    return (
        <section className="count-characters">
            <textarea onChange={handleChange}></textarea>
            <div className="numberof">{numberOfCharacters}</div>
        </section>
    )
}