import express from 'express';
import getStarted from './controller.js';

const userRouter = express.Router();

// template route
userRouter.get('/', (req, res) => {
	res.status(200).send(getStarted());
});

export default userRouter;
