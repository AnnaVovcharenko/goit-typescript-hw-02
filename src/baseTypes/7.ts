/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/


enum WeekeDay {


  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"

}




function  isWeekend(day: WeekeDay): boolean  {
  return day === WeekeDay.Saturday || day === WeekeDay.Sunday;

}