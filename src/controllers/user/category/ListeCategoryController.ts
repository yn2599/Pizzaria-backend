import { Request, Response } from 'express';
import { ListCategoryService } from '../../../user/ListCategoryService';

class ListeCategoryController{
    async handle(req: Request, res: Response){
        const listCategoryService = new ListCategoryService();

        const category = await listCategoryService.execute();

        return res.json(category);
    }

}

export { ListeCategoryController }