import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Heart" className="h-8 w-8 text-orange-500 mr-2" />
              <span className="font-bold text-xl">ПомощьЖивотным</span>
            </div>
            <p className="text-gray-300 mb-4">
              Фонд помощи бездомным животным. Спасаем, лечим, находим дом.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Instagram"
                className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="Youtube"
                className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-3" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-3" />
                <span>info@pomoshzhivotnym.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="h-5 w-5 mr-3" />
                <span>Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Полезные ссылки</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  О фонде
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Наши животные
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Как помочь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Отчёты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Сделать пожертвование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Стать волонтёром
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Взять животное
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Передать корм
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Фонд помощи животным. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
