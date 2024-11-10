import express, { Application, Request, Response } from "express";
import cors  from 'cors';
import cookieParser from 'cookie-parser';

const app:Application = express();


//parser
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to the Library Management System Api",
  });
});


export default app