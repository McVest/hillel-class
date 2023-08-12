export class Student {
  scores = [];
  
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this._attendance = new Array(25).fill(undefined);
  }
  
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
  
  getAverageScore() {
    if (this.scores.length === 0)
      return 0;
    const averageScore = this.scores.reduce((sum, currentValue) => sum + currentValue, 0);
    return averageScore / this.scores.length;
  }
  
  present() {
    const undefinedIndex = this._attendance.findIndex(value => value === undefined);
    undefinedIndex === -1 ? console.warn(`У масиві відвідуваності студента ${this.firstName} ${this.lastName} не може бути більше 25 записів`) : this._attendance[undefinedIndex] = true;
  }
  
  absent() {
    const undefinedIndex = this._attendance.findIndex(value => value === undefined);
    undefinedIndex === -1 ? console.warn(`У масиві відвідуваності студента ${this.firstName} ${this.lastName} не може бути більше 25 записів`) : this._attendance[undefinedIndex] = false;
  }
  
  getAttendancePercentage() {
    const presentCount = this._attendance.filter(value => value === true).length;
    return presentCount / this._attendance.length;
  }
  
  summary() {
    const averageScore = this.getAverageScore();
    const attendancePercentage = this.getAttendancePercentage();
    switch (true) {
      case averageScore > 90 && attendancePercentage > 0.9:
        return "Молодець!";
      case averageScore > 90 || attendancePercentage > 0.9:
        return "Молодець!";
      default:
        return "Редиска!";
    }
  }
}