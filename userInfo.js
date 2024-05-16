function createUserProfiles(names, modifiedName) {
  const userProfiles = [];
  for (let i = 0; i < names.length; i++) {
    const userProfile = {
      originalName: names[i],
      modifiedName: modifiedName[i],
      id: i + 1,
    };
    userProfiles.push(userProfile);
  }
  return userProfiles;
}

const names = [
  "john",
  "james",
  " jake",
  " drake ",
  "mark",
  "matt",
  "pratt",
  "luke",
  "luka",
];
const modifiedName = [
  "john",
  "JAMES",
  " jake",
  " DRAKE ",
  "mark",
  "MATT",
  "pratt",
  "LUKE",
  "luka",
];
const profiles = createUserProfiles(names, modifiedName);
console.log(profiles);
