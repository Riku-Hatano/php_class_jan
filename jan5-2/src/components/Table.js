function Table(props) {
    // console.log(props.product)
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>product name</th>
                    <th>product price</th>
                    <th>product amount</th>
                    <th>product discount</th>
                    <th>total</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.product.map((product, key) => 
                        <tr key={key}>
                            <td key={(key + 1) * 10}>{product.name}</td>
                            <td key={(key + 1) * 100}>{product.price}</td>
                            <td key={(key + 1) * -1}>{product.amount}</td>
                            <td key={(key + 1) * -10}>{product.discount}</td>
                            <td key={(key + 1) * -100}>{(product.price * product.amount) - (product.discount * product.amount)}</td>
                            {/* to add something in table, we should set each key. that shoule be unique,  */}
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
export default Table;