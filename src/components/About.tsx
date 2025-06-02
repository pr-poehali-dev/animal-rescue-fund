import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const achievements = [
    {
      icon: "Shield",
      title: "Спасение",
      description:
        "Находим и спасаем животных с улиц, из приютов-убежищ и от жестоких хозяев",
    },
    {
      icon: "Stethoscope",
      title: "Лечение",
      description:
        "Обеспечиваем полноценное ветеринарное обслуживание и реабилитацию",
    },
    {
      icon: "Home",
      title: "Новый дом",
      description:
        "Тщательно подбираем любящие семьи для каждого нашего подопечного",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            О нашем фонде
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем с 2015 года, объединяя неравнодушных людей в борьбе за
            права животных и создание мира без бездомности среди наших
            четвероногих друзей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Наша миссия
              </h3>
              <p className="text-gray-700 mb-4">
                Создать мир, где каждое животное имеет право на жизнь, заботу и
                любовь. Мы верим, что совместными усилиями можем изменить судьбы
                тысяч животных.
              </p>
              <p className="text-gray-700">
                Наша команда состоит из опытных ветеринаров, зоопсихологов и
                просто людей с большим сердцем, готовых помогать нашим меньшим
                братьям.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Команда волонтёров"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
