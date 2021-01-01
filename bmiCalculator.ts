interface InputValues {
    mass: number;
    height: number;
}

const parseArguments = (args: Array<string>): InputValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
          mass: Number(args[2]),
          height: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const bmiCalculator = (mass: number, height: number): string => {
    const bmi = mass / (height / 100)**2;
    if (bmi < 18.5) {
        return 'Underweight (unhealthy weight)';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight (healthy weight)';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight (unhealthy weight)';
    } else if (bmi >= 30) {
        return 'Obese (very unhealthy weight)';
    } else {
        throw new Error('Use correct input')
    }
}

try {
    const { mass, height } = parseArguments(process.argv);
    console.log(bmiCalculator(mass, height));
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }