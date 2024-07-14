import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import Hero from './Hero'
import Steps from './Steps'
import WhyChooseUs from './WhyChooseUs'
import Investore from './Investore'
import InvestmentPlans from './InvestmentPlans'
import Review from './Review'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Steps />
      <WhyChooseUs />
      <Investore />
      <InvestmentPlans />
      <Review/>
    </MainLayout>
  )
}

export default HomePage