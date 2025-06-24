// singleton object
const tinderUser = new Object()

//const tinderUser = {}  // non-singleton object

tinderUser.id = "1234abc"
tinderUser.name ="John"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Ashirvad",
            lastName: "Singh"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname.firstName);


//Merging two arrays
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

//const obj3= Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);



const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },

       {
        id: 1,
        email: "a@gmail.com"
    },

       {
        id: 1,
        email: "a@gmail.com"
    },
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // it gives array inside array pairs of key and value

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isIn'));
