import { filterProducts, shuffle, sortProducts } from './../../util/util';
import { FETCH_PRODUCTS } from './actionTypes';


/**
 * @param {array} allProducts 
 * @param {array} filters 
 * @param {string} sortBy 
 */

export const fetchProducts = (allProducts, filters, sortBy) => {
    let products = [...allProducts];
    
    
    if (filters && filters.length) {
        products = filterProducts(allProducts, filters);
    }

    //randomize where a certain product should appear
    shuffle(products);

    if (sortBy) {
       sortProducts(products, sortBy);
    }

    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}
