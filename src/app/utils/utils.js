import { differenceInSeconds } from "date-fns";

export const convertHexToRGB = (hex) => {
  // check if it's a rgba
  if (hex.match("rgba")) {
    let triplet = hex.slice(5).split(",").slice(0, -1).join(",");
    return triplet;
  }

  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");

    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
};

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

export function isMobile() {
  if (window) {
    return window.matchMedia(`(max-width: 767px)`).matches;
  }
  return false;
}

export function isMdScreen() {
  if (window) {
    return window.matchMedia(`(max-width: 1199px)`).matches;
  }
  return false;
}

function currentYPosition(elm) {
  if (!window && !elm) {
    return;
  }
  if (elm) return elm.scrollTop;
  // Firefox, Chrome, Opera, Safari
  if (window.pageYOffset) return window.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(elm) {
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent !== document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

export function scrollTo(scrollableElement, elmID) {
  var elm = document.getElementById(elmID);

  if (!elmID || !elm) {
    return;
  }

  var startY = currentYPosition(scrollableElement);
  var stopY = elmYPosition(elm);

  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 50);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout(
        (function (leapY) {
          return () => {
            scrollableElement.scrollTo(0, leapY);
          };
        })(leapY),
        timer * speed
      );
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (let i = startY; i > stopY; i -= step) {
    setTimeout(
      (function (leapY) {
        return () => {
          scrollableElement.scrollTo(0, leapY);
        };
      })(leapY),
      timer * speed
    );
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
  return false;
}

export function getTimeDifference(dateStringISO) {
  const currentDate = new Date();

  // Parse ISO 8601 date string manually
  const [year, month, day, hours, minutes, seconds] = dateStringISO.match(/\d+/g);
  const date = new Date(year, month - 1, day, hours, minutes, seconds);

  const difference = Math.abs((new Date(currentDate).getTime() - date.getTime()) / 1000); // Difference in seconds

  if (difference < 60) return `${Math.floor(difference)} sec`;
  else if (difference < 3600) return `${Math.floor(difference / 60)} min`;
  else if (difference < 86400) return `${Math.floor(difference / 3600)}h`;
  else if (difference < 86400 * 30) return `${Math.floor(difference / 86400)}d`;
  else if (difference < 86400 * 30 * 12) return `${Math.floor(difference / (86400 * 30))} mon`;
  else return `${Math.floor(difference / (86400 * 30 * 12))} y`;
}


export function generateRandomId() {
  let tempId = Math.random().toString();
  let uid = tempId.substr(2, tempId.length - 1);
  return uid;
}

export function getQueryParam(prop) {
  var params = {};
  var search = decodeURIComponent(
    window.location.href.slice(window.location.href.indexOf("?") + 1)
  );
  var definitions = search.split("&");
  definitions.forEach(function (val, key) {
    var parts = val.split("=", 2);
    params[parts[0]] = parts[1];
  });
  return prop && prop in params ? params[prop] : params;
}

export function classList(classes) {
  return Object.entries(classes)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(" ");
}

export const flat = (array) => {
  var result = [];
  array.forEach(function (a) {
    result.push(a);
    if (Array.isArray(a.children)) {
      result = result.concat(flat(a.children));
    }
  });
  return result;
};

export const getDateFromTimestamp = (timestamp) => {
  // Check if timestamp is defined and is an instance of Date
  if (!timestamp || !(timestamp instanceof Date)) {
    return '';
  }

  // Get day, month, and year
  const day = timestamp.getDate().toString().padStart(2, '0');
  const month = (timestamp.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const year = timestamp.getFullYear();

  // Format: dd-mm-yyyy
  return `${day}-${month}-${year}`;
};


export const removeTimeFromDate = (date) => {
  if (date === '' || date === null || date === undefined) {
    return ''
  }
  const currentdate = new Date(date)
  let month = currentdate.getMonth() + 1
  let day = currentdate.getDate()
  if (month < 10) {
    month = `0${month}`
  }
  if (day < 10) {
    day = `0${day}`
  }
  return `${currentdate.getFullYear()}-${month}-${day}`
}

export const formatDateInSlash = (date) => {
  if (date === null || date === '' || date === undefined) {
    return ''
  }

  date = new Date(date)
  const currentdate = new Date(date.setDate(date.getDate()))

  const formattedDate = `${currentdate.getMonth() + 1}/${currentdate.getDate()}/${currentdate.getFullYear()}`
  return formattedDate
}

export const getDateTime = (date) => {
  if (!date) {
    return '';
  }
  // Parse ISO 8601 date string manually
  const [year, month, day, hours, minutes, seconds] = date.match(/\d+/g);
  const currentDate = new Date(year, month - 1, day, hours, minutes, seconds);

  const formattedDate = currentDate.toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return formattedDate;
};

export const dateFormater = (date) => {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = date.getDate();
  // get month from 0 to 11
  var month = date.getMonth();
  // conver month digit to month name
  month = months[month];
  var year = date.getFullYear();

  // show date in two digits
  if (day < 10) {
    day = '0' + day;
  }

  // now we have day, month and year
  // arrange them in the format we want
  return month + ' ' + day + ', ' + year;
}

export const getLocalDateFromTimestamp = (timestamp) => {
  const milliseconds = timestamp?.seconds * 1000 + Math?.round(timestamp?.nanoseconds / 1e6);
  const isoDate = new Date(milliseconds)?.toISOString();
  return isoDate;
};

export const getIsoDate = () => {
  const isoDate = new Date().toISOString();
  return isoDate;
};

export const getYearsFromTimestamp = (timestamps) => {
  // Convert ISO format timestamps to Date objects
  const startDate = new Date(timestamps[0]);
  const endDate = new Date(timestamps[1]);

  // Calculate the difference in months
  const diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

  // Convert months to years and months
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  // Return the duration as a string
  return `${years}.${months}`;
}

export const color = (name) => {

  const colors = {
    success: "#4caf50", // Green color for success
    error: "#FF3D57", // Red color for error
    primary: "#272829", // Blue color for primary
    secondary: "rgba(255, 255, 255, 0.08)", // Orange color for secondary
    warning: "#ffeb3b", // Yellow color for warning
    lightSuccess: "#358311", // Lighter shade of green for success
    lightError: "#ea8d99", // Lighter shade of red for error
    lightPrimary: "#64b5f6", // Lighter shade of blue for primary
    lightSecondary: "#ffb74d", // Lighter shade of orange for secondary
    lightWarning: "#fff176" // Lighter shade of yellow for warning
  };

  if (name) {
    return colors[name];
  } else {
    return colors;
  }
};

export const stringToJson = (string) => {
  try {
    return JSON.parse(string)
  } catch (e) {
    return string
  }
}

export const jsonToString = (string) => {
  try {
    return JSON.stringify(string)
  } catch (e) {
    return string
  }
}