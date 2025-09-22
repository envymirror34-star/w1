"use client";

import React from 'react';

const Hero = () => {
  return (
    // Обертка для всех секций
    <div>
      {/* Первая секция с фоном */}
      <section className="relative min-h-screen flex justify-center pt-[100px]"> 
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg-image.png"
            alt="Фон серфинга"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Контент поверх фона */}
        <div className="relative z-10 text-start text-white container mx-auto px-4">
          <h4 className="text-[26px] font-['Panton_Rust_Script_SemiBold'] italic mb-3" 
              style={{
                background: 'linear-gradient(90deg, #FF372A 6.81%, #FF1514 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            ул. Черкизова 14, Москва
          </h4>

          <h1 className="text-[99px] font-bold uppercase leading-[110%] tracking-wide mb-3 w-[1100px]"
              style={{ color: '#002B41' }}>
            Покоряйте волны вместе с нами
          </h1>

          <p className="text-[20px] mb-8 max-w-[422px]"
             style={{ color: '#2b414dff' }}>
            SurfTrainCo предлагает д оступное обучение серфингу для всех уровней
          </p>
        </div>
      </section>
      

<section className="relative min-h-screen flex "> 
  {/* Фоновое изображение */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/bg-image2.png"
      alt="Фон серфинга"
      className="w-full h-full object-cover"
    />
  </div>         
  
  {/* Текст нормально расположен */}
  <div className="relative z-10 mt-8"> {/* обычное положение в потоке */}
    <h2 className="text-[45px] font-bold text-[#002B41] mb-1">СЕРФИНГ</h2>
    <p className="text-[35px] italic text-red-500">зато стиль жизни</p>
  </div>
</section>
    </div>
  );
};

export default Hero;