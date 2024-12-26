const data = [
  {
    name: 'Rahul',
    age: 40,
    city: 'pune',
    study: 'computer science',
    employed: true,
    profession: 'software engineer',
    hobbies: [{
      hobby: 'playing',
      classification: 'chess'
    },
    {
      hobby: 'gardening',
      classification: ''
    }],
    pets: [{
      type: 'dog', name: 'max', age: 4, isItVaccinated: true,
      isItFullyVaccinated: true, activities: ['playing fetch in the park']
    }],
    vechile: ['car']
  },

  {
    name: 'Ananya',
    age: 30,
    city: 'Bangalore',
    study: 'computer science',
    employed: false,
    profession: '',
    hobbies: [
      {
        hobby: 'cooking',
        classification: 'Italian recipes'
      }
    ],
    pets: [{
      type: 'parrot', name: 'kiwi', age: 1, isItVaccinated: true,
      isItFullyVaccinated: false, activities: ['mimics voice']
    }],
    vechile: []
  },

  {
    name: 'Ramesh',
    age: 45,
    city: 'jaipur',
    study: '',
    employed: false,
    profession: 'business owner',
    hobbies: [{
      hobby: 'gardening',
      classification: 'rose gardening'
    },
    {
      hobby: 'readingBooks',
      classification: 'historical fiction'
    }],
    pets: [
      {
        type: 'cat', name: 'bella', age: 3, isItVaccinated: true, isItFullyVaccinated: true, activities: ['lounging in the sun']
      },

      {
        type: 'cat', name: 'leo', age: 3, isItVaccinated: true, isItFullyVaccinated: true, activities: ['lounging in the sun']
      }],

    vechile: []
  },

  {
    name: 'kavya',
    age: 28,
    city: 'chennai',
    study: '',
    employed: false,
    hobbies: [{
      hobby: 'watching shows',
      classification: 'binge-watching sci-fi shows'
    },
    {
      hobby: 'readingBooks',
      classification: 'prefers modern fantasy novels'
    }],
    profession: 'dancer',
    pets: [{
      type: 'rabbit', name: 'snowy', age: 2, isItVaccinated: true, isItFullyVaccinated: false, activities: ['nibbling on carrots']
    }],
    vechile: ['bike']
  }
];

//------------* How many individuals are currently employed? *----------------

const getCountOfEmployedPeople = (data) =>
  data.filter(people => people.employed).length;

// -------------* How many people own a car? *------------------------------

const getCountOfPeopleHavingCar = function (data) {
  return data.filter(people => people.vechile.includes('car')).length;
};

// --------------* How many pets are fully vaccinated? *------------------

const getCountOfVaccinatedPets = function (data) {
  return data
    .flatMap(people => people.pets)
    .filter(pet => pet.isItFullyVaccinated).length;
};

//---* What are the names of all the pets, and what type of animal is each? *--

const getPetTypeAndName = function (data) {
  const pets = data.flatMap(people => people.pets);

  return pets.map(({ type, name }) => ({ type, name }));
};

//-----------* Which cities do the individuals live in? *----------------

const getCitiesOfIndividuals = (data) => data.map(people => people.city);

// -------* How many hobbies are shared across the group? What are they? *----

const hobbies = function (data) {
  const hobbiesAcrossGroup = data.flatMap(people => people.hobbies);

  return [hobbiesAcrossGroup.length, hobbiesAcrossGroup];
};

//---------* How many pets belong to people who are currently unemployed? *----

const getCountOfpetsOfUnEmployed = function (data) {
  const unemployedPeople = data.filter(({ employed }) => !employed);

  return unemployedPeople.flatMap(({ pets }) => pets).length;
};

//---* What is the average age of the individuals mentioned in the passage? *--

const add = (a, b) => a + b;

const averageAge = function (data) {
  return data.map(({ age }) => age).reduce(add, 0) / data.length;
};

//---* How many individuals have studied computer science, and how many of them have pets? *----------

const countOfCSPeople = function (data) {
  const csPeople = data.filter(({ study }) => study === 'computer science');
  const peopleHavePets = csPeople.filter(({ pets }) => pets.length !== 0);

  return [csPeople.length, peopleHavePets.length];
};

//--------* 10. How many individuals own more than one pet? *------------

const countOfpeopleHavingMoreThanOnePet = function (data) {
  return data.filter(({ pets }) => pets.length > 1).length;
};

// -------- * 11. Which pets are associated with specific favorite activities?

const petsWithSpecificActivity = function (data) {
  const petsActivities = data.flatMap(({ pets }) => pets.map(({ name, activities }) => ({ name, activities })));

  return petsActivities.map(({ name, activities }) => {
    if (activities.length > 0) {
      return { name };
    }
  });

};

//-----* 12. What are the names of all animals that belong to people who live in Bangalore or Chennai? *------------

const petsLiveInParticularCity = function (data) {
  const peopleInCity = data.filter(
    people => people.city === 'Bangalore' || people.city === 'chennai');

  return peopleInCity.flatMap(function (people) {
    return people.pets.map(pet => pet.name);
  });
};

// -- * How many vaccinated pets belong to people who do not own a car? *--

const vaccinatedPets = function (data) {
  return data.filter(people => !people.vechile.includes('car')).length;
};

//----* 14. What is the most common type of pet among the group? *--------

//------- * How many individuals have more than two hobbies? *--------------
const peopleHavingMoreThanTwoHobbies = function (data) {
  return data.filter(people => people.hobbies.length > 2).length;
};

//-----* 16. How many individuals share at least one hobby with Ramesh? *----
const individualsShareAtLeast1HobbyWithRamesh = function (data) {
  const rameshHobbies = data
    .filter(people => people.name === "Ramesh")
    .map(({ hobbies }) => hobbies);

  const remainigPersonsHobbies = data
    .filter(({ name }) => name !== "Ramesh")
    .flatMap(({ hobbies }) => hobbies);

  return remainigPersonsHobbies.reduce(
    (count, hobby) => (rameshHobbies.includes(hobby) ? count + 1 : count),
    0
  );
};

// console.log('people who are intrested in studying books', individualsShareAtLeast1HobbyWithRamesh(data));

//----*   Which pet is the youngest, and what is its name? * ----------

const youngestPet = function (data) {
  const pets = data.flatMap(function (people) {
    return people.pets.map(pets => ({ name: pets.name, age: pets.age }));
  });

  return pets.reduce((pet1, pet2) => pet1.age < pet2.age ? pet1 : pet2);
};

//-----*What types of books are mentioned as interests, and who reads them?*--



//---* How many individuals live in cities starting with the letter "B"? *---

const peopleLivingInCityStartsWithB = function (data) {
  return data.filter(people => people.city[0] === 'B').length;
};

//---------* Which individuals do not own any pets? *---------------

const peopleDontHavePets = function (data) {
  return data.filter(people => people.pets.length === 0);
};

const questionsAndAnswers = [
  {
    '1. How many individuals are currently employed?': getCountOfEmployedPeople
  },
  {
    '2. How many people own a car?': getCountOfPeopleHavingCar
  },
  {
    '3. How many pets are fully vaccinated?': getCountOfVaccinatedPets
  },
  {
    '4. What are the names of all the pets, and what type of animal is each?': getPetTypeAndName
  },
  {
    '5. Which cities do the individuals live in?': getCitiesOfIndividuals
  },
  {
    '6. How many hobbies are shared across the group? What are they?': hobbies
  },
  {
    '7. How many pets belong to people who are currently unemployed?': getCountOfpetsOfUnEmployed
  },
  {
    '8. What is the average age of the individuals mentioned in the passage?': averageAge
  },
  {
    '9. How many individuals have studied computer science, and how many of them have pets?': countOfCSPeople
  },
  {
    '10. How many individuals own more than one pet?': countOfpeopleHavingMoreThanOnePet
  },
  {
    '11. Which pets are associated with specific favorite activities?': petsWithSpecificActivity
  },
  {
    '12. What are the names of all animals that belong to people who live in Bangalore or Chennai?': petsLiveInParticularCity
  },
  {
    '13. How many vaccinated pets belong to people who do not own a car?':
      vaccinatedPets
  },
  {
    '15. How many individuals have more than two hobbies?': peopleHavingMoreThanTwoHobbies
  },
  {
    '17. Which pet is the youngest, and what is its name?': youngestPet
  },
  {
    '19. How many individuals live in cities starting with the letter "B"?': peopleLivingInCityStartsWithB
  },
  {
    '20. Which individuals do not own any pets?': peopleDontHavePets
  }
];

const printQuestionAndAnswers = function ([[question, answer]], data) {
  console.log(question, answer(data));

};

const testAll = function (questionsAndAnswers) {
  return questionsAndAnswers.map(function (question) {
    printQuestionAndAnswers(Object.entries(question), data);
  });
};

testAll(questionsAndAnswers);