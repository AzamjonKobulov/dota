import Image from 'next/image';

const HeroBgImages = () => {
  return (
    <div>
      <Image
        src="/assets/images/bg/bg-hero-1.png"
        alt="Bg Image"
        width={400}
        height={400}
        className="absolute -top-40 -left-10 md:top-0 md:left-0"
      />
      <Image
        src="/assets/images/bg/bg-hero-2.png"
        alt="Bg Image"
        width={734}
        height={560}
        className="absolute hidden md:block top-0 right-0"
      />
      <Image
        src="/assets/images/bg/bg-hero-3.png"
        alt="Bg Image"
        width={1440}
        height={814}
        className="absolute hidden md:block w-full h-full"
      />
      <Image
        src="/assets/images/bg/bg-hero-3-mobile.png"
        alt="Bg Image"
        width={390}
        height={752}
        className="absolute md:hidden w-full h-full"
      />
    </div>
  );
};

export default HeroBgImages;
