tryThis = (out, name, toEval) ->
  try
    eval toEval
    out[name + "Ok"] = true
  catch error
    out.success = false
    out[name + "Error"] = error.message

out = success: true
tryThis out, "class",         "'use strict';(class Foo extends Object {constructor() {super(...arguments);this.bar = 123;}});"
tryThis out, "interpolation", "'use strict';(`1 + 2 = ${1 + 2}`)"
tryThis out, "boundFunction", "'use strict';(() => {})"
tryThis out, "spred",         "'use strict';(function (...a) {return foo(...a);});"
tryThis out, "let",           "'use strict';(function () {let a = 1;})"
tryThis out, "bareFunction",  "'use strict';(a => a + 1)"
tryThis out, "structuring",   "'use strict';(function () {b = {a, b, c};})"
tryThis out, "destructuring", "'use strict';(function () {let {length} = [];})"

module.exports = out