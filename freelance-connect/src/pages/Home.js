
// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import ParticlesAnimation from './ParticlesAnimation';

// {}
// <ParticlesAnimation />
// 'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee] px-6 pt-14 lg:px-8 h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1350&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Top Gradient Decoration */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Elevate Your Online Presence
          </h1>
          <p className="mt-8 text-lg font-medium text-white sm:text-xl max-w-lg mx-auto">
            Unlock new opportunities and grow your business with data-driven solutions.
            We provide the insights to power your success in the digital world.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-5 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="text-lg font-semibold leading-6 text-white hover:text-indigo-300 transition ease-in-out duration-300"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

