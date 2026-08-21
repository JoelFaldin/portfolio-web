export type Project = {
  id: string,
  name: string,
  desc: string,
  status: string,
  stack: string[],
  repo: string,
  category: string,
}

export const projects: Project[] = [
  { id: "blacksharkweb", name: "BlackSharkWeb", desc: "A full stack e-commerce collaborative project. It showcases different services offered by a graphic designer!", status: "finished", stack: ["NextJS", "Supabase", "TypeScript"], repo: "https://github.com/JoelFaldin/blacksharkweb-2026", category: "web" },
  { id: "connectdesk", name: "ConnectDesk", desc: "Web application dashboard that displays user data in a table. Features user management.", status: "finished", stack: ["Angular", "Golang", "TypeScript"], repo: "https://github.com/JoelFaldin/ConnectDesk-Frontend", category: "web" },
  { id: "gg", name: "gg", desc: "A Go-based mini DNS server. Supports IPV4, IPV6 and CNAME. Works on windows 11 and linux operating systems.", status: "finished", stack: ["Go", "net/UDP", "goroutines"], repo: "https://github.com/JoelFaldin/gg", category: "networking" },
  { id: "mux", name: "mux-demo", desc: "String multiplexing over a TCP connection. Implements a custom binary protocol with framing.", status: "finished", stack: ["Go", "net/TCP", "goroutines"], repo: "https://github.com/JoelFaldin/mux-demo", category: "networking" }
]
