import Typography from '../atom/typgography/Typography';

function IntroduceCard() {
  const introduceText = "안녕하세요.\n개발자 김현재입니다."
  return (
    <section>
      <div className=''>
        <Typography text={introduceText} className='text-6xl tracking-wide leading-tight text-left flex font-normal whitespace-pre-line' />
          <div className='mt-10 text-left text-lg'>
            <Typography text='오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해 사용자가 해피모먼트를 경험하는 것을 보면 보람을 느낍니다.'
            className='text-left'/>
          </div>
      </div>
    </section>
  );
}

export default IntroduceCard;
