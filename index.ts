import express from 'express';
const app = express();
import { getBMI } from './bmiCalculator';

app.get('/bmi', (req, res) => {
    if (req.query.height && req.query.weight) {
        const weight: string = req.query.height.toString();
        const height: string = req.query.weight.toString();
        console.log(weight, height)
        const bmi = getBMI([height, weight]);
        res.send(bmi);
    } else {
        res.send('please enter parameters into URL');
    }
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});