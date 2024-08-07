
import Button from '../buttons/Button';
import LocationImg from '/images/Rectangle 1529.png';

export default function DynamicMobileHero({
  title,
  description,
  miniTitle,
  image,
}) {
  const navigateToRegister = () => {
    const registerForm = document.getElementById('register');
    if (registerForm) {
      registerForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-5">
      <div className="">
        <div className="max-w-[376px] h-[220px] md:max-w-[668px] md:h-auto relative">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-[20px] object-contain object-bottom"
          />
          <h1 className="absolute top-[10px] p-[5px] md:p-4 z-[2] text-white font-bold text-[26px] md:text-[40px] text-center">
            {title}
          </h1>
          <div className="absolute inset-0 bg-dynamic-hero-gradient rounded-[20px]"></div>
        </div>
        <div className="py-8">
          <Button
            type={'button'}
            title={'Register Now'}
            variant="find-jobs-btn"
            handleClick={navigateToRegister}
          />
        </div>
        <p className="font-sans font-normal text-base leading-[22px] text-blue-350 text-center line-clamp-6 md:line-clamp-none">
          {description}
        </p>
      </div>
    </section>
  );
}
