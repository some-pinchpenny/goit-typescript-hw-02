/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDays {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Fiday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

const isWeekend = (weekDay: weekDays): boolean => {
  if (weekDay === weekDays.Sunday || weekDay === weekDays.Saturday) {
    return true;
  }
  return false;
};
