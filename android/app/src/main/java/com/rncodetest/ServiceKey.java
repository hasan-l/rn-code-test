package com.rncodetest; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import android.app.Application;
import android.content.Context;
import android.content.res.Resources;
import android.app.Application;
import java.lang.ClassNotFoundException;
import java.lang.IllegalAccessException;
import java.lang.reflect.Field;

public class ServiceKey extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    ServiceKey(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }


    @Override
    public String getName() {
        return "ServiceKey";
    }

    @ReactMethod
    public String serviceKey() {
        return "Result: " + reactContext.getString(R.string.service_key);
    }

    @ReactMethod
    public void getServiceKey( Callback errorCallback, Callback successCallback) {
        String packageName = reactContext.getPackageName();
        String token = reactContext.getString(reactContext.getResources().getIdentifier("service_key", "string", packageName));
        try {
            successCallback.invoke(token);
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}

