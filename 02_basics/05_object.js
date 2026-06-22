const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh",
}
// course.courseInstructor
// it is object destructuring
// both of them are valid
const {courseInstructor : instructor} = course
const {courseInstructor} = course
// Using Destructuring
// const { courseInstructor } = course;

// JavaScript reads this as:

// "Take the property named courseInstructor from the object course and create a variable with the same name."

// console.log(courseInstructor)
console.log(instructor)

// const navbar = ({company}) =>{

// }
// navbar(company = "hitesh")


//API
// JSON => it was used to tranfer data from backend to frontend
//object ar least need a name if you declare it like below it will mostly be considered as json
// {
//     "name" : "hitesh",
//     "courseName" : "js in hindi",
//     "price : "free"
// }

[
    {},
    {},
    {}
]