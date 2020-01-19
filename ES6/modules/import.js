// 파일 전체를 로드할때
import * as exported from './export.js';
exported.func(); // none
exported.func(exported.str2); // This is string

// 개별단위로 로드할때
import {func, str2} from './export.js';
func(); // none
console.log(str2); // This is string

// default값만 로드할때
import default1 from './export.js';
console.log(default1); // This is string