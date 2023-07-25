import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductCategoryService {
    private readonly productCategoriesData = [
        { id: 1, name: 'Category 1', description: 'This is the description of Category 1' },
        { id: 2, name: 'Category 2', description: 'This is the description of Category 2' },
    ];

    getProductCategories(): Promise<any>{
        return new Promise(resolve => {
            resolve(this.productCategoriesData);
        });
    }

    getProductCategory(id: number): Promise<any>{
        return new Promise(resolve => {
            resolve(this.productCategoriesData.find(category => category.id === id));
        });
    }
}
