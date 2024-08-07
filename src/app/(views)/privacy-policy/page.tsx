'use client'
import PrivacyPolicyComponent from '@/app/components/other/PrivacyPolicyComponent'
import HeroBackground from '@/components/heroBanners/HeroBackGround'
import React from 'react'

export default function page() {
  return (
    <section>
      <HeroBackground title="Privacy Policy" />
      <div className="max-width-container">
        <div className='main-width-container'>
          <PrivacyPolicyComponent />
        </div>
      </div>
    </section>
  )
}
