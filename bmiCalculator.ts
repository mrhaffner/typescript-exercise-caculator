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

const bmiCalculator = (mass: number, height: number, printText: string) => {
    console.log(printText, mass / (height / 100)**2 )
}

try {
    const { mass, height } = parseArguments(process.argv);
    bmiCalculator(mass, height, `Based on your mass of ${mass} kg and your height of ${height} cm, your BMI is:`);
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }