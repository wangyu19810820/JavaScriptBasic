Array.prototype.pushAll = function(items) {
    console.log("pushAll call");
    
    // items must be an array
    if (!Array.isArray(items)) {
        throw new TypeError("Argument must be an array.");
    }
    // use built-in push() and spread operator
    return this.push(...items);
};
