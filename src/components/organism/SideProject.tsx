import OPGG from '../../assets/image/OPGG.png';
import CompanyInfoBrief from '../molecule/CompanyInfoBrief';
import Experience from '../molecule/Experience';
import LogoBadge from '../molecule/LogoBadge';
import SectionSubTitle from '../molecule/SectionSubTitle';

const SideProject = () => {
  return (
    <div>
      <SectionSubTitle title='Side Project' />
      <div className='flex box-border w-full'>
        <LogoBadge img={OPGG} />
        <div>
          <CompanyInfoBrief />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default SideProject;
