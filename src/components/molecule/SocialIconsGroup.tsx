import { GithubFilled, MailFilled, InstagramFilled } from '@ant-design/icons';

const SocialIconGroup = () => {
  return (
    <div className='flex text-xl justify-center mt-10'>
      <a href='https://github.com/Jaesin22' target='_blank' rel='noreferrer'>
        <span className='sr-only'>Github</span>
        <GithubFilled
          className='text-[#808080] p-3 hover:bg-gray-100 rounded-full'
          aria-label='Github'
        />
      </a>
      <a href='mailto:jaesin22@naver.com' target='_blank' rel='noreferrer'>
        <span className='sr-only'>Email</span>
        <MailFilled
          className='text-[#808080] p-3 hover:bg-gray-100 rounded-full'
          aria-label='Email'
        />
      </a>
      <a
        href='https://www.instagram.com/jaesin22/'
        target='_blank'
        rel='noreferrer'
      >
        <span className='sr-only'>Instagram</span>
        <InstagramFilled
          className='text-[#808080] p-3 hover:bg-gray-100 rounded-full'
          aria-label='Instagram'
        />
      </a>
    </div>
  );
};

export default SocialIconGroup;
