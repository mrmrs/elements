import React from 'react'

import Div from '../elements/Div'
import Header from '../elements/Header'
import H1 from '../elements/H1'
import P from '../elements/P'
import Footer from '../elements/Footer'
import NavLink from '../components/NavLink'

export default class Home extends React.Component {
  componentDidMount() {
    this.jumpToHash(this.props.location.hash)
  }

  componentDidUpdate() {
    this.jumpToHash(this.props.location.hash)
  }

  // Needed as react-router can't handle fragment links ;—;
  jumpToHash(hash) {
    if (!hash) return
    const element = document.getElementById(hash.slice(1))
    if (element) {
      element.scrollIntoView()
    }
  }

  render() {
    return (
      <Div>
        <Header p={[5, 6, 7]} color="#222" borderBottom="1px solid">
          <H1 fontSize={[5, 6, 7]} mb={2}>Elements</H1>
          <P lineHeight={1.5} fontSize={[2, 3]}>
            A prototyping environment for people who know html and css and want to
            play with react, styled-system, and css-in-js
          </P>
          <Footer py={5}>
            <NavLink href="https://github.com/mrmrs/elements">GitHub</NavLink>
          </Footer>
        </Header>
      </Div>
    )
  }
}
