/* eslint-disable max-len */
import React from 'react'
import { SearchInput } from './styles'

const SearchBar = ({ todosList, setFilteredTodosList }) => (
  <SearchInput
    placeholder="Filter todos by label or color"
    onChange={e => {
      const searchText = e.target.value.toLowerCase()
      const newFilteredTodoList = todosList.filter(todo => todo.label.toLowerCase().includes(searchText) || todo.color.toLowerCase().includes(searchText))
      setFilteredTodosList(newFilteredTodoList)
    }}
  />
)

export default SearchBar
