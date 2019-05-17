//1.在封装作业的基础上，为Course添加两个子类：主修课（MajorCourse）和辅修课（ElectiveCourse）

//2.声明一个Stundent类，包含name和score两个属性，让Course的Students包含的是Student的对象

//3.主修课需要参加考试，所以有一个Exam(student)方法；辅修课只需要测评，所以有一个方法Assess(student)

//4.创建一个MajorCourse的实例，运行它的Exam(student)方法，结束课程（使用end()方法），并给该student该course上的score赋值为50 - 100的随机整数

//5.创建一个ElectiveCourse的实例，运行它的Exam(student)方法，结束课程（使用end()方法），给该student该course上的score赋值为ABCDE中的一个随机值

//6.给Course声明一个静态的GetStudentsByName(name) ，能根据不同的name返回不同的整数值（参加该course的学生数量）

//7.在子类调用GetStudentsByName(name)

//8.说明：为什么子类可以继承父类的实例和静态方法？
