import React, { useContext } from 'react'
import HeroSection from './Components/HeroSection'
import { useProductContext } from './Context/productcontext'

const About = () => {

  return (
    <>
    <HeroSection
      intro="Welcome to"
      heading="Subhan Ecommerce"
      para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      button="Show Now"
    />
    </>
  )
}

export default About