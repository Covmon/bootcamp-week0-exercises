/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import nanoid from 'nanoid'
import {
  AddTaskInput, AddTaskBarContainer, AddTaskButton, TaskColorSelector,
} from './styles'

const AddTaskBar = ({
  todosList, setTodosList, filteredTodosList, setFilteredTodosList,
}) => {
  const [newTodoLabel, setNewTodoLabel] = useState('')
  const [newTodoColor, setNewTodoColor] = useState('')

  return (
    <AddTaskBarContainer>
      <AddTaskInput
        placeholder="Add a todo"
        value={newTodoLabel}
        onChange={e => setNewTodoLabel(e.target.value)}
      />
      <TaskColorSelector value={newTodoColor} onChange={e => setNewTodoColor(e.target.value)}>
        <option value="" disabled selected>Choose a color tag</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="orange">Orange</option>
      </TaskColorSelector>

      <AddTaskButton onClick={() => {
        if (newTodoColor !== '') {
          const randId = nanoid()
          const newTodo = { id: randId, label: newTodoLabel, color: newTodoColor }
          console.log(newTodo)
          console.log(setTodosList)
          setTodosList([...todosList, newTodo])
          setFilteredTodosList([...filteredTodosList, newTodo])
          setNewTodoLabel('')
          setNewTodoColor('')
        } else {
          alert('Please choose a color tag for your todo.')
        }
      }}
      >
        <b>+ Add Todo</b>
      </AddTaskButton>
    </AddTaskBarContainer>
  )
}

export default AddTaskBar
