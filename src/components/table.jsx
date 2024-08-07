function Table({ data }) {





    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>

                {data.map((transanction, index) => {
                    return (
                        <tr key={index}>
                            <td>{transanction.date}</td>
                            <td>{transanction.description}</td>
                            <td>{transanction.category}</td>
                            <td>{transanction.amount}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
