import { CodeOutlined } from '@ant-design/icons';

interface IsDemoProps {
  githubURL: string;
}

const IsGithub = ({ githubURL }: IsDemoProps) => {
  return (
    <a
      href={githubURL}
      target='_blank'
      rel='noreferrer'
      className='relative inline-block group'
    >
      <span className='sr-only'>Github</span>
      <CodeOutlined
        style={{ strokeWidth: '20' }}
        className='text-[#808080] p-3 hover:bg-gray-100 rounded-full text-2xl leading-none transition duration-300 ease-in-out group-hover:opacity-100 '
        aria-label='Github'
      />
      <span className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 p-1 bg-gray-800 text-white text-xs rounded-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100'>
        소스 보기
      </span>
    </a>
  );
};

export default IsGithub;
