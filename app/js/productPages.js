(function () {
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function initializeClock(elem, endtime, days) {
        var deadline = new Date(endtime),
            daysSpan = elem.querySelector('.flash__days__span'),
            hoursSpan = elem.querySelector('.flash__hours__span'),
            minutesSpan = elem.querySelector('.flash__minutes__span'),
            secondsSpan = elem.querySelector('.flash__seconds__span');
        function updateClock() {
            var t = getTimeRemaining(endtime);
            if (days) {
                daysSpan.innerHTML = t.days + "d ";
            }
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + "h ";
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + "m ";
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + "s";
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    function buildFlash() {
        var currentTime = new Date(),
            opt = this.options,
            saleEnd = new Date(opt.saleEnd),
            saleStart = new Date(opt.saleStart);
        if (currentTime <= saleEnd && currentTime >= saleStart) {
            var flashContainer = document.createElement('div'),
                flashHeader = document.createElement('h3'),
                flashTimeDiv = document.createElement('div'),
                flashHoursDiv = document.createElement('div'),
                flashHoursSpan = document.createElement('span'),
                flashMinutesDiv = document.createElement('div'),
                flashMinutesSpan = document.createElement('span'),
                flashSecondsDiv = document.createElement('div'),
                flashSecondsSpan = document.createElement('span');
            //CONTAINER
            flashContainer.classList.add("flash__sale__container");
            flashContainer.style.backgroundColor = opt.backgroundColor;
            flashContainer.style.maxWidth = opt.maxWidth;
            //HEADER
            flashHeader.textContent = opt.headerText;
            flashHeader.classList.add('flash__header');
            flashHeader.style.lineHeight = opt.fontSize;
            flashTimeDiv.style.lineHeight = opt.fontSize;
            flashHeader.style.letterSpacing = "2px";
            flashHoursDiv.style.letterSpacing = "2px";
            flashMinutesDiv.style.letterSpacing = "2px";
            flashSecondsDiv.style.letterSpacing = "2px";
            flashHeader.style.fontSize = opt.fontSize;
            flashHoursDiv.style.fontSize = opt.fontSize;
            flashMinutesDiv.style.fontSize = opt.fontSize;
            flashSecondsDiv.style.fontSize = opt.fontSize;
            flashHeader.style.fontFamily = opt.font;
            flashHoursDiv.style.fontFamily = opt.font;
            flashSecondsDiv.style.fontFamily = opt.font;
            flashMinutesDiv.style.fontFamily = opt.font;
            flashHeader.style.fontWeight = opt.fontWeight;
            flashHoursDiv.style.fontWeight = opt.fontWeight;
            flashSecondsDiv.style.fontWeight = opt.fontWeight;
            flashMinutesDiv.style.fontWeight = opt.fontWeight;
            flashHeader.style.color = opt.headerTextColor;
            flashHoursDiv.style.color = opt.timeColor;
            flashSecondsDiv.style.color = opt.timeColor;
            flashMinutesDiv.style.color = opt.timeColor;
            //TIME DIV
            flashTimeDiv.classList.add('flash__time__container');
            //HOURS
            flashHoursDiv.classList.add('flash__hours__container', 'flash__time__cell');
            flashHoursSpan.classList.add('flash__hours__span');
            //MINUTES
            flashMinutesDiv.classList.add('flash__minutes__container', 'flash__time__cell');
            flashMinutesSpan.classList.add('flash__minutes__span');
            //SECONDS
            flashSecondsDiv.classList.add('flash__seconds__container', 'flash__time__cell');
            flashSecondsSpan.classList.add('flash__seconds__span');
            //APPEND
            flashContainer.appendChild(flashHeader);
            
            if (opt.days) {
                var flashDaysDiv = document.createElement('div'),
                    flashDaysSpan = document.createElement('span');
                flashDaysDiv.style.letterSpacing = "2px";
                flashDaysDiv.style.fontSize = opt.fontSize;
                flashDaysDiv.style.fontFamily = opt.font;
                flashDaysDiv.style.fontWeight = opt.fontWeight;
                flashDaysDiv.style.color = opt.timeColor;
                flashDaysDiv.classList.add('flash__days__container', 'flash__time__cell');
                flashDaysSpan.classList.add('flash__days__span');
                flashTimeDiv.appendChild(flashDaysDiv);
                flashDaysDiv.appendChild(flashDaysSpan);
            }
            flashTimeDiv.appendChild(flashHoursDiv);
            flashHoursDiv.appendChild(flashHoursSpan);
            flashTimeDiv.appendChild(flashMinutesDiv);
            flashMinutesDiv.appendChild(flashMinutesSpan);
            flashTimeDiv.appendChild(flashSecondsDiv);
            flashSecondsDiv.appendChild(flashSecondsSpan);
            flashContainer.appendChild(flashTimeDiv);
            document.querySelector(opt.appendTo).appendChild(flashContainer);
            initializeClock(flashContainer, opt.saleEnd, opt.days);
        } else {
            console.log('Time has expired, please set time in future');
        }
    }
    this.FlashSale = function () {
        var defaults = { //Default Options
            appendTo: "#vendor-content",
            backgroundColor: "#00AEEF",
            days: false,
            font: "Arial, Helvetica, sans-serif",
            fontSize: "30px",
            fontWeight: "500",
            headerText: "SALE ENDS IN:",
            headerTextColor: "#FFF",
            maxWidth: "750px",
            saleEnd: "May 22 2018 23:59:59 MDT",
            saleStart: "May 12 2018 23:59:59 MDT",
            timeColor: "#232323"
        };
        function extendDefaults(source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }
        this.options = extendDefaults(defaults, arguments[0]);
        buildFlash.call(this);
    };
}());