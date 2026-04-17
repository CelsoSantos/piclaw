import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import "../../helpers.js";

import { clearExtensionRoutes, getRegisteredRoutes, handleExtensionRoutes } from "../../../src/channels/web/http/extension-routes.js";
import { registerLazyViewerRoutes } from "../../../src/channels/web/http/lazy-viewer-routes.js";

describe("lazy viewer route registration", () => {
  beforeEach(() => {
    clearExtensionRoutes();
  });

  afterEach(() => {
    clearExtensionRoutes();
  });

  test("registers draw.io and office viewer routes without loading them through session bootstrap", async () => {
    registerLazyViewerRoutes();

    expect(getRegisteredRoutes()).toEqual([
      expect.objectContaining({ prefix: "/office-viewer" }),
      expect.objectContaining({ prefix: "/drawio" }),
    ]);

    const officeResponse = await handleExtensionRoutes(
      new Request("http://localhost/office-viewer/", { method: "GET" }),
      "/office-viewer/",
    );
    expect(officeResponse).not.toBeNull();
    expect(officeResponse?.status).toBe(200);
    expect(officeResponse?.headers.get("Content-Type")).toContain("text/html");

    const drawioResponse = await handleExtensionRoutes(
      new Request("http://localhost/drawio/edit", { method: "GET" }),
      "/drawio/edit",
    );
    expect(drawioResponse).not.toBeNull();
    expect(drawioResponse?.status).toBe(200);
    expect(drawioResponse?.headers.get("Content-Type")).toContain("text/html");
  });
});
