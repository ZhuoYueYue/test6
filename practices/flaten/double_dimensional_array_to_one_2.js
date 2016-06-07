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


   for(var i=0;i<b.length-1;i++){              //对重复数字进行删除
           for (var j=i+1;j<b.length;j++){ 

             	if(b[i]==b[j]) {
             		
             		b.splice(j,1);
               	}

           }
     
    }
return b;
}

module.exports = double_to_one;
