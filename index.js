

let test = {
    question: 'What is the difference between null and undefined?',
    answer: 'Null represents the intentional absense of a value. Undefined represents when a declared variable lacks a value.'
}


let conceptualQuestions = [
    {
        id: 1,
        question: 'What is the difference between null and undefined?',
        answer: 'Null represents the intentional absense of a value. Undefined represents when a declared variable lacks a value.'
    },
    {
        id: 2,
        question: 'What are some major differences in ES6?',
        answer: 'string interpolation, classes, promises for async actions, arrow functions, let and const introduced'
    },
    {
        id: 3,
        question: 'Explain the differences between let, var and const',
        answer: 'var and let can both change. Let is block scoped while var is function scoped. Const is also block scoped. Primitive consts cannot changed. Const arrays can be added to and object properties can change but their type cannot change'
    },
    {
        id: 4,
        question: 'What type of error will you get if trying to change a const value?',
        answer: 'type error'
    },
    {
        id: 4,
        question: 'What is the purpose of Truthy and Falsy values? Name 5 falsy values',
        answer: 'The purpose is to check if a variable exists. Five Falsy values are: 0, Empty String, NaN (not a number), null, and undefined'

    },
    {
        id: 5,
        question: 'What is the value of adding "break" to switch statements?',
        answer: 'Adding break makes switch statements behave as else if statements rather than if statements'
    },
    {
        id: 6,
        question: 'What is the difference between Synchronous and Asynchronous programming?',
        answer: 'In synchronous programming, the code is executed line by line in a sequential order and the program waits for each operation to complete before moving on to the next one. If there is a long running task, it will pause the execution of the program until its finished. In Asynchronous programming, the code doesnt wait for a task to complete before moving onto the next one. If its a fetch call, it can run concurrently in the background. If its not, it will execute the code in chunks whenever there is an opening in the event loop.'
    }

]

let codingQuestions =
    [
        {
            id: 1,
            question: 'Use string interpolation to log "My name is Bella. I live in NYC"',
            starterCode: `const firstName = 'Bella'; const city ='NYC'`,
            answer: 'console.log(`my name is ${firstName}. I live in ${city}.`)'

        },
        {
            id: 2,
            question: 'Re-write the following code using short-circuit evaluation:',
            starterCode:
                `let username = '';
let defaultName;
                
if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}`,
            answer: `defaultName = username || 'Stranger';`

        },
        {
            id: 3,
            question: 'Re-write the following code using the ternary operator:',
            starterCode: 
            `let isNightTime = true;
if (isNightTime) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}`,
            answer: `isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');`
            
        },
        {
            id: 4,
            question: 'Re-write the following code using switch statements',
            starterCode: 
            ` let groceryItem = 'papaya';
if (groceryItem === 'tomato') {
    console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
    console.log('Papayas are $1.29');
} else {
    console.log('Invalid item');
}`,
        answer:
`
switch (groceryItem) {
    case 'tomato':
      console.log('Tomatoes are $0.49');
      break;
    case 'papaya':
      console.log('Papayas are $1.29');
      break;
    default: // default = else
      console.log('Invalid item');
      break;
  }`
        },
        {
            id: 5,
            question: `Use the array map method to return an array where each number is itself * 2
            Use the filter method to create a new array that that contains only the numbers greater than 2`,
            starterCode: 
            ` let nums = [1,2,3,4];`,
        answer:
`nums.map(num => {return num * 2}) 
nums.filter(num => num > 2)`
        },
        {
            id: 6,
            question: 'Use slice to complete the following',
            starterCode: 
            `// 1. Return banana, cherry, date
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// 2. Return the 'World!' from the String
const message = 'Hello, World!';`,
        answer:
`const slicedFruits = fruits.slice(1, 4) // output: ['banana', 'cherry', 'date'];
const slicedMessage = message.slice(7); // output: 'World!`
        },
        {
            id: 7,
            question: `Create a class, ${'"Node"'}. The constructor should expect a data argument to be passed in. The class should have a ${'"next"'} property with a default value of null. Create an instance of the class with any data. Impliment a method to set the next property on the Node class.`,
            starterCode: 
            ``,
        answer:
`class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
    setNextNode(node) {
        this.next = node
      }
  }
  
  const firstNode = new Node("Deloitte Connects");`
        }


    ]
let evaluate = (input) => {
    console.log(eval(input));
}

let myTest = () => {
    console.log('testing');
}
class QuizGenerator {

    quizObjects = [];
    // test = evaluate(1+1);

    test() {
        console.log(eval(1 + 1));
        return (evaluate(1 + 1));
    }
    test2() {
        return (myTest);
    }


    /**
     * 
     * @param {String} elementType type of html element you wish to create: ex: form, div, etc
     * @param {String} question quiz question
     * @param {String} answer answer to that quiz question that will be displayed on hitting submit button
     * @returns {HTMLDivElement} change this
     */
    createQuestionDom(elementType, question, answer) {
        // create the element to hold question data: ex type = 'form'
        let questionElement = document.createElement(elementType);
        questionElement.setAttribute('class', 'conceptual-question indent');

        // Add label, this is where the question text goes
        let label = document.createElement('label');
        label.innerHTML = question;
        label.setAttribute('class', 'question-text');

        // create break elements to be added later
        let br1 = document.createElement('br'); // not sure why I can't append the same br twice
        let br2 = document.createElement('br');

        // create textbox
        let textBox = document.createElement('textarea');
        textBox.setAttribute('cols', 60);
        textBox.setAttribute('rows', 5);

        // create button to reveal answer
        let submitButton = document.createElement('input');
        submitButton.type = 'button';
        submitButton.value = 'show answer';

        submitButton.addEventListener('click', () => {
            answerDiv.innerHTML = answer;
        })

        // add label (the question itself, textbox, and submit button to questionElement)
        questionElement.appendChild(label);
        questionElement.appendChild(br1);
        questionElement.appendChild(textBox);
        questionElement.appendChild(br2);
        questionElement.appendChild(submitButton);

        let answerDiv = document.createElement('div');
        answerDiv.setAttribute('class', 'conceptual-answer');

        let questionAndAnswerLineItem = document.createElement('div');
        questionAndAnswerLineItem.setAttribute('class', 'conceptual-line-item');


        questionAndAnswerLineItem.appendChild(questionElement);
        questionAndAnswerLineItem.appendChild(answerDiv);

        return (questionAndAnswerLineItem);
    }

    /**
     * 
     * @param {*} elementType 
     * @param {*} question 
     * @param {*} answer 
     * @param {String} starterCode optional
     * @returns {HTMLDivElement} change this
     */
    createQuestionDomCode(elementType, question, answer, starterCode) {
        // create the element to hold question data: ex type = 'form'
        let questionElement = document.createElement(elementType);
        questionElement.setAttribute('class', 'conceptual-question indent');

        // Add label, this is where the question text goes
        let label = document.createElement('label');
        label.innerHTML = question;
        label.setAttribute('class', 'question-text');

        // create break elements to be added later
        let br1 = document.createElement('br'); // not sure why I can't append the same br twice
        let br2 = document.createElement('br');

        // create IDE
        let editorDiv = document.createElement('div');
        editorDiv.className = 'editor';
        let editor = ace.edit(editorDiv, {
            mode: "ace/mode/javascript",
            theme: "ace/theme/monokai"
        });

        if (starterCode) {
            editor.setValue(starterCode, 1); // the one sets the curser to the end of the code & gets rid of annoying syntax highlighting
        }

        // create button to reveal answer
        let submitButton = document.createElement('input');
        submitButton.type = 'button';
        submitButton.value = 'show answer';

        let answerDiv = document.createElement('div');
        answerDiv.setAttribute('class', 'conceptual-answer');

        let codeOutputDiv = document.createElement('div');
        codeOutputDiv.setAttribute('class', 'conceptual-answer');

        submitButton.addEventListener('click', () => {
            answerDiv.innerHTML = answer;
        })

        // create button to run code
        let runButton = document.createElement('input');
        runButton.type = 'button';
        runButton.value = 'run';

        runButton.addEventListener('click', () => {
            let code = editor.getValue();
            try {
                codeOutputDiv.innerHTML = eval(code);
            }
            catch (e) {
                codeOutputDiv.innerHTML = e.message;
            }
        });

        // add label (the question itself, textbox, and submit button to questionElement)
        questionElement.appendChild(label);
        questionElement.appendChild(br1);
        questionElement.appendChild(editorDiv);
        questionElement.appendChild(br2);
        questionElement.appendChild(codeOutputDiv);
        questionElement.appendChild(submitButton);
        questionElement.appendChild(runButton);



        let questionAndAnswerLineItem = document.createElement('div');
        questionAndAnswerLineItem.setAttribute('class', 'conceptual-line-item');


        questionAndAnswerLineItem.appendChild(questionElement);
        questionAndAnswerLineItem.appendChild(answerDiv);
        // questionAndAnswerLineItem.appendChild(codeOutputDiv);

        return (questionAndAnswerLineItem);
    }

    /**
     * 
     * @param {array} questions array of question objects
     * @param {String} quizContainer HTML container to append questions to
     */
    showQuestions(questions, quizContainer, type) {
        let parentElement = document.getElementById(quizContainer);

        for (let i = 0; i < questions.length; i++) {

            let questionElement;
            let question = questions[i].question;
            let answer = questions[i].answer;

            if (type === 'long-answer') {
                questionElement = this.createQuestionDom('form', question, answer);
            }
            else if (type === 'code') {
                let starterCode = questions[i].starterCode || '';

                questionElement = this.createQuestionDomCode('form', question, answer, starterCode);
            }


            parentElement.appendChild(questionElement);

            let quizObject = questions[i];
            quizObject.htmlElement = questionElement;
            this.quizObjects.push(quizObject);

        }




    }

}
let jsQuiz = new QuizGenerator();
jsQuiz.showQuestions(conceptualQuestions, 'conceptual-questions', 'long-answer');
jsQuiz.showQuestions(codingQuestions, 'coding-questions', 'code');