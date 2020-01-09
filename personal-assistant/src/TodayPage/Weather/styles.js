import styled from 'styled-components'

export const WeatherHeader = styled.h1`
  font-family: ${props => props.theme.fonts.title.family};
  font-size: 20px;
`

export const WeatherDetail = styled.p`
  width: 400px;
  font-family: ${props => props.theme.fonts.paragraph.family};
`
