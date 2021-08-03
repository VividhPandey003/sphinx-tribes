const dockerHosts = [
  "localhost:13007",
  "localhost:13000",
  "localhost:23007",
  "localhost:23000",
];

export function getHost(): string {
  const host = window.location.host.includes("localhost")
    ? "localhost:5002"
    : window.location.host;
  return host;
}

export function getHostIncludingDockerHosts() {
  if (dockerHosts.includes(window.location.host)) {
    return "tribes.sphinx:5002";
  } else {
    return getHost();
  }
}
