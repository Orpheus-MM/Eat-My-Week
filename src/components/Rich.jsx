// Renders copy arrays: strings plain, { accent } in red italic.
export default function Rich({ value }) {
  if (!Array.isArray(value)) return value
  return value.map((part, i) =>
    typeof part === 'string' ? part : <em key={i} className="em">{part.accent}</em>,
  )
}
