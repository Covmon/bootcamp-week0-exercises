import styled from 'styled-components'

export const NavBarContainer = styled.div`
  background-color: #ededed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavBarItem = styled.p`
  font-family: ${props => props.theme.fonts.paragraph.family};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};;
  color: ${props => (props.selected ? props.theme.colors.tags.red : 'gray')};
  margin: 30px;
  font-size: 22px;
`
