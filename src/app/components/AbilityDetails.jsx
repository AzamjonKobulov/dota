import Image from 'next/image';

import Image1 from '/public/assets/images/img-ability-1.png';
import Image2 from '/public/assets/images/img-ability-2.png';
import Image3 from '/public/assets/images/img-ability-3.png';
import Image4 from '/public/assets/images/img-ability-4.png';
import Image5 from '/public/assets/images/img-ability-5.png';

const abilities = [
  {
    ablName: 'Mist Coil',
    ablImage: Image1,
    ablInfo: {
      text: "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
      ability: 'Unit Target',
      affects: 'Heroes',
      demage: 'Magical',
      pierces: 'Allies Yes',
      immunity: 'Immunity',
      self: '40.0%',
      heal: '100.0 / 175.0 / 250.0 / 325.00%',
      cast: '600.0 / 625.0 / 650.0 / 675.0',
      leftNumber: '6.5 / 6.0 / 5.5 / 5.0',
      rightNumber: '50',
      additional:
        'A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.',
    },
  },
  {
    ablName: 'Aphotic Shield',
    ablImage: Image2,
    ablInfo: {
      text: "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
      ability: 'Unit Target',
      affects: 'Heroes',
      demage: 'Magical',
      pierces: 'Allies Yes',
      immunity: 'Immunity',
      self: '40.0%',
      heal: '100.0 / 175.0 / 250.0 / 325.00%',
      cast: '600.0 / 625.0 / 650.0 / 675.0',
      leftNumber: '6.5 / 6.0 / 5.5 / 5.0',
      rightNumber: '50',
      additional:
        'A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.',
    },
  },
  {
    ablName: 'Curse Of Avernus',
    ablImage: Image3,
    ablInfo: {
      text: "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
      ability: 'Unit Target',
      affects: 'Heroes',
      demage: 'Magical',
      pierces: 'Allies Yes',
      immunity: 'Immunity',
      self: '40.0%',
      heal: '100.0 / 175.0 / 250.0 / 325.00%',
      cast: '600.0 / 625.0 / 650.0 / 675.0',
      leftNumber: '6.5 / 6.0 / 5.5 / 5.0',
      rightNumber: '50',
      additional:
        'A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.',
    },
  },
  {
    ablName: 'Borrowed Time',
    ablImage: Image4,
    ablInfo: {
      text: "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
      ability: 'Unit Target',
      affects: 'Heroes',
      demage: 'Magical',
      pierces: 'Allies Yes',
      immunity: 'Immunity',
      self: '40.0%',
      heal: '100.0 / 175.0 / 250.0 / 325.00%',
      cast: '600.0 / 625.0 / 650.0 / 675.0',
      leftNumber: '6.5 / 6.0 / 5.5 / 5.0',
      rightNumber: '50',
      additional:
        'A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.',
    },
  },
  {
    ablName: 'Curse Of Avernus',
    ablImage: Image5,
    ablInfo: {
      text: "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
      ability: 'Unit Target',
      affects: 'Heroes',
      demage: 'Magical',
      pierces: 'Allies Yes',
      immunity: 'Immunity',
      self: '40.0%',
      heal: '100.0 / 175.0 / 250.0 / 325.00%',
      cast: '600.0 / 625.0 / 650.0 / 675.0',
      leftNumber: '6.5 / 6.0 / 5.5 / 5.0',
      rightNumber: '50',
      additional:
        'A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.',
    },
  },
];

const AbilityDetails = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-[3.125rem]">
      <div className="md:w-80 lg:w-[21.875rem] space-y-6 md:space-y-60">
        <h2 className="text-center md:text-start">Ability Details</h2>
        <div className="flex md:flex-col gap-2 md:gap-4">
          {abilities.map((abl, idx) => (
            <button key={idx} className="md:w-full p-px rounded-xl">
              <div className="bg-brand-dark rounded-xl">
                <div className="box-gradient inline-flex md:flex flex-col md:flex-row items-center gap-3 md:gap-4 text-xs md:text-lg font-medium font-archivo p-3 md:p-4">
                  <div className="w-9 h-9 md:w-12 md:h-12 overflow-hidden rounded-lg">
                    <Image
                      src={abl.ablImage}
                      alt="Ability"
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>{abl.ablName}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className=" flex-1"></div>
    </div>
  );
};

export default AbilityDetails;
