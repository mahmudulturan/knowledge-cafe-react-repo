const getDataFromLS = ()=>{
    const bookmarks = localStorage.getItem('bookmarks');
    if(bookmarks){
        return JSON.parse(bookmarks);
    }
    return [];
}
const setItemToLS = (name,arr)=>{
    const arrSrtingify = JSON.stringify(arr);
    localStorage.setItem(name, arrSrtingify)
}

const addItemToLS = (id)=>{
    const bookmarks = getDataFromLS()
    bookmarks.push(id)

    setItemToLS('bookmarks', bookmarks)
}

const removeItemFromLS = (id)=>{
    const bookmarks = getDataFromLS()
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark !== id);

    setItemToLS('bookmarks',remainingBookmarks)
}


const getDataFromLSNum = ()=>{
    const readingTime = localStorage.getItem('readingTime')
    if(readingTime){
        return JSON.parse(readingTime);
    }
    return 0;
}
const addItemToLSNum = (time)=>{
    const readingTime = getDataFromLSNum();
    const numericTime = parseFloat(time)
    console.log('perameter',numericTime, 'current', readingTime);
    const newReadingTime = readingTime + numericTime;
    setItemToLS('readingTime', newReadingTime)
}

export{addItemToLS, getDataFromLS, removeItemFromLS, addItemToLSNum, getDataFromLSNum}