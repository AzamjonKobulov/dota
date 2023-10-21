import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-brand-dark">
      <Image
        src="/assets/images/bg/bg-footer-1.png"
        alt="Bg"
        width={589}
        height={288}
        className="hidden md:block md:w-1/3 h-full absolute bottom-0 left-0"
      />
      <div className="max-w-base mx-auto flex flex-col items-center justify-center relative z-20 gap-6 py-10 md:py-20 px-5">
        <div>
          <div className="flex items-center gap-10">
            <Image
              src="/assets/images/valve.svg"
              alt="velve"
              width={111}
              height={32}
              className="md:w-auto md:h-auto"
            />
            <Image
              src="/assets/images/logo-footer.svg"
              alt="Logo"
              width={157}
              height={32}
              className="md:w-auto md:h-auto"
            />
          </div>
        </div>
        <p className="max-w-2xl px-2 text-center font-archivo text-brand-black-300">
          Dota and the Dota logo are trademarks and/or registered trademarks of
          Valve Corporation. 2023 Valve Corporation, all rights reserved.
        </p>
      </div>
      <Image
        src="/assets/images/bg/bg-footer-2.png"
        alt="Bg"
        width={589}
        height={288}
        className="hidden md:block md:w-1/3 h-full  absolute right-0 bottom-0"
      />
    </footer>
  );
};

export default Footer;
