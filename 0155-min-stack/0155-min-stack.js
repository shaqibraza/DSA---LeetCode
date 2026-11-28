
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.stack.length === 0 || this.minStack[this.minStack.length - 1] >= value){
        this.minStack.push(value);
    }

    this.stack.push(value);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let elem1 = this.stack.pop();
    let elem2 = this.minStack[this.minStack.length - 1];

    if(elem1 === elem2){
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */