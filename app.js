const boughtPrice = document.querySelector("#price-input");
const quantity = document.querySelector("#quantity-input");
const currentPrice = document.querySelector("#current-price-input");
const check = document.querySelector("#check");
const output = document.querySelector("#output-box");


function calculateProfitOrLoss() {
    var bPrice = boughtPrice.value;
    var currPrice = currentPrice.value;
    var quant = quantity.value;
    var totalCPrice = currPrice*quant;
    var totalBPrice = bPrice*quant;

    if (bPrice && currPrice && quant) {
        if(Number(bPrice) !="NaN" && Number(currPrice) !="NaN" && Number(quant) !="NaN"){
            if (totalCPrice<totalBPrice) {
                var loss = totalBPrice-totalCPrice;
                var lossPercentage =loss/totalBPrice*100;
                output.innerText ="Oops! You have a loss of Rs." + loss +". Loss Percentage: " + lossPercentage +"%";
            }
            else if(totalCPrice>totalBPrice) {
                var profit = totalCPrice-totalBPrice;
                var profitPercentage =profit/totalBPrice*100;
                output.innerText ="Hurray! You have a profit of Rs." + profit +". Profit Percentage: " + profitPercentage + "%";
        
            }
            else if (totalCPrice=totalBPrice) {
                output.innerText="Oops! You don't have any loss or profit!"
            }

        } 
        
        else {
            output.innerText =" Please input only numbers!!"
        }

    } 
    else {
        output.innerText= "Please enter all the values!!"
    }

}


check.addEventListener("click", calculateProfitOrLoss); 


