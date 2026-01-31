# Project Blueprint

## Overview

This project is a web application that includes a lottery number generator with a theme switching feature, a contact form powered by Formspree, a "동물상 테스트" page using a Teachable Machine model, and integrated Google AdSense. It consists of multiple HTML files (for contact form and test page), a main HTML file, a CSS file, and a JavaScript file, along with an `ads.txt` file.

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
  *   Fixed Teachable Machine script loading issues (consolidated to @latest versions).
- Navigation link to the "동물상 테스트" page in the header of `index.html`.
- **Google AdSense integration:**
  *   AdSense script and meta tag added to `index.html`, `contact.html`, and `pet_face_test.html`.
  *   `ads.txt` file created in the project root.
- The code is hosted on GitHub: https://github.com/withman37-hash/product1

## Last Request

- Add Google AdSense to the site based on provided information.
- Upload the code to GitHub.
