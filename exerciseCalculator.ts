// interface InputValues {
//     mass: number;
//     height: number;
// }

// const parseArguments = (args: Array<string>): InputValues => {
//     if (args.length < 4) throw new Error('Not enough arguments');
//     if (args.length > 4) throw new Error('Too many arguments');

//     if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//         return {
//           mass: Number(args[2]),
//           height: Number(args[3])
//         }
//     } else {
//         throw new Error('Provided values were not numbers!');
//     }
// }

// const bmiCalculator = (mass: number, height: number): string => {
//     const bmi = mass / (height / 100)**2;
//     if (bmi < 18.5) {
//         return 'Underweight (unhealthy weight)';
//     } else if (bmi >= 18.5 && bmi < 25) {
//         return 'Normal weight (healthy weight)';
//     } else if (bmi >= 25 && bmi < 30) {
//         return 'Overweight (unhealthy weight)';
//     } else if (bmi >= 30) {
//         return 'Obese (very unhealthy weight)';
//     } else {
//         throw new Error('Use correct input')
//     }
// }

// try {
//     const { mass, height } = parseArguments(process.argv);
//     console.log(bmiCalculator(mass, height));
//   } catch (e) {
//     console.log('Error, something bad happened, message: ', e.message);
//   }

type InputArray = [number, number, number, number, number, number, number]

const calculateExercises = (arr: InputArray, target: number) => {
    const periodLength = arr.length;
    const trainingDays = arr.filter(n => n > 0).length;
    const average = arr.reduce((a, b) => a + b) / arr.length;
    const success = average >= target ? true : false;
    const rating = !success ? 1 : target + 2 <= average ? 3 : 2;
    const getRating = () => {
        if (rating === 1) {
            return 'work harder next week!';
        } else if (rating === 2) {
            return 'good work';
        } else {
            return 'overachiever!';
        }
    }
    const ratingDescription = getRating()

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
}

console.log(calculateExercises([1, 1, 1, 1, 1, 1, 1,], 1))