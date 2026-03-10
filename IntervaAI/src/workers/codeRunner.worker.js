// Actual Sandbox that runs my code 

self.onmessage = function (e) {
  const { code, testCases } = e.data

  let solveFunction

  try {
    // compile user code
    const fn = new Function(code + "; return solve")
    solveFunction = fn()
  } catch (err) {
    self.postMessage({
      type: "COMPILATION_ERROR",
      message: err.message
    })
    return
  }

  const results = []

  for (const tc of testCases) {
    try {
      const output = solveFunction(tc.input)

      results.push({
        input: tc.input,
        expected: tc.ex_output,
        output: String(output),
        passed: String(output) === String(tc.ex_output)
      })
    } catch (err) {
      results.push({
        input: tc.input,
        error: "Runtime Error"
      })
    }
  }

  self.postMessage({
    type: "RESULT",
    results
  })
}