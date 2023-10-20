import Image from 'next/image';

const Abilities = ({ data, className }) => {
  return (
    <div
      className={`${className} flex items-center justify-center lg:mr-5 xxl:-mr-20`}
    >
      <div className="space-y-5">
        <h4 className="text-sm">ABILITIES</h4>
        <div className="flex lg:flex-col gap-4">
          {data.map((abl, idx) => (
            <div key={idx} className="w-14 h-14 md:w-16 md:h-16 rounded-xl">
              <Image
                src={abl.img}
                alt="Ability"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abilities;
