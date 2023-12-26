import JIIN from '../../assets/image/JIIN_LOGO.png';
import TELUS from '../../assets/image/TELUS_LOGO.png';
import CompanyInfoBrief from '../molecule/CompanyInfoBrief';
import Experience from '../molecule/Experience';
import LogoBadge from '../molecule/LogoBadge';
import SectionSubTitle from '../molecule/SectionSubTitle';

interface WorkValue {
  WorkValues: WorkProps[];
}

interface WorkProps {
  name: string;
  enddate: string;
  href: string;
  method: string;
  detail: [];
  startdate: string;
  position: string;
  id: number;
  engname: string;
  introduce: string;
}

const logoMap: { [key: string]: string } = {
  TELUS,
  JIIN,
};
const Work = ({ WorkValues }: WorkValue) => {
  return (
    <div>
      <SectionSubTitle title='Work' />
      {WorkValues.map((items: WorkProps) => (
        <div className='flex box-border w-full' key={items.id}>
          <LogoBadge img={logoMap[items.engname]} />
          <div className='mb-12'>
            <CompanyInfoBrief value={items} />
            <Experience exp={items.detail} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
