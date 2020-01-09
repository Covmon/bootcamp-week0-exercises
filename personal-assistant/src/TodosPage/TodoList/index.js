/* eslint-disable max-len */
import React from 'react'
import TodoItem from './components/TodoItem'
import { TodoListContainer, Title } from './styles'

const TodoList = ({
  todosList, setTodosList, filteredTodosList, setFilteredTodosList,
}) => (
  <TodoListContainer>
    <Title>
      Your Todos
    </Title>
    <ul>
      {filteredTodosList.map(item => <TodoItem key={item.id} setTodosList={setTodosList} todosList={todosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} {...item} />)}
    </ul>
  </TodoListContainer>
)

export default TodoList
