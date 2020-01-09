/* eslint-disable max-len */
import React, { useState } from 'react'
import AddTaskBar from './AddTaskBar'
import TodoList from './TodoList'
import SearchBar from './SearchBar'
import { TodosPageContainer } from './styles'

// const todos = [{ id: 1, label: 'Todo 1 is longer', color: 'red' },
// { id: 2, label: 'Todo 2', color: 'blue' },
// { id: 3, label: 'Todo 3 is to take out the trash', color: 'green' }]

const TodosPage = () => {
  const [todosList, setTodosList] = useState([])
  const [filteredTodosList, setFilteredTodosList] = useState([])

  return (
    <TodosPageContainer>
      <AddTaskBar todosList={todosList} setTodosList={setTodosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} />
      <SearchBar todosList={todosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} />
      <TodoList todosList={todosList} setTodosList={setTodosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} />
    </TodosPageContainer>
  )
}

export default TodosPage
