﻿//1.在函数student()中声明了函数域变量name、age和female，使用闭包机制，将其暴露到函数外部


//2.解释以下代码运行结果：（ condition ? <statement when true> : <statement when false>） 
//function foo(x) {
//    var tmp = 3;
//    return function (y) {
//        x = x ? x + 1 : 1;
//        console.log(x + y + tmp);
//    }
//}

//var bar = foo(-1);
////或者：var bar = foo(1);
////或者：var bar = foo(0);

//bar(10);

//3.改动以下代码，让其输出如图所示，并说明理由。
//function buildList(list) {
//    var result = [];
//    for (vari = 0; i < list.length; i++) {
//        result.push(function () {
//            console.log('item' + i + ': ' + list[i])
//        });
//    }
//    return result;
//}

//(function () {
//    var fnlist = buildList([1, 2, 3]);
//    for (var i = 0; i < fnlist.length; i++) {
//        fnlist[i]();
//    }
//})();

//图  ：  item0: 1
//        item1: 2
//        item2: 3 

