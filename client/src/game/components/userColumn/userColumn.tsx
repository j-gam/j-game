import React from 'react';
import './style.scss';

type User = {
  name: string
  score: number
}

type UserColumnProps = {
  users: User[]
}

export const UserColumn = (props: UserColumnProps) => {
  const { users } = props;
  
  return (
  <div className="user-column">
    { users.map(u => <div>{ u.name }</div>) }
  </div>
  )
}
