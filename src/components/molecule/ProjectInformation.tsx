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

const ProjectInformation = ({ value }: ProjectTypes) => {
  return (
    <div className='w-full mb-8'>
      <div className='flex items-center box-border mb-1'>
        <a
          href='value.href'
          target='_blank'
          className='transition-opacity duration-200 ease-in-out'
        >
          <span className='sr-only'>text</span>
          <Typography className='font-semibold text-2xl' text={value.name} />
        </a>
      </div>
      <div className='text-left'>
        <Typography
          className='font-normal text-base whitespace-pre-line'
          text={value.introduce}
        />
      </div>
    </div>
  );
};

export default ProjectInformation;
