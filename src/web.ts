import { WebPlugin } from '@capacitor/core';
import { IosSwipeBackPlugin } from './definitions';

export class IosSwipeBackWeb extends WebPlugin implements IosSwipeBackPlugin {
  constructor() {
    super({
      name: 'IosSwipeBack',
      platforms: ['web']
    });
  }

  async enable(options: { error: number }): Promise<{error: number}> {
    return options;
  }

  async disable(options: { error: number }): Promise<{error: number}> {
    return options;
  }
}

const IosSwipeBack = new IosSwipeBackWeb();

export { IosSwipeBack };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(IosSwipeBack);
