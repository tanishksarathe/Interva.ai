export function formatTranscript(data) {
  return data
    .map((item, index) => {
      return `Question ${index + 1}:
${item.question}

Answer:
${item.answer}`;
    })
    .join("\n\n");
}
