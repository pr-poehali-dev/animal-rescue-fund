export interface Animal {
  id: number;
  name: string;
  type: string;
  age: string;
  description: string;
  image: string;
  urgent: boolean;
}

export const animalsData: Animal[] = [
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

// Настройки секции животных
export const animalsSection = {
  title: "Наши подопечные",
  subtitle: "Познакомьтесь с животными, которые ждут свою семью",
  meetButton: "Хочу познакомиться",
  viewAllButton: "Посмотреть всех животных",
  urgentLabel: "Срочно!",
};
