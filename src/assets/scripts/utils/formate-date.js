export const formateDate = date => {
  const dateSplit = date.split("T");
  const ymd = dateSplit[0].split("-");
  return `${ymd[2]}/${ymd[1]}/${ymd[0]}`;
};
