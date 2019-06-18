import Foundation
import Capacitor
import WKWebView

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(IosSwipeBack)
public class IosSwipeBack: CAPPlugin {
    
    public override func load() {
        var webView = self.bridge.getWebView;
        webView?.allowsBackForwardNavigationGestures = true
    }
}
