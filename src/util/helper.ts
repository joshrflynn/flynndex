export const Capitalize = (str: string): string => {
  if (!str) {
    return "";
  } else if (str.length === 1) {
    return str[0].toUpperCase();
  }

  return str[0].toUpperCase() + str.substring(1);
};
