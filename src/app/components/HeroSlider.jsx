'use client';

import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Navigation, Keyboard } from 'swiper/modules';

import Abilities from './Abilities';
import Ability1 from '/public/assets/images/img-hero-ability-1.png';
import Ability2 from '/public/assets/images/img-hero-ability-2.png';
import Ability3 from '/public/assets/images/img-hero-ability-3.png';
import Ability4 from '/public/assets/images/img-hero-ability-4.png';
import Ability5 from '/public/assets/images/img-hero-ability-5.png';
import HeroSliderButtons from './HeroSliderButtons';

const heroesData = [
  {
    name: 'Abaddon',
    infoSubtitle: 'Shields his allis or himself from Attacks',
    infoText:
      'Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.',
    attackType: 'Melee',
    abilities: [
      { img: Ability1 },
      { img: Ability2 },
      { img: Ability3 },
      { img: Ability4 },
      { img: Ability5 },
    ],
  },
  {
    name: 'Abaddon',
    infoSubtitle: 'Shields his allis or himself from Attacks',
    infoText:
      'Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.',
    attackType: 'Melee',
    abilities: [
      { img: Ability1 },
      { img: Ability2 },
      { img: Ability3 },
      { img: Ability4 },
      { img: Ability5 },
    ],
  },
  {
    name: 'Abaddon',
    infoSubtitle: 'Shields his allis or himself from Attacks',
    infoText:
      'Able to transform enemy attacks into self-healing, Abaddon can survive almost any assault. Shielding allies and launching his double-edged coil at a friend or foe, he is always ready to ride into the thick of battle.',
    attackType: 'Melee',
    abilities: [
      { img: Ability1 },
      { img: Ability2 },
      { img: Ability3 },
      { img: Ability4 },
      { img: Ability5 },
    ],
  },
];

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: '.btn-prev',
          nextEl: '.btn-next',
        }}
        loop={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        className="mySwipers "
      >
        {heroesData.map((hero, idx) => (
          <SwiperSlide key={idx}>
            <div className="max-w-base mx-auto flex items-center xxl:gap-16 relative z-10 overflow-hidden md:overflow-visible pt-32 md:pt-36 px-5 md:pr-0">
              <div className="min-w-[350px] max-w-lg sm:pr-10 relative z-10">
                <h1 className="uppercase">{hero.name}</h1>
                <p className="text-lg md:text-2xl mt-3.5 md:mt-5">
                  {hero.infoSubtitle}
                </p>
                <p className="font-archivo font-light text-sm md:text-base mt-5 md:mt-8">
                  {hero.infoText}
                </p>
                <button className="btn-gradient py-3 px-7 md:py-4 md:px-8 mt-8 md:mt-12">
                  LEARN MORE
                </button>
                <div className="box-gradient w-[10.8125rem] space-y-2 p-4 mt-6 md:mt-12">
                  <p className="leading-5">ATTACK TYPE</p>
                  <div className="flex items-end gap-2">
                    <Image
                      src="/assets/images/sword.png"
                      alt="sword icon"
                      width={20}
                      height={20}
                    />
                    <p className="leading-5">{hero.attackType}</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="max-w-2xl w-full">
                  <Image
                    src="/assets/images/img-hero-1.png"
                    alt="Hero"
                    width={315}
                    height={315}
                    className="min-w-[315px] absolute md:static -right-28 sm:-right-5 top-1/3 md:top-20 md:w-[40rem] md:h-[40rem] object-cover object-center"
                  />
                </div>
              </div>
              <Abilities data={hero.abilities} className="hidden lg:block" />
            </div>
            <div className="relative z-10">
              <Abilities data={hero.abilities} className="lg:hidden mt-8" />
            </div>
          </SwiperSlide>
        ))}
        <HeroSliderButtons />
      </Swiper>
    </div>
  );
};

export default HeroSlider;
