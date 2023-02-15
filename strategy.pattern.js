function blackFriday(price){
    return price *0.9
}

function preOrder(price){
    return price *0.9
}

function fee(price){
    return price *1.1
}

function blackFriday(price){
    return price *0.8
}

function defaut(price){
    return price
}

const getPrice ={
    blackFriday: blackFriday,
    preOrder: preOrder,
    fee: fee,
    blackFriday: blackFriday,
    defaut: defaut,
}

function promotionPrice(orriginalPrice, promotionType){
    return getPrice[promotionType](orriginalPrice);
}

const price = promotionPrice(2000, "blackFriday")
console.log("price====>", price);