import { UPDATE_CART } from './actionTypes';

/**
 * 
 * @param {array} cartProducts 
 * @param {object} productToAdd 
 * @param {number} quantity 
 * 
 */

export const updateCart = (cartProducts, productToAdd, quantity) => {
    //products are initially added with quantity set to 1
    if (productToAdd.quantity) {
        productToAdd.quantity = quantity || 1;
    }
    //find if the product to add already exists in the cart
    const repeatedProductIndex = cartProducts.findIndex(p => p.id === productToAdd.id);
    //if the product exist increment the quantity by 1 or any quantity user choose
    if (repeatedProductIndex > -1) {
        cartProducts = [...cartProducts, {...cartProducts[repeatedProductIndex], quantity: quantity || 1}]
    }
    //if the product not exist, push it to the cart
    else {
        cartProducts = cartProducts.push(productToAdd);
    }
    //the action
    return {
        type: UPDATE_CART,
        payload: cartProducts
    }
}