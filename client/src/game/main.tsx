import './style.scss';
import { UserColumn } from './components/userColumn/userColumn';
import { MainColumn } from './components/mainColumn/mainColumn';
import React from 'react';

export const Main = () => {
  const dummyUsers = [
    { name: 'Archie', score: 200 },
    { name: 'Bartholomew', score: -550 }
  ];

  const dummyCategories = [];

  for (let i = 0; i < 6; i++) {
    dummyCategories.push({
      name: `Category ${i + 1}`,
      questions: []
    });
    for (let j = 0; j < 5; j++) {
      dummyCategories[i].questions.push(
        {
          value: (j + 1) * 200,
          text: `${String.fromCharCode('A'.charCodeAt(0) + j + i * 5)}?`,
          answer: 'Yes'
        }
      );
    }
  }

  return <main>
    <MainColumn categories={ dummyCategories } />
    <UserColumn users={ dummyUsers } />
  </main>
}
