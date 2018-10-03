/**
 * Creator: JIZHUA<413807584@qq.com>
 * Date: 28/08/2018
 * Time: 9:21 PM
 */
export default class Validators {
  static check (typeStr, value, message, pattern) {
    Validators.operators.push(Validators.funcs[typeStr].bind(null, value, message, pattern))
  }

  static excute () {
    const excutors = Validators.operators
    let flag = false

    for (let i = 0; i < excutors.length; i++) {
      const excutor = excutors[i]()
      if (excutor.boolFlag) {
        flag = true
        Validators.operators = []
        return {
          boolFlag: flag,
          message: excutor.message
        }
      }
    }
    return {
      boolFlag: false,
      message: ''
    }
  }
}

Validators.operators = []
Validators.funcs = {
  IS_NOT_EMPTY: function (value, message, pattern) {
    console.log(!value)
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
