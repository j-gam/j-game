import './style.scss';
import React from 'react';
import { LobbyWindow } from './components/lobbyWindow/lobbyWindow';
import { RoomLauncher } from './components/roomLauncher/roomLauncher';

export const Main = () =>
  <main>
    <div className="main-column">
      <LobbyWindow />
      <RoomLauncher />
    </div>
  </main>
