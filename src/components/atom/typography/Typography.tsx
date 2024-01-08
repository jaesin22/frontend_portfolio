interface TypographyProps {
  text: string;
  className: string;
}

const Typography = ({ text, className }: TypographyProps) => {
  return <span className={`${className}`}>{text}</span>;
};

export default Typography;
