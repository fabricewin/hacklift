// export const getGrade = (score: number) => {
//     if (score < 40) {
//         return "Mediocre"
//     }

//     if (score < 50) {
//         return "Insuffisant"
//     }

//     if (score < 60) {
//         return "Passable"
//     }

//     if (score < 70) {
//         return "AB"
//     }

//     if (score < 80) {
//         return "B"
//     }

//     if (score < 90) {
//         return "Tres Bien"
//     }

//     return "Excellent"
// };


let mention:string;
export const getGrade = (score:number) => {
    switch (true) {
        case (score<40):
            mention="Médiocre"
            break;

        case(score<50):
            mention="Insuffisant"
            break;

        case(score<60):
            mention="Passable"
            break;

        case(score<70):
            mention="Assez bien"
            break;

        case(score<80):
            mention="Bien"
            break;

        case(score<90):
            mention="Très bien"
            break;

        default:
            mention="Excellent"
    }
    return mention;
}

export const getGrade2 = (score:number) => {
    switch (true) {
        case score<40: return "Médiocre";
        case(score<50): return "Insuffisant"
        case(score<60): return "Passable"
        case(score<70): return "Assez bien"
        case(score<80): return "Bien"
        case(score<90): return "Très bien"
        default: return "Excellent"
    }
}

console.log(new Date())


const apple = {
    size: 40,
    color: "pink",
    isFresh: true
}

let appleScore = 0;

switch (true) {
    case apple.color == "pink": appleScore += 30;

    case apple.size >= 20: appleScore += 40;

    case apple.isFresh: appleScore += 30;
}

console.log(appleScore);


// Write and publish a short blog on the SOLID principles of Object Oriented Programming. Do this in Medium.
// Share the link in Slack.