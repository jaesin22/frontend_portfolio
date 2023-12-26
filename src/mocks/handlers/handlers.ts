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
            name: '텔루스 인터네셔널 에이아이코리아',
            introduce: '테슷트',
            engname: 'TELUS',
            id: 1,
            href: 'http://api.test.com/users/1',
            startdate: '2022.08',
            enddate: '2023.11',
            method: 'GET',
            position: 'Frontend Developer',
            detail: [
              {
                role: 'Frontend Developer',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
            ],
          },
          {
            name: '지인시스템',
            introduce: 'test',
            engname: 'JIIN',
            id: 1,
            href: 'http://api.test.com/users/1',
            startdate: '2019.01',
            enddate: '2022.03',
            method: 'GET',
            position: 'Frontend Developer',
            detail: [
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
            ],
          },
        ],
        project: [
          {
            name: 'Clone.op.gg',
            introduce: '테슷트',
            href: 'http://api.test.com/users/1',
            startdate: '2022.03',
            enddate: '2022.10',
            engname: 'test',
            method: 'GET',
            id: 1,
            position: 'Frontend Chapter Lead',
            detail: [
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
              {
                role: 'Frontend Chapter Lead',
                explain:
                  '쿼타랩 팀 내에 챕터라는 조직의 개념을 처음 도입하고 프론트엔드 챕터 빌딩부터 운영에 대한 DRI를 맡았습니다. 최고의 인재를 모셔 온전한 자율과 책임 기반의 문화를 구현하겠다는 미션을 달성하기 위해 적극적인 채용 인플로우, 브랜딩, 프로세스 수립 등에 기여하였습니다.',
              },
            ],
          },
        ],
      },
    ]);
  }),
];

export default handlers;
