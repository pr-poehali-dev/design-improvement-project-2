import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('transits');

  const benefits = {
    transits: {
      title: 'Авторские транзиты',
      items: [
        { icon: 'Plane', label: 'Трансфер' },
        { icon: 'Briefcase', label: 'Трудоустройство' },
        { icon: 'Users', label: 'Корпоративная жизнь' },
        { icon: 'Shield', label: 'Промывание' }
      ]
    },
    salary: {
      title: 'Стабильная заработная плата',
      description: 'Гарантированная выплата заработной платы два раза в месяц без задержек. Прозрачная система начисления премий и бонусов за достижение KPI. Ежегодная индексация заработной платы с учетом инфляции и результатов работы.',
      features: [
        { icon: 'DollarSign', text: 'Выплаты 2 раза в месяц' },
        { icon: 'TrendingUp', text: 'Прозрачная система премий' },
        { icon: 'Award', text: 'Ежегодная индексация' }
      ]
    },
    vacation: {
      title: 'Оплачиваемый отпуск',
      description: 'Ежегодный оплачиваемый отпуск 28 календарных дней с возможностью разделения на части. Дополнительные дни отпуска за выслугу лет. Гибкий график согласования дат отпуска с учетом ваших планов.',
      features: [
        { icon: 'Calendar', text: '28 календарных дней отпуска' },
        { icon: 'Plus', text: 'Дополнительные дни за стаж' },
        { icon: 'Clock', text: 'Гибкое планирование дат' }
      ]
    },
    social: {
      title: 'Полный социальный пакет',
      description: 'Добровольное медицинское страхование для сотрудника и членов семьи. Корпоративное обучение и программы развития персонала. Компенсация фитнеса, питания и проезда к месту работы.',
      features: [
        { icon: 'Heart', text: 'ДМС для всей семьи' },
        { icon: 'GraduationCap', text: 'Программы обучения' },
        { icon: 'Coffee', text: 'Компенсация расходов' }
      ]
    }
  };

  const photos = [
    'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/710068b1-bad0-402f-b65d-1e2efa9e5faf.jpg',
    'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/c91e096c-ab76-4274-bb67-c8c26ad62768.jpg',
    'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/460a4e42-a236-4500-b189-595250d2fc42.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Преимущества работы с нами
          </h1>
          <p className="text-xl text-slate-600" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Мы создаем условия для роста и развития каждого сотрудника
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-white/50 backdrop-blur-sm p-2 rounded-xl mb-8">
            <TabsTrigger 
              value="transits" 
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-3 rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Авторские транзиты
            </TabsTrigger>
            <TabsTrigger 
              value="salary"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-3 rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Стабильная заработная плата
            </TabsTrigger>
            <TabsTrigger 
              value="vacation"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-3 rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Оплачиваемый отпуск
            </TabsTrigger>
            <TabsTrigger 
              value="social"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-3 rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Полный социальный пакет
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transits" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {benefits.transits.items.map((item, index) => (
                  <Card 
                    key={index}
                    className="p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md group"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name={item.icon} className="text-white" size={40} />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.label}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="hidden lg:flex flex-col gap-3">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ height: index === 1 ? '45%' : '27.5%' }}
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="p-8 bg-white border-0 shadow-lg mb-6">
                  <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {benefits.salary.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {benefits.salary.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon name={feature.icon} className="text-white" size={24} />
                        </div>
                        <p className="text-sm font-medium text-slate-700 pt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="hidden lg:flex flex-col gap-3">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ height: index === 1 ? '45%' : '27.5%' }}
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="p-8 bg-white border-0 shadow-lg mb-6">
                  <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {benefits.vacation.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {benefits.vacation.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon name={feature.icon} className="text-white" size={24} />
                        </div>
                        <p className="text-sm font-medium text-slate-700 pt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="hidden lg:flex flex-col gap-3">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ height: index === 1 ? '45%' : '27.5%' }}
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="p-8 bg-white border-0 shadow-lg mb-6">
                  <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    {benefits.social.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {benefits.social.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon name={feature.icon} className="text-white" size={24} />
                        </div>
                        <p className="text-sm font-medium text-slate-700 pt-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="hidden lg:flex flex-col gap-3">
                {photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ height: index === 1 ? '45%' : '27.5%' }}
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
