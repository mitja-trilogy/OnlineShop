import { Injectable } from '@nestjs/common';
import {ProductInput, ProductDTO} from "./dto/product.dto";

@Injectable()
export class ProductService {
    private productData = [
        { id: 1, name: 'Laptop', description: 'This is the description of Laptop', price: 1200.30, weight: 30.6, category: 1, supplier: 1, imageUrl: '' },
        { id: 2, name: 'Macbook', description: 'This is the description of Macbook', price: 3200.30, weight: 30.6, category: 1, supplier: 1, imageUrl: ''},
        { id: 3, name: 'Logitech Mouse', description: 'This is the description of Logitech Mouse', price: 320, weight: 0.2, category: 2, supplier: 2, imageUrl: ''},
        { id: 4, name: 'HP Mouse', description: 'This is the description of Logitech Mouse', price: 120, weight: 0.3, category: 2, supplier: 3, imageUrl: ''},
        { id: 5, name: 'Mac Mouse', description: 'This is the description of MAc Mouse', price: 520, weight: 0.1, category: 2, supplier: 4, imageUrl: ''},
    ];

    getProductsForCategory(categoryId: number): Promise<any>{
        return new Promise(resolve => {
            resolve(this.productData.filter(product => product.category === categoryId));
            // resolve(this.productData.find(product => product.category === categoryId));
        });
    }

    getProduct(id: number): Promise<any>{
        return new Promise(resolve => {
            resolve(this.productData.find(product => product.id === id));
        });
    }

    addProduct(productInput: ProductInput): Promise<any>{
        const maxId = this.productData.reduce((max, product) => (product.id > max ? product.id : max), 0);
        const newProduct: ProductDTO = {
            ...productInput,
            id: maxId + 1,
        };
        this.productData.push(newProduct);

        return new Promise(resolve => {
            resolve(newProduct);
        });
    }

    updateProduct(productInput: ProductDTO): Promise<any>{
        let intId: number = Number(productInput.id);
        const productIndex = this.productData.findIndex(product => product.id === intId);

        if (productIndex === -1) {
            throw new Error(`Product with ID ${productInput.id} not found.`);
        }

        const updatedProduct: ProductDTO = {
            ...this.productData[productIndex],
            ...productInput,
        };

        this.productData[productIndex] = updatedProduct;
        return new Promise(resolve => {
            resolve(updatedProduct);
        });
    }

    deleteProduct(id: number): Promise<any>{
        const productIndex = this.productData.findIndex(product => product.id === id);

        if (productIndex === -1) {
            throw new Error(`Product with ID ${id} not found.`);
        }

        const deletedProduct = this.productData.splice(productIndex, 1)[0];
        return new Promise(resolve => {
            resolve(deletedProduct);
        });
    }
}
