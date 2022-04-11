const app =require('./app');
//var x='10';
//var y=20;
//console.log(x+y);
//if(x===10){
    //console.log("equal");
    //for(i=0;i<10;i++){
       // console.log(i);
   // }
//}
let arr = [2,5,7,4,5,3,4,9];
let result =arr.filter((item) => {
    //console.log(item);
    //return item===3;
    return item<4;
})
console.log(result);
    //console.log(arr);
   // console.log(arr[1]);

//console.log(app.z());