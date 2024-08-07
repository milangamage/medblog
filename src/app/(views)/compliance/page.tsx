'use client'
import HeroBackground from '@/components/heroBanners/HeroBackGround'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section>
      <HeroBackground title="Compliance" />
      <div className="max-width-container">
        <div className='main-width-container'>
        <div className="px-28 py-32 my-32">
              <h1 className="font-sans font-bold text-[60px] leading-[85px] text-center text-blue-550">
                Medfuture Pty Ltd
              </h1>
              <div className="font-sans font-normal text-[24px] leading-[24px] text-center text-black">
                <p className="my-4">ABN – 48 600 484 571</p>
                <p className="my-4">ACN – 600 484 571</p>
              </div>
              <div>
                <p className="terms-paragraph">
                  Medfuture Medical & Healthcare Recruitment (Medfuture Pty Ltd)
                  is a Corporate Member with RCSA as well as a Full member with
                  APSCO Australia. The RCSA is one of the Representative
                  entities for the Recruitment Industry in Australia and New
                  Zealand. The RCSA as a body, Their Primary Objective is to set
                  a Quality of Service & Best practices in the Recruitment
                  industry. Similarly, APSCo Australia also one of the Entities
                  which pledge and commit to the Best practices of the
                  Recruitment industry by introduce their services in Training,
                  Coaching & Sharing Best practice Service knowledge with their
                  Registered members.
                </p>
                <p className="terms-paragraph">
                  Medfuture is an Organization committed to providing its
                  services with quality by ensuring best practices and
                  appropriate conduct. Medfuture is a Corporate member with
                  AMRANZ & ANRA Which are subgroup body of RCSA.
                </p>
                <h1 className="terms-title">
                  Copyright & Intellectual Property
                </h1>
                <p className="terms-paragraph">
                  Every contents and design (Other than Third-party trademarks
                  and contents) of this Websites are the property of Medfuture
                  Pty Ltd. You can access and view the contents but not
                  permitted to reproduce or use them without written permission
                  from Medfuture.
                </p>
                <p className="terms-paragraph">
                  Any Third Party Would like to use the contents or Job Board
                  must hold Written permission by the Medfuture pty Ltd.
                </p>
                <p className="terms-paragraph">
                  Any queries email to -{' '}
                  <Link
                    className="font-bold"
                    href={`mailto:hrdirector@medfuture.com.au`}
                  >
                    hrdirector@medfuture.com.au
                  </Link>
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
