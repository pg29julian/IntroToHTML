function Person(name, age, occupation) 
{
    this.name = name;
    this.age = age;
    this.occupation = occupation;

    this.logData = () =>
    {
        console.log(name);
        console.log(age);
        console.log(occupation);
    };
}

let newPerson = new Person("Julian", "22", "Programmer");
newPerson.logData();

let newPerson2 = new Person("Betty", "20", "Student");
newPerson2.logData();