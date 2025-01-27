

function setup() {
  let generateButton = select('#generateButton');
  let userInput = select('#userInput');
  let poemOutput = select('#poemOutput');

  generateButton.mousePressed(() => {
      let inputText = userInput.value();
      if (inputText) {
          let poem = generateNonsensePoem(inputText);
          poemOutput.html(poem);
      }
  });
}

function generateNonsensePoem(input) {
  let tokens = RiTa.tokenize(input);
  // 使用 RiTa.pos 获取词性标注
  let posTags = RiTa.pos(input);
  console.log(posTags)

  // 打乱单词顺序
  tokens = shuffleArray(tokens);

  let poem = '';
  const fillerWords = ['zap', 'bloop', 'glop', 'frazz'];

  for (let i = 0; i < tokens.length; i++) {
      let currentWord = tokens[i];
      let currentPos = posTags[i];

      // 随机用同词性的单词替换
      if (Math.random() > 0.5) {
          let similarWords = RiTa.rhymes(currentWord, { pos: currentPos });
          if (similarWords.length > 0) {
              currentWord = similarWords[Math.floor(Math.random() * similarWords.length)];
          }
      }

      poem += currentWord;

      // 随机添加连接词
      if (i < tokens.length - 1 && Math.random() > 0.3) {
          poem += ' ' + fillerWords[Math.floor(Math.random() * fillerWords.length)] + ' ';
      }

      if ((i + 1) % 3 === 0) {
          poem += '<br>';
      } else {
          poem += ' ';
      }
  }

  return poem;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}