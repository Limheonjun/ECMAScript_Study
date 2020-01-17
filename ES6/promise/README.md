# promise

# Description
- 자바스크립트 비동기 처리에 사용되는 객체
- 생성되고 종료될때까지 Pending(대기), Fulfilled(이행), Rejected(실패) 세가지 상태가 존재
- Pending : new Promise()를 호출 시 대기상태가 됨
- Fulfilled : resolve를 실행하면 이행상태가 됨. 이때 then()을 이용하여 처리 결과값을 받을 수 있음
- Rejected : reject를 실항하면 실패상태가 됨

# Features
- resolve에 인자로 넣는 값이 다음 then안의 함수의 파라미터로 전달됨
