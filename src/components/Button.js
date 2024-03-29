export default function Button({ onButtonSelect, label }) {
  return <button onClick={onButtonSelect}>{label}</button>;
}
