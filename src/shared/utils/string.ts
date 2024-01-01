export const splitCamelCase = (input: string): string => {
  return input.replace(/([A-Z])/g, ' $1').toLowerCase();
};
