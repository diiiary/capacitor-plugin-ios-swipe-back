import { WebPlugin } from '@capacitor/core';
import { IosSwipeBackPlugin } from './definitions';
export declare class IosSwipeBackWeb extends WebPlugin implements IosSwipeBackPlugin {
    constructor();
    enable(options: {
        error: number;
    }): Promise<{
        error: number;
    }>;
    disable(options: {
        error: number;
    }): Promise<{
        error: number;
    }>;
}
declare const IosSwipeBack: IosSwipeBackWeb;
export { IosSwipeBack };
