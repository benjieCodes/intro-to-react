import reducers from '../reducers';

test('Test reducers value of SET_SEARCH_TERM', () => {
  const state = reducers(
    { searchTerm: '', apiData: '' },
    { type: 'SET_SEARCH_TERM', payload: 'black' }
  );
  expect(state).toEqual({ searchTerm: 'black', apiData: '' });
});

test('Test reducers value of ADD_API_DATA', () => {
  let state;
  state = reducers(
    { searchTerm: '', apiData: '' },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '2.1',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt0475784: {
        rating: '2.1',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      }
    }
  });
});

test('Test reducers value of ADD_API_DATA with two shows', () => {
  let state;
  state = reducers(
    {
      searchTerm: '',
      apiData: {
        tt0475784: {
          rating: '2.1',
          title: 'Westworld',
          year: '2016–',
          description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
          poster: 'ww.jpg',
          imdbID: 'tt0475784',
          trailer: 'eX3u0IlBBO4'
        },
        tt2372162: {
          rating: '7.7',
          title: 'Orange Is the New Black',
          year: '2013–',
          description: 'The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.',
          poster: 'oitnb.jpg',
          imdbID: 'tt2372162',
          trailer: 'th8WT_pxGqg'
        }
      }
    },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '4.0',
        title: 'Billions',
        year: '2016–',
        description: 'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
        poster: 'b.jpg',
        imdbID: 'tt4270492',
        trailer: '_raEUMLL-ZI'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt0475784: {
        rating: '2.1',
        title: 'Westworld',
        year: '2016–',
        description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.',
        poster: 'ww.jpg',
        imdbID: 'tt0475784',
        trailer: 'eX3u0IlBBO4'
      },
      tt2372162: {
        rating: '7.7',
        title: 'Orange Is the New Black',
        year: '2013–',
        description: 'The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.',
        poster: 'oitnb.jpg',
        imdbID: 'tt2372162',
        trailer: 'th8WT_pxGqg'
      },
      tt4270492: {
        rating: '4.0',
        title: 'Billions',
        year: '2016–',
        description: 'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
        poster: 'b.jpg',
        imdbID: 'tt4270492',
        trailer: '_raEUMLL-ZI'
      }
    }
  });
});
