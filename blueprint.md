# Project Blueprint

## Overview

This project is a web application that includes a lottery number generator with a theme switching feature, a contact form powered by Formspree, a "동물상 테스트" page using a Teachable Machine model, and integrated Google AdSense. It also includes "About Us" and "Privacy Policy" pages for better site credibility. It consists of multiple HTML files (for contact form, test page, and info pages), a main HTML file, a CSS file, and a JavaScript file, along with an `ads.txt` file.

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
- Google AdSense integration:
  *   AdSense script and meta tag added to `index.html`, `contact.html`, and `pet_face_test.html`.
  *   `ads.txt` file created in the project root.
- **Enhanced SEO and site credibility:**
  *   `meta description` and `meta keywords` added to `index.html`, `contact.html`, and `pet_face_test.html`.
  *   Placeholder "회사 소개" (`about.html`) and "개인정보처리방침" (`privacy.html`) pages created.
  *   Navigation links to "회사 소개" and "개인정보처리방침" added to the header of `index.html`.
- The code is hosted on GitHub: https://github.com/withman37-hash/product1

## Last Request

- Optimize the site for Google AdSense approval based on provided blog post references.
- Implement suggested improvements: meta tags, "About Us" and "Privacy Policy" pages with navigation.
- Upload the code to GitHub.
