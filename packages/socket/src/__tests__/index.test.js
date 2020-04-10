// @ts-check
/* eslint-disable no-useless-constructor */
import { Socket } from "phoenix";
import { create } from "../create";

let socket;

beforeEach(() => {
  socket = new Socket("/");
});

describe("create", () => {
  test("defaults", () => {
    const {
      phoenixSocket, //
      /* eslint-disable @typescript-eslint/no-unused-vars */
      channel,
      ...rest
    } = create(socket);

    expect(phoenixSocket).toBe(socket);

    expect(rest).toMatchObject({
      channelJoinCreated: false,
      notifiers: [],
    });
  });
});
