import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

/**
 * @param {array} cartProducts 
 * @param {object} productToAdd 
 * @param {number} quantity 1 by default
 */

export const addToCart = (productToAdd, cartProducts, quantity) => {
    const newCartProducts = [...cartProducts];
    //check if the product to add already exists in the cart
    const repeatedProductIndex = newCartProducts.findIndex(p => p.id === productToAdd.id);
    const repeatedProduct = newCartProducts[repeatedProductIndex];
    //if the product exists, increment the quantity by 1 or any quantity user choose
    if (repeatedProduct) {
        newCartProducts[repeatedProductIndex] = {
            ...repeatedProduct,
            quantity: repeatedProduct.quantity + (quantity || 1)
        }
    }
    //if the product not exist in the cart, push it
    else {
        newCartProducts.push({
            ...productToAdd,
            quantity: 1
        });
    }
    //the action
    return {
        type: ADD_TO_CART,
        payload: newCartProducts
    }
}


/**
 * 
 * @param {object} productToRemove 
 */

export const removeFromCart = (productToRemove) => ({
    type: REMOVE_FROM_CART,
    payload: productToRemove
});