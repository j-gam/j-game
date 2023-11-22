import './style.scss';
import React from 'react';

type RoomProps = {
  room: {
    name: string
    participants: number
  }
}

export const Room = (props: RoomProps) =>
  <div className="room-container">
    <div className="room-name">
      { props.room.name }
    </div>
    <div className="room-participants">
    { "p: " + props.room.participants }
    </div>
    <button>
      Join
    </button>
  </div>
