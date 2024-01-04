import Typography from '../atom/typography/Typography';

interface expProps {
  role: string;
  explain: string;
  id: number;
}

interface expTypes {
  exp: expProps[];
}

const Experience = ({ exp }: expTypes) => {
  if (!exp) {
    return null;
  }
  return (
    <div>
      {exp.map((items: expProps) => (
        <div className=' border-l-4 border-[#e0e0e0] mt-4 pl-4' key={items.id}>
          <div className='flex mb-1 items-center'>
            <Typography
              text={items.role}
              className='font-bold text-base mr-1'
            />
          </div>
          <div className='text-left mt-1.5'>
            <Typography text={items.explain} className='text-base' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
