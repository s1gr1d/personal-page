import { TextArrType } from '../lib/types';

export const about = {
  P1:
    'Hi, I’m Sigrid and welcome to my online portfolio! Let’s get straight to it. I laugh unmistakably loud. But I love to laugh and consider myself as a person with a lot of positive energy. Rumor has it that I’m a "greenie", but the truth is that I’m just trying to live more mindfully. Always on the mission to reduce my plastic waste you can find me in the nearest thrift store or buying biodegradable toothbrushes.',
  P2:
    'I love getting to know new places to such an extent that I could work as a train operator, considering all the hours I spent in there the last few years. Driven by curiosity I always use this time to learn something new by reading books and listening to my favourite podcasts.',
  P3: 'But all this is just a part of who I am.',
};

export const workExperience = [
  {
    position: 'Frontend Software Engineer',
    company: 'myClubs',
    time: '03.2019 - now',
    checkpoints: [
      'Improved the UX (user experience) of the internal sports course calendar through a redesign, driven by conducting user research and user testing.',
      'Designed and implemented a data insights dashboard with React and Redux to display client ratings.',
      'Initiated a project for developing a Design System.',
    ],
  },
  {
    position: 'Camp counselor',
    company: 'Computercamp',
    time: 'since summer 2018',
    checkpoints: [''],
  },
];

export const skills: { [key: string]: { title: string; text: TextArrType[] } } = {
  frontendEngineering: {
    title: 'Frontend Software Engineering',
    text: [
      [
        {
          type: 'standard',
          content:
            'I built my first website with simple HTML over 10 years ago. I was always fascinated by how you can immediately see what you are building.',
        },
      ],
      [
        {
          type: 'standard',
          content: 'By now, I have over 2 years of professional experience in building',
        },
        {
          type: 'strong',
          content: 'frontend applications with React and Redux.',
        },
      ],
      [
        {
          type: 'standard',
          content: 'My languages of choice are',
        },
        {
          type: 'strong',
          content: 'JavaScript and TypeScript',
        },
        {
          type: 'standard',
          content: '(having a type system it is so refreshing) and I love to write (and read)',
        },
        {
          type: 'strong',
          content: 'clean code',
        },
        {
          type: 'standard',
          content: 'and having a',
        },
        {
          type: 'strong',
          content: 'maintainable software architecture.',
        },
      ],
      [
        {
          type: 'standard',
          content: 'In my free-time I love to experiment with different technologies like',
        },
        {
          type: 'strong',
          content: 'Functional Programming with Elm',
        },
        {
          type: 'standard',
          content: 'or building 3D experiences with',
        },
        {
          type: 'strong',
          content: 'Three.js',
        },
        {
          type: 'standard',
          content: '(preferably with the react-three-fiber renderer).',
        },
      ],
    ],
  },
  uxDesign: {
    title: 'User Experience (UX) Design',
    text: [
      [
        {
          type: 'standard',
          content: 'In order to create a functional website,',
        },
        {
          type: 'strong',
          content: 'users can not be excluded from this process.',
        },
      ],
      [
        {
          type: 'standard',
          content: 'For me, Design means',
        },
        {
          type: 'strong',
          content: 'finding the perfect solution to a problem.',
        },
        {
          type: 'standard',
          content:
            'Design provides orientation without having to explain much. It should be fun to use an application. But this fun and beauty of a Design should also be meaningful and',
        },
        {
          type: 'strong',
          content: 'serve the purpose and not be purely artistic.',
        },
      ],
      [
        {
          type: 'standard',
          content: 'Our society is shaped by the way the things that surround us are designed.',
        },
        {
          type: 'strong',
          content: 'Design transports values and ideas',
        },
        {
          type: 'standard',
          content: 'and I strongly believe that it can help to contribute to a better society.',
        },
      ],
    ],
  },
};
