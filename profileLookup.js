// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

function lookUpProfile(name, prop) {
// Only change code below this line
for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
        if(contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
        }else{
            return 'No such property';
        }
    }
}
return "No such contact"
// Only change code above this line
}
  
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName")  //should return the string Vos
lookUpProfile("Sherlock", "likes") //should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") //should return an array
lookUpProfile("Bob", "number") //should return the string No such contact
lookUpProfile("Bob", "potato") //should return the string No such contact
lookUpProfile("Akira", "address") //should return the string No such property

