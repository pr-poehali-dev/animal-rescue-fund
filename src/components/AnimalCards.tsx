import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AnimalCards = () => {
  const animals = [
    {
      id: 1,
      name: "Барон",
      type: "Собака",
      age: "2 года",
      description:
        "Добрый и игривый лабрадор ищет семью с детьми. Очень любит прогулки и игры с мячом.",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      urgent: false,
    },
    {
      id: 2,
      name: "Мурка",
      type: "Кошка",
      age: "1 год",
      description:
        "Ласковая кошечка с необычным окрасом. Отлично ладит с другими животными.",
      image:
        "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      urgent: true,
    },
    {
      id: 3,
      name: "Рекс",
      type: "Собака",
      age: "5 лет",
      description:
        "Спокойный и верный друг. Идеально подойдёт пожилым людям или небольшой семье.",
      image:
        "https://images.unsplash.com/photo-1588269845024-e4e27b48d538?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      urgent: false,
    },
  ];

  return (
    <section id="animals" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наши подопечные
          </h2>
          <p className="text-xl text-gray-600">
            Познакомьтесь с животными, которые ждут свою семью
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <Card
              key={animal.id}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-64 object-cover"
                />
                {animal.urgent && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Срочно!
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {animal.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {animal.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  <span className="text-sm">{animal.age}</span>
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  {animal.description}
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  <Icon name="Heart" className="h-4 w-4 mr-2" />
                  Хочу познакомиться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Icon name="Eye" className="h-5 w-5 mr-2" />
            Посмотреть всех животных
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnimalCards;
