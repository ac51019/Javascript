// choose let or const both are same work so chill don't use var more problem lalallaalall


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push (dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// use concat remove brackets and merge Like this : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]  

const allHeros = marvel_heros.concat(dc_heros)

console.log(allHeros);

// spread [spred value .. this is not array all value indusuval] {most use}

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// automatically sperm out

const another_array = [1,2,3,[4,5,6],7,[6,7,8,[4,5]]]
const real_work_hard = another_array.flat(Infinity);

console.log(real_work_hard);  // automatically sperm out


// convert and array any value desent matter obj or string or etc

console.log(Array.isArray("Shiv")) // no convert

console.log(Array.from("Shiv")); // yes, convert array
console.log(Array.from({name:"Shiv"})); // interesting and interview


let score1 =100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4));


// from ,isArray ,off array stude and imp 


// 1. from

// Array from a set  // foo is 2 time so count 1 

const set = new Set(["foo", "bar", "baz", "foo","too"]);
Array.from(set);

console.log(set);

// Array  from a String 

Array.from("yoo")

console.log(Array.from("yoo"));


// Array from a Map


const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ]);
  Array.from(map);
  // [[1, 2], [2, 4], [4, 8]]

  console.log(Array.from(map));
  
  
  const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
  Array.from(mapper.values());

  const mmap = Array.from(mapper.values());

  console.log(mmap);
  
  // ['a', 'b'];
  
  Array.from(mapper.keys());
  // ['1', '2'];

  console.log(
    Array.from(mapper.keys()));
  
  console.log(mapper);
  


// range 


const range = (start, end) => Array.from({ length: end - start }, (_, i) => start + i);

// Examples:
console.log(range(1, 5));  // [1, 2, 3, 4]
console.log(range(3, 8));  // [3, 4, 5, 6, 7]
console.log(range(0, 0));  // []

//  Sequence generator (range) (confused)

const ranges = (start, end, step = 1) => 
    Array.from({ length: Math.max(Math.ceil((end - start) / step), 0) }, (_, i) => start + i * step);

const alphabet = range("A".charCodeAt(0), "Z".charCodeAt(0) + 1).map(x => String.fromCharCode(x));

console.log(alphabet); // ["A", "B", "C", ..., "Z"]

/*

start: The first value of the sequence.
end: The sequence stops before this value (exclusive).
step: The difference between consecutive numbers (default is 1)
(end - start) / step: Determines how many numbers fit in the range with the given step.
Math.ceil: Ensures the array length accounts for partial steps.
Math.max: Prevents negative lengths by using 0 as the minimum.
i is the index of the element.
start + i * step: Computes the value for the current index.
"A".charCodeAt(0):

Converts the character "A" to its Unicode/ASCII code (65).
"Z".charCodeAt(0) + 1:

Converts "Z" to its code (90) and adds 1 to make the range inclusive of "Z".
map(x => String.fromCharCode(x)):

Transforms each number in the range back into its corresponding character using String.fromCharCode.


range Function:

range(65, 91); // Generates [65, 66, 67, ..., 90]

map Transformation:
[65, 66, 67, ..., 90].map(x => String.fromCharCode(x)); // ["A", "B", "C", ..., "Z"]

*/