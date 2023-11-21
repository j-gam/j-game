// import './style.scss';
import React from 'react';
import { Room } from '../room/room';

export const LobbyWindow = () => {
  // fetch here?
  const dummyData = [
    { 
      name: 'game 1',
      participants: 2
    }, 
    { 
      name: 'game 2',
      participants: 1
    }, 
    { 
      name: 'game 3',
      participants: 4
    } 
  ];
  return <div className = 'lobbyWindow'>
    { dummyData.map(r => <Room room={r} />) } 
  </div>
}

