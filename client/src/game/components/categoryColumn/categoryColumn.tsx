import './style.scss';
import React from 'react';
import { CategoryBox } from '../categoryBox/categoryBox';

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

export const CategoryColumn = (props: { category: Category }) => {
  const { category } = props;

  return (
    <div className="category-column">
      <div className="category-header">
        { category.name }
       </div>
       { category.questions.map(q => <CategoryBox question={ q } />) }
    </div>
   ); 
}

  
