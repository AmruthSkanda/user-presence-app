import moment from 'moment';

export const formatLastVisitTS = (date) => {
  return moment(date).format("ddd, MMM Do hA");
};