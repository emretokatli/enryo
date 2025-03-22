import React from 'react';
import { Link } from "react-router-dom";

const ServiceIcons: React.FC = () => {
  const services = [
    {
      name: 'Services',
      url: '/services',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.6667 15H8.33333C7.41286 15 6.66667 15.7462 6.66667 16.6667V18.3333C6.66667 19.2538 7.41286 20 8.33333 20H31.6667C32.5871 20 33.3333 19.2538 33.3333 18.3333V16.6667C33.3333 15.7462 32.5871 15 31.6667 15Z" stroke="#0033AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3333 20V26.6667" stroke="#0033AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.6667 20V26.6667" stroke="#0033AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.6667 15V13.3333C11.6667 11.4924 13.1591 10 15 10H25C26.8409 10 28.3333 11.4924 28.3333 13.3333V15" stroke="#0033AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 26.6667H30" stroke="#0033AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'Food & Drinks',
      url: '/food-drinks',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" stroke="#0033AA" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 2v20" stroke="#0033AA" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" stroke="#0033AA" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Spa',
      url: '/spa',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10C18.3333 14 14 17.5 10 18.5C10 24.5 14.4772 30 20 30C25.5228 30 30 24.5 30 18.5C26 17.5 21.6667 14 20 10Z" stroke="#0033AA" strokeWidth="2"/>
          <path d="M17 18C15.3333 20 13 21.5 11 22" stroke="#0033AA" strokeWidth="2" strokeLinecap="round"/>
          <path d="M23 18C24.6667 20 27 21.5 29 22" stroke="#0033AA" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z" stroke="#0033AA" strokeWidth="2"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full mt-[-70px] px-4">
      <div className="bg-white rounded-3xl mx-auto max-w-lg p-6 shadow-md">
        <div className="flex justify-around items-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link to={service.url}><div className="bg-blue-200 rounded-full p-4 flex items-center justify-center w-16 h-16 mb-2">
                {service.icon}
              </div>
              </Link>
              <Link to={service.url}><span className="text-blue-500 font-bold">{service.name}</span></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceIcons;