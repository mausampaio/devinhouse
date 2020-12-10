const getFinalScore = (scores) => {
  let finalScore = 0;
  scores.forEach((score) => {
    finalScore += score; 
  });

  return finalScore / 2;
};
