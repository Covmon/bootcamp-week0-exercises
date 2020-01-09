/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import {
  TodoItemLabel, Container, TodoColorLabel, ManageTodoButton,
} from './styles'

const TodoItem = ({
  id, setTodosList, todosList, filteredTodosList, setFilteredTodosList, label, color,
}) => (
  <Container>
    <ManageTodoButton
      color="pink"
      onClick={() => {
        const newTodosList = todosList.filter(todo => todo.id !== id)
        console.log(newTodosList)
        setTodosList(newTodosList)

        const newFilteredTodosList = filteredTodosList.filter(todo => todo.id !== id)
        setFilteredTodosList(newFilteredTodosList)
      }}
    >
    &#x1F5D1;
    </ManageTodoButton>

    <ManageTodoButton
      color="lightgreen"
      onClick={() => {
        const newTodosList = todosList.filter(todo => todo.id !== id)
        console.log(newTodosList)
        setTodosList(newTodosList)

        const newFilteredTodosList = filteredTodosList.filter(todo => todo.id !== id)
        setFilteredTodosList(newFilteredTodosList)
      }}
    >
    &#x2705;
    </ManageTodoButton>

    <TodoColorLabel color={color} />
    <TodoItemLabel>{label}</TodoItemLabel>
  </Container>
)

export default TodoItem
