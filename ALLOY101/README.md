# ALLOY101

In this Lab Exercise you will apply the concepts learned in the UIUX100 Module and create a cross-platform application using the "bootstrap" architecture strategy.

## Objective

Create an Alloy app skeleton that leverages Alloy's platform directives at the XML and TSS level, as well as platform-specific folders and platform conditionals at the controller level.  The app should be able to run on iPhone/iPod Touch, iPad, Android Phone and Android tablet, and be able to display a platform-specific greeting, while reusing your views, styles and controllers.

## Cheat Sheet

* Controller Level: 
	* Alloy.isTablet
	* OS_IOS
	* OS_ANDROID
* Stylesheet Level: 
	* platform=android
	* formFactor=handheld
* View Level : 
	*  formFactor="tablet"
	*  platform="android"


## Screenshot

![](assets/screens.png)

## Import the Project using the CLI

Create a new Alloy project, then overwrite the app folder.
 
```
appc new -t titanium -n ALLOY101 -i com.domain.alloy101
cp -r app ~/workspace/ALLOY101/.
```

## Resources

* [Finalized Project Repository](https://github.com/appcelerator-training/learning-modules-labs/tree/master/ALLOY100/ALLOY100)