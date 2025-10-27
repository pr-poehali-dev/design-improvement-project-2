import { Card } from '@/components/ui/card';

const Index = () => {
  const benefits = [
    {
      image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/710068b1-bad0-402f-b65d-1e2efa9e5faf.jpg',
      title: 'Стабильная заработная плата',
      description: 'Гарантированная выплата заработной платы два раза в месяц без задержек. Прозрачная система начисления премий и бонусов за достижение KPI.'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/c91e096c-ab76-4274-bb67-c8c26ad62768.jpg',
      title: 'Оплачиваемый отпуск',
      description: 'Ежегодный оплачиваемый отпуск 28 календарных дней с возможностью разделения на части. Дополнительные дни отпуска за выслугу лет.'
    },
    {
      image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/460a4e42-a236-4500-b189-595250d2fc42.jpg',
      title: 'Полный социальный пакет',
      description: 'Добровольное медицинское страхование для сотрудника и членов семьи. Корпоративное обучение и программы развития персонала.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Преимущества работы с нами
          </h1>
          <p className="text-lg text-slate-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Мы создаем условия для роста и развития каждого сотрудника
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-white/50 backdrop-blur-sm p-1.5 rounded-xl mb-4">
            <TabsTrigger 
              value="transits" 
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-2 text-sm rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Авторские транзиты
            </TabsTrigger>
            <TabsTrigger 
              value="salary"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-2 text-sm rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Стабильная зарплата
            </TabsTrigger>
            <TabsTrigger 
              value="vacation"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-2 text-sm rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Оплачиваемый отпуск
            </TabsTrigger>
            <TabsTrigger 
              value="social"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-2 text-sm rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Соцпакет
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transits" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                {benefits.transits.items.map((item, index) => (
                  <Card 
                    key={index}
                    className="p-5 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md group"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name={item.icon} className="text-white" size={32} />
                      </div>
                      <h3 className="text-base font-semibold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.label}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="hidden lg:flex flex-col gap-2">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ flex: index === 1 ? '1.5' : '1' }}
                  >
                    <img 
                      src={photo} 
                      alt={`Сотрудник ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="salary" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <Card className="p-5 bg-white border-0 shadow-lg h-full flex flex-col justify-between">
                  <p className="text-base text-slate-700 leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {benefits.salary.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {benefits.salary.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon name={feature.icon} className="text-white" size={20} />
                        </div>
                        <p className="text-xs font-medium text-slate-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="hidden lg:flex flex-col gap-2">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ flex: index === 1 ? '1.5' : '1' }}
                  >
                    <img 
                      src={photo} 
                      alt={`Сотрудник ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vacation" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <Card className="p-5 bg-white border-0 shadow-lg h-full flex flex-col justify-between">
                  <p className="text-base text-slate-700 leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {benefits.vacation.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {benefits.vacation.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon name={feature.icon} className="text-white" size={20} />
                        </div>
                        <p className="text-xs font-medium text-slate-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="hidden lg:flex flex-col gap-2">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ flex: index === 1 ? '1.5' : '1' }}
                  >
                    <img 
                      src={photo} 
                      alt={`Сотрудник ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <Card className="p-5 bg-white border-0 shadow-lg h-full flex flex-col justify-between">
                  <p className="text-base text-slate-700 leading-relaxed mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {benefits.social.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {benefits.social.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon name={feature.icon} className="text-white" size={20} />
                        </div>
                        <p className="text-xs font-medium text-slate-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="hidden lg:flex flex-col gap-2">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ flex: index === 1 ? '1.5' : '1' }}
                  >
                    <img 
                      src={photo} 
                      alt={`Сотрудник ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;