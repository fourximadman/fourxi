//1.用class声明一个课程（Course），包含属性：name，startDate，endDate，students，以及方法：begin()和end() 
//生成两个课程对象：JavaScript和SQL
//调用对象的begin()和end()方法，可以在控制台输出开课信息，如：JavaScript于2019年5月5日开课，共有5名同学（两开花、王枫、王平、采铃、老程）报名。
//不修改class，动态的改变begin()方法，使其能影响所有Course对象
//让end()方法为各自对象“自有”，其他对象无法修改
//在Course中使用getter和setter包装endDate，保证endDate不会小于startDate，也不会比startDate多出365天
//判断并证明以下说法：

//ES里的class其实就是一个function
//constructor总是返回class的实例
//当new了一个class之后，class里声明的方法就会被copy到新生成的实例对象上
//JavaScript里面，类就是对象，对象也是类
//只有Function才有prototype
//Javascript是动态类型语言，所以对象的类型是可以随意更改的

const dx = class course {
    constructor(name, startdate, endDate, students) {
        this.name = name;
        this.startdate = '2019.5.5';
        this.endDate = '2019.8.5';
        this.students = '两开花、王枫、王平、采铃、老程';
    }
    begin() {
        console.log(this.name + this.startdate + '开课,共有' + this.students + '五名同学报名');
    }
    end() {
        console.log(this.students + this.endDate + '结束课程。');
    }
};
let js = new dx('JavaScript');
let SQL = new dx('SQL');

js.begin();
js.end();



