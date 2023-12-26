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
}

const CompanyInfoBrief = ({ value }: ProjectTypes) => {
  if (!value) {
    return null;
  }
  return (
    <div className='w-full'>
      <div className='flex items-center box-border'>
        <a
          href={value.href}
          className='transition-opacity duration-200 ease-in-out'
        >
          <span className='sr-only'>text</span>
          <Typography className='font-semibold text-2xl' text={value.name} />
        </a>
        <Typography
          className='font-normal ml-2 text-sm'
          text={`${value.startdate} ~ ${value.enddate}`}
        />
      </div>
      <div className='text-left'>
        <Typography
          className='font-normal text-base'
          text='쿼타랩은 스톡옵션이나 RSU와 같은 복잡한 비상장 증권/금융 데이터나 법인 운영에 필요한 주주 명부 관리, 영업보고 등을 사용자들이 편하게 이해하고 관리할 수 있는 금융 플랫폼 쿼타북을 운영하고 있습니다.'
        />
        <Typography
          className='font-normal text-sm m-0 block mt-3 text-gray-500'
          text='Frontend Chapter Lead'
        />
      </div>
    </div>
  );
};

export default CompanyInfoBrief;
