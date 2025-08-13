function ActionButton({ label, func }) {
  return <button onClick={func}>{label}</button>;
}

export default ActionButton;
