import IsDemo from '../atom/svg/IsDemo';
import IsGithub from '../atom/svg/IsGithub';
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
  demoUrl: string;
}

const ProjectInformation = ({ value }: ProjectTypes) => {
  return (
    <div className='w-full mb-8'>
      <div className='flex items-center box-border mb-1'>
        <span className='sr-only'>text</span>
        <Typography className='font-semibold text-2xl' text={value.name} />
        <div className='flex justify-center items-center ml-3'>
          <IsGithub githubURL={value.href} />
          <IsDemo demoUrl={value.demoUrl} />
        </div>
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
