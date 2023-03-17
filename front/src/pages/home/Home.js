import React from 'react'
import Feature from '../../components/feature/Feature'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Feature />
      <Category />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home