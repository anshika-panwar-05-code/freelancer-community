import React, { useEffect, useRef, useState } from 'react';

const Content = () => {
  const [inView, setInView] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the element is visible
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div
        ref={contentRef}
        className="max-w-3xl w-full text-white p-8"
      >
        {/* First line and text */}
        <div className={`overflow-hidden mb-8`}>
          <div
            className={`${
              inView ? 'animate-slideLineFromCorner' : 'translate-x-full'
            } h-1 bg-green-400 w-full mb-4`}
          ></div>
          <p
            className={`${
              inView ? 'animate-slideText delay-300' : 'translate-x-full'
            } text-lg transition-transform duration-500`}
          >
            This is the first piece of content that slides in after the first line.
          </p>
        </div>

        {/* Second line and text */}
        <div className={`overflow-hidden mb-8`}>
          <div
            className={`${
              inView ? 'animate-slideLineFromCorner delay-500' : 'translate-x-full'
            } h-1 bg-blue-400 w-100 mb-4`}
          ></div>
          <p
            className={`${
              inView ? 'animate-slideText delay-700' : 'translate-x-full'
            } text-lg transition-transform duration-500`}
          >
            This is the second piece of content that slides in after the second line.
          </p>
        </div>
         {/* Second line and text */}
         <div className={`overflow-hidden mb-8`}>
          <div
            className={`${
              inView ? 'animate-slideLineFromCorner delay-500' : 'translate-x-full'
            } h-1 bg-blue-400 w-100 mb-4`}
          ></div>
          <p
            className={`${
              inView ? 'animate-slideText delay-700' : 'translate-x-full'
            } text-lg transition-transform duration-500`}
          >
            This is the second piece of content that slides in after the second line.
          </p>
        </div>
         {/* Second line and text */}
         <div className={`overflow-hidden mb-8`}>
          <div
            className={`${
              inView ? 'animate-slideLineFromCorner delay-500' : 'translate-x-full'
            } h-1 bg-blue-400 w-100 mb-4`}
          ></div>
          <p
            className={`${
              inView ? 'animate-slideText delay-700' : 'translate-x-full'
            } text-lg transition-transform duration-500`}
          >
              This is the second piece of content that slides in after the second 
          </p>
        </div>
         {/* Second line and text */}
         <div className={`overflow-hidden mb-8`}>
          <div
            className={`${
              inView ? 'animate-slideLineFromCorner delay-500' : 'translate-x-full'
            } h-1 bg-blue-400 w-100 mb-4`}
          ></div>
          <p
            className={`${
              inView ? 'animate-slideText delay-700' : 'translate-x-full'
            } text-lg transition-transform duration-500`}
          >
            This is the second piece of content that slides in after the second line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
