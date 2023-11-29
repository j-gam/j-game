import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from './main';

const r = document.createElement('div');
const b = document.querySelector('body');
b.appendChild(r);

const root = createRoot(r);
root.render(<Main />);
