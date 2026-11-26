/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let stonesToRemove = 10;
    let moves = 0;

    while(n >= stonesToRemove){
        n -= stonesToRemove;

        stonesToRemove--;
        moves++;
    }

    return moves % 2 === 1;
};