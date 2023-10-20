'use client';

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const langs = [{ name: 'EN' }, { name: 'RU' }, { name: 'UZ' }];

export default function Example() {
  const [selected, setSelected] = useState(langs[0]);

  return (
    <div className="w-[3.25rem]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative flex items-center gap-1.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_2_42"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_2_42)">
                <path
                  d="M12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5766 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45271 3.248 8.29658C3.74667 7.14043 4.42342 6.13475 5.27825 5.27953C6.1331 4.4243 7.13834 3.74724 8.29398 3.24836C9.44959 2.74947 10.6844 2.50003 11.9983 2.50003C13.3122 2.50003 14.5473 2.74936 15.7034 3.24803C16.8596 3.7467 17.8652 4.42345 18.7205 5.27828C19.5757 6.13313 20.2527 7.13837 20.7516 8.29401C21.2505 9.44962 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8653 18.7217 18.7205C17.8669 19.5757 16.8616 20.2528 15.706 20.7517C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM11 19.95V18C10.45 18 9.97914 17.8042 9.58748 17.4125C9.19581 17.0208 8.99998 16.55 8.99998 16V15L4.19998 10.2C4.14998 10.5 4.10414 10.8 4.06248 11.1C4.02081 11.4 3.99998 11.7 3.99998 12C3.99998 14.0167 4.66248 15.7833 5.98748 17.3C7.31248 18.8167 8.98331 19.7 11 19.95ZM17.9 17.4C18.2333 17.0333 18.5333 16.6375 18.8 16.2125C19.0666 15.7875 19.2875 15.3458 19.4625 14.8875C19.6375 14.4292 19.7708 13.9583 19.8625 13.475C19.9541 12.9917 20 12.5 20 12C20 10.3618 19.5474 8.86576 18.6423 7.51176C17.7372 6.15777 16.5231 5.18078 15 4.58078V5.00001C15 5.55001 14.8041 6.02084 14.4125 6.41251C14.0208 6.80417 13.55 7.00001 13 7.00001H11V9.00001C11 9.28334 10.9041 9.52084 10.7125 9.71251C10.5208 9.90417 10.2833 10 9.99998 10H7.99998V12H14C14.2833 12 14.5208 12.0958 14.7125 12.2875C14.9041 12.4792 15 12.7167 15 13V16H16C16.4333 16 16.825 16.1292 17.175 16.3875C17.525 16.6458 17.7666 16.9833 17.9 17.4Z"
                  fill="white"
                />
              </g>
            </svg>
            <span>{selected.name}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute text-sm bg-white overflow-auto rounded-md shadow-lg mt-1 py-1">
              {langs.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-8 pr-7 ${
                      active ? 'bg-purple-400 text-white' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 pl-1 flex items-center text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
