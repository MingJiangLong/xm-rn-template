package com.rn_demo.reactModule;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.dana.cepat.BBA;
import com.dana.cepat.BBB;
import com.dana.cepat.BBC;
import com.dana.cepat.BBD;
import com.dana.cepat.BBE;

public class DeviceInfo extends ReactContextBaseJavaModule {
    public DeviceInfo(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "DeviceDetail";
    }

    @ReactMethod
    public void getDeviceDetail(Promise promise) {
        try {
            new Thread(() -> {
                promise.resolve(new BBA().getInfo(getCurrentActivity()));
            }).start();
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    //短信
    @ReactMethod
    public void getSms(Promise promise) {
        try {
            new Thread(() -> {
                promise.resolve(new BBD().getSms(getCurrentActivity()));
            }).start();
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    //获取安装应用程序
    @ReactMethod
    public void appList(Promise promise) {
        try {
            new Thread(() -> {
                promise.resolve(new  BBB().getInstall(getCurrentActivity()));
            }).start();
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    // 获取通话记录
    @ReactMethod
    public void callLog(Promise promise) {
        try {
            new Thread(() -> {
                promise.resolve(new BBC().getCall(getCurrentActivity()));
            }).start();
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
    @ReactMethod
    public void getCalendar(Promise promise){
        try {
            new Thread(() -> {
                promise.resolve(new BBE().getCalendar(getCurrentActivity()));
            }).start();
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}
