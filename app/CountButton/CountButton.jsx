import { useState, useEffect} from "react"
import "./CountButton.css"

export default function CountButton(props) {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1 * props.mult)
    }
    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    const buttonStyle = {
        backgroundColor:"#3e88ff", 
        color:"white", 
        padding: props.size+"rem", 
        borderRadius: "10px",
        fontSize:"1.2rem"
    }
    useEffect(rollOverCount, [count])
    return (
      <div style={{textAlign:"center", fontSize:"1.2rem"}}>
        <button style={buttonStyle} onClick={handleClick}>{props.name}</button>
        <div>{count}</div>
      </div>
    )
  }