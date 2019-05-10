//1.用class声明一个课程（Course），包含属性：name，startDate，endDate，students，以及方法：begin()和end() 

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



