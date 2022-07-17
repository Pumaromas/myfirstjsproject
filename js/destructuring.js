const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { name, commentsQty } = userProfile;
const {hasSignedAgreement} = userProfile;

// console.log(name);
// console.log(hasSignedAgreement);

//------------------------------------------

//array destructuring

const fruits = ['apple', 'banana'];

const [fruitOne, fruitTwo] = fruits;

// console.log(fruitOne, fruitTwo);

//-------------------------------------

//function destructuring

const userInfo = () => {
    if (!commentsQty) {
        return `User ${name} has no comments`;
    }
    return `User ${name} has ${commentsQty} comments`;
}

console.log(userInfo(userProfile));
