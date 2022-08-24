// # JS Classes

// Check out the class in `index.js`

// It already contains the properties `firstname` and `lastname`

// ## 1. Full name

// Create the instance property `fullname` and `email` in the `Employee` class. Given a person's first and last name:

// Form `fullname` by simply joining the first and last name together, separated by a single space.

// ## 2. Email
// Create the instance property `email` in the `Employee` class. Given a person's first and last name:

// Form `email` by joining the first and last name together with a `.` in between, and follow it with `@company.com` at the end. Make sure the entire email is in lowercase.

// ## Examples

// ```
// emp1 = new Employee("John", "Smith")
// emp1.fullname ➞ "John Smith"

// emp2 = new Employee("Mary",  "Sue")
// emp2.email ➞ "mary.sue@company.com"

// emp3 = new Employee("Antony", "Walker")
// emp3.firstname ➞ "Antony"

// ```

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname() {
    console.log(`${this.firstname} ${this.lastname}`);
  }
  email() {
    console.log(
      `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
    );
  }
  vorname() {
    console.log(`${this.firstname}`);
  }
}

emp1 = new Employee("John", "Smith");
emp1.fullname("John Smith");

emp2 = new Employee("Mary", "Sue");
emp2.email("mary.sue@company.com");
emp3 = new Employee("Antony", "Walker");
emp3.vorname("Antony");
