import Typography from '../atom/typography/Typography';

const Experience = () => {
  return (
    <div className=' border-l-4 border-[#e0e0e0] mt-4 pl-4'>
      <div className='flex mb-1 items-center'>
        <Typography
          text='FrontEnd chapter Lead'
          className='font-bold text-base mr-1'
        />
      </div>
      <div className='text-left mt-1.5'>
        <Typography
          text='쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다.
       최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.'
          className='text-base'
        />
      </div>
    </div>
  );
};

export default Experience;
