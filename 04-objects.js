// const tinderUser =new object()
const tinderUser = {}
   tinderUser.id = "123abc",
   tinderUser.name = "sam",
   tinderUser.isLogedin = false
// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname : {
            firstname: "shivam",
            lastname: "suryawanshi"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a",7:"b"}

//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}  //spread
console.log(obj3);


/// destructing

const course ={
    coursename: "chaiwith code",
    price: "000",
    courseinstructor : "hitesh sir"
}

//course.courseinstructor 
// new metod for instrution

const {courseinstructor} = course
console.log(courseinstructor);


