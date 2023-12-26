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
}

const Work = ({ WorkValues }: WorkValue) => {
  return (
    <div>
      <SectionSubTitle title='Work' />
      {WorkValues.map((items: WorkProps) => (
        <div className='flex box-border w-full'>
          <LogoBadge img={TELUS} />
          <div>
            <CompanyInfoBrief value={items} key={items.id} />
            <Experience />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
