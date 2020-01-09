import styled from 'styled-components'

export const TodoListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight};
  margin-bottom: -20px;
`
export const DefaultLabel = styled.h3`
  font-family: ${props => props.theme.fonts.title.family};
  font-weight: normal;
  margin-top: 30px;
  color: gray;
`
