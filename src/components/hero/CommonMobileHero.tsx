interface MobileCommonHeroProps {
    MainTitle: string;
    SubTitle: string;
    Paragraph?: string;
    LocationName?: string;
    IconSrc?: string;
  }
  
  export default function CommonMobileHero({
    MainTitle,
    SubTitle,
    Paragraph,
    LocationName,
    IconSrc,
  }: MobileCommonHeroProps) {
    return (
      <section className="max-width-container">
        <div className="mobile-container py-[1.125rem] md:py-8">
          <div className="mobile-padding-container bg-mobile-hero-image bg-cover bg-blue-630 rounded-[20px] h-[220px] md:h-[280px] p-10 md:p-14">
            <h1 className="font-sans font-bold text-[20px] md:text-[30px] leading-[32px] md:leading-[44px] text-center text-white">
              {MainTitle}
            </h1>
            <h6 className="font-sans font-normal text-base leading-[76px] text-white text-center">
              {SubTitle}
            </h6>
            <div className="flex items-center justify-center">
              {IconSrc && (
                <img
                  src={IconSrc}
                  alt="Icon"
                  className="mr-2"
                  style={{ width: '27px', height: '27px' }}
                />
              )}
              <h6 className="font-sans font-normal text-[13px] leading-[55px] text-white">
                {LocationName}
              </h6>
            </div>
          </div>
          <p className="font-sans font-normal text-base leading-[22px] text-center text-blue-350 my-10 md:my-6">
            {Paragraph}
          </p>
        </div>
      </section>
    );
  }
  