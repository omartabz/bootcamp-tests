var itemList = [{name : 'apples', qty : 10}, 
                {name : 'pears', qty : 37}, 
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3}, 
 ]; 
var results = [ {name : 'pears', qty : 37}, 
               {name : 'bananas', qty : 27}, 
];  

function findItemsOver(list, threshold){ 
  var itemsOverThreshold = []; 
  for(let j=0; j<list.length; j++){ 
    var item = list[j]; if(item.qty > threshold){ 
      itemsOverThreshold.push(list[j]); 
    } 
  } return itemsOverThreshold; 
};

function findItemsOver20(list){
    var itemsOver20 = [];
    for(let i=0; i<list.length; i++){
    const listItem = list[i];
    if(listItem.qty > 20){
        itemsOver20.push(listItem);
    }
  }
  return itemsOver20;
}
