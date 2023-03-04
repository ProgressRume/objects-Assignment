// Question 1. 
// Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function InstagramPost(AuthorHandle, content, imageLink, NumberOfViews, NumberOfLikes) {
    this.AuthorHandle = AuthorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.NumberOfViews = NumberOfViews;
    this.NumberOfLikes = NumberOfLikes;
}

// Question 2. 
// Create 2 Instagram post objects from the constructor function you created above
// Post 1

let InstagramPost1 = new InstagramPost('@BigLad', 'Getting dressed for work', 'https://media.istockphoto.com/id/1146451270/photo/afro-woman-looking-at-her-reflection-in-the-mirror.jpg?s=612x612&w=0&k=20&c=z3brNiZgPmnZDSbGI0BNTHdGs9xsaDY-iELsLjjZo28=', '123', '15')
console.log(InstagramPost1);

// Post 2

let InstagramPost2 = new InstagramPost('@Dennison', 'TGIF', 'https://everyevery.ng/wp-content/uploads/2019/05/WhatsApp-Image-2019-05-31-at-11.28.11.jpeg', '123', '15')
console.log(InstagramPost2)

// Question 3
// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

// a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function.
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
}

const MusaDetails = createPerson('Musa', 19, 'Abuja')
console.log(MusaDetails)
// b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}

const MusaJambScores = createJambScores(70, 85, 82, 94)
console.log(MusaJambScores)

// Adding the object as a property to Musa object created above in (a) above

MusaDetails.MusaJambScores = MusaJambScores;
console.log(MusaDetails)

// Question 4
// What are the different ways you can clone an object? Give examples for each of them.
// Ways to clone an object
// a. Using Object.assign()
// Example

const PhoneTypes1 = {
    Tecno: 59000,
    iPhone: 650000,
    Redmi: 100000,
}

const PhoneTypes2 = Object.assign({}, PhoneTypes1)

// b. Using spread syntax
// Example
const PhoneTypes3 = { ...PhoneTypes1 };

// c. Using JSON.parse(JSON.stringify())
//Example
const PhoneTypes4 = JSON.parse(JSON.stringify(PhoneTypes1));

// Question 4
// As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
// const presidentialCandidates = {AAC: 'Omoyele Sowore',ACCORD: 'Christopher Imumolen',
//    APC: 'Bola Ahmed Tinubu',
//    LP: 'Peter Obi',
//    NNPP: 'Rabiu Kwankwaso',
//    PDP: 'Atiku Abubakar',
// }
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// ’Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

// using the for...in method

for (const property in presidentialCandidates) {
   console.log(presidentialCandidates[property], 'is the presidential candidate of ' + property) 
}

