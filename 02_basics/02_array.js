const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//push
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);


//concat
all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);


//spread operator

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Ashirvad"));  
console.log(Array.from("Ashirvad"));  //but here we can form array
console.log(Array.from({name: "Ashirvad"})); //it becomes very interesting here because it gives empty array. reason is it confuse that we have to array from key or value.



const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));  // as from of is also used to create a array





