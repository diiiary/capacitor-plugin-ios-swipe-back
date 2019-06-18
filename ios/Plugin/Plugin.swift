import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(IosSwipeBack)
public class IosSwipeBack: CAPPlugin {
    
    public override func load() {
        self.bridge.getWebView()?.allowsBackForwardNavigationGestures = true
    }
}
