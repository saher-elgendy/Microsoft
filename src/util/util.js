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
    const innerWidth = window.innerWidth;

    if (innerWidth >= 1200) {
        changeItemsNum(4);
    }

    else if (innerWidth < 1200 && innerWidth >= 992) {
        changeItemsNum(3);
    }

    else if (innerWidth < 992 && innerWidth >= 768) {
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

    for (let i = 0; i < data.length; i = i + itemsNum) {
        slides.push(data.slice(i, i + itemsNum));
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
    //filter products according to the filter/filters chosen
    return filters.map(f => products.filter(p => p.category === f)).reduce((acc, cur) => [...acc, ...cur], []);
}


/**
 * this function sort products according to a sort query that can be  'low to high price' or 'high to low price' or 'none'
 * 
 * prices are strings with '$' sign preceding, they should be converted into numbers so that the sort process
 * can be correctly done, the dollar sign should be removed  before comparison
 * 
 * @param {array} products
 * 
 * @param {string} sortBy
 */
export const sortProducts = (products, sortBy) => {
    products.sort((a, b) => {
        //converting prices strings into numbers and removing the dollar sign
        const prev = Number(a.newPrice.slice(0, -1));
        const next = Number(b.newPrice.slice(0, -1));

        return sortBy === 'low to high price' ? (prev - next) : sortBy === 'high to low price' ?
            (next - prev) : products;
    });
}

/**
 * 
 * @param {array} data 
 */
// Fisher-Yates Shuffle
export const shuffle = (data) => {
    var currentIndex = data.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = data[currentIndex];
        data[currentIndex] = data[randomIndex];
        data[randomIndex] = temporaryValue;
    }

    return data;
}
