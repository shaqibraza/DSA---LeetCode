/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for(let token of tokens){
        if(stack.length > 1 && token === "+"){
            let val = stack[stack.length - 1] + stack[stack.length - 2];
            stack.pop(stack.length - 1);
            stack.pop(stack.length - 2);
            stack.push(val);
        }else if(stack.length > 1 && token === "-"){
            let val = stack[stack.length - 2] - stack[stack.length - 1];
            stack.pop(stack.length - 1);
            stack.pop(stack.length - 2);
            stack.push(val);
        }else if(stack.length > 1 && token === "*"){
            let val = stack[stack.length - 1] * stack[stack.length - 2];
            stack.pop(stack.length - 1);
            stack.pop(stack.length - 2);
            stack.push(val);
        }else if(stack.length > 1 && token === "/"){
            let val = Math.trunc(stack[stack.length - 2] / stack[stack.length - 1]);
            stack.pop(stack.length - 1);
            stack.pop(stack.length - 2);
            stack.push(val);
        }else{
            stack.push(Number(token))
        }
    }
    return stack[stack.length - 1];
};