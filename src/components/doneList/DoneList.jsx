import React, { useContext, useEffect } from "react"
import styles from "./DoneList.module.css"
import { TodoContext } from "../../context/TodoContext"
import DoneItem from "./DoneItem"

const DoneList = () => {
  const { state, dispatch } = useContext(TodoContext)

  useEffect(() => {
    if (state.length === 0 || state === null) {
      dispatch({ type: "LOAD" })
    }
  }, [dispatch])

  const doneItems = state.map((todo) => {
    if (!todo.done) return null
    return <DoneItem key={todo.id} todo={todo} />
  })

  return <>
    <div className={styles.title}>Done List</div>
    <div className={styles.doneItemsContainer}>
      {doneItems}
    </div>
  </>

}

export default DoneList