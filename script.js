console.log("Homework#11");

function getRandomChinese(length){
    return new Promise((resolve) => {
        let i = 0;
        let currentMilliseconds = Date.now();
        let result = '';

        while (i<length){
            i++;
            sign = String.fromCharCode(currentMilliseconds);
            sign = sign.substr(-1);
            result += sign;
        }
        setTimeout(()=>{
            resolve(result);
        },50 * length);
    
    })
}

getRandomChinese(15).then((chineseSigns)=>{
    console.log(chineseSigns);
});