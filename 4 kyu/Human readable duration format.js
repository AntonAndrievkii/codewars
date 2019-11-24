/* DESCRIPTION
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

/* TESTS
Test.assertEquals(formatDuration(1), "1 second");
Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
Test.assertEquals(formatDuration(120), "2 minutes");
Test.assertEquals(formatDuration(3600), "1 hour");
Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
*/

function formatDuration(seconds) {
  let years = 0;
  let days = 0;
  let hours = 0;
  let min = 0;
  let sec = 0;
  let arrayResult = [];
  let result = "";

  if (seconds === 0) {
    return "now";
  }

  // parse seconds

  while (seconds > 0) {
    if (seconds >= 60 * 60 * 24 * 365) {
      years = Math.floor(seconds / (60 * 60 * 24 * 365));
      seconds -= 60 * 60 * 24 * 365 * years;
      if (years > 1) {
        arrayResult.push(`${years} years`);
      } else {
        arrayResult.push(`${years} year`);
      }
    } else if (seconds >= 60 * 60 * 24) {
      days = Math.floor(seconds / (60 * 60 * 24));
      seconds -= 60 * 60 * 24 * days;
      if (days > 1) {
        arrayResult.push(`${days} days`);
      } else {
        arrayResult.push(`${days} day`);
      }
    } else if (seconds >= 60 * 60) {
      hours = Math.floor(seconds / (60 * 60));
      seconds -= 60 * 60 * hours;
      if (hours > 1) {
        arrayResult.push(`${hours} hours`);
      } else {
        arrayResult.push(`${hours} hour`);
      }
    } else if (seconds >= 60) {
      min = Math.floor(seconds / 60);
      seconds -= 60 * min;
      if (min > 1) {
        arrayResult.push(`${min} minutes`);
      } else {
        arrayResult.push(`${min} minute`);
      }
    } else {
      sec = seconds;
      seconds -= sec;
      if (sec > 1) {
        arrayResult.push(`${sec} seconds`);
      } else {
        arrayResult.push(`${sec} second`);
      }
    }
  }

  for (let i = 0; i < arrayResult.length; i++) {
    if (i == 0) {
      result += arrayResult[i];
    } else if (i > 0 && i < arrayResult.length - 1) {
      result += `, ${arrayResult[i]}`;
    } else {
      result += ` and ${arrayResult[i]}`;
    }
  }

  return result;
}
