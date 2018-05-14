# Flash Sale Countdown Timer

### Creates & initializes Countdown Timer on any page with just a start and end date

##### Flash Sale Countdown Timer Widget Plugin for Bodybuilding.com Flash Sales

<br/>

## Features

* Set Start Date - Automatically checks if it should run/add
* Set End Date - Automatically checks if it should run/add
* Choose Container To Append To
* Customize Text and Colors
  * Choose Background Color
  * Choose Text Colors for both Header and Countdown
  * Choose Font-Family and Font-Wweight
* Toggle to show days remaining next to other numbers
* Choose Max-Width of timer container

<br />

## Usage
**1. Add script and css tags at top of HTML content block**

```javascript
<link rel="stylesheet" href="https://www.bodybuilding.com/scripts/productPages.css"/>
<script type="text/javascript" src="https://www.bodybuilding.com/scripts/productPages.js"></script>
```

**2. Create and Initialize New CountdownT imer**

#### All that is technically needed to start and create a timer is a Start and End date
```javascript
var flasher = new FlashSale({
    saleStart: "May 14 2018 11:52:00 MDT",
    saleEnd: "May 16 2018 23:59:59 MDT"
});
```

<br />

## Options


### Initialization Options

Options | Default | Description
------------ | ------------- | -------------
appendTo: | "#vendor-content" | Name of container to append countdown to.
backgroundColor: | "#000000" | Background color of the countdown container.
days: | false | Change to true so days shows next to hours, etc. (example - 2d 14h 43m 12s).
font: | "Arial, Helvetica, sans-serif" | Font to use within the countdown timer.
fontSize: | "30px" | Font Size to use within the countdown timer.
fontWeight: | "300" | Font Weight to use within the countdown timer.
headerText: | "SALE ENDS IN:" | Header Text for countdown timer.
headerTextColor: | "#FFFFFF" | Text color of header.
maxWidth: | "750px" | Max Width of whole timer, can be changed to "100%", etc.
saleEnd: | May 15 2018 23:59:59 MDT | When does sale End? Must be after saleStart date.
saleStart: | "May 12 2018 23:59:59 MDT" | When does sale Start? Must be before saleEnd date.
timeColor: | "#ff2222" | Text color of time elements.
