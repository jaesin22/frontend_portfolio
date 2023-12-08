interface InputType {
  styles: string;
}
function Input({ styles }: InputType) {
  return <input className={`${styles}`} />;
}

export default Input;
