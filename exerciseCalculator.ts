interface InputVals {
    arr: number[];
    target: number;
}


export const parseArgs = (args: Array<string>): InputVals => {
    if (args.length < 2) throw new Error('Not enough arguments');
    const arr: number[] = [];
    const checkArgs = () => {
        for (let i = 1; i < args.length; i++) {
            if (isNaN(Number(args[i]))) {
                return false;
            } else {
                arr.push(Number(args[i]));
            }
        }
        return true;
    };
    if (checkArgs()) {
        return {
          target: Number(args[0]),
          arr
        };
    } else {
        throw new Error('Provided values were not all numbers!');
    }
};
interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export const calculateExercises = (arr: number[], target: number): Result => {
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
    };
    const ratingDescription = getRating();

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

//console.log(calculateExercises([1, 1, 1, 1, 1, 1], 1))

try {
    const { arr, target } = parseArgs(process.argv);
    console.log(calculateExercises(arr, target));
  } catch ({message}) {
    console.log('Error, something bad happened, message: ', message);
  }