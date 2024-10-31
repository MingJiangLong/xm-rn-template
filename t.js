function a() {



    let a = {
        "@kafudev/react-native-vconsole": "^0.1.11",
        "@longjiang/event-bus": "1.0.3",
        "@react-native-async-storage/async-storage": "^2.0.0",
        "@react-native-community/geolocation": "^3.4.0",
        "@react-native-firebase/app": "^21.0.0",
        "@react-native-firebase/database": "^21.0.0",
        "@react-native-firebase/messaging": "^21.0.0",
        "@react-navigation/bottom-tabs": "^6.6.1",
        "@react-navigation/native": "^6.1.18",
        "@react-navigation/native-stack": "^6.11.0",
        "@sparkfabrik/react-native-idfa-aaid": "^1.2.0",
        "@types/pako": "^2.0.3",
        "buffer": "^6.0.3",
        "crypto-js": "^4.2.0",
        "dayjs": "^1.11.13",
        "jail-monkey": "^2.8.0",
        "pako": "1.0.3",
        "react": "18.3.1",
        "react-native": "0.75.2",
        "react-native-appsflyer": "^6.15.1",
        "react-native-contacts": "^7.0.8",
        "react-native-device-info": "^13.0.0",
        "react-native-dotenv": "^3.4.11",
        "react-native-exit-app": "^2.0.0",
        "react-native-gesture-handler": "^2.19.0",
        "react-native-gzip": "^1.1.0",
        "react-native-image-crop-picker": "^0.41.2",
        "react-native-image-picker": "^7.1.2",
        "react-native-in-app-review": "^4.3.3",
        "react-native-keyboard-aware-scroll-view": "^0.9.5",
        "react-native-linear-gradient": "^2.8.3",
        "react-native-localize": "^3.2.1",
        "react-native-modalize": "^2.1.1",
        "react-native-permissions": "^5.0.0",
        "react-native-portalize": "^1.0.7",
        "react-native-reanimated": "^3.16.1",
        "react-native-safe-area-context": "^4.11.0",
        "react-native-screens": "^3.34.0",
        "react-native-select-contact": "^1.6.3",
        "react-native-size-matters": "^0.4.2",
        "react-native-splash-screen": "^3.3.0",
        "react-native-ui-datepicker": "^2.0.4",
        "react-native-vector-icons": "^10.2.0",
        "react-native-webview": "^13.12.2",
        "zustand": "^4.5.5"
    }

    console.log('====================================');
    console.log(JSON.stringify(Object.keys(a).map(item => ({
        "package": item,
        "version": `${a[item]}`.match(/(\d+\.*)+/g)[0],
        "desc": ""
    })), null, 2));
    console.log('====================================');
}

a()