class ValError extends Error {
  constructor(message, field1, field2) {
    super(message)
    this.field1 = field1;
    this.field2 = field2;
  }
}

try {
  throw new ValError("Stack trace example", 'yay', 'youF' );
} catch (error) {
  console.log(error.field2);
}
