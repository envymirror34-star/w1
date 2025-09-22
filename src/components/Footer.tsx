import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Фоновая картинка */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cont.png"
          alt="Фон футера"
          fill
          className="object-cover"
        />
      </div>
      {/* Контент поверх фона */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-[95px]">
            
            {/* Первая колонка: Логотип, свяжитесь с нами и соцсети */}
            <div>
              {/* Логотип */}
              <div className="mb-6">
                <Image 
                  src="/images/logo.png" 
                  alt="SURF TRAIN" 
                  width={82} 
                  height={50}
                />
              </div>
              
              <h3 className="text-[16px] font-normal w-[198px] mb-6" style={{color: 'rgba(0, 43, 65, 1)'}}>
                Свяжитесь с нами любым удобным способом
              </h3>
              
              {/* Соцсети */}
              <div>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 rounded-full transition-colors">
                    <Image src="/images/tg.png" alt="Telegram" width={29} height={29} />
                  </a>
                  <a href="#" className="p-2 rounded-full transition-colors">
                    <Image src="/images/wp.png" alt="WhatsApp" width={29} height={29} />
                  </a>
                  <a href="#" className="p-2 rounded-full transition-colors">
                    <Image src="/images/vb.png" alt="Viber" width={29} height={29} />
                  </a>
                </div>
              </div>
            </div>

            {/* Вторая колонка: Контакты */}
            <div>
              <h3 className="text-[23px] font-bold mb-6" style={{color: 'rgba(0, 43, 65, 1)'}}>
                Контакты
              </h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="text-[20px]" style={{color: 'rgba(0, 43, 65, 1)'}}>
                    +7 (910) 684-90-53
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="text-[20px]" style={{color: 'rgba(0, 43, 65, 1)'}}>
                    SurfCoCommerce@yandex.ru
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="text-[16px]" style={{color: 'rgba(0, 43, 65, 1)'}}>
                    г. Москва, ул. Черкизова 14
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="text-[16px]" style={{color: 'rgba(0, 43, 65, 1)'}}>
                    Работаем с 8:00-22:00
                  </span>
                </p>
              </div>
            </div>

            {/* Третья колонка: Для клиентов */}
            <div>
              <h3 className="text-[23px] font-bold mb-6" style={{color: 'rgba(0, 43, 65, 1)'}}>
                Для клиентов
              </h3>
              <nav className="space-y-3">
                <Link 
                  href="/about" 
                  className="block text-[20px] hover:text-blue-300 transition-colors"
                  style={{color: 'rgba(0, 43, 65, 1)'}}
                >
                  О нас
                </Link>
                <Link 
                  href="/awards" 
                  className="block text-[20px] hover:text-blue-300 transition-colors"
                  style={{color: 'rgba(0, 43, 65, 1)'}}
                >
                  Награды
                </Link>
                <Link 
                  href="/prices" 
                  className="block text-[20px] hover:text-blue-300 transition-colors"
                  style={{color: 'rgba(0, 43, 65, 1)'}}
                >
                  Тарифы
                </Link>
                <Link 
                  href="/promo" 
                  className="block text-[20px] hover:text-blue-300 transition-colors"
                  style={{color: 'rgba(0, 43, 65, 1)'}}
                >
                  Акции
                </Link>
                <Link 
                  href="/contacts" 
                  className="block text-[20px] hover:text-blue-300 transition-colors"
                  style={{color: 'rgba(0, 43, 65, 1)'}}
                >
                  Контакты
                </Link>
              </nav>
            </div>

          </div>

          {/* Нижняя часть с копирайтом */}
<div className="pt-6">
  <div className="flex flex-col">
    {/* Верхняя строка - копирайт и оферта по краям */}
    <div className="flex justify-between items-center mb-2">
      <p className="text-[16px]" style={{color: 'rgba(0, 43, 65, 1)'}}>
        (с) SurfTrainCo, 2023
      </p>
      <Link 
        href="/offer" 
        className="text-[20px]"
        style={{color: 'rgba(0, 43, 65, 1)'}}
      >
        Публичная оферта
      </Link>
    </div>

    {/* Нижняя строка - политика по центру */}
    <div className="flex justify-center">
      <Link 
        href="/privacy" 
        className="text-[20px]"
        style={{color: 'rgba(0, 43, 65, 1)'}}
      >
        Политика конфиденциальности
      </Link>
    </div>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;