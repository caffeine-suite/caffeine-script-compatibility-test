tryThis = (out, name, toEval) ->
  try
    eval toEval
    out[name + "Ok"] = true
  catch error
    out.success = false
    out[name + "Error"] = error.message

out = success: true
tryThis out, "class", "(class Foo extends Object {constructor() {super(...arguments);this.bar = 123;}});"
tryThis out, "interpolation", "(`1 + 2 = ${1 + 2}`)"
tryThis out, "boundFunction", "(() => {})"
tryThis out, "spred", "(function (...a) {return foo(...a);});"
tryThis out, "let", "(function () {let a = 1;})"
tryThis out, "bareFunction", "(a => a + 1)"
tryThis out, "structuring", "(function () {b = {a, b, c};})"
tryThis out, "destructuring", "(function () {let {length} = [];})"

module.exports = out