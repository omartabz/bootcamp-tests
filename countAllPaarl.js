function countAllPaarl(reg_nums) {
    const reg_num_array = reg_nums.split(',').map(reg_num=>reg_num.trim());
     let count = 0;
     for (let i =0 ;i < reg_num_array.length;i++) {
       if(reg_num_array[i].startsWith('CJ')) {
         count++;
       }
     }
     return count;
   }
     