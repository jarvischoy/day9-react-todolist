import React from "react"
import styles from "./DoneItem.module.css"

const DoneItem = ({ todo }) => {
  const { text } = todo

  return <div className={styles.itemContainer}>
    <div>
      {text}
    </div>
  </div>
}

export default DoneItem