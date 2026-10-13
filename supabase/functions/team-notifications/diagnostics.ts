export type WorkerFailure =
  | "queue_unavailable"
  | "queue_ack_failed"
  | "worker_not_configured"
  | "worker_exception";

export function reportWorkerFailure(
  error: WorkerFailure,
  cause: unknown,
  requestId: string,
  log: (...values: unknown[]) => void = console.error,
  counts?: { sent: number; failed: number },
): Response {
  const detail =
    cause && typeof cause === "object"
      ? (cause as { code?: unknown; message?: unknown })
      : {};
  const databaseCode =
    typeof detail.code === "string" && /^[A-Z0-9]{5,12}$/.test(detail.code)
      ? detail.code
      : undefined;
  // SQL message stays in the server log. Do not serialize SDK objects,
  // request headers, environment values, or database details/hints.
  log("team-notifications failed", {
    error,
    request_id: requestId,
    ...(databaseCode ? { database_code: databaseCode } : {}),
    message:
      typeof detail.message === "string"
        ? detail.message.slice(0, 1000)
        : "Unexpected worker failure",
  });
  return Response.json(
    {
      error,
      request_id: requestId,
      ...(databaseCode ? { database_code: databaseCode } : {}),
      ...counts,
    },
    { status: 500 },
  );
}
