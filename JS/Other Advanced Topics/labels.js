// Labeled Statements with Loops

const arr = [1,2,3,4,5]
outerLoop : for (let val in arr){
    for( let j=0;j<3;j++){
        if(val==2) continue outerLoop //skips to the next iteration of the outer loop

        console.log({val,j})
    }
}

// Labeled Statements with Blocks

myBlock: {
    console.log("Start of block");
    break myBlock; // Exit the block immediately
    console.log("This will not be executed");
}
console.log("End of block");

// Key Points
// Syntax: A label is a valid identifier followed by a colon (:). For example: label:.
// Usage: Labels are used with break and continue to manage flow control in nested loops and blocks.
// Scope: Labels apply to the nearest loop or block that follows them.