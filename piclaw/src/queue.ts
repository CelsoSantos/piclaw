const MAX_RETRIES = 3;
const BASE_RETRY_MS = 5000;

export class AgentQueue {
  private running = false;
  private pending: Array<() => Promise<void>> = [];
  private shuttingDown = false;
  private retryCount = 0;

  enqueue(fn: () => Promise<void>): void {
    if (this.shuttingDown) return;
    if (this.running) { this.pending.push(fn); return; }
    this.run(fn);
  }

  enqueueTask(taskId: string, fn: () => Promise<void>): void {
    this.enqueue(fn);
  }

  private async run(fn: () => Promise<void>): Promise<void> {
    this.running = true;
    try {
      await fn();
      this.retryCount = 0;
    } catch (err) {
      console.error("[queue] Error:", err);
      if (this.retryCount < MAX_RETRIES) {
        this.retryCount++;
        const delay = BASE_RETRY_MS * Math.pow(2, this.retryCount - 1);
        setTimeout(() => { if (!this.shuttingDown) this.enqueue(fn); }, delay);
      }
    } finally {
      this.running = false;
      if (this.pending.length > 0 && !this.shuttingDown) {
        const next = this.pending.shift()!;
        this.run(next);
      }
    }
  }

  async shutdown(_ms: number): Promise<void> {
    this.shuttingDown = true;
    this.pending = [];
  }
}
