import Image from 'next/image';

const HeroesNavigation = () => {
  return (
    <div className="flex justify-between lg:justify-start items-center lg:items-start lg:grid grid-cols-10 gap-3 md:gap-[3.125rem] px-5 lg:px-0">
      <button className="tab-gradient sm:max-w-[29.375rem] w-full lg:col-span-4 relative rounded-xl p-px">
        <div className="box-gradient w-full h-full flex items-center justify-center sm:justify-start gap-8 rounded-xl bg-brand-dark py-4 px-3 md:p-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block"
          >
            <path
              d="M10.1 17.1C10.25 16.95 10.325 16.7707 10.325 16.562C10.325 16.354 10.25 16.175 10.1 16.025L6.8 12.75H18.575C18.7917 12.75 18.9707 12.679 19.112 12.537C19.254 12.3957 19.325 12.2167 19.325 12C19.325 11.7834 19.254 11.604 19.112 11.462C18.9707 11.3207 18.7917 11.25 18.575 11.25H6.8L10.125 7.95002C10.2583 7.80002 10.325 7.62502 10.325 7.42502C10.325 7.22502 10.25 7.05002 10.1 6.90002C9.95 6.73336 9.775 6.65002 9.575 6.65002C9.375 6.65002 9.19166 6.73336 9.025 6.90002L4.55 11.375C4.46666 11.4584 4.404 11.554 4.362 11.662C4.32066 11.7707 4.3 11.8834 4.3 12C4.3 12.1167 4.32066 12.229 4.362 12.337C4.404 12.4457 4.46666 12.5417 4.55 12.625L9.05 17.125C9.2 17.275 9.375 17.35 9.575 17.35C9.775 17.35 9.95 17.2667 10.1 17.1Z"
              fill="#EBEBEB"
            />
          </svg>
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div>
              <h5 className="font-archivo font-medium text-xs lg:text-base whitespace-nowrap">
                Previous Hero
              </h5>
              <h4 className="mt-1 lg:text-2xl text-start">ZEUS</h4>
              <div className="flex items-center gap-2 mt-3">
                <Image
                  src="/assets/images/icon-attributes-3.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <p className="font-medium font-archivo text-xs lg:text-base">
                  Ranged
                </p>
              </div>
            </div>
            <Image
              src="/assets/images/zeus.png"
              alt="Zeus"
              width={82}
              height={60}
              className="sm:absolute lg:w-40 lg:h-28 right-px bottom-px"
            />
          </div>
        </div>
      </button>
      <button className="h-24 sm:h-auto lg:col-span-2 relative rounded-xl p-px">
        <div className="w-full h-full flex flex-col items-center gap-[1.125rem] rounded-xl bg-brand-dark py-4 px-3 md:p-6">
          <Image
            src="/assets/images/icon-blocks.svg"
            alt="icon"
            width={32}
            height={32}
            className="md:w-12 md:h-12 shrink-0"
          />
          <p className="font-archivo text-lg whitespace-nowrap">All Heroes</p>
        </div>
      </button>
      <button className="sm:max-w-[29.375rem] w-full lg:col-span-4 relative rounded-xl p-px">
        <div className="w-full h-full flex flex-row-reverse justify-center sm:justify-start items-center gap-8 rounded-xl bg-brand-dark py-4 px-3 md:p-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block"
          >
            <path
              d="M13.525 17.1C13.375 16.95 13.3 16.7707 13.3 16.562C13.3 16.354 13.375 16.175 13.525 16.025L16.825 12.75H5.04999C4.83332 12.75 4.65432 12.679 4.51299 12.537C4.37099 12.3957 4.29999 12.2167 4.29999 12C4.29999 11.7834 4.37099 11.604 4.51299 11.462C4.65432 11.3207 4.83332 11.25 5.04999 11.25H16.825L13.5 7.95002C13.3667 7.80002 13.3 7.62502 13.3 7.42502C13.3 7.22502 13.375 7.05002 13.525 6.90002C13.675 6.73336 13.85 6.65002 14.05 6.65002C14.25 6.65002 14.4333 6.73336 14.6 6.90002L19.075 11.375C19.1583 11.4584 19.221 11.554 19.263 11.662C19.3043 11.7707 19.325 11.8834 19.325 12C19.325 12.1167 19.3043 12.229 19.263 12.337C19.221 12.4457 19.1583 12.5417 19.075 12.625L14.575 17.125C14.425 17.275 14.25 17.35 14.05 17.35C13.85 17.35 13.675 17.2667 13.525 17.1Z"
              fill="#D2D3D6"
            />
          </svg>

          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div>
              <h5 className="font-archivo font-medium text-start text-xs lg:text-base">
                Next Hero
              </h5>
              <h4 className="mt-1 lg:text-2xl text-start">Alchemist</h4>
              <div className="flex items-center gap-2 mt-3">
                <Image
                  src="/assets/images/icon-attributes-1.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <p className="font-medium font-archivo text-xs lg:text-base">
                  Melee
                </p>
              </div>
            </div>
            <Image
              src="/assets/images/alchemist.png"
              alt="Alchemist"
              width={82}
              height={60}
              className="sm:absolute lg:w-40 lg:h-28 left-px bottom-px"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default HeroesNavigation;
