import { Request, Response } from 'express';
import { CreateOrderServise } from '../../user/CreateOrderServise';

class CreateOrderController{
    async handle(req: Request, res: Response){
        const { table, name } = req.body;

        const createOrderServi = new CreateOrderServise();

        const order = await createOrderServi.execute({
            table,
            name,
        });

        return res.json(order);
    }
}

export { CreateOrderController }
