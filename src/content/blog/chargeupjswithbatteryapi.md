---
slug: "chargeupjswithbatteryapi"
title: "Charge Up JavaScript with Battery API"
description: "A small documentation about the JavaScript Battery api of the browser."
pubDate: "Mar 28 2024"
heroImage: "/blog-placeholder-4.jpg"
---

## Introduction

Battery api is a powerful tool to get battery information with just a few lines of code. You can check current battery status like battery level & charging or not in your web app using Battery API. Also it provides event listeners. This battery api is a part of **Browsers Navigator API**.

## Use cases of it ?

Here are few great use cases of the Battery API

- **Battery Status Display**: You can build a simple web app that informs user about their current battery level and charging status. This is basically a fun project.

- **Power-Saving Strategies**: Changing your web app's behavior based on battery level, so that your web app use less power and reduce the power consumption for low battery situations.

- **Low Battery Alerts**: Warn users when their battery is critically low.

## How to use it ?

To get this **Battery API**, we can use this snippet - `navigator.getBattery()`. This will return a promise, when the battery object which contains of the followings:

```javascript
navigator.getBattery().then(battery => {
console.log(battery)
}
```

- **charging**: If `true` that means the device is charging else charger is disconnected.

```javascript
navigator.getBattery().then((battery) => {
	if (battery.charging) {
		console.log("Device is charging");
	} else {
		console.log("Device is not charging");
	}
});
```

- **chargingTime**: An estimate (in seconds) of the remaining time to fully charge the battery. This may not be available on all devices. Truly says for my device it was showing Infinity.

- **dischargingTime**: An estimate (in seconds) of the remaining time until the battery is empty. Same as chargingTime this may not be available on all devices. For my device it was showing Infinity again.

- **level**: Represents the current battery percentage in 0 to 1 range where 1 means fully charged i.e. 100%.

```javascript
navigator.getBattery().then(battery => {
console.log(`Current battery level = ${battery.level*100}%`)
}
```

- **onchargingchange**: This event listener will be triggered when the charging state of your device changes i.e., when you connect your device to charging or you disconnect it from charging.

```javascript
navigator.getBattery().then((battery) => {
	battery.addEventListener("chargingchange", () => {
		console.log("Charging state changed:", battery.charging);
	});
});
```

- **onchargingtimechange**: This event (_potentially_ or _theoretically_) triggers when the chargingTime property value changes.

```javascript
navigator.getBattery().then((battery) => {
	battery.addEventListener("chargingtimechange", () => {
		console.log("Charging time has changed");
	});
});
```

- **ondischargingtimechange**: This event (_potentially_ or _theoretically_) triggers when the dischargingTime property value changes. Again I don't have much idea about `ondischargingtimechange` and `onchargingtimechange` because _Infinity_ is always _Infinity_, It does not changes and the event listener does not get triggered.

```javascript
navigator.getBattery().then((battery) => {
	battery.addEventListener("dischargingtimechange", () => {
		console.log("Discharging time has changed");
	});
});
```

- **onlevelchange**: This event triggers whenever the battery level (level property) changes. You can use this to update UI if you are showing the battery level in your web app.

```javascript
navigator.getBattery().then((battery) => {
	battery.addEventListener("levelchange", () => {
		console.log("battery level has changed");
		updateUI();
	});
});
```

## Conclusion

Although **Battery API** is a must known Browser API it's a good to know api. It will help you the optimize your web app based on user's device battery level. I am think about creating a simple web app and android app using this api for fun. Let me know your thoughts about this post and about the app ideas.
