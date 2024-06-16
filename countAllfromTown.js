function countAllFromTown(reg_num) {
  const fromStellies = [];
  const reg_num_array = reg_num.split(',');
  let count = 0;
  for (let i = 0; i < reg_num_array.length;i++) {
    if(reg_num_array[i].startsWith('CL')) {
      count++
    }
  }
  return count;
}
