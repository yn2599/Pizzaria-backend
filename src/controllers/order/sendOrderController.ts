import { Request, Response } from 'express';
import { sendOrderService } from '../../user/sendOrderService';

class sendOrderController{
    async handle(req: Request, res: Response){
        const { order_id } =req.body;

        const sendOrder = new sendOrderService();

        const order = await sendOrder.execute({
            order_id
        })

        return res.json(order);
    }
}

export { sendOrderController }