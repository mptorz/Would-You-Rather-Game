const logger = store => next => action => {
  console.group(action.type);
  console.log('Action: ', action);
  const toReturn = next(action);
  console.log('New state: ', store.getState());
  console.groupEnd();
  return toReturn;
};

export default logger;
