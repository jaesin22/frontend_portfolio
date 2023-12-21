import TELUS from '../../assets/image/TELUS_LOGO.png';
import CompanyInfoBrief from '../molecule/CompanyInfoBrief';
import Experience from '../molecule/Experience';
import LogoBadge from '../molecule/LogoBadge';
import SectionSubTitle from '../molecule/SectionSubTitle';

const Work = () => {
  return (
    <div>
      <SectionSubTitle title='Work' />
      <div className='flex box-border w-full'>
        <LogoBadge img={TELUS} />
        <div>
          <CompanyInfoBrief />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Work;
