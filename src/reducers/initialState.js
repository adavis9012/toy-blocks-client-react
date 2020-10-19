const URLS = [
  'https://thawing-springs-53971.herokuapp.com',
  'https://secret-lowlands-62331.herokuapp.com',
  'https://calm-anchorage-82141.herokuapp.com',
  'http://localhost:3002',
];

export default () => ({
  nodes: {
    list: [
      {
        url: URLS[0],
        online: false,
        name: 'Node 1',
        loading: false
      },
      {
        url: URLS[1],
        online: false,
        name: 'Node 2',
        loading: false
      },
      {
        url: URLS[2],
        online: false,
        name: 'Node 3',
        loading: false
      },
      {
        url: URLS[3],
        online: false,
        name: 'Node 4',
        loading: false
      }
    ]
  },
  blocks: {
    list: [
      {
        url: URLS[0],
        online: false,
        data: [
          {
            id: "1",
            attributes: {
              index: 1,
              data: "Blocks 1"
            }
          }
        ],
        loading: false
      },
      {
        url: URLS[1],
        online: false,
        data: [
          {
            id: "w",
            attributes: {
              index: 1,
              data: "Blocks 2"
            }
          }
        ],
        loading: false
      },
      {
        url: URLS[2],
        online: false,
        data: [
          {
            id: "3",
            attributes: {
              index: 1,
              data: "Blocks 3"
            }
          }
        ],
        loading: false
      },
      {
        url: URLS[3],
        online: false,
        data: [
          {
            id: "4",
            attributes: {
              index: 1,
              data: "Blocks 4"
            }
          }
        ],
        loading: false
      }
    ]
  }
});
