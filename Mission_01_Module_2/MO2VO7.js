//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];
//TODO initiate empty objects
//TODO check if the response exists in the object
//TODO if exists increment the count
//TODO if not exists set the count to 1

const count = surveyResponses.reduce((counts, response) => {
  //   if (counts[response]) {
  //     counts[response] += 1;
  //   } else {
  //     counts[response] = 1;
  //   }

  counts[response] = (counts[response] || 0) + 1;

  return counts;
}, {});
console.log(count);
//? Output
// { A: 5, C: 3, B: 5, D: 1 }
