import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO
        title="About | Sofia Knits"
        desc="Hi. I'm Sofia. This is a portfolio of some of my favorite kntting projects."
      />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Hi. I'm Sofia.</h1>
        <p>This is a portfolio of some of my favorite kntting projects.</p>
        {/* <p>You can visit my website or my other Gatsby projects:</p>
        <p>
          <a href="https://www.lekoarts.de">Website</a> - <a href="https://themes.lekoarts.de">More projects</a>
        </p> */}
      </AnimatedBox>
    </Layout>
  )
}

export default About
