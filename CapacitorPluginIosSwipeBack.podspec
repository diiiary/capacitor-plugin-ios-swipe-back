
  Pod::Spec.new do |s|
    s.name = 'CapacitorPluginIosSwipeBack'
    s.version = '0.0.1'
    s.summary = 'All swipe back guestures'
    s.license = 'MIT'
    s.homepage = 'https://github.com/diiiary/capacitor-plugin-ios-swipe-back.git'
    s.author = 'diiiary.com'
    s.source = { :git => 'https://github.com/diiiary/capacitor-plugin-ios-swipe-back.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end