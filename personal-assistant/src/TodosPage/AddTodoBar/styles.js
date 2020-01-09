import styled from 'styled-components'

export const AddTaskBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const AddTaskInput = styled.input`
  width: 250px;
  background-color: ${props => props.theme.colors.tags.gray};
  border: none;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: lightgray;
  }

  &:focus {
    background-color: black;
    color: white;
  }
`
export const TaskColorSelector = styled.select`
  margin: 20px;
  outline: none;
`

export const AddTaskButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 3px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  background-color: #4aa84c;
  color: white;

  &:hover {
    background-color: ${props => props.theme.colors.tags.green};
    color: white;
    box-shadow: 0 3px 4px 0 gray;
  }

  &:active {
    background-color: green;
    box-shadow: none;
    color: ${props => props.theme.colors.tags.gray};
  }
`
