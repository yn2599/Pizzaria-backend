import { Request, Response } from 'express';
import { FinishOrderService } from '../../user/FinishOrderService';

class FinishOrderController{
    async handle(req: Request, res: Response){
        const { order_id } = req.body

        const finishOrder = new FinishOrderService();

        const order = finishOrder.execute({
            order_id
        })

        return res.json(order);
    }
}

export { FinishOrderController }