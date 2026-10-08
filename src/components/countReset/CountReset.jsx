// 3. Nulstil tælleren
// Udvid tællerøvelsen med en knap, der sætter tallet tilbage til `0`.

import { useState } from "react"

export default function CountReset() {
    const [count, setCount] = useState(0)

    function increaseCount() {
        const newCount = count + 1
        setCount(newCount)
    }
    function reset() {
        setCount(0)
    }

    return (
        <section>
            <button className="count" onClick={increaseCount}>Tæl op</button>
            <button className="count-reset" onClick={reset}>Nulstil</button>
            <div className="count__show">{count}</div>
        </section>
    )
}