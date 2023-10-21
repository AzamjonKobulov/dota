import Image from 'next/image';

import AbilityDetails from '../AbilityDetails';
import AttributesAndStats from '../AttributesAndStats';
import HeroesNavigation from '../HeroesNavigation';

const Info = () => {
  return (
    <div className="relative py-60 md:pt-24 md:pb-120">
      <div className="max-w-base mx-auto space-y-60 md:space-y-120 lg:px-5">
        <AttributesAndStats />
        <Image
          src="/assets/images/bg/bg-main-1.png"
          alt="Bg"
          width={400}
          height={1100}
          className="hidden lg:block absolute left-0 bottom-40"
        />
        <Image
          src="/assets/images/bg/bg-main-2.png"
          alt="Bg"
          width={400}
          height={1100}
          className="hidden lg:block absolute right-0 bottom-40"
        />
        <AbilityDetails />
        <HeroesNavigation />
      </div>
    </div>
  );
};

export default Info;
