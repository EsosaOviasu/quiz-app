const STORE = {
    questions: [
        {
            question: "What was the first adult/collegiate competitive team in the modern-day Community circuit?",
            options: [
                "Project D",
                "Rhythm City",
                "Rhythmology",
                "Static Noyze",
                "Puzzle League",
            ],
            answer: "Rhythmology",
        },
        {
            question: "Which NYC team began as an NYU club affiliate, before transforming into one of the leaders of the tri-state Community?",
            options: [
                "Mint Dance Company",
                "EPIC Motion",
                "Capital Funk",
                "The Neighbors",
                "Outburst",
            ],
            answer: "EPIC Motion",
        },
        {
            question: "In what year did Boston-based juggernaut Phunk Phenomenon appear on America’s Best Dance Crew?",
            options: [
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
            ],
            answer: "2011",
        },
        {
            question: "What name did Rhythmology change to, when they became the subject of a legal dispute over their official title?",
            options: [
                "ARC",
                "Project D",
                "Fr3sh",
                "UFP",
                "RDT",
            ],
            answer: "ARC",
        },
        {
            question: "Which DC-based team has won multiple 1st Place titles at Boston’s Elements Dance Competition?",
            options: [
                "Capital Funk",
                "Synchronic Dance Team",
                "Heart Break Crew",
                "The Wannabes",
                "PUSO Modern",
            ],
            answer: "Capital Funk",
        },
    ],
    questionNumber: 1,
    score: 0,
}

//an array of objects
const questionSet = STORE.questions;

//a value
let currentScore = STORE.score;

//a value
let currentQuestion = STORE.questionNumber;