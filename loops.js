function forLoop(array) {
  for (var i = 1; i <26; i++) {
    if (i==1) {
      array.push('I am 1 sstrange loop.');
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
  }
}