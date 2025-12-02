export type CardLayout = 'left' | 'center';

export interface CardData {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  fontFamily: string;
  textColor: string;
  backgroundColor: string;
  layout: CardLayout;
}

export interface Font {
  name: string;
  value: string;
}

export interface Template {
  name: string;
  file: string;
  data: Partial<CardData>;
}
