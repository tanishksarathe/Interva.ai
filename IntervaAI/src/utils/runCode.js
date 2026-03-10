export function runUserCode(code, testCases) {

  return new Promise((resolve, reject) => {

    const worker = new Worker(
      new URL("../workers/codeRunner.worker.js", import.meta.url)
    )

    const timeout = setTimeout(() => {
      worker.terminate()
      reject("Time Limit Exceeded")
    }, 2000)

    worker.onmessage = (e) => {
      clearTimeout(timeout)
      worker.terminate()

      resolve(e.data)
    }

    worker.onerror = (err) => {
      clearTimeout(timeout)
      worker.terminate()

      reject(err.message)
    }

    worker.postMessage({
      code,
      testCases
    })
  })
}