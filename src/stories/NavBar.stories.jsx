import React from 'react';

import NavBar from '../components/nav/NavBar';
import { Page } from '../components/base/base';

export default {
  title: 'Example/NavBar',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => <Page><NavBar>Test Nav Bar</NavBar></Page>;