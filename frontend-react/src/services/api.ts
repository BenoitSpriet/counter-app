let BASE_URL = "";

export function setBaseUrl(url: string) {
  BASE_URL = url;
}

export async function getCounters() {
  const res = await fetch(`${BASE_URL}/counters`);
  return res.json();
}

export async function createCounter(name: string) {
  const res = await fetch(`${BASE_URL}/counters`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, value: 0 }),
  });
  return res.json();
}

export async function incrementCounter(id: number) {
  const res = await fetch(`${BASE_URL}/counters/${id}/increment`, {
    method: "PATCH",
  });
  return res.json();
}

export async function decrementCounter(id: number) {
  const res = await fetch(`${BASE_URL}/counters/${id}/decrement`, {
    method: "PATCH",
  });
  return res.json();
}

export async function deleteCounter(id: number) {
  await fetch(`${BASE_URL}/counters/${id}`, { method: "DELETE" });
}
