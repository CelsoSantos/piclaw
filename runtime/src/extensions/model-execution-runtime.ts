import type { ModelRuntime } from "@earendil-works/pi-coding-agent";

export type RuntimeModelExecutor = Pick<ModelRuntime, "streamSimple" | "completeSimple">;

let runtimeModelExecutor: RuntimeModelExecutor | null = null;

/** Install the process-wide runtime-owned executor used by bundled path extensions. */
export function installRuntimeModelExecutor(executor: RuntimeModelExecutor): void {
  if (runtimeModelExecutor && runtimeModelExecutor !== executor) {
    throw new Error("Runtime model executor is already installed with a different ModelRuntime");
  }
  runtimeModelExecutor = executor;
}

export function getRuntimeModelExecutor(): RuntimeModelExecutor | null {
  return runtimeModelExecutor;
}

export function __setRuntimeModelExecutorForTests(executor: RuntimeModelExecutor | null): void {
  if (process.env.NODE_ENV !== "test") throw new Error("Runtime model executor test override is test-only");
  runtimeModelExecutor = executor;
}
