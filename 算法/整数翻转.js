const reverse = (num) => {
 let result = 0;
 while (num !== 0) {
     result = result * 10 + num % 10;
     num = (num / 10 ) | 0;
 }
 return (result | 0) === result ? result : 0
}