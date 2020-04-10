import { hasIn } from "@jumpn/utils-composite";

const find = (notifiers, key, value) => notifiers.find(hasIn([key], value));

export default find;
