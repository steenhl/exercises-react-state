// ## 1. En simpel tæller
// Vis tallet `0` på siden. Lav en knap, der lægger `1` til, hver gang man klikker.
// **Hint:** Gem tallet i state med `useState(0)`.

import "./count.css"
import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0)

    function increaseCount() {
        const newCount = count + 1
        setCount(newCount)
    }

    return (
        <section>
            <button className="count" onClick={increaseCount}>Tæl op</button>
            <div className="count__show">{count}</div>
        </section>
    )
}