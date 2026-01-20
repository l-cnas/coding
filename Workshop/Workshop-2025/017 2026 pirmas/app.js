// ============================
// Student class (base class)
// ============================
// Represents a student with name, birth year, and a list of grades.
// Also tracks how many Student/onlineStudent objects were created via a static counter.
class Student {
    // Static property: shared by the class (not by each instance)
    static count = 0;

    // Constructor: runs when you do `new Student(...)` or `new onlineStudent(...)`
    constructor(name, birthYear) {
        // Instance properties: each student gets their own copy
        this.name = name;
        this.birthYear = birthYear;
        this.grades = [];

        // Update global student counter (shared across all instances)
        Student.count++;
    }

    // Static method: belongs to the class itself (call with Student.getStudentCount())
    static getStudentCount() {
        return Student.count;
    }

    // Add grade to the end of the grades array
    addGrade(grade) {
        this.grades.push(grade);
    }

    // Add grade to the beginning of the grades array
    addGradeToFirstPlace(grade) {
        this.grades.unshift(grade);
    }

    // Returns the highest grade or null if there are no grades
    getHighestGrade() {
        return this.grades.length ? Math.max(...this.grades) : null;
    }

    // Returns the lowest grade or null if there are no grades
    getLowestGrade() {
        return this.grades.length ? Math.min(...this.grades) : null;
    }

    // Calculates average grade (returns a string because toFixed returns string)
    getAverage() {
        // If no grades, warn (but your code still continues; division by 0 below is a bug risk). Fixed with "return null;"
        if (this.grades.length === 0) {
            console.log('Pažymių nėra');
            return null;
        }

        // Sum all grades
        let sum = 0;
        this.grades.forEach(grade => {
            sum += grade;
        });

        // Return average rounded to 2 decimals (string)
        return (sum / this.grades.length).toFixed(2);
    }

    // Decides scholarship type based on average grade
    assignScolarship() {
        // getAverage() returns a string, but comparisons with numbers still work due to JS coercion
        if (this.getAverage() >= 8) {
            console.log(`${this.name} is assigned higher scolarship`);
        } else if (this.getAverage() >= 6) {
            console.log(`${this.name} is assigned regular scolarship`);
        } else {
            console.log(`The average grade is too low, no scolarship for ${this.name} this semester`);
        }
    }

    // Calculates age from current year and birthYear
    getAge() {
        return (new Date().getFullYear() - this.birthYear);
    }

    // Introduces the student in the console
    // NOTE: your message text is currently swapped (age vs birthYear).
    introduce() {
        console.log(
            `Hello, im a student. My name is ${this.name}, my age is ${this.birthYear}, i was born ${this.getAge()}`
        );
    }
}

// ============================
// onlineStudent class (child class)
// ============================
// Inherits everything from Student, adds platform, and overrides getAverage().
class onlineStudent extends Student {
    // Constructor: calls parent constructor + adds platform
    constructor(name, birthYear, platform) {
        // super() must be called before using `this` in a subclass constructor
        super(name, birthYear);
        this.platform = platform;
    }

    // Override: online students get 20% penalty on average
    // NOTE: super.getAverage() returns a string; multiplying converts it to number automatically.
    getAverage() {
        return (super.getAverage() * 0.8).toFixed(2);
    }

    // Placeholder for future feature
    calculateAttendance() {

    }
}

// ============================
// Create one online student (Aldona) and add grades
// ============================
let Aldona = new onlineStudent('Aldona', 2007, 'Zoom');
console.log(Aldona);

Aldona.addGrade(7);
Aldona.addGrade(9);
Aldona.addGrade(10);

// ============================
// Create one normal student (Petras) and add grades
// ============================
let Petras = new Student('Petras', 2007);
console.log(Petras);

// Show how many students were created so far (includes Aldona + Petras)
console.log(Student.getStudentCount());

Petras.addGrade(7);
Petras.addGrade(9);
Petras.addGrade(10);

// ============================
// Output some stats for Petras
// ============================
console.log(Petras.getHighestGrade());
console.log(Petras.getLowestGrade());
console.log(Petras.getAverage());
Petras.assignScolarship();

// ============================
// Output average and scholarship for Aldona (uses overridden getAverage())
// ============================
console.log(Aldona.getAverage());
Aldona.assignScolarship();

// ============================
// Age + introduce output tests
// ============================
// Prints Petras age number
console.log(`Petro amzius ${Petras.getAge()}`);

// introduce() prints to console but returns undefined,
// so this will print "Petro amzius undefined" after introduce logs its line
console.log(`Petro amzius ${Petras.introduce()}`);

// ============================
// Array of students (mix of Student and onlineStudent)
// ============================
// Demonstrates polymorphism: we call the same methods on different types.
let mathStudents = [
    new Student('Jonas', 2008),
    new Student('Antanas', 2007),
    new onlineStudent('Emilija', 2007, 'Teams')
];

// ============================
// Loop through each student, add grades, introduce, assign scholarship
// ============================
// For Emilija (onlineStudent) the average is modified by the override.
mathStudents.forEach(studentas => {
    studentas.addGrade(8);
    studentas.addGrade(7);
    studentas.addGrade(10);

    studentas.introduce();
    studentas.assignScolarship();
});

// ============================
// instanceof checks (type checking)
// ============================
// instanceof checks prototype chain (is this object created from this class?)
console.log(Petras instanceof Student);
console.log(Aldona instanceof onlineStudent);
