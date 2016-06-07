'use strict';

function double_to_one(collection) {

  //在这里写入代码

     var b=[];
     for(var i=0; i<collection.length ;i++){
         
            if(typeof collection[i]=='number'){  //如果是单个的数字
                b.push(collection[i]);
                
            }
        	 else{  
                    for(var j=0;j<collection[i].length;j++){ //是二维数组不是单个数字
                     b.push(collection[i][j]);
                    }
              }
          
	}

    return b;
}

module.exports = double_to_one;
