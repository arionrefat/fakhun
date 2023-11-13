import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

//app.use('/tasks', taskRoutes); // Add this line to mount the Task API routes

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
