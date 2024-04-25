import React from 'react'
import Hero from './hero/Hero'
import Card from './hero/Card'
import { Product } from './product/Product'
import Banner from './banner/Banner'


const Home = () => {
  return (
    <>
    <Hero/>
    <Card/>
     <Product />
     <Banner />


    </>
  )
}

export default Home