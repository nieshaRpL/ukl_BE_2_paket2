import Express from 'express';
import{
    getAllInventory,
    getInventoryById,
    addInventory,
    updateInventory,
    deleteInventory
} from '../controllers/inventory_controller.js'

import { authorize} from '../controllers/auth_controller.js';
import { IsAdmin } from '../middleware/role_validation.js';

const app =Express()
app.use (Express.json())

app.get('/', authorize,[IsAdmin] ,getAllInventory)
app.get('/:id',authorize,[IsAdmin], getInventoryById)
app.post('/', authorize, [IsAdmin],addInventory)
app.put('/:id', authorize,[IsAdmin], updateInventory)
app.delete('/:id', authorize,[IsAdmin], deleteInventory)


export default app