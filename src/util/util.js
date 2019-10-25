/**
 * that function set the number of items that createSlids functions uses to define the number
 * of elements for each carousel item in the carousel
 * 
 * @param {function} changeItemsNum a function that change carousel item columns
 * number when the screen size change
 * 
 * @returns {number} number of carousel item columns
 */
export const setItemsNum = (changeItemsNum) => {
    if (window.innerWidth >= 1200) {
        changeItemsNum(4);
    }

    else if (window.innerWidth < 1200 && window.innerWidth >= 992) {
        changeItemsNum(3);
    }

    else if (window.innerWidth < 992 && window.innerWidth >= 768) {
        changeItemsNum(2);
    }

    else {
        changeItemsNum(1);
    }
}

/**
 * carousel item can receive multiple elements(for bigger screens) or single element (small screen < 578px), 
 * that function should create the slides that would be rendered in every single carousel item
 * 
 * @param {array} data the array of objects that would be converted into slides (array of arrays of objects) that
 * would be rendered into carousel item elements
 * 
 * @param {number} itemsNum the number of items per slide that is set by the function setItemsNum
 * 
 * @returns {array} array of arrays of objects, each insider array contain multiple items or single item
 * according to size of the screen 
 */
export const createSlides = (data, itemsNum) => {
    let slides = [];

    for(let i = 0; i < data.length; i = i + itemsNum) {
        slides.push (data.slice(i , i + itemsNum));
    }

    return slides;
}

/**
 * this function filter products according to filters chosen by the user
 * 
 * @param {array} products the array of products
 * 
 * @param {array} filters the array can contain multiple filters or single one
 * 
 * @returns {array} the filtered products , if no filters chosen, the products are returned unchanged
 */
export const filterProducts = (products, filters) => {
    if (filters && filters.length > 0 && filters[0] !== 'All') {
        //if the user didn't choose all categories, filter products according to the filter/filters chosen
        products = filters.map(f => products.filter(p => p.category === f)).reduce((acc, cur) => [...acc, ...cur], []);
    }
    
    return products;
}