import { Request, Response } from 'express';
import { ListOrdersService } from '../../user/ListOrdersService';


class ListOrdersController{
    async handle(req: Request, res: Response){

        const ListOrders = new ListOrdersService();

        const orders = await ListOrders.execute();

        return res.json(orders);
        
    }
}

export { ListOrdersController }