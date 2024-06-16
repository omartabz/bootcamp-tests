function isWeekday(day){
    var weekend_days= ['Saturday', 'Sunday'];
     return !weekend_days.includes(day);
   }
   console.log(isWeekday('Saturday'));