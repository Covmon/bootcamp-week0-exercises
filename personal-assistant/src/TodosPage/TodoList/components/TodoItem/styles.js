import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
`
export const TodoItemLabel = styled.p`
  font-family: ${props => props.theme.fonts.paragraph.family};
`

export const TodoColorLabel = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.tags[props.color]};
  margin-left: 25px;
  margin-right: 7px;
`
export const ManageTodoButton = styled.button`
  background-color: ${props => props.color};
  border: none;
  padding: 10px;
  border-radius: 3px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  opacity: 0.5;
  font-size: 15px;
  width: 40px;
  margin: 6px;

  &:hover {
    color: white;
    opacity: 1;
  }

`
