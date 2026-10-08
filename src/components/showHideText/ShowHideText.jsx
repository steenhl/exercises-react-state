// Lav en knap, der skifter mellem at vise og skjule en tekst, for eksempel “Hej, React!”.
// **Hint:** Brug en boolean-værdi, som starter på `true` eller `false`.

import { useState } from "react"

export default function ShowHideText() {

    const [show, setShow] = useState(true)
    function showHide() {
        setShow((prev) => !prev)
    }

    return (
        <section className="showhide">
            <button onClick={showHide}>Skjul / Vis text</button>
            <div className="showhide__text">
                <h2>{show ? <span>Hej React</span> : ""}</h2>
            </div>
        </section>
    )
}
