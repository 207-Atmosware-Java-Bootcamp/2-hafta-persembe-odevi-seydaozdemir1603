//UserData function
function userData() {
    var number = Number(prompt('Lütfen bitiş sayısını giriniz'))
    if (number <= 1) {
      return "lütfen 1'den büyük sayı giriniz"
    } else return number
  }
  
  //main function
  function main() {
    var number =userData();
    document.write("<br>"+number);
    var sum = 0,
      counter = 0 //toplam ve sayı adedi
    var even = 0,
      evenSum = 0,
      evenNumber = 0 //çift sayılar
    var odd = 0,
      oddSum = 0,
      oddNumber = 0 //Tek sayılar
  
    for (let i = 1; i <= number; i = i + 1) {
      //secretKey
      if (number === 44) {
        alert(number + ' SecretKey verildi Çıkış yapıldı')
        break
      }
  
      //100 fazla verilemez
      if (i === 100) {
        alert('Sayı:' + number + '. 100 fazla hesaplayamam.')
        break;
      }
  
      //special data :7
      if (i === 7) {
        alert('Sayı:' + ' 7 sayısını dahil etmiyorum')
        continue
      }
  
      //toplam
      sum += i
      //sum=sum+i;
      //sum++;
  
      //çift
      if (i % 2 == 0) {
        evenSum += i
        even++
        evenNumber = String(evenNumber).concat('-' + i)
      }
  
      //çift
      if (i % 2 == 1) {
        oddSum += i
        odd++
        oddNumber = String(oddNumber).concat('-' + i)
      }
    }
  
    document.write('<br>' + 'verilen Sayı: ' + number)
    document.write('<br>' + 'verilen Sayı Toplamı: ' + sum + '<br>')
  
    document.write('<br>' + 'çift Sayı adeti: ' + even)
    document.write('<br>' + 'çift Sayı toplamı: ' + evenSum)
    document.write('<br>' + 'çift Sayı nelerdir: ' + evenNumber + '<br>')
  
    document.write('<br>' + 'tek Sayı adeti: ' + odd)
    document.write('<br>' + 'tek Sayı toplamı: ' + oddSum)
    document.write('<br>' + 'tek Sayı nelerdir: ' + oddNumber)
  }
  
  main()
  
  //////////////////////////////////////////////////////
  /// Debug nasıl atılır ?
  // http://127.0.0.1:5501/tutorials/js/javascript.html
  //.vscode ==> launch.json
  //////////////////////////////////////////////////////
  