# string padding

## Description
- padStart와 padEnd를 사용하여 string 앞뒤에 공백 혹은 문자열을 채워넣음

## Features
- 문자열 길이를 포함하여 padStart와 padEnd에 따라 부족한 만큼 채워넣음
- str1.padStart(num, str2) : num-str1.length만큼 앞쪽에 str2로 채워넣음. num-str1.length가 0보다 작으면 실행되지 않음
- str1.padEnd(num, str2) : num-str1.length만큼 뒤쪽에 str2로 채워넣음. num-str1.length가 0보다 작으면 실행되지 않음