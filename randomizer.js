function getRandomNumber(min, max, roundToTwoDecimals = false) {
    const randomVal = Math.random() * (max - min) + min;
    return roundToTwoDecimals ? parseFloat(randomVal.toFixed(2)) : Math.floor(randomVal);
}

function applyRandomStats() {
    // Generates random stats within realistic ranges
    const randomSales = getRandomNumber(5000, 75000, true); 
    const randomOrders = getRandomNumber(50, 450);          
    const randomSessions = getRandomNumber(1000, 15000);     
    const randomConvRate = parseFloat(((randomOrders / randomSessions) * 100).toFixed(2));

    // Saves them to the browser memory
    localStorage.setItem('total_sales', randomSales);
    localStorage.setItem('total_orders', randomOrders);
    localStorage.setItem('total_sessions', randomSessions);
    localStorage.setItem('conversion_rate', randomConvRate);

    // Reloads the page to apply the changes
    window.location.reload();
}
