import express from 'express';
import dbConnect from '../config/dbConnect.js';
import dotenv from 'dotenv';

dotenv.config();

dbConnect();

const app = express();

export default app;