self.onmessage = function (e) {
  const { code, testCases } = e.data;

  console.log("Code Received in Worker : ", code);
  console.log("Test Cases Received in Worker : ", testCases);

  let solveFunction;

  try {
    const fn = new Function(code + "; return solve");
    solveFunction = fn();
  } catch (err) {
    self.postMessage({
      type: "COMPILATION_ERROR",
      message: err.message
    });
    return;
  }

  const results = [];

  for (const tc of testCases) {
    try {
      console.log("Executing test case with input: ", tc.input);
      let output = solveFunction(tc.input);

      results.push({
        input: tc.input,
        expected: tc.ex_output,
        output: output,
        passed: JSON.stringify(output) === JSON.stringify(tc.ex_output),
      });

    } catch (err) {
      results.push({
        input: tc.input,
        error: err.message || "Runtime Error"
      });
    }
  }

  self.postMessage({
    type: "RESULT",
    results
  });
};