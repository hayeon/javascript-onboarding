function problem1(pobi, crong, page, my, answer) {
  //페이지를 랜덤으로 출력하는 함수
  const pageRandom = () => {
    const randomNumber = Math.floor(Math.random() * 396 + 2);
    if (randomNumber % 2 == 0) {
      randomNumber + 1;
    }
    page = [randomNumber, randomNumber + 1];
    const str_1 = page[0].toString();
    var sum1 = 0;
    for (var i = 0; i < str_1.length; i++) {
      sum1 += Number(str_1.charAt(i)); // 자릿수를 구한 문자를 다시 숫자로 바꿔 더하기
    }

    const str_2 = page[1].toString(); // for문에서 length 사용 가능하게 String으로 변경
    var sum2 = 0;
    for (var i = 0; i < str_2.length; i++) {
      sum2 += Number(str_2.charAt(i));     }

    const str_3 = page[0].toString(); 
    var multi1 = 1;
    for (var i = 0; i < str_3.length; i++) {
      multi1 *= Number(str_3.charAt(i));     }

    const str_4 = page[1].toString(); 
    var multi2 = 1;
    for (var i = 0; i < str_4.length; i++) {
      multi2 *= Number(str_4.charAt(i));     }
    const myArray = [sum1, sum2, multi1, multi2];
    my = Math.max(...myArray);
  };
  pageRandom();
  pobi = page;
  const pobiScore = my;
  pageRandom();
  crong = page;
  const crongScore = my;

  try {
    if (pobiScore > crongScore) {
      answer = 1;
    } else if (pobiScore < crongScore) {
      answer = 2;
    } else if (pobiScore == crongScore) {
      answer = 0;
    }
  } catch (error) {
    answer = -1;
  }



console.log(
  "| pobi       | crong      | result |\n" +
    "| ---------- | ---------- | ------ |\n" +
    "| [" +
    pobi +
    "]   | [" +
    crong +
    "] | " +
    answer +
    "|\n"
);
return answer;
}
problem1();


module.exports = problem1;
