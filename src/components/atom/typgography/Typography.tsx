interface TypographyProps {
  text: string;
  className: string;
}

function Typography({ text, className }: TypographyProps) {
  return <span className={`${className}`}>{text}</span>;
}

export default Typography;
