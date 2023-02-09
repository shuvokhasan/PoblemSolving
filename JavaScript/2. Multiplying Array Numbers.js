const ary = [1, 2, 3, 5, 7, 9];
let multiplication = 1;
for(i = 0; i < ary.length; i++){
  multiplication *= ary[i];
}
document.write(multiplication);