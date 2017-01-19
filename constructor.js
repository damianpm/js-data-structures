function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;

}

var user1 = new User('John', 'Doe', 27, 'Male');
var user200 = new User('Jane', 'Doe', 25, 'Female');

User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmail = function() {
    return this.firstName + this.lastName + this.emailDomain;
}

console.log(user1.getEmail());
