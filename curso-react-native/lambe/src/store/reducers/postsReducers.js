import {ADD_POST, ADD_COMMENT} from '../actions/actionTypes';

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Bernardo Oliveira Correa',
      email: 'bernardo@email.com.br',
      image: require('../../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'Patricia Oliveira',
          comment: 'Foto linda! Onde foi tirada?',
        },
        {
          nickname: 'Luck Poddle',
          comment: 'Lugar bonito.',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'Fulano de Tal',
      email: 'fulano@email.com.br',
      image: require('../../../assets/imgs/bw.jpg'),
      components: [],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment];
            }
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
