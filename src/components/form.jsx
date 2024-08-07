import { useState } from "react"

function Form({ addTransaction }) {
    const [date, setDate] = useState("")
    const [description, setDesc] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function resetInputs() {
        setDate("")
        setDesc("")
        setCategory("")
        setAmount("")
    }

    return (
        <form id="form" onSubmit={e => {
            e.preventDefault()
            const obj = {
                date, description, category, amount
            }
            addTransaction(obj)
            resetInputs()
        }}>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" value={date} onChange={e => { setDate(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={description} onChange={e => { setDesc(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" value={category} onChange={e => { setCategory(e.target.value) }} />
            </div>
            <div>
                <label htmlFor="mount">Amount</label>
                <input type="number" name='amount' value={amount} onChange={e => { setAmount(e.target.value) }} />
            </div>
            <input type="submit" value="Add transaction" />
        </form>
    )
}

export default Form