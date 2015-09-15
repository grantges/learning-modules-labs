# NTWRK100

In this Lab Exercise you will learn how to create HTTP network calls.

## Objective

Create an Alloy app skeleton that leverages Alloy's platform directives at the XML and TSS level, as well as platform-specific folders and platform conditionals at the controller level. The app should be able to run on iPhone/iPod Touch, iPad, Android Phone and Android tablet, and be able to display a platform-specific greeting, while reusing your views, styles and controllers.

The app will query a remote API endpoint and load data into a `TableView`.

## Screenshot

![](https://monosnap.com/file/wzqXlenBzIe6km2PWUolOgZpIUMgf7.png)

## Import the Project using the CLI

Create a new Alloy project, then overwrite the app folder. Don't forget to include the `platform/android/res` folder for the Android custom theme.

```
appc new -t titanium -n NTWRK100 -i com.domain.ntwrk100 --no-service
cp -r app ~/workspace/NTWRK100/.
```