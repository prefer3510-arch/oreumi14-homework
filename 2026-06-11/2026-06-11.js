const scores = [85, 92, 58, 74, 66, 100, 43];

//1번 문제//
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(91)); // A
console.log(getGrade(81)); // B
console.log(getGrade(75)); // C
console.log(getGrade(64)); // D
console.log(getGrade(48)); // F

//2번 문제//
function isPassed(score) {
  if (score >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(isPassed(80)); // true
console.log(isPassed(59)); // false

//3번 문제//
function getAverage(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  const average = sum / scores.length;
  return average;
}
console.log(getAverage(scores)); // 74

//4번 문제//
function getPassedScores(scores) {
  const Passed = scores.filter((score) => {
    return score >= 60;
  });
  return Passed;
}
console.log(getPassedScores(scores)); // 85, 92, 74, 66, 100

//한 줄 변환//
function getPassedScores(scores) {
  return scores.filter((score) => score >= 60);
}

//5번 문제//
function getScoreMessages(scores) {
  const labels = scores.map((score) => {
    return score + "점은 " + getGrade(score) + " 등급입니다";
  });
  return labels;
}
console.log(getScoreMessages(scores)); // '85점은 B등급입니다' , '92점은 A등급입니다'

//6번 문제//
function printScoreReport(scores) {
  scores.forEach((score, index) => {
    const result = score >= 60 ? "합격" : "불합격";
    console.log(`${score}점: ${getGrade(score)}등급, ${result}`);
  });
}
console.log(printScoreReport(scores)); // 85점: B등급, 합격 58점: F등급, 불합격

//7번 문제//
function printSummary(scores) {
  const average = getAverage(scores);
  console.log(`평균 점수 : ${average}점`);

  const passed = getPassedScores(scores);
  console.log(`합격 점수 : ${passed}점`);

  console.log("점수 설명 :");
  const message = getScoreMessages(scores);
  message.forEach((msg) => {
    console.log(` ${msg}`);
  });
}

// 도전 문제 //
const names = ["민수", "지은", "도윤", "서연", "하준", "유나", "지호"];

function printNamedScoreReport(names, scores) {
  names.forEach((name, index) => {
    const score = scores[index];
    const result = score >= 60 ? "합격" : "불합격";
    console.log(`${name} : ${score}점, ${getGrade(score)}등급, ${result}`);
  });
}
