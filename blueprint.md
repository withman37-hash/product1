# Project Blueprint

## Overview

This project is a web application that includes a lottery number generator with a theme switching feature, a contact form powered by Formspree, and a "동물상 테스트" page using a Teachable Machine model. It consists of multiple HTML files (for contact form and test page), a main HTML file, a CSS file, and a JavaScript file.

## Features

- A user interface for the lottery number generator (`index.html`).
- A button to generate 6 unique random numbers between 1 and 45.
- The generated numbers are displayed on the screen.
- Dark mode/Light mode toggle functionality with local storage preference.
- A dedicated "제휴 문의" page (`contact.html`) with a simple contact form using Formspree.
- Navigation link to the "제휴 문의" page in the header of `index.html`.
- A dedicated "동물상 테스트" page (`pet_face_test.html`) using a Teachable Machine model.
  *   Allows image file upload for classification.
  *   Displays the uploaded image and the classification result.
  *   **Fixed Teachable Machine script loading issues (consolidated to @latest versions).**
- Navigation link to the "동물상 테스트" page in the header of `index.html`.
- The code is hosted on GitHub: https://github.com/withman37-hash/product1

## Last Request

- Fix the issue where "분류하기" button on "동물상 테스트" page does not show result.
- Upload the code to GitHub.
