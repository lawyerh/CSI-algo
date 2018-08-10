"use strict";

function minimalCoins(coins, amount){
    if(isNaN(amount) || amount === null) // Make sure the amount provided is a valid number
    {
       return "The amount must be a number";
        
    }

    if(typeof(coins) !== 'object' || coins === null) // Make sure there is an array provided
    {
        return "Please provide an array of coin amounts";
    }

    else {

        for(let coinIdx = 0; coinIdx < coins.length; coinIdx++){ // Make sure everything in the array is a number

            if(typeof coins[coinIdx] !== 'number'){
                return "All items in the array should be integer amounts";
            }
        }

    }

    // Now we know the inputs are correct

    let sorted = false; // Sort the coins array to be max >> min
    while (!sorted)
    {
        let didSwap = false;
        for(let coinIdx = 0; coinIdx < coins.length; coinIdx++)
        {
            if(coins[coinIdx] !== coins.length && coins[coinIdx] < coins[coinIdx + 1]) {
                let temp = coins[coinIdx];
                coins[coinIdx] = coins[coinIdx + 1];
                coins[coinIdx + 1] = temp;
                didSwap = true;
            }
        }
        if(!didSwap) sorted = true;
    }
    
    console.log(coins)

}

console.log(minimalCoins([1,4,12,3,32,5], 50));


