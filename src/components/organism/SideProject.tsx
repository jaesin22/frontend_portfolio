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
}
const SideProject = ({ project }: ProjectTypes) => {
  return (
    <div>
      <SectionSubTitle title='Side Project' />
      {project.map((items: ProjectProps) => (
        <div className='flex box-border w-full'>
          <LogoBadge img={OPGG} />
          <div>
            <CompanyInfoBrief value={items} key={items.id} />

            <Experience />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideProject;
