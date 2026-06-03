//Create a fake database inside JavaScript file named:studentDatabase
const studentDatabase = [
    {id: 10, firstName: "Neelo", lastName: "Nkhuna", email: "byronnkhuna@gmail.com", course: "JavaScript-task-3", age: 29},
    {id: 11, firstName: "Sello", lastName: "Malapane", email: "selloMalapane2@outlook.com", course: "HTML learners", age: 25},
    {id: 12, firstName: "Masaenatso", lastName: "Magabane", email: "ChilwaneMagabane@gmail.com", course: "Accounting", age: 27},
    {id: 13, firstName: "Samukelo", lastName: "Lesenyeho", email: "samu@yahoo.com", course: "Css", age: 29},
    {id: 14, firstName: "Yarah", lastName: "Bruce", email: "yara@gmail.com", course: "Webhosting", age: 22}
];

//Create a function that demonstrates synchronous execution
function demonstratesSynchronousExecution() {
//The function must display three messages in sequence and prove that JavaScript executes sychronous code line by line.
    console.log('Step-1 - The function is starting');
    console.log('Step-2 - The process is in action');
    console.log('Step-3 - The function reached the final stage');
}

demonstratesSynchronousExecution();