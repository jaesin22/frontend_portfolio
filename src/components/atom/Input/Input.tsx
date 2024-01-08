interface InputType {
  styles: string;
}
const Input = ({ styles }: InputType) => {
  return <input className={`${styles}`} />;
};

export default Input;
