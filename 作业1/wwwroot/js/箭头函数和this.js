//判断并证明事件处理函数中的this，等于target还是currentTarget

//已有如下代码：
//var sname = "飞哥";
//var a = {
//    sname: '老程',
//    fn: function (snane) {
//        console.log(this.sname);
//    }
//}
//a.fn();
//请用不同的方式调用fn()函数，能分别打印出‘飞哥’和‘老程’
//不改变上述代码，分别使用call()和apply() ，打印出‘文轩’和‘两开花’
var a = {
    sname: '老程',
    fn: function (snane) {
        console.log(this.sname);
    }
}
a.fn();
a.sname = sname;
a.fn();

// 将fn()永久拷贝到showName() ，始终打印‘源栈最棒！^ _ ^’