/**
 * Resolve per-request auth from the Pi model registry.
 *
 * Upstream 0.67.6 replaced `getApiKeyAndHeaders()` with a simpler `getApiKey()`.
 * Provider-specific headers (e.g. Azure API-Management keys) now live on the
 * model object itself (`model.headers`) and are merged by the provider layer,
 * so we no longer need to thread them through here.
 *
 * We keep a fallback check for `getApiKeyAndHeaders` so older test doubles that
 * still implement the pre-0.67.6 surface don't break.
 */
export async function resolveModelRequestAuth(registry, model) {
    const reg = registry;
    // Pre-0.67.6 compat path (test doubles may still use this)
    if (typeof reg.getApiKeyAndHeaders === "function") {
        const auth = await reg.getApiKeyAndHeaders(model);
        if (auth.ok)
            return { ok: true, apiKey: auth.apiKey };
        return { ok: false, error: auth.error || `No credentials available for ${model.provider}/${model.id}.` };
    }
    // Current upstream surface (0.67.6+)
    if (typeof reg.getApiKey === "function") {
        const apiKey = await reg.getApiKey(model);
        if (apiKey)
            return { ok: true, apiKey };
    }
    return { ok: false, error: `No credentials available for ${model.provider}/${model.id}.` };
}
