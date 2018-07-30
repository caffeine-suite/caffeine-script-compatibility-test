out = require './TestCompatibility'

document.body.innerHTML = """
  <pre>
  CaffeineScript compatible: #{!!out.success}
  Details:
    #{JSON.stringify out, null, 4}
  </pre>
  """