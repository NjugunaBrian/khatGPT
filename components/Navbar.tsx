import React, { Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { BoltIcon, ArrowUpTrayIcon, SparklesIcon, ChatBubbleOvalLeftEllipsisIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const actions = [
    {
      name: "GPT-3.5",
      description: "Great for everyday tasks",
      icon: BoltIcon,
    },
    {
      name: "GPT-4",
      description: "Our smartest and most-capable detail. Includes DALL.E, browsing and more.",
      icon: SparklesIcon,
    },
  
  ]


function Navbar() {
  return (
    <Popover className='py-2 flex justify-center md:justify-start px-3'>
        <Popover.Button className='flex items-center gap-x-1 text-2xl font-bold leading-6 text-white outline-none hover:bg-[#212121] px-2 py-3 rounded-xl'>
          KhatGPT <span className='text-gray-400'>3.5</span>
          <ChevronDownIcon className='h-5 w-5 flex-none text-white' aria-hidden='true' />

        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <Popover.Panel className='bg-[#161616] absolute left-3 top-14 z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5'>
            <div className='flex items-center justify-between pt-2 pb-1 px-7 text-gray-400'>
              <p>
                Model
              </p>
              <InformationCircleIcon className='h-5 w-5' />
            </div>
            <div className='px-3 py-1'>
              {actions.map((item) => (
                <div key={item.name} className='group relative flex items-center gap-x-6 rounded-lg py-2 px-1 text-sm leading-6 hover:bg-[#212121]'>
                  <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-[#212121]'>
                    <item.icon className='w-6 h-6' aria-hidden='true' />
                  </div>
                  <div className='flex-auto'>
                    <p className='block font-semibold text-white'>
                      {item.name}
                      <span className='absolute inset-0'></span>
                    </p>
                    <p className='mt-1 text-gray-400'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <div className='px-3 py-1 '>
              <div className='group relative flex items-center gap-x-6 rounded-lg py-2 px-1 text-sm leading-6 hover:bg-[#212121]'>
                <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-[#212121]'>
                  <ArrowUpTrayIcon className='w-6 h-6' aria-hidden='true' />
                </div>
                <div className='flex-auto'>
                  <p className='block font-semibold text-white'>
                    Temporary Chat
                    <span className='absolute inset-0'></span>
                  </p>

                </div>
              </div>

            </div>
            <div className='px-3 py-1.5'>
              <div className='group relative flex items-center gap-x-6 rounded-lg py-2 px-1 text-sm leading-6 hover:bg-[#212121]'>
                <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-[#212121]'>
                  <ChatBubbleOvalLeftEllipsisIcon className='w-6 h-6' aria-hidden='true' />
                </div>
                <div className='flex-auto'>
                  <p className='block font-semibold text-white'>
                    Share Chat
                    <span className='absolute inset-0'></span>
                  </p>

                </div>
              </div>

            </div>


          </Popover.Panel>
        </Transition>

      </Popover>
    
  )
}

export default Navbar