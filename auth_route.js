import Express from 'express';

import { authenticate,authorize } from '../controllers/auth_controller.js';

const app =Express()
app.use (Express.json())

app.post('/login', authenticate)

export default app