import { getAPI } from './api/api';
import SocialIconGroup from './components/molecule/SocialIconsGroup';
import Header from './components/organism/Header';
import IntroduceCard from './components/organism/IntroduceCard';
import Project from './components/organism/Project';
import SideProject from './components/organism/SideProject';
import Work from './components/organism/Work';

import './App.css';
import { useQuery } from '@tanstack/react-query';

const App = () => {
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
      <main className='box-root m-auto max-w-[1024px] mt-20 font-main'>
        <IntroduceCard />
        <SocialIconGroup />
        {data?.work && (
          <section>
            <Work WorkValues={data.work} />
          </section>
        )}
        {data?.project && (
          <section>
            <SideProject project={data.project} />
          </section>
        )}
        {data?.project && (
          <section>
            <Project project={data.project} />
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
