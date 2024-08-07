import { useState } from "react"

function Search({ searchTransaction, reset }) {
    const [input, setInput] = useState("")
    return (
        <div>
            <input type="text" placeholder="Search" value={input} onChange={(e) => {
                setInput(e.target.value)
            }} />
            <button onClick={() => {
                searchTransaction(input)
                setInput("")
            }}>Search</button>
            <button onClick={reset}>Cancel</button>
        </div>
    )
}

export default Search