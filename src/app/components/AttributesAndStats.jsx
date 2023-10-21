import Image from 'next/image';

const AttributesAndStats = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-7 leading-5 px-5 lg:px-0">
      <div className="box-gradient md:w-1/2 lg:w-[29.375rem] space-y-6 py-6 px-4 md:py-6 md:px-8">
        <h4 className="text-lg">ATTRIBUTES</h4>
        <div className="space-y-4">
          <div className="h-28 grid grid-cols-2 rounded-xl overflow-hidden">
            <div>
              <Image
                src="/assets/images/img-attributes.png"
                alt="Hero"
                width={220}
                height={110}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm">
              <div className="green-gradient h-14 flex items-center justify-center gap-2">
                <span>604</span>
                <span className="font-archivo">+3.2</span>
              </div>
              <div className="blue-gradient h-14 flex items-center justify-center gap-2">
                <span>303</span>
                <span className="font-archivo">+1.2</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assets/images/icon-attributes-1.svg"
                alt="Icon"
                width={24}
                height={24}
              />
              <div className="flex items-center gap-1.5">
                <span className="text-">604</span>
                <span className="font-archivo text-sm">+3.2</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assets/images/icon-attributes-2.svg"
                alt="Icon"
                width={24}
                height={24}
              />
              <div className="flex items-center gap-1.5">
                <span className="text-">604</span>
                <span className="font-archivo text-sm">+3.2</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/assets/images/icon-attributes-3.svg"
                alt="Icon"
                width={24}
                height={24}
              />
              <div className="flex items-center gap-1.5">
                <span className="text-">604</span>
                <span className="font-archivo text-sm">+3.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-gradient flex-1 space-y-6 py-6 px-4 md:py-6 md:px-8">
        <h4 className="text-lg">STATS</h4>
        <div className="flex justify-between">
          <div className="space-y-4">
            <h5 className="text-brand-black-400">Attack</h5>
            <div className="space-y-5 font-archivo font-medium">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-attack-1.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>46-56</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-attack-2.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>1.5</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-attack-3.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>150</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-attack-4.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>900</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-brand-black-400">Defense</h5>
            <div className="space-y-5 font-archivo font-medium">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-defence-1.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>46-56</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-defence-2.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>1.5</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-brand-black-400">Mobility</h5>
            <div className="space-y-5 font-archivo font-medium">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-mobility-1.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>46-56</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-mobility-2.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>1.5</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icon-mobility-3.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <p>150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributesAndStats;
