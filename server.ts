import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import parser_v1 from './routes/v1/parser';
import parser_v2 from './routes/v2/parser';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1',parser_v1 );
app.use('/api/v2',parser_v2 );


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    colors.yellow.bold(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )
);