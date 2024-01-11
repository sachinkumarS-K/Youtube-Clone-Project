export function getDate(d1) {
     const d2 = new Date()
  let months;
   let Difference_In_Time = d2.getTime() - d1.getTime();

   // To calculate the no. of days between two dates
   let Diff = Math.round(Difference_In_Time / (1000 * 3600 * 24));
   return Diff;
}
