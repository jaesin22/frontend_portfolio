import getAPI from '../../api/api';
import SocialIconGroup from '../molecule/SocialIconsGroup';
import Header from '../organism/Header';
import IntroduceCard from '../organism/IntroduceCard';
import Project from '../organism/Project';
// import SideProject from './components/organism/SideProject';
import Work from '../organism/Work';

import { useQuery } from '@tanstack/react-query';

const AboutPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['api'],
    queryFn: getAPI,
  });
  if (isLoading) {
    return null;
  }

  return (
    <div className='pb-[200px]'>
      <Header />
      <div className='sm:max-w-[980px] lg:max-w-[1280px] md:max-w-[1024px] mx-auto'>
        <main className='box-root px-4 max-w-[1024px] ms:px-6 sm:px-8 m-auto  mt-20 font-main'>
          {data?.introduce && <IntroduceCard introduce={data?.introduce} />}
          <SocialIconGroup />
          {data?.work && (
            <section>
              <Work WorkValues={data.work} />
            </section>
          )}
          {/* {data?.project && (
            <section>
              <SideProject project={data.project} />
            </section>
          )} */}
          {data?.project && (
            <section>
              <Project project={data.project} />
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
