import AbilityDetails from '../AbilityDetails';
import AttributesAndStats from '../AttributesAndStats';
import HeroesNavigation from '../HeroesNavigation';

const Info = () => {
  return (
    <div className="py-60 md:pt-24 md:pb-120">
      <div className="max-w-base mx-auto space-y-60 md:space-y-120 lg:px-5">
        <AttributesAndStats />
        <AbilityDetails />
        <HeroesNavigation />
      </div>
    </div>
  );
};

export default Info;
