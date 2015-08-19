# README

## Create an Android Maps API V2 key by following these steps:

- Visit https://cloud.google.com/console?redirected=true#/project and log into your Google account (if necessary) 
	- If you do not already have a project, create a project with a name of your choice.
	- On the left, click APIs & Auth
	- Click on *APIs* and then *Google Maps Android API v2*.  Enable the API if it is not already.
	- On the left, click *Credentials* and then *Add credentials* and *API Key*
	- Create a new Android key from the selection box and click *Add package name and fingerprint*
	- Enter your app's App ID in the Package Name box and your SHA1 key
	- To determine the SHA1 key associated with Appcelerator's test development account (not suitable for publishing), open a terminal window and enter the following command (on OS X, Windows will be slightly different): `keytool -list -v -keystore ~/Library/Application\ Support/Titanium/mobilesdk/osx/YOUR_TI_SDK_VERSION_HERE/android/dev_keystore`
		- When prompted for the password, press Enter (there is no password).
		- Copy the SHA1 key from the output and paste it into the SHA1 fingerprint box in the API console and then click Register.
		- Copy the resulting API key and paste it into the XML of your tiapp.xml file in the place indicated in that sample code.