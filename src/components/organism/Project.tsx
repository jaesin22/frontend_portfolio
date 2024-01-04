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
  introduce: string;
  id: string;
}

interface BlogProps {
  id: string;
  postDate: string;
  postTitle: string;
  postCategory: string;
  postLink: string;
}

const Project = ({ project }: ProjectTypes) => {
  return (
    <div>
      <SectionSubTitle title='Project' />
      {project.map((projectItem: ProjectProps) => (
        <div className='box-border w-full mb-12' key={projectItem.id}>
          <ProjectInformation value={projectItem} />
          {projectItem.detail.map((blogItem: BlogProps) => (
            <BlogInfomation detail={blogItem} key={blogItem.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Project;
