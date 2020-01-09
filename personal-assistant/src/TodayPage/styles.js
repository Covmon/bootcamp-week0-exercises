import styled from 'styled-components'

export const TodayPageContainer = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`

  font-family: ${props => props.theme.fonts.title.family};
  font-weight: ${props => props.theme.fonts.title.weight};
  
`
