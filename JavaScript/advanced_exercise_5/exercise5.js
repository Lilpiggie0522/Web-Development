// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let bibi = [];
  array.forEach((user)=>{
    let {username} = user;
    username=username+"!";
    bibi.push(username);
});

//Create an array using map that has all the usernames with a "? to each of the usernames
const newMapArray = array.map((num)=>{
  let {username} = num;
  return username + "?";
})

//Filter the array to only include users who are on team: red
const filterArray = array.filter((num)=>{
  return num.team==="red";
})
  

//Find out the total score of all users using reduce

// (1), what is the value of i?
const reduceArray = array.reduce((accumulator,num)=>{
  return accumulator + num.score;
},0)
// (2), Make this map function pure:

/* const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
}) */

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((arraynum)=>{
  return arraynum*2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newListUpArray = [];
const answer = array.forEach((nums)=>{
  nums.items.forEach((items)=>{
    items=items.concat("!");
  });
  newListUpArray.push(nums);
});

const answer = array.map((nums)=>{
  nums.items = nums.items.map((items)=>{
    return items+"!";
  })
  return nums;
})