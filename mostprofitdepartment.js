var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];
var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 12006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];
function mostProfitableDepartment(sales_data){
  const salesMap = {};
  for(var i=0; i<sales_data.length; i++){
      const sale = sales_data[i];
      salesMap[sale.department] = 0;
  }
  for(var i=0; i<sales_data.length; i++){
      const sale = sales_data[i];
      var currentDepartTotal = salesMap[sale.department];
      currentDepartTotal += sale.sales;
      salesMap[sale.department] = currentDepartTotal;
  }
  var currentMaxSales = 0;
  var currentDepart = "";
  for(const departSale in salesMap){
      const currentDepartSales = salesMap[departSale];
      if(currentDepartSales > currentMaxSales){
          currentMaxSales = currentDepartSales;
          currentDepart = departSale;
      }
  }
  return currentDepart;
}
function mostProfitableDay(Sales_Data){
  const dayMap = {};
  for(let i=0; i<Sales_Data.length; i++){
    const sale = Sales_Data[i];
    dayMap[sale.day] = 0;
  }
  for(let i=0; i<Sales_Data.length; i++){
    const sale = Sales_Data[i];
    var currentDayTotal = dayMap[sale.day];
    currentDayTotal += sale.sales;
    dayMap[sale.day] = currentDayTotal;
  }
  var currentDayMaxSales = 0;
  var currentDay = "";
  for(const saleDay in dayMap){
    const currentDaySales = dayMap[saleDay];
    if(currentDaySales > currentDayMaxSales){
      currentDayMaxSales = currentDaySales;
      currentDay = saleDay;
    }
  }
  return currentDay;
}

console.log("Most Profitable Department for salesData: ", mostProfitableDepartment(salesData));
console.log("Most Profitable Day for salesData: ", mostProfitableDay(salesData));
console.log("Most Profitable Department for salesData2: ", mostProfitableDepartment(salesData2));
console.log("Most Profitable Day for salesData2: ", mostProfitableDay(salesData2));