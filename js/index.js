import {Student} from "./student.js"

const student1 = new Student("Іван", "Петров", 2000);
student1.scores = [95, 92, 88, 96];
for (let i = 1; i <= 15; i++)
  student1.present();
student1.absent();
student1.absent();
student1.absent();

const student2 = new Student("Марія", "Коваленко", 2001);
student2.scores = [80, 85, 90, 78];
for (let i = 1; i <= 15; i++)
  student2.present();
student2.absent();
student2.absent();
student2.absent();
console.log(student2.getAverageScore());


const student3 = new Student("Олексій", "Местхарм", 2002);
student3.scores = [90, 85, 90, 98];
for (let i = 1; i <= 24; i++)
  student3.present();
student3.absent();

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());