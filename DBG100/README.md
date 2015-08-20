# Objective

In this section, you will learn how to monitor for and solve memory leaks in your apps. The processes for monitoring memory usage varies by platform. You'll learn separately how to perform this feat on iOS and Android.

![Screenshot](https://monosnap.com/file/Mjs4sVuuwgLb3XEFv1sTTs4W9dFKjG.png)

![Screenshot](http://docs.appcelerator.com/platform/latest/images/download/attachments/29004941/instruments.png)

## Contents

Memory leaks occur when your app allocates memory but doesn't release it. JavaScript garbage collects objects, meaning it removes them from memory, when no references to them remain in your application. Leaks occur when unintended or overlooked references to objects remain in scope. In this lab, you'll examine an app that has a memory leak deliberately included. You'll apply various fixed and check your work until you have eliminated the leak.

### Memory Leaks

Memory leaks occur when your app allocates memory but doesn't release it. Leaks occur when unintended or overlooked references to objects remain in scope. When this happens, JavaScript can't garbage collect the objects and Titanium can't destroy the native proxies. Because the causes of leaks vary so widely, at best we'll be able to give you some strategies to attempt in order to solve the problems. There are no "cookie cutter" solutions for stopping memory leaks.

The app-level listener added within build() remains in scope after the window is closed. This forces the objects the window contains to remain in scope, which means they cannot be garbage collected. When build() runs again, a new window and table are created, which also cannot be garbage collected. You've got a leak! By removing the event listener when the window closes, the rest of the objects can be marked as ready for garbage collection. Even though a new set of objects are created by build(), the old ones are gone from memory and this leak is fixed.

## Get Started

### Import the Project using the CLI

Create a new Alloy project, then overwrite the app folder.

```
appc new -t titanium -n DBG100 -i com.appcelerator.DBG100
cp -r app ~/workspace/DBG100/.
```

#### Steps - iOS

1. Build the project for the iPhone or iPad simulator.
2. Run Xcode from the app's `build/iphone` directory
3. Attach a device and use it as the target in Xcode
4. Profile your application by long-pressing the *Run* icon in Xcode. Instruments will launch and will be attached to your app's process
5. Select "Allocations" when Instruments launches.
6. Click Record and wait a moment until data begins recording
7. In the Instrument Detail filter box, enter `Proxy` or `TiUI`
8. In the app, click the "Open leaky window" button. In Instruments, the # Living column for TiUITableViewRowProxy should show 5 objects are in memory; these objects correspond to the rows in the table. Go back to the main window, then click "Open leaky window" again. This time, # Living should increase to 10. The original 5 rows were not released and 5 new rows are allocated in memory.  While the actual usage is small, if you were to repeatedly show this window enough times the app would exhaust its available memory and crash.
9. Now, click the switch in the app to fix the memory leak and proceed to step 8.  This time, you should see the numbers in the # Transitory column increase as you open and close the Test 1 window. These values represent objects that have been garbage collected. You might see # Living go up above the 5 active rows occasionally; this simply reflects Instruments reacting more slowly than you clicking through the app.

## Steps - Android

Android's DDMS tool can show you memory leaks – both memory allocations that are not freed and objects that aren't garbage collected. Following the procedure shown here, you can watch as memory use and object allocations grow. You'll need to pair that information, with knowledge of your app to determine where within your app the cause might be.

1. Build your app for the Android emulator at least once.
2. In your text editor, open <Project>/build/android/AndroidManifest.xml.
3. Copy the <application> node, a sample of which is shown here (your app name would vary, of course):

```
<application android:icon="@drawable/appicon"
  android:label="AppLeak" android:name="AppleakApplication"
  android:debuggable="false">
```
4. Paste that into your app's TiApp.xml file, modifying the <android> node as shown:

```
<android xmlns:android="http://schemas.android.com/apk/res/android">
  <manifest>
    <application android:icon="@drawable/appicon"
      android:label="AppLeak" android:name="AppleakApplication"
      android:debuggable="true">
    </application>
  </manifest>
</android>
```
5. Save and build your app for the Android emulator again.
6. Open `monitor`
7. As shown in the screenshot below, click to select your app in the list of processes. Then, click the Show Heap Updates button (labeled #2 in the graphic).
8. On the VM Heap tab, click Cause GC to force garbage collection. Note the values listed in the Allocated and # Objects columns.
9. Here's where you'll exercise your app and watch for memory leaks. For example, if you're using the AppLeak sample app linked to below, click the Test 1 button, click Back, and repeat. Memory and the object count in DDMS will grow, though that number includes objects that are ready to be garbage collected.
10. Click Cause GC to force garbage collection. If there's a leak, the values of Allocated and # Objects won't return to their former values.

These steps don't tell you exactly what is causing the leak in your app. Unlike Instruments, DDMS doesn't clearly show which objects are remaining in memory rather than being collected. You will need to test your app and watch the memory values to infer the potential causes of the leak.

![Screenshot](http://docs.appcelerator.com/platform/latest/images/download/attachments/29004941/ddms.png)

Memory leaks are a problem for Android, even though we didn't include steps for that platform in this lab. You can use the Monitor tool, and its Allocation Tracker component to watch for such leaks. Steps for Android are provided at [http://docs.appcelerator.com/titanium/latest/#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsonAndroid](http://docs.appcelerator.com/titanium/latest/#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsonAndroid)
