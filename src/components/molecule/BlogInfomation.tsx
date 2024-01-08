import OPGG from '../../assets/image/OPGG.png';
import Typography from '../atom/typography/Typography';

interface BlogProps {
  id: string;
  postDate: string;
  postTitle: string;
  postCategory: string;
  postLink: string;
}

interface BlogPropsArray {
  detail: BlogProps;
}

const BlogInfomation = ({ detail }: BlogPropsArray) => {
  return (
    <div className='hover:bg-[#f5f5f5] rounded-md w-full -m-2 flex flex-wrap box-border'>
      <a
        href={`${detail.postLink}`}
        className='w-full flex'
        target='_blank'
        rel='noreferrer'
      >
        <div className='p-2 basis-auto flex-grow-0 m-0'>
          <img
            src={OPGG}
            alt='logo'
            className='w-16 h-16 m-0 rounded-md border-none'
          />
        </div>
        <div className='p-2 text-left flex max-w-full border-b flex-col flex-1'>
          <Typography
            className='font-normal w-full text-sm mb-0.5 text-[#0000008a]'
            text={`${detail.postDate}`}
          />
          <Typography
            className='font-normal w-full text-base mb-0.5'
            text={`${detail.postTitle}`}
          />
          <Typography
            className='font-normal w-full text-sm mb-0.5 text-[#0000008a]'
            text={`${detail.postCategory}`}
          />
        </div>
      </a>
    </div>
  );
};

export default BlogInfomation;
