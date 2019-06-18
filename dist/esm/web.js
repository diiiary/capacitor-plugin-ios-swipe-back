import { WebPlugin } from '@capacitor/core';
export class IosSwipeBackWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map