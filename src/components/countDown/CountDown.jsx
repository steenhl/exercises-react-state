// 2. Tæl ned
// Lav en knap, der trækker `1` fra tælleren.
// **Ekstra:** Sørg for, at tælleren ikke kommer under `0`.

import { useState } from "react"

export default function CountDown() {
    const [countDown, setCountDown] = useState(10)

    function decreaseCountDown() {
        if (countDown > 0) {
            const newCountDown = countDown - 1
            setCountDown(newCountDown)
        }
    }

    return (
        <section>
            <button className="count" onClick={decreaseCountDown}>Tæl ned</button>
            <div className="count__show">{countDown}</div>
        </section>
    )
}