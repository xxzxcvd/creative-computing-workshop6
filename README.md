# creative-computing-workshop6

https://xxzxcvd.github.io/creative-computing-workshop6/

1. Task Overview
The main goal of this workshop is to create an interactive nonsense poetry generator that uses the rita.js library to process user input and ultimately generate interesting nonsense poems. This project can not only stimulate creativity, but also serve as an entertainment tool and help explore the basic applications of natural language processing.
2. Features
- Diversified processing: Use three different functions in the rita.js library to process the text input by the user, including word segmentation, part-of-speech tagging, and rhyming word search.
- Random generation: Generate meaningless poems with unique style by shuffling the order of words, randomly replacing words with the same part of speech, and randomly inserting conjunctions.
- User interaction: Provide input boxes and buttons, users can enter any text, click the button to generate poems and display them on the page.

3. Code
workshop6.html
- Import the p5.js and rita.js libraries to provide support for the JavaScript code.
- Create an input box for users to enter text, a button to trigger the poem generation operation, and a div element to display the generated poem.

sketch.js
- setup function: Initialize page elements, add a click event listener to the button, and when the button is clicked, call the generateNonsensePoem function to generate a poem and display it on the page.
- generateNonsensePoem function:Use RiTa.tokenize to tokenize the input text.Use RiTa.pos to get the part-of-speech tag.
  ○ Call the shuffleArray function to shuffle the word order.
  ○ Randomly replace some words with rhyming words of the same part of speech.
  ○ Randomly insert meaningless conjunctions.
  ○ Change a line every three words to generate the final meaningless poem.
  ○ shuffleArray function: Use the Fisher-Yates algorithm to shuffle the order of array elements

4. How to use
  (1) Save the index.html and sketch.js files to the same directory.
  (2)Open the index.html file and access the page in a browser.
  (3)Enter any text in the input box, such as a sentence, phrase, or word.
  (4)Click the "Generate Poem" button and the page will display the generated nonsense poem.
5. Dependencies
   - p5.js: A JavaScript library for creative programming that provides easy-to-use drawing and interactive functions.
   - rita.js: A natural language processing library for word segmentation, part-of-speech tagging, rhyming word search, etc.

6. Sample
Input I love programming
Output:  love glop ambling
