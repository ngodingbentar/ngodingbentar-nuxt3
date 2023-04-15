interface ApiServer {
  name: string,
  baseUrl: string,
  targetUrl?: string,
  schemaUrl?: string,
}

const server: ApiServer[] = [
  {
    name     : 'api',
    baseUrl  : '/api',
    targetUrl: process.env.API_URL,
  },
]

export default server
