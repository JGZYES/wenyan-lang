// locale/zh-wenyan.js

dayjs.locale(
  {
    name: "zh-wenyan",
    weekdays: "日曜_月曜_火曜_水曜_木曜_金曜_土曜".split("_"),
    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
    months: "正月_杏月_桃月_梅月_榴月_荷月_兰月_桂月_菊月_良月_冬月_腊月".split("_"),
    monthsShort: "正_杏_桃_梅_榴_荷_兰_桂_菊_良_冬_腊".split("_"),
    ordinal: (number, period) => {
      switch (period) {
        case 'W':
          return `第${number}周`
        default:
          return `第${number}日`
      }
    },
    weekStart: 1,
    yearStart: 4,
    formats: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日 HH时mm分",
      LLLL: "YYYY年M月D日 dddd HH时mm分",
      l: "YYYY/M/D",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日 dddd HH:mm",
    },
    relativeTime: {
      future: "%s后",
      past: "%s前",
      s: "顷刻",
      m: "一刻",
      mm: "%d刻",
      h: "一时辰",
      hh: "%d时辰",
      d: "一日",
      dd: "%d日",
      M: "一月",
      MM: "%d月",
      y: "一年",
      yy: "%d年",
    },
    meridiem: (hour, minute) => {
      const hm = (hour * 100) + minute
      if (hm < 600) return '鸡鸣'
      if (hm < 900) return '平旦'
      if (hm < 1130) return '日出'
      if (hm < 1230) return '日中'
      if (hm < 1400) return '日昳'
      if (hm < 1800) return '晡时'
      return '黄昏'
    }
  }, null, false);