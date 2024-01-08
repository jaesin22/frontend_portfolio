interface LogoProps {
  img: string;
}

const LogoBadge = ({ img }: LogoProps) => {
  return (
    <div className='m-0 relative'>
      <div className='min-w-[50px] mr-4 relative'>
        <img src={img} alt='logo' className='top-0 bottom-0 w-16 h-auto' />
      </div>
    </div>
  );
};
export default LogoBadge;
