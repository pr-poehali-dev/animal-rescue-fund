import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HowToHelp = () => {
  const helpOptions = [
    {
      icon: "CreditCard",
      title: "Разовое пожертвование",
      description:
        "Любая сумма поможет нам купить корм, лекарства и оплатить ветеринарные услуги",
      action: "Помочь деньгами",
      color: "orange",
    },
    {
      icon: "Calendar",
      title: "Ежемесячная поддержка",
      description:
        "Регулярные взносы позволяют планировать помощь и спасать больше животных",
      action: "Стать спонсором",
      color: "blue",
    },
    {
      icon: "Users",
      title: "Волонтёрская помощь",
      description:
        "Помогайте в приюте, на выставках-пристройствах или с транспортировкой животных",
      action: "Стать волонтёром",
      color: "green",
    },
    {
      icon: "Package",
      title: "Корм и товары",
      description:
        "Принесите корм, игрушки, медикаменты или другие необходимые вещи",
      action: "Узнать что нужно",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: "bg-orange-500 hover:bg-orange-600",
      blue: "bg-blue-500 hover:bg-blue-600",
      green: "bg-green-500 hover:bg-green-600",
      purple: "bg-purple-500 hover:bg-purple-600",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="help" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Как помочь</h2>
          <p className="text-xl text-gray-600">
            Выберите удобный для вас способ поддержки наших подопечных
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {helpOptions.map((option, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 ${option.color === "orange" ? "bg-orange-100" : option.color === "blue" ? "bg-blue-100" : option.color === "green" ? "bg-green-100" : "bg-purple-100"} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    name={option.icon}
                    className={`h-8 w-8 ${option.color === "orange" ? "text-orange-500" : option.color === "blue" ? "text-blue-500" : option.color === "green" ? "text-green-500" : "text-purple-500"}`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {option.description}
                </p>
                <Button size="sm" className={getColorClasses(option.color)}>
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Срочно нужна помощь!</h3>
          <p className="text-xl mb-6">
            Котёнок Мурзик нуждается в дорогостоящей операции. Нужно собрать 45
            000 рублей до конца недели.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6 inline-block">
            <div className="text-2xl font-bold">32 450 ₽ из 45 000 ₽</div>
            <div className="w-64 bg-white bg-opacity-30 rounded-full h-3 mt-2">
              <div
                className="bg-white rounded-full h-3"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>
          <br />
          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100"
          >
            <Icon name="Heart" className="h-5 w-5 mr-2" />
            Помочь Мурзику
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
