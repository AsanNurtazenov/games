export default function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
