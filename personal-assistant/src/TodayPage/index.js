import React from 'react'
import Weather from './Weather'
import { Title, TodayPageContainer } from './styles'

const TodayPage = () => (
  <TodayPageContainer>
    <Title>Good morning!</Title>
    <Weather />
  </TodayPageContainer>
)

export default TodayPage
