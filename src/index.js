module.exports = function toReadable (number) {
    let mas = [],a =0,b=0,c=0;
  let units = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let fromTenToNineteen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let dozens = ['0','10','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  if(number<10){
      return units[number];
  }else if(number<20){
      return fromTenToNineteen[number-10];
  }else if(number<100){
      mas=String(number).split("");
      if(mas[1]=='0'){
        a = +mas[0];
        return dozens[a];
      }else{
        a = +mas[0];
        b = +mas[1];
        return dozens[a] + " " + units[b];
      }
    }else if(number%100<10){
      mas=String(number).split("");
      if(mas[1]=='0' && mas[2]=='0'){
        a = +mas[0];
        return units[a] + " " + "hundred";
      }
      a = +mas[0];
      return units[a] + " " + "hundred" + " " + units[number%100];
  }else if(number%100<20){
      mas=String(number).split("");
      a = +mas[0];
      return units[a] + " " + "hundred" + " " + fromTenToNineteen[number%100-10];
  }else{
      mas=String(number).split("");
      
      if(mas[2]=='0'){
          a = +mas[0];
          b = +mas[1];
          return units[a] + " " + "hundred" + " " +  dozens[b];
      }else{
        a = +mas[0];
        b = +mas[1];
        c = +mas[2];
        return units[a] + " " + "hundred" + " " +  dozens[b] + " " + units[c];
      }
  }
}
