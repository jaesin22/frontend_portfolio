import TELUS from '../../assets/image/TELUS_LOGO.png';
import Typography from '../atom/typography/Typography';

const BlogInfomation = () => {
  return (
    <div className='hover:bg-[#f5f5f5] rounded-md w-full -m-2 flex flex-wrap box-border'>
      <div className='p-2 basis-auto flex-grow-0 m-0'>
        <img
          src={TELUS}
          alt='logo'
          className='w-16 h-16 m-0 rounded-md border-none'
        />
      </div>
      <div className='p-2 text-left flex max-w-full border-b flex-col flex-1'>
        <Typography
          className='font-normal w-full text-sm mb-0.5 text-[#0000008a]'
          text='2017-05-03'
        />
        <Typography
          className='font-normal w-full text-base mb-0.5'
          text='[JavaScript로 천체 구현하기] 행성의 움직임을 구현해보자'
        />
        <Typography
          className='font-normal w-full text-sm mb-0.5 text-[#0000008a]'
          text='프로그래밍/그래픽스'
        />
      </div>
    </div>
  );
};

export default BlogInfomation;
