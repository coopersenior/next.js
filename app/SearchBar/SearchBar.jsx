import { useState, useEffect} from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData() {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div className={"productStyle"} key={index}>
                    <p style={{fontSize:"1rem"}}>{product.title}</p>
                    <p style={{textAlign:"center"}}>${product.price}</p>
                    <img style={{width:"150px"}} src={product.image} alt={product.title} />
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }

    function handleChange(event) {
        setSearchString(event.target.value)
    }
    return <div>
        <p style={{textAlign:"center", fontSize:"1.5rem"}}>The Search Bar</p>
        <div style={{textAlign:"center"}}><input className="inputField" type="text" value={searchString} onChange={handleChange}/></div>
        <div style={{justifyContent:"center", display:"flex", flexFlow:"row wrap"}}>{filterProducts}</div>
    </div>
}