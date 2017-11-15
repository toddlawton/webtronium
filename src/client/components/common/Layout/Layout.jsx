import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'ui-components'

import Header from '../Header'
import Footer from '../Footer'

const LayoutContent = styled.div`
  font-family: ${props => props.theme.fonts.stacks.primary};
  line-height: 1.5;
  color: rgba(12, 18, 28, 0.6);
`

export default function Layout (props) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContent>
        <Header
          alt={props.layout.alternate}
          loading={props.loading}
        />
        <main>
          {props.children && props.children}
        </main>
        <Footer alt={props.layout.alternate} />
      </LayoutContent>
    </ThemeProvider>
  )
}
