// 이전 버전
// try {
//     throw new Error('hello')
//   } catch (error) {
//     console.error(error.message);
//   }

// ES10
try {
    throw new Error('hello');
  } catch {
    console.error('error발생');
  }