import { Socket as PhoenixSocket } from "phoenix";
import { AbsintheSocket } from ".";

/**
 * Creates an Absinthe Socket using the given Phoenix Socket instance
 *
 * @example
 * import {create} from `@kanmii/socket`;
 * import {Socket as PhoenixSocket} from "phoenix";

 * const absintheSocket = create(
 *   new PhoenixSocket("ws://localhost:4000/socket")
 * );
 */
export function create(socket: PhoenixSocket): AbsintheSocket;

export default create;
