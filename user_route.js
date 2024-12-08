import Express from 'express';
import{
    addUser,
    deleteUser,
    getAlluser,
    getUserById,
    updateUser
} from '../controllers/user_controller.js'

import { authenticate,authorize } from '../controllers/auth_controller.js';
import { IsAdmin,IsMember } from '../middleware/role_validation.js';

const app =Express()
app.use (Express.json())

app.get('/', authorize,[IsAdmin],getAlluser)
app.get('/:id', authorize,[IsAdmin],getUserById)
app.post('/',authorize,[IsAdmin],addUser)
app.get('/:id',authorize,[IsAdmin], updateUser)
app.delete('/:id',authorize,[IsAdmin],deleteUser)

app.post('/login', authenticate)

export default app