 //打印1-100之间所有奇数之和
   
   
   
   //打印1-100之间的数
/*var sum = 0;
for (var i = 1; i <= 100; i++) {
    //判断i是否是奇数
    //不能被2整除的数就是奇数
    if (i % 2 != 0); {
        //如果i除以2有余数则证明i是奇数
        //console.log(i);
        sum = sum +i;
    }
}
console.log("奇数之和为：" + sum) */



//打印1-100之间所有7的倍数的个数及总和
  
  //定义一个变量，来保存总和 
/*var sum = 0;
var count = 0;
//打印1-100之间所有的数
for (var i = 1; i <= 100; i++) {
    //判断i是否是7的倍数
    if (i % 7 == 0) {
        //console.log(i);
        sum += i;
        //使计数器自增1
        count++;
    }
} console.log("总和为：" + sum);
console.log("总数量为：" + count);*/

//水仙花数是指一个3位数，它的每个位上的数字的3次幂之和等于它本身。
//(例如：1^3 +5^3+3^3=153),请打印所有的水仙花数

//打印所有的三位数
/*for (var i = 100; i < 1000; i++) { //打印所有的三位数
    var bai = parseInt(i / 100);  //取百位的数字  
    var shi = parseInt((i - bai * 100) / 10);//取十位的数字
    var ge = parseInt(i % 10); //取个位的数字
    if (bai * bai * bai + shi * shi * shi + ge * ge * ge == i) { //判断i是否是水仙花的数字
        console.log(i);
    }
}*/
 //在页面中接受一个用户输入的数字，并判断该数是否是质数
//质数只能被1和它自身整除的数，1不是质数也不是合数，，质数必须是 大于1的自然数。

//var num = prompt("请输入一个大于1的整数：");
////判断这个数是否合法
//if (num <= 1) {
//    alert("该值不合法！");
//} else { //创建一个变量来保存当前的数的状态
//      //默认当前num是质数  
//    var flag = true;
//    for (var i = 2; i < num; i++) {
//        //console.log(i);
//        //判断num是否能被i整除
//        if (num % i == 0) {
//            //如果num能被i整除，则说明num一定不是质数
//            //设置flag为false
//            flag = false;
//        }
//    }
//    //如果num是质数则输出
//    if (flag) {
//        alert(num + "是质数！！！");
//    } else {
//        alert("这不是一个质数！");
//    }

//}
//嵌套for循环！

/*
 *   通过程序来输出以下的图形：
 *   
 *   *
 *   **
 *   ***
 *   ****
 *   *****
 *   ******
 *   
 *   ******
 *   ******
 *   ******
 *   ******
 *   ******
 *   
 */

  //向body中输出一个内容
//document.write("******<br />");
//document.write("******<br />");
//document.write("******<br />");
//document.write("******<br />");
//document.write("******<br />");
//document.write("******<br />");
//通过一个for循环来输出图形
//这个for循环执行几次，图形的高度就是多少
//它可以用来控制图形的高度
//for (var i = 0; i < 10; i++) {
//    /*
//     * 在循环的内部再创建一个循环，用来控制图形的宽度
//     * 目前我们的外部的for循环执行1次，内部的就会执行5次
//     * 
//     */
//    for (var j = 0; j < i+1 ; j++){
//      document.write("*");
//}

//    document.write("<br />");

//}

/*1.打印99乘法表
1 * 1=1
1 * 2=2 2 * 2=4 3 * 3=9
1 * 3=3 2 * 3=6 3 * 3=9
                          ...9*9=81

//for (var i = 1; i <=9; i++) {

//    for (var j = 1; j <= i; j++) {
//        document.write(j + "*" + i + "=" + i * j +"&nbsp;&nbsp;&nbsp;");
//    }
//    document.write("<br />");
//}

2.打印出2-100之间所有的质数
*/

//for (var i = 2; i <= 100; i++) {
//    var flag = true;
//    for (var j = 2; j <i; j++) {
//        if (i % j == 0) {
//            flag = false;
//        }
//    }
//    if (flag) {
//        console.log(i);
//    }
//}