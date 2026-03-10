export function validateUserCode(code) {

  const errors = []

  // ---------- 1. Normalize code ----------
  const normalized = code
    .replace(/\/\*[\s\S]*?\*\//g, "")   // remove block comments
    .replace(/\/\/.*$/gm, "")           // remove line comments
    .replace(/\s+/g, " ")               // normalize spaces
    .toLowerCase()

  // ---------- 2. Forbidden patterns ----------
  const forbiddenPatterns = [
    /require\s*\(/,
    /import\s+/,
    /child_process/,
    /\bexec\s*\(/,
    /\bspawn\s*\(/,
    /\bfs\./,
    /\bprocess\./,
    /\beval\s*\(/,
    /\bfunction\s*\(/,
    /new\s+function/,
    /importscripts\s*\(/,
    /\bfetch\s*\(/,
    /xmlhttprequest/,
    /\baxios/,
    /\bwebsocket/,
    /\bsetinterval\s*\(/,
    /\bdocument\./,
    /\bwindow\./,
    /\blocalstorage/,
    /\bsessionstorage/,
    /\bnavigator/,
    /arr\.push\s*\(\s*\{/,
  ]

  forbiddenPatterns.forEach(pattern => {
    if (pattern.test(normalized)) {
      errors.push(`Forbidden pattern detected: ${pattern}`)
    }
  })

  // ---------- 3. Infinite loop detection ----------

  const loopPatterns = [
  /while\s*\(\s*true\s*\)/,
  /while\s*\(\s*1\s*\)/,
  /for\s*\(\s*;\s*;\s*\)/,
  /for\s*\(\s*let\s+\w+\s*=\s*\d+\s*;\s*;\s*\)/,
]

  loopPatterns.forEach(pattern => {
    if (pattern.test(normalized)) {
      errors.push("Potential infinite loop detected")
    }
  })

  // ---------- 4. Dangerous dynamic access ----------
  const dynamicPatterns = [
    /\[\s*['"]fetch['"]\s*\]/,
    /\[\s*['"]eval['"]\s*\]/,
    /\[\s*['"]function['"]\s*\]/,
  ]

  dynamicPatterns.forEach(pattern => {
    if (pattern.test(normalized)) {
      errors.push("Dynamic access to restricted API detected")
    }
  })

  //--------------memory patterns---------

  const memoryPatterns = [
  /new\s+array\s*\(\s*\d{6,}\s*\)/,
  /array\s*\(\s*\d{6,}\s*\)/,
  /\.push\s*\(\s*new\s+array/,
]

memoryPatterns.forEach(pattern => {
  if (pattern.test(normalized)) {
    errors.push("Potential memory abuse detected")
  }
})

  // ---------- 5. Code size limit ----------
  if (code.length > 10000) {
    errors.push("Code too large")
  }

  // ---------- 6. Recursion hint ----------
  const recursionMatches = normalized.match(/solve\s*\(/g)
  if (recursionMatches && recursionMatches.length > 20) {
    errors.push("Suspicious recursion detected")
  }

  // ---------- 7. Ensure solve() exists ----------
  if (!/function\s+solve\s*\(/.test(normalized)) {
    errors.push("Your code must define a function named 'solve(input)'")
  }

  return {
    valid: errors.length === 0,
    errors
  }
}