console.log("Filter by country:");
console.log(filterByCountry(users, "FR"));
console.log("-----------------");

console.log("List emails:");
console.log(listEmails(users));
console.log("-----------------");

console.log("Reformatted emails:");
console.log(reformatEmails(users));
console.log("-----------------");

console.log(users);
// Filter by country: For-of
/* function filterByCountry(arr, countryCode) {
  let filtered = [];
  for (const user of arr) {
    if (user.nat === countryCode) {
      filtered.push(user);
    }
  }
  return filtered;
} */

// Filter by country: For-each
function filterByCountry(arr, countryCode) {
  let filtered = [];
  arr.forEach((element) => {
    if (element.nat === countryCode) {
      filtered.push(element);
    }
  });
  return filtered;
}

// List Emails: For-of
/* function listEmails(arr) {
  let emails = [];
  for (const user of arr) {
    emails.push(user.email);
  }
  return emails;
} */

// List Emails: For-each
function listEmails(arr) {
  let emails = [];
  arr.forEach((element) => emails.push(element.email));
  return emails;
}

function reformatEmails(arr) {
  let reformatted = [];

  arr.forEach((user) => {
    const code = user.nat.toLowerCase();
    const emailSplit = user.email.split("@");
    const name = emailSplit[0].split(".");
    user.email = `${name[1]}.${name[0]}@evilcorp.${code}`;

    reformatted.push(user);
  });

  return reformatted;
}
