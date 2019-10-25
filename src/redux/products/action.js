import { filterProducts, sortProducts } from './../../util/util';
import { FETCH_PRODUCTS } from './actionTypes';


/**
 * @param {array} products 
 * @param {array} filters 
 * @param {string} sortBy 
 */

export const fetchProducts = (products, filters, sortBy) => {
    if (filters && filters.length) {
        products = filterProducts(products, filters);
    }

    if (sortBy) {
        sortProducts(products, sortBy);
    }

    return {
        type: FETCH_PRODUCTS,
        payload: products
    }
}
