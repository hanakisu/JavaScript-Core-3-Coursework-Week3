const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

function introduceYourself(personOne) {
  let { name, age, favouriteFood } = personOne;
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
