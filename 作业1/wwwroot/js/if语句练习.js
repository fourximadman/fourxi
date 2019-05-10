//////从键盘输入小明的期末成绩：
//////当成绩为100时，奖励一辆宝马；
//////当成绩为80 - 99时，奖励一台iPhone
//////当成绩为60 - 80时，奖励一本参考书；
//////其他时，什么奖励也没有；

////////score是小明的期末成绩；prompt可以再页面弹出一个输入框；格式是 prompt("");
//////var score = prompt("请输入小明的成绩（0~100）");
////////if 语句判断应该严谨一点，这边要判断值是否合法
//////if (score >100 || score < 0 || isNaN(score) ){
//////    alert("错误的分数");
//////} else {
//////    //根据score的值来决定给小明什么奖励
//////    if (score == 100) {
//////        alert("宝马一台~~~~");
//////    } else if (score >= 80) {
//////        alert("iphone一台~~~~");
//////    } else if (score >= 60) {
//////        alert("参考书一本~~~~~");
//////    } else {
//////        alert("想屁吃~~~~~");
//////    }
//////}

//////大家都知道，男大当婚女大当嫁。那么女方家长要嫁女儿，当然要提出一定的条件：
//////高（height）：180cm以上；富(money)：1000万以上：帅(face)：500以上；
//////如果这三个条件同时满足，则：'我一定要嫁给他'
//////如果三个条件有为真的情况，则：'嫁吧，比上不足比下有余'
//////如果三个条件都不满足，则：'不嫁！'

//////var height = prompt("请输入你的身高（cm）:");
//////var money = prompt("请输入你的财富（万）：");
//////var face = prompt("请输入你的颜值（px）;");
//////if (height >= 180 && money >= 1000 && face >= 500) {
//////    alert("我一定嫁给他");
//////} else if (height >= 180 || money >= 1000 || face >= 500) {
//////    alert("嫁吧，比上不足比下有余");
//////} else {
//////    alert("不嫁");
//////}

/////*
//// * 编写程序，由键盘输入三个整数分别存入变量num1，num2，num3,
//// * 对他们进行排序，并且从小到大输出。
//// *
//// *获取用户输入的三个数
//// * 
//// * prompt()函数的返回值是string类型的  + 把prompt的返回值转换成number;
//// */
//var num1 = +prompt("请输入第一个数：")
//var num2 = +prompt("请输入第二个数：")
//var num3 = +prompt("请输入第三个数：")
//if (num1 < num2 && num1 < num3) {
//    //num1最小，比较num2和num3
//    if (num2 < num3) {
//        //num1 num2 num3
//        alert(num1 + "," + num2 + "," + num3);
//    } else {
//        //num1 num3 num2
//        alert(num1 + "," + num3 + "," + num2);
//    }
//} else if (num2 < num1 && num2 < num3) {
//    //num2最小，比较num1和num3
//    if (num1 < num3) {
//        //num2 num1 num3
//        alert(num2 + "," + num1 + "," + num3);
//    } else {
//        //num2 num3 num1
//        alert(num2 + "," + num3 + "," + num1);
//    }
//} else {
//    //num3最小，比较num1和num2
//    if (num1 < num2) {
//        //num3 num1 num2
//        alert(num3 + "," + num1 + "," + num2);
//    } else {
//        //num3 num2 num1
//        alert(num3 + "," + num2 + "," + num1);
//    }
//}

/////*注意  var num = 10;
//// * if(num == 10){
//// * alert("哈哈哈哈")；
//// * }
//// * 在这个语句运行的时候要注意等号的关系 ==是等于 =是赋值 10赋值给num 永远为真
//// * /

