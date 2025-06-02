import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Дарим надежду
              <span className="text-orange-500"> бездомным</span> животным
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Каждый день мы спасаем, лечим и находим дом для брошенных кошек и
              собак. Присоединяйтесь к нашей миссии любви и заботы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Icon name="Heart" className="h-5 w-5 mr-2" />
                Сделать пожертвование
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Users" className="h-5 w-5 mr-2" />
                Стать волонтёром
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">1247</div>
                <div className="text-sm text-gray-600">Спасённых животных</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">892</div>
                <div className="text-sm text-gray-600">Новых домов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">156</div>
                <div className="text-sm text-gray-600">Активных волонтёров</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Счастливая собака"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Icon name="MapPin" className="h-5 w-5 text-orange-500 mr-2" />
                <span className="text-sm font-medium">Москва и область</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
