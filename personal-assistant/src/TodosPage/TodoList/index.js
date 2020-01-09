/* eslint-disable max-len */
import React from 'react'
import TodoItem from './TodoItem'
import { TodoListContainer, Title, DefaultLabel } from './styles'

const TodoList = ({
  todosList, setTodosList, filteredTodosList, setFilteredTodosList,
}) => (
  <TodoListContainer>
    <Title>
      Your Todos
    </Title>
    {todosList.length === 0 ? <DefaultLabel>Nothing to do. Enjoy your day!</DefaultLabel> : null}
    {todosList.length !== 0 && filteredTodosList.length === 0 ? <DefaultLabel>No todos found matching your search.</DefaultLabel> : null}
    <ul>
      {filteredTodosList.map(item => <TodoItem key={item.id} setTodosList={setTodosList} todosList={todosList} filteredTodosList={filteredTodosList} setFilteredTodosList={setFilteredTodosList} {...item} />)}
    </ul>
  </TodoListContainer>
)

export default TodoList
