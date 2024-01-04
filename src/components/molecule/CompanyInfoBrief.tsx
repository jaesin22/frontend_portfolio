import Typography from '../atom/typography/Typography';

interface ProjectTypes {
  value: ProjectProps;
}

interface ProjectProps {
  name: string;
  enddate: string;
  href: string;
  method: string;
  detail: [];
  startdate: string;
  position: string;
  introduce: string;
}

const CompanyInfoBrief = ({ value }: ProjectTypes) => {
  return (
    <div className='w-full'>
      <div className='flex items-center box-border'>
        <a
          href={value.href}
          className='transition-opacity duration-200 ease-in-out'
          target='_blank'
          rel='noreferrer'
        >
          <span className='sr-only'>text</span>
          <Typography className='font-semibold text-2xl' text={value.name} />
        </a>
        <Typography
          className='font-normal ml-2 text-sm'
          text={`${value.startdate} ~ ${value.enddate}`}
        />
      </div>
      <div className='text-left'>
        <Typography className='font-normal text-base' text={value.introduce} />
        <Typography
          className='font-normal text-sm m-0 block mt-3 text-gray-500'
          text={value.position}
        />
      </div>
    </div>
  );
};

export default CompanyInfoBrief;
