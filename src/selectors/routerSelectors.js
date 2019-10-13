/* eslint-disable import/prefer-default-export */
import { createMatchSelector } from 'connected-react-router';

export const matchDetailSelector = createMatchSelector({ path: '/detail/:id' });
