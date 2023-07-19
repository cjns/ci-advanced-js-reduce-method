  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value:", curr,
//     "Total", acc + curr
//   );
//   return acc + curr;
// }, 10);
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12. Designer 4} <-- This is what we want.
let experienceByProfession  = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);

// Create an object that has the professions as property names with the names of the employees, in an array, as a value.
// E.G. { Developer: ['Andrew', 'Ariel'], Designer: ['Michael', 'Kelly'], Manager: ['Mark']}
let namesByProfession = teamMembers.reduce((acc, curr) => {
  let profession = curr.profession;
  if (!acc[profession]) {
    acc[profession] = [curr.name];
  } else {
    acc[profession].push(curr.name);
  }
  return acc;
}, {});

console.log(namesByProfession);

// Consider 100 different employees and 20 different professions. How would you filter out those in a specific profession and find the one with the most experience?
// This could be done with different combinations of map(), filter(), and reduce().