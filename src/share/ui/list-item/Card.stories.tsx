import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

function StoryCardList() {
  const [cardList, setCardList] = useState<
    {
      id: string;
      title: string;
      registrationDate: string;
      isActive: boolean;
      isSelected: boolean;
      route: string;
      isChecked: boolean;
    }[]
  >([
    {
      title: '피치마켓 (peach market)',
      id: '1',
      isChecked: false,
      registrationDate: '2023.11.01',
      isActive: true,
      isSelected: true,
      route: '/asd',
    },
    {
      title: '관치금융',
      id: '2',
      isChecked: false,
      registrationDate: '2023.11.01',
      isActive: false,
      isSelected: false,
      route: '/asd',
    },
  ]);

  const toggleCheck = (id: string) => {
    setCardList(
      cardList.map((card) => {
        if (card.id === id) {
          return { ...card, isChecked: !card.isChecked };
        }
        return card;
      }),
    );
  };

  return (
    <>
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            registrationDate={card.registrationDate}
            isActive={card.isActive}
            isChecked={card.isChecked}
            route={card.route}
            isSelected={card.isSelected}
            onChangeChecked={toggleCheck}
          />
        );
      })}
    </>
  );
}

export const SelectedCard: Story = {
  args: {
    title: '피치마켓 (peach market)',
    id: '1',
    registrationDate: '2023.11.01',
    isActive: true,
    isSelected: true,
    route: '/asd',
  },
};

export const UnselectedCard: Story = {
  args: {
    title: '관치금융',
    id: '2',
    registrationDate: '2023.11.01',
    isActive: false,
    isSelected: false,
    route: '/asd',
  },
};

export const CardList: Story = {
  render: () => {
    return <StoryCardList />;
  },
};
