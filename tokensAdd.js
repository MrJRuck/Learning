/* I don't know why it isnt adding any tokens. Could someone please tell me why?*/
let tokenAmountAdded = 0;

function tokenFunc(addTokens) {
    addTokens.amount = tokenAmountAdded;
}

const MRJRUCK = {
    tokensAmount: 0,
    accountDateCreated: 'November 11th 2022',
    skillLevel: 'beginner'
};

function tokensEarned(tokensEarnedObject) {
    tokensEarnedObject.amount = 50;
}
tokenAmountAdded = tokensEarned.amount;

console.log(MRJRUCK.tokensAmount);

tokenFunc(MRJRUCK);
console.log(MRJRUCK.tokensAmount);
