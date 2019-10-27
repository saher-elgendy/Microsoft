import { filterProducts, sortProducts } from './../../util/util';
import { FETCH_PRODUCTS } from './actionTypes';


/**
 * @param {array} allProducts 
 * @param {array} filters 
 * @param {string} sortBy 
 */

export const fetchProducts = (allProducts, filters, sortBy) => {
    let products = [...allProducts];

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
