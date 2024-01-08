import Typography from '../atom/typography/Typography';

interface IntroduceProps {
  introduce: string;
}

const IntroduceCard = ({ introduce }: IntroduceProps) => {
  const introduceText = '안녕하세요.\n프론트엔드 개발자 김현재입니다.';
  return (
    <section>
      <div className='font-main'>
        <Typography
          text={introduceText}
          className='lg:text-6xl text-4xl  tracking-wide leading-tight text-left flex font-medium font-main whitespace-pre-line'
        />
        <div className='mt-6 text-left text-lg font-main font-light'>
          <Typography text={introduce} className='text-left' />
        </div>
      </div>
    </section>
  );
};

export default IntroduceCard;
