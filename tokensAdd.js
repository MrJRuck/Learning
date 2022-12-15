
let tokenAmountAdded = 0;

function tokenFunc(addTokens) {
    addTokens.tokensAmount = tokenAmountAdded;
}

const MRJRUCK = {
    tokensAmount: 0,
    accountDateCreated: 'November 11th 2022',
    skillLevel: 'beginner'
};

function tokensEarned(tokensEarnedObject) {
    tokensEarnedObject.amount = 50;
    return tokensEarnedObject;
}

const tokensEarnedResult = tokensEarned(MRJRUCK);
tokenAmountAdded = tokensEarnedResult.amount;

console.log(MRJRUCK.tokensAmount); // 0

tokenFunc(MRJRUCK);
console.log(MRJRUCK.tokensAmount); // 50
