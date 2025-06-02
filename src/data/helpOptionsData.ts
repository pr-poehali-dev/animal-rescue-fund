export interface HelpOption {
  icon: string;
  title: string;
  description: string;
  action: string;
  color: "orange" | "blue" | "green" | "purple";
}

export const helpOptionsData: HelpOption[] = [
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

// Настройки секции помощи
export const helpSection = {
  title: "Как помочь",
  subtitle: "Выберите удобный для вас способ поддержки наших подопечных",
};

// Настройки срочного сбора
export const urgentCollection = {
  title: "Срочно нужна помощь!",
  description:
    "Котёнок Мурзик нуждается в дорогостоящей операции. Нужно собрать 45 000 рублей до конца недели.",
  current: 32450,
  target: 45000,
  buttonText: "Помочь Мурзику",
};

// Достижения фонда для секции "О нас"
export const achievements = [
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
