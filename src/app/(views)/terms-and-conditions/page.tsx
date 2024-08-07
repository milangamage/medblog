'use client'
import TermsAndConditionComponents from '@/app/components/other/TermsAndConditionComponents'
import HeroBackground from '@/components/heroBanners/HeroBackGround'
import React from 'react'

export default function page() {
  return (
    <section>
      <HeroBackground title="Terms of use" />
      <div className="max-width-container">
        <div className='main-width-container'>
          <TermsAndConditionComponents />
        </div>
      </div>
    </section>
  )
}
