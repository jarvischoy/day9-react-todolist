import React, { useContext, useEffect, useState } from "react"
import styles from "./DoneList.module.css"
import { TodoContext } from "../../context/TodoContext"
import DoneItem from "./DoneItem"
import { ActionEnum } from "../../enum/ActionEnum"
import { Spin } from "antd"
import { getTodos } from "../../api/todos"

const DoneList = () => {
  const { state, dispatch } = useContext(TodoContext)
  const [isLoading, setIsLoading] = useState(false)

  const onLoad = async () => {
    setIsLoading(true)
    try {
      const response = await getTodos()
      dispatch({ type: ActionEnum.LOAD, payload: response.data })
    } catch (error) {
      console.error("Failed to load todos", error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (state.length === 0 || state === null) {
      onLoad()
    }
  }, [])

  const doneItems = state.map((todo) => {
    if (!todo.done) return null
    return <DoneItem key={todo.id} todo={todo} />
  })

  return <>
    <div className={styles.title}>Done List</div>
    <Spin spinning={isLoading}>
      <div className={styles.doneItemsContainer}>
        {doneItems}
      </div>
    </Spin>
  </>

}

export default DoneList