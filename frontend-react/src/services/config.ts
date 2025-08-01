export default async function fetchBackendUrl(): Promise<string> {
    const response = await fetch(`http://localhost:5000/config`);
    if (!response.ok) throw new Error("Erreur de configuration");
    const data = await response.json();
    return data.backend_url;
  }
  