// En lille indkøbsliste
// Lav et tekstfelt og en “Tilføj”-knap. Når man tilføjer et ord, skal det vises i en liste.
// Ekstra: Tøm tekstfeltet efter tilføjelse.

import { useState } from "react"
import "./shopping.css"

export default function ShoppingList() {
    const [items, setItems] = useState([])

    function handleItem(event) {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(event.currentTarget)
        let newItem = formData.get("item")

        // Løsning med push
        // let copyItems = [...items]
        // copyItems.push(newItem)
        // setItems(copyItems)

        // Løsning med spread operator
        // const itemsList = [...items, newItem]
        // setItems(itemsList)
        setItems([...items, newItem])

        form.reset()
    }

    return (
        <div className='shopping-wrapper'>
            <form onSubmit={handleItem} className="shopping">
                <h2 className='shopping__header'>Shopping List</h2>
                Tilføj indkøb
                <input className="shopping__input" type="text" placeholder='indtast en vare' name='item' />
                <input className="shopping__add-item" type='submit' />
            </form>
            <ul className="shopping-list">
                {items && items.map((item, index) => <li key={index} className="shopping-list__item">{item}</li>)}
            </ul>
        </div>
    )
}
