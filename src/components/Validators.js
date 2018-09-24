/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 28/08/2018
 * Time: 9:21 PM
 */
export default class Validators {
  static check ({value, pattern, typeStr, message}) {
    Validators.operators.push(Validators.funcs[typeStr].bind(value, pattern, message))
  }

  static excute () {
    const excutors = Validators.operators
    let flag = false
    for (let i = 0; i < excutors.length; i++) {
      const excutor = excutors[i]()
      if (excutor.boolFlag) {
        flag = true
        return {
          boolFlag: flag,
          message: excutor.message
        }
      }
    }
  }
}

Validators.operators = []
Validators.funcs = {
  IS_NOT_EMPTY: (value, pattern, message) => {
    if (pattern) {
      return {
        boolFlag: !value.test(pattern),
        message
      }
    }
    return {
      boolFlag: !value,
      message
    }
  }
}
