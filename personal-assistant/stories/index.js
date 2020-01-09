import React from 'react'
import { storiesOf } from '@storybook/react'
import TodayPage from '../src/TodayPage'
import App from '../src/App'

storiesOf('Today Page', module).add('Whole today page', () => (
  <TodayPage />
))

storiesOf('App', module).add('App', () => (
  <App />
))
