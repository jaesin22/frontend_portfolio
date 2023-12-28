import BlogInfomation from '../molecule/BlogInfomation';
import ProjectInformation from '../molecule/ProjectInformation';
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
const Project = ({ project }: ProjectTypes) => {
  return (
    <div>
      <SectionSubTitle title='Project' />
      <ProjectInformation />
      {project.map((items: ProjectProps) => (
        <div className='box-border w-full' key={items.id}>
          <BlogInfomation />
          <BlogInfomation />
        </div>
      ))}
    </div>
  );
};

export default Project;
