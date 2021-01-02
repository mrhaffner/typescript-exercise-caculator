interface InputValues {
    mass: number;
    height: number;
}

const parseArguments = (args: Array<string>): InputValues => {
    if (args.length < 2) throw new Error('Not enough arguments');
    if (args.length > 2) throw new Error('Too many arguments');

    if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
        return {
          mass: Number(args[0]),
          height: Number(args[1])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const bmiCalculator = (mass: number, height: number): string => {
    const bmi = mass / (height / 100)**2;
    if (bmi < 18.5) {
        return `Underweight (unhealthy weight). BMI = ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 25) {
        return `Normal weight (healthy weight). BMI = ${bmi}`;
    } else if (bmi >= 25 && bmi < 30) {
        return `Overweight (unhealthy weight). BMI = ${bmi}`;
    } else if (bmi >= 30) {
        return `Obese (very unhealthy weight). BMI = ${bmi}`;
    } else {
        throw new Error('Use correct input')
    }
}

export const getBMI = (args: string[]) => {
    try {
        const { mass, height } = parseArguments(args);
        return bmiCalculator(mass, height);
    } catch (e) {
        return `Error, something bad happened, message: ${e.message}`;
    }
}