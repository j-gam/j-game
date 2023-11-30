import './style.scss';
import React from 'react';

type Question = {
  value: number
  text: string
  answer: string
  complete: boolean
}

export const CategoryBox = (props: { question: Question }) => {
  const { question } = props;
  return (
    <button className="category-box">
      { ! question.complete && question.value }
    </button>
  );
}
  

