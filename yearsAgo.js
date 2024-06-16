function yearsAgo(year) {
var currentYear=new Date().getFullYear();
  var yearsAgo=currentYear-year;
  return yearsAgo;
}
console.log(yearsAgo(new Date().getFullYear() - 2000), yearsAgo(2000));