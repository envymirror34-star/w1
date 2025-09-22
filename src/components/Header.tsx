"use client";

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent"> {/* Абсолютное позиционирование и прозрачный фон */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Логотип Surf Train Co"
              width={82}
              height={45}
            />
          </Link>

          {/* Контейнер с навигацией */}
          <div className="flex items-center ml-8">
            
            {/* Навигационное меню */}
            <nav className="flex items-center border border-[rgba(0,43,65,0.2)] rounded-full bg-white h-[60px] p-1">
              
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 h-full flex items-center
                         hover:text-[rgba(255,55,42,1)]
                         ${pathname === '/' ? 'bg-[rgba(0,43,65,1)] text-white' : 'text-gray-700'}`}
              >
                Главная
              </Link>
              
              <Link 
                href="/about" 
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 h-full flex items-center
                         hover:text-[rgba(255,55,42,1)]
                         ${pathname === '/about' ? 'bg-[rgba(0,43,65,1)] text-white' : 'text-gray-700'}`}
              >
                О нас
              </Link>
              
              <Link 
                href="/awards" 
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 h-full flex items-center
                         hover:text-[rgba(255,55,42,1)]
                         ${pathname === '/awards' ? 'bg-[rgba(0,43,65,1)] text-white' : 'text-gray-700'}`}
              >
                Награды
              </Link>
              
              <Link 
                href="/prices" 
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 h-full flex items-center
                         hover:text-[rgba(255,55,42,1)]
                         ${pathname === '/prices' ? 'bg-[rgba(0,43,65,1)] text-white' : 'text-gray-700'}`}
              >
                Тарифы
              </Link>
              
              <Link 
                href="/promo" 
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 h-full flex items-center
                         hover:text-[rgba(255,55,42,1)]
                         ${pathname === '/promo' ? 'bg-[rgba(0,43,65,1)] text-white' : 'text-gray-700'}`}
              >
                Акции
              </Link>
              
              <Link 
                href="/booking" 
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 h-full flex items-center
                         hover:text-[rgba(255,55,42,1)]
                         ${pathname === '/booking' ? 'bg-[rgba(0,43,65,1)] text-white' : 'text-gray-700'}`}
              >
                Запись
              </Link>
              
              <Link 
                href="/contacts" 
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 h-full flex items-center
                         hover:text-[rgba(255,55,42,1)]
                         ${pathname === '/contacts' ? 'bg-[rgba(0,43,65,1)] text-white' : 'text-gray-700'}`}
              >
                Контакты
              </Link>

            </nav>
          </div>

          {/* Отступ между контейнером с категориями и правой частью */}
          <div className="mx-4"></div> {/* Уменьшил с mx-8 на mx-4 */}

          {/* Правая часть с контактами */}
          <div className="flex items-center">
            {/* Контейнер с иконками мессенджеров */}
            <div className="flex items-center space-x-[5px] mr-[25px]"> {/* Уменьшил space и margin */}
              <Image 
                src="/images/tg.png" 
                alt="Telegram" 
                width={25} 
                height={25}
              />
              <Image 
                src="/images/wp.png" 
                alt="WhatsApp" 
                width={25} 
                height={25}
              />
              <Image 
                src="/images/vb.png" 
                alt="Viber" 
                width={25} 
                height={25}
              />
            </div>

            {/* Номер телефона */}
            <a 
              href="tel:+79106849053" 
              className="flex items-center mr-[10px]" /* Уменьшил margin */
            >
              <span className="text-[16px] font-bold whitespace-nowrap">+7 (910) 684-90-53</span>
            </a>

            {/* Кнопка Подробнее */}
            <button className="flex items-center px-4 py-2 h-14 rounded-full text-[14px] font-medium text-white bg-[rgba(0,43,65,1)] transition-all duration-200 hover:bg-[rgba(255,55,42,1)] ml-[25px]">
              <span>Подробнее</span>
              <Image 
                src="/images/strl.png" 
                alt="Стрелка" 
                width={16} 
                height={16}
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;