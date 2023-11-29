import './style.scss';
import React from 'react';

type Question = {
  value: number
  text: string
  answer: string
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
        { categories.map(c => (
          <div className="category-column">
            <div className="category-header">
              { c.name }
             </div>
             { c.questions.map(q => (
                 <div className="category-box">
                  { q.value }
                 </div>
               ))
             }
          </div>
        ))
        }
      </div>
    </div>
  );
}
