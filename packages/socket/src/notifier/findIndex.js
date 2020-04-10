import { hasIn } from "@jumpn/utils-composite";

const findIndex = (notifiers, key, value) =>
  notifiers.findIndex(hasIn([key], value));

export default findIndex;
