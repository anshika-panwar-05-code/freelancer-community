import React, { useEffect, useRef, useState } from 'react';

const cardsData = [
  {
    id: 'c1',
    title: 'EAGLE',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
    image: 'https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/software-development-costs-1128x635.jpg',
  },
  {
    id: 'c2',
    title: 'OWL',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
    image: 'https://img.pikbest.com/wp/202405/freelancer-3d-illustration-of-a-laptop-wielding-freelance-developer_9844543.jpg!bw700',
  },
  {
    id: 'c3',
    title: 'CROW',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
    image: 'https://cdn.pixabay.com/photo/2021/01/11/06/01/freelance-5907232_960_720.png',
  },
  {
    id: 'c4',
    title: 'BUTTERFLY',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRJ7ZWZVU9VGV0MI9q2KRqYE6WdUVH7qqy-eBC92r6O6NjsanJH1OFAkSQsQEf8X7dFU&usqp=CAU',
  },
  {
    id: 'c5',
    title: 'OWL',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*MLnw1zny6I15TPcCdKYLdw.jpeg',
  },
  {
    id: 'c6',
    title: 'EAGLE',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
    image: 'https://venturebeat.com/wp-content/uploads/2020/09/GettyImages-1133423056.jpg?w=1024?w=1200&strip=all',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoNextRef = useRef();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  useEffect(() => {
    autoNextRef.current = setInterval(handleNext, 3000);
    return () => clearInterval(autoNextRef.current);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cardsData.map((card, index) => (
          <div key={card.id} className="relative w-full h-full flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }}>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-10 bg-black bg-opacity-50">
              <div className="text-5xl font-bold text-white">{card.title}</div>
              <div className="mt-4 text-xl text-white">{card.description}</div>
              <div className="mt-4">
                <button className="mr-4 px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition duration-300">See More</button>
                <button className="px-4 py-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300">Subscribe</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-10 flex justify-center space-x-4">
        <button onClick={handlePrev} className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
          &#10094; {/* Left Arrow */}
        </button>
        <button onClick={handleNext} className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
          &#10095; {/* Right Arrow */}
        </button>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-green-500 animate-runningTime" />
    </div>
  );
};

export default Carousel;
