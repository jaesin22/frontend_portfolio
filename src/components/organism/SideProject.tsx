import OPGG from '../../assets/image/OPGG.png';
import CompanyInfoBrief from '../molecule/CompanyInfoBrief';
import Experience from '../molecule/Experience';
import LogoBadge from '../molecule/LogoBadge';
import SectionSubTitle from '../molecule/SectionSubTitle';

interface ProjectTypes {
  project: ProjectProps[];
}

interface ProjectProps {
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
const SideProject = ({ project }: ProjectTypes) => {
  return (
    <div>
      <SectionSubTitle title='Side Project' />
      {project.map((items: ProjectProps) => (
        <div className='flex box-border w-full' key={items.id}>
          <LogoBadge img={OPGG} />
          <div className='mb-12'>
            <CompanyInfoBrief value={items} />
            <Experience exp={items.detail} key={items.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideProject;
