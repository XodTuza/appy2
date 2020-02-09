function adSetter(){
alert(navigator.userAgent);
 
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-3940256099942544/6300978111', // or DFP format "/6253334/dfp_example_ad"
    interstitial: 'ca-app-pub-3940256099942544/1033173712'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
  admobid = {
    banner: 'ca-app-pub-3940256099942544/6300978111', // or DFP format "/6253334/dfp_example_ad"
    interstitial: 'ca-app-pub-3940256099942544/1033173712'
  };
} else { // for windows phone
  admobid = {
    banner: 'ca-app-pub-3940256099942544/6300978111', // or DFP format "/6253334/dfp_example_ad"
    interstitial: 'ca-app-pub-3940256099942544/1033173712'
  };
}

if(AdMob) AdMob.createBanner({
    adId: admobid.banner,
    position: AdMob.AD_POSITION.TOP_CENTER,
    autoShow: true });
}

function onDeviceReady() {
    alert("device ready")
    adSetter();
}

function domLoaded() {
    document.addEventListener("deviceready", onDeviceReady, false);
}