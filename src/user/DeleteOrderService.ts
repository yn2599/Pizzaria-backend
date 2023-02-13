import prismaClient from "../prisma";

interface DeleteRequest{
    order_id: string;
}

class DeleteOrderService{
    async execute({ order_id }: DeleteRequest){

        const order = await prismaClient.order.delete({
            where:{
                id: order_id,
            }
        })

        return order;
    }
}

export { DeleteOrderService }

