/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days { MON, TUE, WED, THU, FRI, SAT, SUN };

function isWeekend(day: Days): boolean {
  return day === Days.SAT || day === Days.SUN;
}
  
