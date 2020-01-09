import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 505px;
  background-color: ${props => props.theme.colors.tags.gray};
  border: none;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease-out;
  margin: 10px;

  &:hover {
    background-color: lightgray;
  }

  &:focus {
    background-color: black;
    color: white;
  }
`
