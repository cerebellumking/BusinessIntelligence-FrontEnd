module.exports = [
  {
    url: '/suggest/news',
    type: 'get',
    response: _ => {
      return [
        {
          'headline': 'Predicting Atlanta Uniteds lineup against Columbus Crew in the U.S. Open Cup',
          'news_id': 0
        },
        {
          'headline': 'Mitch McConnell: DC statehood push is full bore socialism',
          'news_id': 1
        },
        {
          'headline': 'Home In North Highlands Damaged By Fire',
          'news_id': 2
        },
        {
          'headline': 'Meghan McCain blames liberal media and third-wave feminism after getting heat over husbands Kamala Harris T-shirts',
          'news_id': 3
        },
        {
          'headline': 'Today in History: Aug 1',
          'news_id': 4
        }
      ]
    }
  }
]

