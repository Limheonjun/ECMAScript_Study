# generator

## Description
-  제너레이터는 함수의 실행을 중간에 멈추었다가 필요한 시점에 다시 재개할 수 있음

## Features
- 제너레이터 함수는 function*로 시작함
- 제너레이터 함수 안에는 yield 키워드가 존재함. return 키워드와 비슷한 역할을 함
- return과의 차이점은 return은 한번만 실행되지만, yield는 여러번 실행됨
- new 키워드로 인스턴스 생성 불가
- next() -> yield -> next() -> yield의 흐름
- yield 키워드 뒤아 값은 next() 함수의 반환값으로 전달됨