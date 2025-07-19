import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-mint/10 to-soft/10 font-inter">
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent">
            Studio
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-coral transition-colors">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-coral transition-colors">О нас</a>
            <a href="#contact" className="text-gray-700 hover:text-coral transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white">
            Связаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-coral via-mint to-soft bg-clip-text text-transparent">
                  Современные
                </span>
                <br />
                <span className="text-gray-900">решения</span>
                <br />
                <span className="text-gray-600">для вашего бизнеса</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Мы создаем инновационные продукты, которые помогают компаниям достигать новых высот в цифровом мире.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-coral to-mint hover:from-coral/80 hover:to-mint/80 text-white border-0">
                  Начать проект
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-coral">
                  Узнать больше
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative z-10">
                <img 
                  src="https://v3.fal.media/files/tiger/0XqQqRVAkmo3njv_nThH9_output.png" 
                  alt="Hero Image" 
                  className="w-full h-auto rounded-3xl shadow-2xl animate-float"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-coral/20 to-mint/20 rounded-3xl blur-2xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем комплексные решения для развития вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Быстрая разработка",
                description: "Современные технологии позволяют нам создавать продукты в кратчайшие сроки"
              },
              {
                icon: "Shield",
                title: "Надежность",
                description: "Все наши решения проходят тщательное тестирование и соответствуют высоким стандартам"
              },
              {
                icon: "Users",
                title: "Поддержка 24/7",
                description: "Наша команда всегда готова помочь вам в решении любых вопросов"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-coral to-mint rounded-2xl flex items-center justify-center">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Готовы обсудить ваш проект? Заполните форму, и мы ответим в течение 24 часов
            </p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-coral to-mint p-1">
              <CardContent className="bg-white p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-2 border-gray-200 focus:border-coral transition-colors h-12"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-2 border-gray-200 focus:border-coral transition-colors h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-coral transition-colors min-h-32 resize-none"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-coral to-mint hover:from-coral/80 hover:to-mint/80 text-white border-0 h-14 text-lg font-medium"
                  >
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <Icon name="Mail" size={24} className="mx-auto text-coral" />
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@studio.com</p>
                    </div>
                    <div className="space-y-2">
                      <Icon name="Phone" size={24} className="mx-auto text-coral" />
                      <p className="font-medium text-gray-900">Телефон</p>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                    <div className="space-y-2">
                      <Icon name="MapPin" size={24} className="mx-auto text-coral" />
                      <p className="font-medium text-gray-900">Адрес</p>
                      <p className="text-gray-600">Москва, Россия</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent">
                Studio
              </div>
              <p className="text-gray-400 leading-relaxed">
                Создаем цифровые решения, которые вдохновляют и приносят результат.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-coral transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">UI/UX Дизайн</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Консалтинг</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-coral transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Связь</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Linkedin', 'Twitter'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-coral transition-colors"
                  >
                    <Icon name={social as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}