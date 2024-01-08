import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/', () => {
    return HttpResponse.json([
      {
        id: 1,
        introduce:
          '오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해 사용자가 해피모먼트를 경험하는 것을 보면 보람을 느낍니다.',
        work: [
          {
            name: '텔루스 인터네셔널',
            introduce:
              '텔루스 인터내셔널 에이아이코리아는 기업의 인공지능 학습 모델을 평가하고 개선하는 일을 돕고 있습니다.',
            engname: 'TELUS',
            id: 1000,
            href: 'https://www.telusinternational.com/',
            startdate: '2022.08',
            enddate: '2023.11',
            method: 'GET',
            position: 'Frontend Developer',
            detail: [
              {
                id: 10001,
                role: 'Frontend Developer',
                explain:
                  '기존에 JSP로 만들어진 사내 작업등록 페이지를 React로 신규 개발하는 업무를 수행했습니다. 신규로 개발하며 반응형 웹 및 기존에 있었던 input 관련 불편한 점을 해소하여 사용자 경험 향상에 기여했습니다.',
              },
              {
                id: 10002,
                role: 'JavaScript Developer',
                explain:
                  '사내 node.js 런타임 환경에서 es6 문법을 일부 지원함에 따라 이전 JavaScript ES5 문법으로 작성된 코드를 ES6으로 업데이트하는 업무를 수행했습니다. 변수 호이스팅으로 인한 사이드 이펙트를 해결하여 코드 관련 이슈 발생 빈도를 15% 감소시킨 경험이 있습니다.',
              },
              {
                id: 10003,
                role: 'JavaScript Developer',
                explain:
                  'Bixby 팀의 Web SDK 신규 개발 프로젝트에 투입되어 개발을 일부 진행했습니다. 코드 분석 및 일부 구현 단계에서 퇴사하게 되었습니다.',
              },
            ],
          },
          {
            name: '지인시스템',
            introduce:
              '지인시스템은 공공, 국방, 민간 분야 시스템 통합(SI) 전문업체로서 기업의 요구사항에 맞게 제품을 개발하고 있습니다.',
            engname: 'JIIN',
            id: 2000,
            href: 'http://www.ji-in.co.kr/',
            startdate: '2019.01',
            enddate: '2022.03',
            method: 'GET',
            position: 'Web Developer',
            detail: [
              {
                id: 20001,
                role: 'Web Developer',
                explain:
                  '국가 위기관리 및 전시전환절차 연습인 을지훈련을 체계적으로 할 수 있는 상황도를 만들었습니다. 주니어 개발자와 협업하여 프로젝트를 진행하였습니다. 주로 맡았던 부분은 서버와의 소켓/ajax 통신과, 서버로부터 전달받은 좌표를 계산해서 상황도에 도시하는 역할을 담당했습니다.',
              },
              {
                id: 20003,
                role: '형상관리 도구로 Git 신규 도입',
                explain:
                  '기존에 svn을 사용하며 충돌이 자주 발생하는 문제점을 해결하기 위해 팀 내 형상관리 도구를 Git으로 마이그레이션하여 충돌 빈도를 줄이고, 더 나은 작업 환경을 구축했습니다.',
              },
            ],
          },
        ],
        project: [
          {
            name: 'Clone.op.gg',
            introduce:
              'Riot API를 활용해 리그 오브 레전드(롤) 게임에 대한 사용자의 전적 검색이 가능한 서비스입니다.',
            href: 'https://github.com/Jaesin22/clone_op_gg',
            demoUrl:
              'http://clone.op.gg.s3-website.ap-northeast-2.amazonaws.com/',
            engname: 'OPGG',
            method: 'GET',
            id: 3000,
            detail: [
              {
                id: 30001,
                postDate: '2023.9.12',
                postTitle: 'op.gg 클론 코딩 프로젝트 - 성능 개선(1)',
                postCategory: 'Project/op.gg 클론하기',
                postLink: 'https://webdiv-diary.tistory.com/24',
              },
              {
                id: 30002,
                postDate: '2023.9.13',
                postTitle:
                  'op.gg 클론 코딩 프로젝트 - 즐겨찾기, 최근 검색 기능 구현',
                postCategory: 'Project/op.gg 클론하기',
                postLink: 'https://webdiv-diary.tistory.com/25',
              },
            ],
          },
          {
            name: 'Banner Maker',
            introduce: `곽철용 짤 생성기 개발 과정에 대한 읽은 뒤, 어느 순간 문득 프로젝트 생각이 나서 직접 만들어보게 되었습니다.
            
단순히 정해져 있는 짤(사진)에만 국한된 것이 아닌 내가 직접 사진을 올려서 만들어 볼 수 있게끔 하면 더 좋을 것 같다는 생각이 들어 좀 더 찾아본 결과, 
이미 godori라는 분이 만들어놓으신 Banner Maker 프로젝트가 있었습니다.

이걸 직접 비슷하게 만들어봐도 좋겠다 라는 생각이 들어 직접 만들게 되었습니다.`,
            href: 'https://github.com/Jaesin22/jjalmaker',
            demoUrl: 'https://jaesin22.github.io/jjalmaker/',
            engname: 'Banner Maker',
            method: 'GET',
            id: 4000,
            detail: [],
          },
        ],

        side_project: [
          {
            name: 'Banner Maker',
            introduce:
              'Riot API를 활용해 리그 오브 레전드(롤) 게임에 대한 사용자의 전적 검색이 가능한 서비스입니다.',
            href: 'http://clone.op.gg.s3-website.ap-northeast-2.amazonaws.com/',
            engname: 'OPGG',
            method: 'GET',
            id: 3000,
            position: 'Frontend Chapter Lead',
            detail: [
              {
                id: 30001,
                postDate: '2018-11-11',
                postTitle: 'testtttt1',
                postCategory: '프로그래밍/머신러닝',
                postLink: 'www.naver.com',
              },
              {
                id: 30002,
                postDate: '2018-11-11',
                postTitle: 'testtttt2',
                postCategory: '프로그래밍/머신러닝',
                postLink: 'www.naver.com',
              },
            ],
          },
        ],
      },
    ]);
  }),
];

export default handlers;
