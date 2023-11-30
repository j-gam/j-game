import './style.scss';
import { CategoryColumn } from '../categoryColumn/categoryColumn';
import React from 'react';

type Question = {
  value: number
  text: string
  answer: string
  complete: boolean
}

type Category = {
  name: string
  questions: Question[]
}

type MainColumnProps = {
  categories: Category[]
}

export const MainColumn = (props: MainColumnProps) => {
  const { categories } = props;

  return (
    <div className="main-column">
      <div className="board-window">
        { categories.map(c => <CategoryColumn category={ c } />) }
      </div>
    </div>
  );
}
