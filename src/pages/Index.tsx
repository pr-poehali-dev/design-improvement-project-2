import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('employment');

  const benefitsData = {
    employment: [
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/710068b1-bad0-402f-b65d-1e2efa9e5faf.jpg',
        title: 'Оформление по ТК РФ',
        description: 'Официальное трудоустройство согласно Трудовому кодексу РФ. Все необходимые документы, трудовой договор и запись в трудовой книжке.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/c91e096c-ab76-4274-bb67-c8c26ad62768.jpg',
        title: 'Оплачиваемые отпуска',
        description: 'Ежегодный оплачиваемый отпуск в соответствии с ТК РФ. Гарантированные отпускные выплаты и возможность планирования отдыха.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/460a4e42-a236-4500-b189-595250d2fc42.jpg',
        title: 'Социальные гарантии',
        description: 'Полный пакет социальных гарантий по ТК РФ: больничные, декретные, пенсионные отчисления. Защита ваших трудовых прав.'
      }
    ],
    salary: [
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/710068b1-bad0-402f-b65d-1e2efa9e5faf.jpg',
        title: 'Выплаты 2 раза в месяц',
        description: 'Гарантированная выплата заработной платы два раза в месяц без задержек. Прозрачная система расчетов и начислений.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/c91e096c-ab76-4274-bb67-c8c26ad62768.jpg',
        title: 'Система премий',
        description: 'Прозрачная система начисления премий и бонусов за достижение KPI. Мотивируем результативность и инициативность.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/460a4e42-a236-4500-b189-595250d2fc42.jpg',
        title: 'Ежегодная индексация',
        description: 'Регулярная индексация заработной платы с учетом инфляции и результатов работы. Растем вместе с вами.'
      }
    ],
    vacation: [
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/710068b1-bad0-402f-b65d-1e2efa9e5faf.jpg',
        title: '28 календарных дней',
        description: 'Ежегодный оплачиваемый отпуск 28 календарных дней с возможностью разделения на части по вашему желанию.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/c91e096c-ab76-4274-bb67-c8c26ad62768.jpg',
        title: 'Дополнительные дни',
        description: 'Дополнительные дни отпуска за выслугу лет. Ценим долгосрочное сотрудничество и лояльность сотрудников.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/460a4e42-a236-4500-b189-595250d2fc42.jpg',
        title: 'Гибкое планирование',
        description: 'Удобный график согласования дат отпуска с учетом ваших планов. Планируйте отдых когда вам удобно.'
      }
    ],
    social: [
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/710068b1-bad0-402f-b65d-1e2efa9e5faf.jpg',
        title: 'ДМС для всей семьи',
        description: 'Добровольное медицинское страхование для сотрудника и членов семьи. Забота о здоровье ваших близких.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/c91e096c-ab76-4274-bb67-c8c26ad62768.jpg',
        title: 'Корпоративное обучение',
        description: 'Программы развития персонала и профессионального роста. Инвестируем в ваше развитие и карьеру.'
      },
      {
        image: 'https://cdn.poehali.dev/projects/f59962f1-00b1-48e0-bf1e-99adf89a0a47/files/460a4e42-a236-4500-b189-595250d2fc42.jpg',
        title: 'Компенсация расходов',
        description: 'Компенсация фитнеса, питания и проезда к месту работы. Поддерживаем ваш комфорт и здоровый образ жизни.'
      }
    ]
  };

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
              value="employment" 
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-slate-700 py-2 text-sm rounded-lg transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Официальное трудоустройство
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

          {Object.keys(benefitsData).map((key) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {benefitsData[key as keyof typeof benefitsData].map((benefit, index) => (
                  <Card 
                    key={index}
                    className="overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md group animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={benefit.image} 
                        alt={benefit.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Index;