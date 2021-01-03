import express from 'express';
const app = express();
import { getBMI } from './bmiCalculator';
import { calculateExercises, parseArgs } from './exerciseCalculator';

app.use(express.json());

app.get('/bmi', (req, res) => {
    if (req.query.height && req.query.weight) {
        const weight: string = req.query.height.toString();
        const height: string = req.query.weight.toString();
        const bmi = getBMI([height, weight]);
        res.send(bmi);
    } else {
        res.send('please enter parameters into URL');
    }
});

app.post('/exercise', (req, res) => {
    try {
        interface Data {
            target: string,
            daily_exercises: string[]
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: Data = req.body;
        const { arr, target } = parseArgs([data.target, ...data.daily_exercises]);
        const result = calculateExercises(arr, target);
        res.json(result);
    } catch ({message}) {
        res.json(message);
    }

});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});