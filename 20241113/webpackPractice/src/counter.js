const counter = (init) => {
  const count = init;
  return () => {
    increase: {
      return ++count;
    }
    deacrese: {
      return --count;
    }
  };
};

export const counterFuc = counter();
