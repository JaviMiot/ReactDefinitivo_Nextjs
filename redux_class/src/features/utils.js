//* Creo un reducer de fetch
const initialFetching = { loading: 'idle', error: '' };

export const reduceReducers =
  (...reducers) =>
  (state, action) =>
    reducers.reduce((acc, el) => el(acc, action), state);

//* reducer de alto order
export const makingFetchingReducer =
  (actions) =>
  (state = initialFetching, action) => {
    switch (action.type) {
      case actions[0]:
        return { ...state, loading: 'pending' };
      case actions[1]:
        return { ...state, loading: 'succeded' };
      case actions[2]:
        return { error: action.error, loading: 'error' };
      default:
        return state;
    }
  };

export const makeSetReducer =
  (actions) =>
  (state = 'all', action) => {
    switch (action.type) {
      case actions[0]:
        return action.payload;
      default:
        return state;
    }
  };

export const makeCrudReducer =
  (actions) =>
  (state = [], action) => {
    switch (action.type) {
      case actions[0]:
        return state.concat({ ...action.payload });
      case actions[1]: {
        const newEntities = state.map((entity) => {
          if (entity.id === action.payload.id) {
            return { ...entity, complete: !entity.complete };
          }
          return entity;
        });

        return newEntities;
      }
      default:
        return state;
    }
  };

export const mat = (entity) => [
  `${entity}/PENDING`,
  `${entity}/FULFILLED`,
  `${entity}/ERROR`,
];

export const mac =
  (type, ...argNames) =>
  (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => (action[argNames[index]] = args[index]));
    return action;
  };


export  const asyncMac = (asyncTypes) => [
    mac(asyncTypes[0]),
    mac(asyncTypes[1], 'payload'),
    mac(asyncTypes[2], 'error'),
  ];
  