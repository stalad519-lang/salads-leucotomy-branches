export type WikiLocation = {
  pathname: string
  search: string
}

type Listener = () => void

const listeners = new Set<Listener>()

const SERVER_LOCATION: WikiLocation = { pathname: "/", search: "" }
let current: WikiLocation = SERVER_LOCATION

function readWindowLocation(): WikiLocation {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
  }
}

function syncFromWindow(): WikiLocation {
  const next = readWindowLocation()
  if (current.pathname === next.pathname && current.search === next.search) {
    return current
  }
  current = next
  return current
}

export function getLocation(): WikiLocation {
  if (typeof window === "undefined") {
    return SERVER_LOCATION
  }
  return syncFromWindow()
}

export function getServerLocation(): WikiLocation {
  return SERVER_LOCATION
}

export function subscribeLocation(listener: Listener) {
  listeners.add(listener)
  if (typeof window !== "undefined" && listeners.size === 1) {
    window.addEventListener("popstate", emitLocation)
  }
  return () => {
    listeners.delete(listener)
    if (typeof window !== "undefined" && listeners.size === 0) {
      window.removeEventListener("popstate", emitLocation)
    }
  }
}

export function emitLocation() {
  if (typeof window !== "undefined") {
    syncFromWindow()
  }
  listeners.forEach((listener) => listener())
}

export function navigate(href: string, options?: { replace?: boolean }) {
  const url = new URL(href, window.location.origin)
  const next = `${url.pathname}${url.search}${url.hash}`
  const now = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (next === now) {
    emitLocation()
    return
  }
  if (options?.replace) {
    window.history.replaceState(null, "", next)
  } else {
    window.history.pushState(null, "", next)
  }
  emitLocation()
}

export type WikiRoute =
  | { type: "home" }
  | { type: "wiki"; slug: string }
  | { type: "edit"; slug: string }
  | { type: "history"; slug: string }
  | { type: "category"; name: string }
  | { type: "search"; q: string }
  | { type: "new"; title: string }
  | { type: "recent" }
  | { type: "all" }
  | { type: "random" }
  | { type: "notfound" }

export function matchRoute(pathname: string, search: string): WikiRoute {
  const path = decodeURI(pathname.replace(/\/+$/, "") || "/")
  const params = new URLSearchParams(search)

  if (path === "/") return { type: "home" }
  if (path === "/new") return { type: "new", title: params.get("title") ?? "" }
  if (path === "/search") return { type: "search", q: params.get("q") ?? "" }
  if (path === "/special/recent") return { type: "recent" }
  if (path === "/special/all") return { type: "all" }
  if (path === "/special/random") return { type: "random" }

  const wiki = path.match(/^\/wiki\/(.+)$/)
  if (wiki) return { type: "wiki", slug: decodeURIComponent(wiki[1]) }
  const edit = path.match(/^\/edit\/(.+)$/)
  if (edit) return { type: "edit", slug: decodeURIComponent(edit[1]) }
  const history = path.match(/^\/history\/(.+)$/)
  if (history) return { type: "history", slug: decodeURIComponent(history[1]) }
  const category = path.match(/^\/category\/(.+)$/)
  if (category) return { type: "category", name: decodeURIComponent(category[1]) }

  return { type: "notfound" }
}
