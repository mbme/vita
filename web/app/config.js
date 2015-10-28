/*global VITA_PORT*/

const port = VITA_PORT || window.location.port;
const basePath = `${window.location.hostname}:${port}`;

export default {
  searchDelay: 200,
  searchIgnoreCase: true,
  basePath,
  baseUrl: `http://${basePath}`
}
