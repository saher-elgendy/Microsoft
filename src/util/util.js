// that function change carousel item columns number with screen size change
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

//that function create carousel slides using items number set by setItemsNum function
export const createSlides = (data, itemsNum) => {
    let slides = [];

    for(let i = 0; i < data.length; i = i + itemsNum) {
        slides.push (data.slice(i , i + itemsNum));
    }

    return slides;
}
