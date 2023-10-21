'use client';

import { useState } from 'react';
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
  const [activeAbl, setActiveAbl] = useState(0);
  const activeAbility = abilities[activeAbl];

  return (
    <div className="flex flex-col lg:flex-row gap-10 md:gap-[3.125rem]">
      <div className="lg:w-[21.875rem] space-y-6 md:space-y-60">
        <h2 className="text-center md:text-start px-5 lg:px-0">
          Ability Details
        </h2>
        <div className="no-scroll flex lg:flex-col justify-center md:justify-start gap-2 md:gap-4  overflow-auto">
          {abilities.map((abl, idx) => (
            <button
              key={idx}
              className={`${
                idx === 0
                  ? 'ml-[5rem] md:ml-5 lg:ml-0'
                  : idx === 4
                  ? 'mr-5 lg:mr-0'
                  : ''
              } ${
                activeAbl === idx ? 'btn-tab-gradient' : ''
              } w-20 md:w-[15.25rem] lg:w-full shrink-0 p-px rounded-xl`}
              onClick={() => setActiveAbl(idx)}
            >
              <div className="bg-brand-dark w-full h-full rounded-xl">
                <div className="box-gradient w-full h-full inline-flex md:flex flex-col md:flex-row items-center gap-3 md:gap-4 text-xs md:text-lg font-medium font-archivo p-3 md:p-4">
                  <div className="w-9 h-9 md:w-12 md:h-12 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={abl.ablImage}
                      alt="Ability"
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="md:">{abl.ablName}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 px-5 lg:px-0">
        <div className=" bg-brand-dark rounded-xl space-y-8 px-4 py-8 md:px-8">
          <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-white/10">
            <div className="w-[7.5rem] h-[7.5rem] shrink-0 overflow-hidden rounded-lg">
              <Image
                src={activeAbility.ablImage}
                alt="Ability"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3>{activeAbility.ablName}</h3>
              <p className="font-archivo text-brand-black-200">
                {activeAbility.ablInfo.text}
              </p>
            </div>
          </div>
          <div className="space-y-8 font-archivo">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex items-center gap-2">
                <div className="space-y-[0.8125rem] text-brand-black-400">
                  <p>ABILITY:</p>
                  <p>AFFECTS:</p>
                  <p>DAMAGE TYPE:</p>
                </div>
                <div className="space-y-[0.8125rem] font-medium">
                  <p>{activeAbility.ablInfo.ability}</p>
                  <p>{activeAbility.ablInfo.affects}</p>
                  <p className="text-[#4FAEC0]">
                    {activeAbility.ablInfo.demage}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="space-y-[0.8125rem] text-brand-black-400">
                  <p>
                    Pierces Spell <br /> Immunity:
                  </p>
                </div>
                <div className="space-y-[0.8125rem] font-medium">
                  <p>{activeAbility.ablInfo.pierces}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex items-center gap-2">
                <div className="space-y-[0.8125rem] text-brand-black-400">
                  <p>SELF DAMAGE:</p>
                  <p>DAMAGE/HEAL:</p>
                  <p>CAST RANGE:</p>
                </div>
                <div className="space-y-[0.8125rem] font-medium">
                  <p>{activeAbility.ablInfo.self}</p>
                  <p>{activeAbility.ablInfo.heal}</p>
                  <p>{activeAbility.ablInfo.cast}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between font-medium font-archivo">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/icon-ability-info-left.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p>{activeAbility.ablInfo.leftNumber}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="blue-gradient w-6 h-6 rounded"></div>
              <p>{activeAbility.ablInfo.rightNumber}</p>
            </div>
          </div>
          <div className="box-gradient font-archivo py-4 px-6">
            {activeAbility.ablInfo.additional}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbilityDetails;
