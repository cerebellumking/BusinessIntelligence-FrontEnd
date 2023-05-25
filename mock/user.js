module.exports = [
  {
    url: '/user/interest',
    type: 'get',
    response: _ => {
      return [
        {
          'category': 'tv',
          'count': 19
        },
        {
          'category': 'lifestyle',
          'count': 56
        },
        {
          'category': 'news',
          'count': 43
        },
        {
          'category': 'entertainment',
          'count': 15
        },
        {
          'category': 'movies',
          'count': 13
        },
        {
          'category': 'video',
          'count': 7
        },
        {
          'category': 'sports',
          'count': 6
        },
        {
          'category': 'health',
          'count': 2
        },
        {
          'category': 'music',
          'count': 5
        },
        {
          'category': 'autos',
          'count': 1
        }
      ]
    }
  },
  {
    url: '/range/userid',
    type: 'get',
    response: [
      {
        'min_user_id': 0,
        'max_user_id': 445699
      }
    ]
  }
]
