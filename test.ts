Context {
  app: Application {
  "#middleware": [
    [AsyncFunction],
    [Function: dispatch] {
      router: Router {
  "#params": {},
  "#stack": [
    Layer {
  methods: [ "HEAD", "GET" ],
  middleware: [ [Function] ],
  options: {
    end: undefined,
    sensitive: undefined,
    strict: undefined,
    ignoreCaptures: undefined
  },
  paramNames: [],
  path: "/",
  regexp: /^\/[\/#\?]?$/i
}
  ]
}
    },
    [AsyncFunction: allowedMethods]
  ],
  keys: undefined,
  proxy: false,
  state: {}
},
  cookies: Cookies [],
  isUpgradable: false,
  respond: true,
  request: Request {
  hasBody: false,
  headers: Headers {
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,app...",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "en-US,en;q=0.9",
  "cache-control": "max-age=0",
  connection: "keep-alive",
  cookie: "_ga=GA1.1.2056542928.1662250190",
  host: "localhost:22829",
  "sec-ch-ua": '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "none",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0...."
},
  ip: "127.0.0.1",
  ips: [],
  method: "GET",
  secure: false,
  url: "http://localhost:22829/"
},
  response: Response {
  body: "<!DOCTYPE html>\n    <html>\n      <head><title>Hello oak!</title><head>\n      <body>\n        <h1>Hell...",
  headers: Headers {},
  status: 200,
  type: undefined,
  writable: true
},
  socket: undefined,
  state: {}
}