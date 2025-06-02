import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Heart" className="h-8 w-8 text-orange-500 mr-2" />
            <span className="font-bold text-xl text-gray-900">
              ПомощьЖивотным
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              О фонде
            </a>
            <a
              href="#animals"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Наши подопечные
            </a>
            <a
              href="#help"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Как помочь
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600">
            <Icon name="Heart" className="h-4 w-4 mr-2" />
            Помочь сейчас
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
