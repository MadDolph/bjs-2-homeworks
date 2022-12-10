function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks) {
    for(let mark of marks) {
      this.marks.push(mark);
    }
  }
}

Student.prototype.getAverage = function () {
   if(this.marks && this.marks.length != 0) {
     let amount = this.marks.reduce((amount, mark) => amount + mark);
     return amount / this.marks.length;
   } else {
     return 0;
   }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
