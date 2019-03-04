export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function getWeekDay() {
  const names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return names[(new Date()).getDay()];
}

export function isInt(n) {
  return n % 1 === 0;
}

export function formatNumber(x, postfix = '', prefix='') {
  if (!x) {
    return 'N/A';
  }

  if (!isInt(x)) {
    if (x < 0.01) {
      x = '<0.01';
    } else {
      x = x.toFixed(2);
    }
  }

  return `${prefix}${numberWithSpaces(x)}${postfix}`;
}

export function getPercentDiff(prev, current) {
  if (!prev || !current) {
    return 0;
  }

  if (isNaN(prev) || isNaN(current)) {
    return 0;
  }

  return Math.round((current - prev) / prev * 100);
}