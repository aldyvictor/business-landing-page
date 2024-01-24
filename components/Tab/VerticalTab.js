'use client';

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const VerticalTab = ({ data }) => {
  let [categories] = useState(data[0])
  return (
    <div className="w-full grid grid-flow-row md:grid-cols-[30%_70%] px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-hidden gap-4 space-x-1 rounded-xl pr-0 md:pr-6">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full min-w-[218px] rounded-[64px] gap-4 py-2 xl:py-3 pl-[10px] xl:pl-3 pr-[17px] xl:pr-8 flex items-center justify-start focus:outline-none',
                  selected
                    ? 'bg-secondary-linearBlue-100 transition-all duration-300 ease-in-out'
                    : ''
                )
              }
            >
              <Image 
                src={categories[category][0].imageUrl}
                width={64}
                height={64}
                alt={category}
                className='object-contain w-[46px] h-[46px] xl:w-[64px] xl:h-[64px]'
              />

              <div className='flex flex-col items-start'>
                <h4 className='regular-14 xl:medium-20 text-black'>
                  {category}
                </h4>
                <p className='regular-14 xl:regular-18 text-black/60'>
                  {categories[category][0].role}
                </p>
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-12 md:mt-0 pl-0 md:pl-11">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'w-full flexCenter'
              )}
            >
              {posts.map((post) => (
                <p key={post.id} className='bold-28 xl:bold-36 text-black line-clamp-[8] sm:line-clamp-5 text-gradient-black'>
                  {post.testimonial}
                </p>
              ))}

              <div className='absolute flex flex-col md:max-w-[65%] lg:max-w-[60%] 2xl:max-w-[70%] max-h-[350px] lg:max-h-[250px] xl:max-h-[330px] justify-between items-start gap-64 sm:gap-36 lg:gap-0 w-full lg:h-full px-4'>
                <div className='flexStart w-full'>
                  <Image 
                    src={'/assets/quote-1.svg'}
                    alt='quote top'
                    width={82}
                    height={65}
                    className='object-contain w-[59px] h-[47px] xl:w-[82px] xl:h-[65px]'
                  />
                </div>
                <div className='flexEnd w-full'>
                  <Image  
                    src={'/assets/quote-2.svg'}
                    alt='quote bottom'
                    width={82}
                    height={65}
                    className='object-contain w-[59px] h-[47px] xl:w-[82px] xl:h-[65px]'
                  />
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default VerticalTab;
