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
        case(score<40):
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

