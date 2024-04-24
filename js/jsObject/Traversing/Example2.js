const subjects = {
  java: 12,

  javascript: 15,

  nodejs: 25,

  php: 35,
};

// Convert object to key's array

const keys = Object.keys(subjects);

console.log(keys);

keys.forEach((key, index) => {
  console.log(`${key}: ${subjects[key]}`);
});
