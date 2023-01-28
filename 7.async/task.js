class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if(time === null || typeof callback === 'undefined') {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.includes(time,0)) {
            console.warn('Уже присутствует звонок на это же  время');
            return;
        }
        this.alarmCollection.push({
               time: time,
               callback: callback,
               canCall: true
        });
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time != time);
    }
    getCurrentFormattedTime() {
        const date = new Date();
        const time = String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');     
        return time;
    }
    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                if(item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                    item.canCall = false;
                    item.callback();
                }
            })
        }, 1000)
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(item => {
            item.canCall = true;
        })
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
 }