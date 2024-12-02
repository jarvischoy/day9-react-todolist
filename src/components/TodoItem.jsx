import React, { useState } from "react"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { ActionEnum } from "../enum/ActionEnum"
import styles from "./TodoItem.module.css"
import { deleteTodos, updateTodos } from "../api/todos"
import { Button, Input, Modal, Spin } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

const TodoItem = ({ todo }) => {
  const { id, text, done } = todo
  const { dispatch } = useContext(TodoContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowUpdateModal, setIsShowUpdateModal] = useState(false)
  // const [originalText, setOriginalText] = useState(text)
  const [updateText, setUpdateText] = useState(text)

  const handleDelete = async () => {
    setIsLoading(true)
    await deleteTodos(id)
      .then(() => dispatch({ type: ActionEnum.DELETE, payload: { id } }))
      .catch((error) => console.error("Failed to delete todo", error))
      .finally(() => setIsLoading(false))
  }

  const handleToggle = async () => {
    setIsLoading(true)
    await updateTodos({ id, text, done: !done })
      .then(() => dispatch({ type: ActionEnum.TOGGLE, payload: { id } }))
      .catch((error) => console.error("Failed to toggle todo", error))
      .finally(() => setIsLoading(false))
  }

  const toggleUpdateModal = () => {
    setIsShowUpdateModal(!isShowUpdateModal)
  }

  const handleOk = async () => {
    setIsLoading(true)
    await updateTodos({ id, text: updateText, done })
      .then(() => dispatch({ type: ActionEnum.UPDATE, payload: { id, text: updateText } }))
      .catch((error) => console.error("Failed to update todo", error))
      .finally(() => {
        setIsLoading(false)
        // setOriginalText(updateText)
        toggleUpdateModal()
      })

  }

  const handleUpdateTextChange = (e) => {
    if (e.target.value.length > 100) return
    setUpdateText(e.target.value)
  }

  const handleCancel = () => {
    setUpdateText(text)
    toggleUpdateModal()
  }

  return <>
    <Spin spinning={isLoading}>
      <div className={styles.itemContainer}>
        <Button className={styles.updateButton} onClick={toggleUpdateModal}><EditOutlined /></Button>
        <div className={done ? styles.done : styles.notDone} onClick={handleToggle}>
          {text}
        </div>
        <Button danger className={styles.deleteButton} onClick={handleDelete}><DeleteOutlined /></Button>
      </div>
    </Spin>

    <Modal title="Update Todo" open={isShowUpdateModal} onOk={handleOk} onCancel={handleCancel} >
      <Input value={updateText} onChange={handleUpdateTextChange} />
    </Modal>
  </>
}

export default TodoItem