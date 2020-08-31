const ageCalculator = function(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  if (age === 1) {
    return name + " is " + age + " year old.";
  } else {
    return name + " is " + age + " years old.";
  }
}