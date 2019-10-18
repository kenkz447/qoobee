export const wait = async (miliSeconds: number) => {
    return new Promise((resolve: () => void) => {
      setTimeout(resolve, miliSeconds);
    });
};
