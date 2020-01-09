import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import TodosPage from './TodosPage'
import NavBar from './NavBar'

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      <TodosPage />
    </div>
  </ThemeProvider>
)

export default App
