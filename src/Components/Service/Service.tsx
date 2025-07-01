import React from 'react';
import Image from 'next/image';
import delivery from "../../../public/assets/dilivery image.svg";
import natural from "../../../public/assets/natural.svg";
import moneyback from "../../../public/assets/money back.svg";

const Data = [
  {
    id: 1,
    title: "Delivery",
    icon: delivery,
    description: "We deliver our products to your doorstep",
  },
  {
    id: 2,
    title: "Natural product",
    icon: natural,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Money Transfer",
    icon: moneyback,
    description: "Seamless money transfer options available.",
  }
];

const Service = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-[#f7f7f7] w-full max-w-[1200px] p-10 rounded-md hover:bg-[#f2f2f2] shadow-md hover:shadow-lg transition duration-300 mb-11 mt-5'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {Data.map((item) => (
            <div key={item.id} className='flex flex-col items-center'>
              <div className='mb-3'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className='hover:scale-105 transition-transform duration-300'
                />
              </div>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <p className='text-sm text-[#000] mt-2 text-center'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
