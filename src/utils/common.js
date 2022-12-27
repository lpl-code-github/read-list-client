// 获取当前时间
export function getCurDate() {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var day = now.getDate()
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day
    return year + '-' + month + '-' + day
}

//SessionStorage 关闭浏览器就不存在了。 //LocalStorage 本地（关闭浏览器数据还在） Vuex 替代cookie
//向SessionStorage 存储一个JSON对象
export function setSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value)) //JSON-转换-字符串
}

//取sessionStorage 中的对象

export function getSessionStorage(key) {
    var str = sessionStorage.getItem(key)
    if (str == '' || str == null || str == 'null' || str == undefined) {
        return null
    } else {
        return JSON.parse(str) //字符串转为 JSON对象
    }
}

//删除 sessionStorage 中的对象
export function removeSessionStorage(key) {
    sessionStorage.removeItem(key)
}

//向LocalStorage 存储一个JSON对象
export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)) //JSON-转换-字符串
}

//取向LocalStorage中对象
export function getLocalStorage(key) {
    var str = localStorage.getItem(key)
    if (str === '' || str == null || str === 'null' || str === undefined) {
        return null
    } else {
        return JSON.parse(str) //字符串转为 JSON对象
    }
}

//删除LocalStorage中的对象
export function removeLocalStorage(key) {
    localStorage.removeItem(key)
}

// 时间转换
export function disposeTime (time) {
    var data = new Date(time);
    var dateTimeStamp = data.getTime()
    var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var month = day * 30;
    var year = month * 12;
    var now = new Date().getTime();   //获取当前时间毫秒
    var diffValue = now - dateTimeStamp;//时间差

    var result = "";
    if (diffValue < 0) {
        result = "" + "未来";
    }
    var minC = diffValue / minute;  //计算时间差的分，时，天，周，月
    var hourC = diffValue / hour;
    var dayC = diffValue / day;
    var weekC = diffValue / week;
    var monthC = diffValue / month;
    var yearC = diffValue / year;

    if (yearC >= 1) {
        result = " " + parseInt(yearC) + "年前"
    } else if (monthC >= 1 && monthC < 12) {
        result = " " + parseInt(monthC) + "月前"
    } else if (weekC >= 1 && weekC < 5 && dayC > 6 && monthC < 1) {
        result = " " + parseInt(weekC) + "周前"
    } else if (dayC >= 1 && dayC <= 6) {
        result = " " + parseInt(dayC) + "天前"
    } else if (hourC >= 1 && hourC <= 23) {
        result = " " + parseInt(hourC) + "小时前"
    } else if (minC >= 1 && minC <= 59) {
        result = " " + parseInt(minC) + "分钟前"
    } else if (diffValue >= 0 && diffValue <= minute) {
        result = "刚刚"
    }

    console.log(result)
    return result
}

export function dateFormat(timeStr) {
    var curTime = new Date(timeStr); //这里的timeStr是时间戳
    var addHour = curTime.setHours(curTime.getHours());
    return parseTime(addHour, "{y}-{m}-{d} {h}:{i}:{s}"); //parseTime将时间戳转换成2021-10-10 10：25：58，下面附上这个方法
}


export function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null;
    }
    const format = pattern || "{y}-{m}-{d}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        if (typeof time === "string" && /^[0-9]+$/.test(time)) {
            time = parseInt(time);
        } else if (typeof time === "string") {
            time = time
                .replace(new RegExp(/-/gm), "/")
                .replace("T", " ")
                .replace(new RegExp(/\.[\d]{3}/gm), "");
        }
        if (typeof time === "number" && time.toString().length === 10) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
            return ["日", "一", "二", "三", "四", "五", "六"][value];
        }
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
    return time_str;
}
