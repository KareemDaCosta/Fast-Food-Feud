import * as React from "react"
import "./Chip.css"

export function Chip({ item, label = "", isActive = true, onClick }) {
  var buttonClassName = isActive ? "chip active" : "chip"

  return (
    <button className={buttonClassName} onClick={() => onClick(item)}>
      <p className="label">{label}</p>
      <span className="close" role="button" >{`X`}</span>
    </button>
  )
}

export default Chip
