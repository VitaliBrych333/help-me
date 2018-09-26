 module.exports = function count(s, pairs) {
  // your implementation
    const answerMod = 1000000007;
    let k = 1;
    if (s == "1" || s == "01"){
		let length = pairs.length;
        for (let i = 0; i < length; i++) {
            k *= (pairs[i][0] - 1);
        }
        return k % answerMod;
    }
    return k % answerMod;
}
