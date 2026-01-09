import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const boostServices = [
    {
      rank: 'Bronze → Silver',
      price: '500₽',
      duration: '1-2 дня',
      description: 'Быстрый старт для новичков',
      color: 'from-orange-600 to-orange-400',
      icon: 'Trophy'
    },
    {
      rank: 'Silver → Gold',
      price: '1200₽',
      duration: '2-3 дня',
      description: 'Уверенный подъём в рейтинге',
      color: 'from-gray-400 to-gray-200',
      icon: 'Award'
    },
    {
      rank: 'Gold → Diamond',
      price: '2500₽',
      duration: '3-5 дней',
      description: 'Путь к элитным рангам',
      color: 'from-yellow-500 to-yellow-300',
      icon: 'Star'
    },
    {
      rank: 'Diamond → Master',
      price: '5000₽',
      duration: '5-7 дней',
      description: 'Попадание в топ игроков',
      color: 'from-cyan-500 to-cyan-300',
      icon: 'Crown'
    },
    {
      rank: 'Master → Legend',
      price: '10000₽',
      duration: '7-10 дней',
      description: 'Легендарный статус',
      color: 'from-purple-600 to-pink-500',
      icon: 'Zap'
    },
    {
      rank: 'Калибровка',
      price: '3000₽',
      duration: '3-4 дня',
      description: 'Лучший старт сезона',
      color: 'from-green-500 to-emerald-400',
      icon: 'Target'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей',
      rank: 'Legend',
      text: 'Ребята прокачали меня с Gold до Legend за неделю! Играли профессионально, никаких проблем.',
      rating: 5
    },
    {
      name: 'Дмитрий',
      rank: 'Master',
      text: 'Быстро, качественно, без читов. Рекомендую всем, кто хочет сэкономить время.',
      rating: 5
    },
    {
      name: 'Игорь',
      rank: 'Diamond',
      text: 'Отличная команда! Поднялся с Bronze до Diamond, цены адекватные.',
      rating: 5
    }
  ];

  const boosters = [
    {
      name: 'ProGamer',
      rank: 'Legend #1',
      experience: '5 лет',
      winrate: '87%',
      avatar: '🎮'
    },
    {
      name: 'SkillMaster',
      rank: 'Legend #3',
      experience: '4 года',
      winrate: '85%',
      avatar: '⚡'
    },
    {
      name: 'RankBoost',
      rank: 'Master #12',
      experience: '3 года',
      winrate: '82%',
      avatar: '🔥'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-glow-cyan">BRAWL BOOST</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
          </nav>
          <Button className="glow-cyan bg-primary hover:bg-primary/90">
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse-glow"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary glow-magenta">
            🏆 Топ-1 Сервис Бустинга
          </Badge>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-glow-cyan animate-slide-up">
            ПРОКАЧАЙ СВОЙ РАНГ
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональный бустинг в Brawl Stars от топовых игроков. Быстро, безопасно, с гарантией результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg glow-cyan bg-primary hover:bg-primary/90">
              <Icon name="Rocket" size={20} className="mr-2" />
              Выбрать услугу
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4 text-glow-magenta">КАТАЛОГ УСЛУГ</h3>
            <p className="text-muted-foreground text-lg">Выберите нужный ранг и начните свой путь к вершине</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boostServices.map((service, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card hover:border-primary/50 transition-all hover:scale-105 hover:glow-cyan group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.rank}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" size={18} className="text-accent" />
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full glow-green bg-accent hover:bg-accent/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4 text-glow-cyan">ОТЗЫВЫ КЛИЕНТОВ</h3>
            <p className="text-muted-foreground text-lg">Что говорят о нас наши довольные клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <Badge variant="outline" className="border-primary text-primary">{testimonial.rank}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4 text-glow-magenta">НАША КОМАНДА</h3>
            <p className="text-muted-foreground text-lg">Профессиональные бустеры с многолетним опытом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boosters.map((booster, index) => (
              <Card key={index} className="border-border/50 bg-card text-center hover:border-secondary/50 transition-all hover:scale-105">
                <CardHeader>
                  <div className="text-6xl mb-4 mx-auto">{booster.avatar}</div>
                  <CardTitle className="text-2xl">{booster.name}</CardTitle>
                  <Badge className="mx-auto bg-secondary/20 text-secondary border-secondary">{booster.rank}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Calendar" size={18} className="text-primary" />
                      <span>Опыт: {booster.experience}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="TrendingUp" size={18} className="text-accent" />
                      <span>Винрейт: {booster.winrate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" className="text-primary" size={28} />
            <h4 className="text-xl font-bold">BRAWL BOOST</h4>
          </div>
          <p className="text-muted-foreground mb-4">Профессиональный бустинг в Brawl Stars</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>

      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl glow-cyan bg-primary hover:bg-primary/90 animate-pulse-glow z-50"
          >
            <Icon name="MessageCircle" size={28} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" className="text-primary" />
              Чат с поддержкой
            </DialogTitle>
            <DialogDescription>
              Задайте любой вопрос о наших услугах бустинга
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">👋 Привет! Я онлайн и готов помочь с выбором услуги бустинга.</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Напишите сообщение..." 
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
              />
              <Button className="glow-cyan bg-primary">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
