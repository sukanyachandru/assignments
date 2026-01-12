//Temperature of a city in degrees Celsius: 25.5
let degreeCelcius = 25.5;
console.log ("DegreeCelcius:" + degreeCelcius);

// Title of the book
let bookTitle =  'Kill a Mockingbird';
console.log ("bookTitle:" + bookTitle);

// Whether a customer has placed an order: true or false
let CustomerHasPlacesAnOrder = true;
console.log("CustomerHasPlacesAnOrder:" + CustomerHasPlacesAnOrder);

// Amount of money in a customer's bank account: 1000.50
let CustomerBankAcc = 1000.5;
console.log ("customer's bank account:" + CustomerBankAcc);

// Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let CoOrdinationOfLocation = {
    latitude: 37.3349,
    longitude: -122.4194
}
console.log (CoOrdinationOfLocation);

//Distance between two cities: 200.5
let TwoCitiesDistance = 200.5;
console.log("TwoCitiesDistance:" + TwoCitiesDistance);

//Number of followers on a social media platform
let NoOfFollowers = "10,00,000";
console.log("Number of Followers:" + NoOfFollowers);

// movie rating and time of an Event
let Movie = {
    movieRating: 7.5,
    Timeofamovie: "2:30 PM"};
    console.log("movie");

//current year
let currentyear = 2023;
console.log("currentyear:" + currentyear);

// person details Object
let personDetails= {
    name: "sukanya",
    maritalStatus:true,
    occupation: "Software Engineer",
    contactDetails:[
    {
        phoneNumber: "123-456-7890",
        emailAddress: "john.doe@example.com"
    }],
    personalDetails:[
    {
        favoriteColor: "blue",
        eyecolour: "brown",
        bloodtype: "A",
    }],
    address: [
    {
        country: "USA",
        state: "USA",
        city: "New York",
    }]}
console.log(personDetails);
console.log("*************************************");
console.log(personDetails.personalDetails[0].bloodtype);
console.log(personDetails.address[0].city);
console.log(personDetails.contactDetails[0].phoneNumber);


        



 