const Advantages = () => {
  return (
    <section className="relative min-h-screen">   
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-image2.png"
          alt="Фон серфинга"
          className="w-full h-full object-cover"
        />
      </div>         
      
      {/* Контент поверх фона */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="pl-35"> 
          <div>
            <h2 className="text-[55px] font-bold text-[#002B41]">СЕРФИНГ</h2>
            <p className="text-[25px] italic text-red-500 mb-4">это стиль жизни</p>
            
            <div className="flex items-start gap-2.5 -ml-10">
              {/* Изображение серфинга слева */}
              <div className="w-[844px] h-[450px] rounded-lg overflow-hidden"> 
                <img
                  src="/images/photo-b.png"  
                  alt="Серфинг"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Правая колонка: текстбан и av */}
              <div className="flex flex-col gap-[10px]"> {/* gap-0.5 = 2px отступ */}
                {/* Текстбан сверху */}
                <div className="w-[386px] h-[299px] flex items-center justify-center rounded-lg">
                  <img
                    src="/images/textban.png"  
                    alt="Текстбан"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* av снизу */}
                <div className="w-[380px] h-[145px] flex items-center justify-center rounded-lg">
                  <img
                    src="/images/av.png"  
                    alt="av"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;