// CODE here for your Lambda Classes

/*
Person
First we need a Person class. This will be our base-class
Person receives name age location all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
*/
/*
Instructor
Now that we have a Person as our base class, we'll build our Instructor class.
Instructor uses the same attributes that have been set up by Person
Instructor has the following unique props:
specialty what the Instructor is good at i.e. 'redux'
favLanguage i.e. 'JavaScript, Python, Elm etc.'
catchPhrase i.e. Don't forget the homies
Instructor has the following methods:
demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/


/*
Student
Now we need some students!
Student uses the same attributes that have been set up by Person
Student has the following unique props:
previousBackground i.e. what the Student used to do before Lambda School
className i.e. CS132
favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
Student has the following methods:
listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
*/


/*
Now that we have instructors and students, we'd be nowhere without our PM's
ProjectManagers are extensions of Instructors
ProjectManagers have the following unique props:
gradClassName: i.e. CS1
favInstructor: i.e. Sean
ProjectManagers have the following Methods:
standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
*/

// CODE here for your Lambda Classes

/*
Person
First we need a Person class. This will be our base-class
Person receives name age location all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
*/
/*
Instructor
Now that we have a Person as our base class, we'll build our Instructor class.
Instructor uses the same attributes that have been set up by Person
Instructor has the following unique props:
specialty what the Instructor is good at i.e. 'redux'
favLanguage i.e. 'JavaScript, Python, Elm etc.'
catchPhrase i.e. Don't forget the homies
Instructor has the following methods:
demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/


/*
Student
Now we need some students!
Student uses the same attributes that have been set up by Person
Student has the following unique props:
previousBackground i.e. what the Student used to do before Lambda School
className i.e. CS132
favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
Student has the following methods:
listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
*/


/*
Now that we have instructors and students, we'd be nowhere without our PM's
ProjectManagers are extensions of Instructors
ProjectManagers have the following unique props:
gradClassName: i.e. CS1
favInstructor: i.e. Sean
ProjectManagers have the following Methods:
standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
*/

		class Person{
			constructor(personAttrs){
				this.name = personAttrs.name,
				this.age = personAttrs.age,
				this.location = personAttrs.location
				}
			speak(){
				return `Hello my name is ${this.name}, I am from ${this.location} and are the object's own props`
			}
		}
	

		class Instructor extends Person{
			constructor(instAttrs){
				super(instAttrs);
				this.specialty = instAttrs.specialty,
				this.favLanguage = instAttrs.favLanguage,
				this.catchPhrase = instAttrs.catchPhrase
				}
			demo(subStr){
				return `Today we are learning about ${subStr}`
			}
			grade(student, subStr){
				return `${student.name} receives a perfect score on ${subStr}`
			}
      changeGrade(grade){
       return Math.floor(Math.random() * 100) + 0;  
      }
    }

		class Student extends Person{
			constructor(stuAttrs){
				super(stuAttrs);
				this.previousBackground = stuAttrs.previousBackground,
				this.className = stuAttrs.className,
				this.favSubjects = stuAttrs.favSubjects,
				this.grade = stuAttrs.grade
      }
			listsSubjects(){
        console.log(...this.favSubjects)
      }
			PRAssignment(subject){
				return `${this.name} has submitted a PR for ${subject}`
			}
			sprintChallenge(subject){	
				return `${this.name} has begun sprint challenge on ${subject}`
			}
      graduate() {
        if(this.grade >= 70)
          {
            console.log(`Congratulations ${this.name}, You Graduate!`);  
          }
        else
          {
            console.log(`Sorry ${this.name}, you should have studied harder!`);
          }
      }
     }

		class ProjectManager extends Instructor{
			constructor(pmAttrs){
				super(pmAttrs);
				this.gradClassName = pmAttrs.gradClassName,
				this.favInstructor = pmAttrs.favInstructor
      }
			standUp(channel){
				return `${this.name} announces to ${channel}, @channel standy times!`
			}
			debugsCode(student, subject){
				return `${this.name} debugs ${student.name}'s code on ${subject}`
      }
    }
				
			

	const fred = new Person({
  name: 'Fred',
 	 location: 'Upper Bedrock',
 	 age: 37
	});

	const barney = new Person({
 	 name: 'Barney',
 	 location: 'Lower Bedrock',
	  age: 36
	});

	const jim = new Instructor({
 	 name: 'Jim',
 	 location: 'Tampa',
 	 age: 41,
 	 favLanguage: 'JavaScript',
   specialty: 'Back-end',
 	 catchPhrase: `I think thats gravy!`
	});

	const tim = new Instructor({
 	 name: 'Tim',
	 location: 'San Diego',
 	 age: 40,
 	 favLanguage: 'Python',
 	 specialty: 'Front-end',
	 catchPhrase: `Whoa is that gravy?`
	});

	const terry = new Student({
	 name: 'Terry',
 	 location: 'Akron',
 	 age: 23,
   grade: 56,
 	 previousBackground: 'None',
 	 className: 'Web Dev',
 	 favSubjects: ['Cracking Wise', 'Hula Hoopin']
	});

	const sherry = new Student({
	 name: 'Sherry',
 	 location: 'Jacksonville',
  	 age: 27,
    grade: 96,
 	 previousBackground: 'Can balance a chair on her nose',
 	 className: 'UXUI',
 	 favSubjects: ['Javascript', 'CSS']
	});

	const saul = new ProjectManager({
 	 name: 'Saul',
 	 location: 'LA',
 	 age: 55,
 	 gradClassName: 'CS1',
 	 favInstructor: 'Sugar Ray Leonard'
	});

	const paul = new ProjectManager({
	name: 'Paul',
 	location: 'Phoenix',
  	age: 62,
  	gradClassName: 'OIS1',
  	favInstructor: 'Clem Fandango'
	});

//Person
 console.log(fred.speak());
 console.log(barney.age);
//Instructor
 console.log(`${jim.name}'s' favorite langauge is ${jim.favLanguage}, his specialty is in ${jim.specialty}, and he always says ${jim.catchPhrase}`);
console.log(jim.demo('Unix'));
console.log(tim.grade(sherry,'javascript IV' ))
//Student
  console.log(`${terry.name} has a background in ${terry.previousBackground}, and he is enrolled in ${terry.className}`);
console.log(terry.listsSubjects());
console.log(sherry.PRAssignment('Javascript'));
console.log(terry.sprintChallenge('Javascript'));
//Project Managers
console.log(`${saul.name} is from ${saul.gradClassName} and his favorite instructor was ${saul.favInstructor}`);
console.log(saul.standUp('Sauls Channel'));
console.log(paul.debugsCode(sherry, 'Javascript'));
console.log(tim.changeGrade(sherry.grade));
console.log(sherry.graduate());
console.log(terry.graduate());