/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    if(n < 10) return false;

    let aliceMove = 0;
    let bobMove = 0;

    n = n - 10;
    aliceMove++;

    let temp = 9;
    while(n >= temp){
        n = n - temp;
        bobMove++;
        temp--;

        if(n >= temp){
            n = n - temp;
            aliceMove++;
            temp--;
        }
    }
    if(aliceMove > bobMove){
        return true;
    }else{
        return false;
    }
};