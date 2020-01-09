/* eslint-disable max-len */
import React, { useState } from 'react'
import AddTaskBar from './AddTodoBar'
import TodoList from './TodoList'
import SearchBar from './SearchBar'
import { TodosPageContainer } from './styles'

const TodosPage = () => {
  // const todoReducer = (prevTodos, payload) => ([...prevTodos, ...payload])
  const [todosList, setTodosList] = useState([])
  const [filteredTodosList, setFilteredTodosList] = useState([])
  // const [todos, setTodos] = useReducer(todoReducer, { todosList: [], filteredTodosList: [] })

  return (
    <TodosPageContainer>
      <AddTaskBar todosList={todosList} setTodosList={setTodosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} />
      <SearchBar todosList={todosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} />
      <TodoList todosList={todosList} setTodosList={setTodosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} />
    </TodosPageContainer>
  )
}

export default TodosPage
