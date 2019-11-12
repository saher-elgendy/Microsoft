import { UPDATE_CART } from './actionTypes';

/**
 * @param {array} cartProducts 
 * @param {object} productToAdd 
 * @param {number} quantity 1 by default
 */

export const updateCart = (cartProducts, productToAdd, quantity) => {
    const newCartProducts = [...cartProducts];
    //products are initially added with quantity set to 1
    if (productToAdd.quantity) {
        productToAdd.quantity = quantity || 1;
    }
    //find if the product to add already exists in the cart
    const repeatedProductIndex = newCartProducts.findIndex(p => p.id === productToAdd.id);
    const repeatedProduct = newCartProducts[repeatedProductIndex];
    //if the product exist increment the quantity by 1 or any quantity user choose
    if (repeatedProduct) {
       newCartProducts[repeatedProductIndex] = {
           ...repeatedProduct,
           quantity: repeatedProduct.quantity + (quantity || 1)
       }
    }
    //if the product not exist in the cart, push it
    else {
        newCartProducts.push(productToAdd);
    }
    //the action
    return {
        type: UPDATE_CART,
        payload: newCartProducts
    }
}