import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductCategoryService {
    private readonly productCategoriesData = [
        { id: 1, name: 'Computers', description: 'This is the description of Computers' },
        { id: 2, name: 'Mouses', description: 'This is the description of Mouses' },
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
