//object constructor
function Student(name,email,age,address){
    //properties = values
    this.name = name;
    this.email = email;
    this.age=age;
    this.address=address;
}

let student1 = new Student("Rafael","rafael@sdgku.edu",20,"Apple street");
let student2 = new Student("George","george@sdgku.edu",99,"New York");
console.log(student1,student2);