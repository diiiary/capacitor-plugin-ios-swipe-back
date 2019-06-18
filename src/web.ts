import { WebPlugin } from '@capacitor/core';
import { IosSwipeBackPlugin } from './definitions';

export class IosSwipeBackWeb extends WebPlugin implements IosSwipeBackPlugin {
  constructor() {
    super({
      name: 'IosSwipeBack',
      platforms: ['ios']
    });
  }
}

const IosSwipeBack = new IosSwipeBackWeb();

export { IosSwipeBack };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(IosSwipeBack);
