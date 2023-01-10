import { useState } from "react"
import Table from './Table'
import productClass from "./productClass";

function Form() {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        amount: 1,
        discount: 0,
    });

    const [products, setProducts] = useState([])
    const addP = () => {
        let flag;
        products.forEach((value, idx) => {
            flag = false;
            if (value.name == product.name) {
                console.log(`there is already ${product.name}`);
                flag = true;
                return;
            }
        })
        if (flag !== true) {
            setProduct({
                name: "",
                price: 0,
                amount: 1,
                discount: 0
            })
            setProducts(prevState => {
                return [...prevState, product];
            })
        }
    }

    const add = (e) => {
        const changedProp = e.target.name;
        setProduct(prevState => {
            return {
                ...prevState,
                [changedProp]: e.target.value
            }
        })
    }
    return (
        <>  
            <h1>name: {product.name} price: {product.price} amount: {product.amount} discount: {product.discount}</h1>
            <input value={product.name} placeholder="name" name="name" onChange={add}></input>
            <input value={product.price} placeholder="price" name="price" onChange={add}></input>
            <input value={product.amount} placeholder="amount" name="amount" onChange={add}></input>
            <input value={product.discount} placeholder="discount" name="discount" onChange={add}></input>
            <button type="button" onClick={addP}>add</button>
            {(products.length > 0) ? <Table product={products}></Table>: console.log("nothing")}
        </>
    )
}

export default Form;