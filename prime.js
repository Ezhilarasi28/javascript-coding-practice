let num = 15;
for (i = 1; i <= num; i++) {
  if (i % 1 == 0 && i % i == 0) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
