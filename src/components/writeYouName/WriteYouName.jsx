// Lav et tekstfelt. Vis teksten “Hej, [navn]!” under feltet, mens brugeren skriver.

import { useState } from "react"

export default function WriteYouName() {
    const [name, setName] = useState("")

    function handleOnChange(event) {
        const targetDom = event.target
        const userText = targetDom.value
        setName(userText)
    }

    return (
        <section className="name">
            <textarea placeholder="Skriv dit navn" onChange={handleOnChange}></textarea>
            <div className="youname">Hej {name}</div>
        </section>
    )
}