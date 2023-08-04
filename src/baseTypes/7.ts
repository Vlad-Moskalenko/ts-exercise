/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekday {
  Mon,
  Thu,
  Wed,
  Thur,
  Fri,
  Sat,
  Sun
}

const isWeekend = (day: Weekday): boolean => {
  return day === Weekday.Sat || day === Weekday.Sun;
}
