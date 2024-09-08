String.prototype.toJadenCase = function () {
  return this.split("")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
