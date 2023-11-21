// import './style.scss';
import React from 'react';

type RoomProps = {
  room: {
    name: string
    participants: number
  }
}

export const Room = (props: RoomProps) =>
  <div>
    { props.room.name }
    { "p: " + props.room.participants }
  </div>
