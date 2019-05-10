//1.将源栈同学姓名 / 昵称装入数组，再根据该数组输出共有多少同学
//var arr = ["下半年两开花", "老程", "老赵", "路炜", "文轩", "子祥", "采苓", "王平", "我"];
//count = arr.length;
//alert(count);

//2.在上述数组头部加上小鱼老师，末尾加上大飞哥
//var arr = ["下半年两开花", "老程", "老赵", "路炜", "文轩", "子祥", "采苓", "王平", "我"]
//arr.unshift("小鱼老师");
//arr.push("大飞哥");
//console.log(arr);

//3.如果一个数只能被1和它自己整除，这个数就被称之为“素数”。请找出100以内的所有素数。然后封装成一个函数findPrime(max) ，可以返回max以内的所有素数。
//var prime = function (n) {
//    var i, j;
//    var arr = [];

//    for (i = 1; i < n; i++) {
//        for (j = 2; j < i; j++) {
//            if (i % j === 0) {
//                break;
//            }
//        }

//        if (i <= j && i != 1) {
//            arr.push(i);
//        }
//    }
//    return arr;
//};
//console.log(prime(100));

//4.建立一个函数getMaxNumber() ，可以接受任意多各种类型（整数、小数、正数、负数、字符串、布尔值等）的参数，并找出里面最大的数（忽略其他类型）
//function getmaxnumber() {
//    for (var i = 0; i < arr.length ; i++) {
//        if (max < i) {         
//} 
//console.log(max);



//5.删除一个数组里面重复的元素
//var arr = [1, 1, 2, 3, 4, 5,"zhang","zhang"]
//for (var i = 0; i < arr.length; i++) {
//    for (var j = i+1; j < arr.length; j++) {
//        if (arr[i] == arr[j]) {
//            arr.splice(j, 1);
//            j--;
//        }
//    }
//} console.log(arr);


//6.使用JavaScript内置字符串函数，处理 “‘源栈’：飞哥小班教学，线下免费收看” ：“飞哥”改成“大神”，“线下”改成“线上”。 

/*7.将数组['why', 'gIT', 'vs2019', 'community', 'VERSION']规范化，所有字符串：
首字母大写开头，其他字母小写
截去超过6个字符的部分，如'community'将变成'Commun'*/

//8.创建一个函数getRandomArray(length, max) ，能返回一个长度不大于length，每个元素值不大于100随机整数数组。\ 

   
    

//9.不使用JavaScript内置函数，将一个字符串顺序颠倒，比如：'hello,yuanzhan' 变成 'nahznauy,olleh'。 

//10.统计出这段文字中有多少个单词：
/*There are two ways to create a RegExp object: a literal notation and a constructor.
To indicate strings, the parameters to the literal notation do not use quotation marks 
while the parameters to the constructor function do use quotation - marks.So the following 
expressions create the same regular expression */
//var text = 'There are two ways to create a RegExp object : a literal notation and a constructor. To indicate strings , the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation-marks. So the following expressions create the same regular expression'

//11.编写一个计算源栈返还红包金额的函数 Redbag() ，参考： 







