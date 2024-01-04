import Typography from '../atom/typography/Typography';

const ProjectInformation = () => {
  return (
    <div className='w-full mb-8'>
      <div className='flex items-center box-border'>
        <a
          href='value.href'
          target='_blank'
          className='transition-opacity duration-200 ease-in-out'
        >
          <span className='sr-only'>text</span>
          <Typography className='font-semibold text-2xl' text='value.name' />
        </a>
      </div>
      <div className='text-left'>
        <Typography className='font-normal text-base' text='value.introduce' />
      </div>
    </div>
  );
};

export default ProjectInformation;
