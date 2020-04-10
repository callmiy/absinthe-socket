import { Socket, Channel } from "phoenix";
export { create } from "./create";

export interface AbsintheSocket {
  phoenixSocket: Socket;
  channel: Channel;
  channelJoinCreated: boolean;
  notifiers: [];
}
