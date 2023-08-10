import { PoetryRequestData, ErrorPoetryRequestData } from './types'

export const STORAGE_TOKEN = "jinrishici-token"

export function isWindow(): boolean {
  return typeof window !== 'undefined'
}

function corsLoad(): Promise<PoetryRequestData> {
  return sendRequest("https://v2.jinrishici.com/one.json?client=npm-sdk/1.0").then((result) => {
    if (isWindow()) {
      window.localStorage.setItem(STORAGE_TOKEN, result.token)
    }
    return result
  })
}

function commonLoad(token: string): Promise<PoetryRequestData> {
  return sendRequest("https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token=" + encodeURIComponent(token))
}

function sendRequest(apiUrl: string): Promise<PoetryRequestData> {
  return fetch(apiUrl).then(response => response.json()).catch((error: ErrorPoetryRequestData) => {
    console.error("[jinrishici] api loading failed，error reason is：" + error.errMessage)
    throw error;
  });
}

export function load(): Promise<PoetryRequestData> {
  if (isWindow() && window.localStorage && window.localStorage.getItem(STORAGE_TOKEN)) {
    return commonLoad(window.localStorage.getItem(STORAGE_TOKEN) as string)
  } else {
    return corsLoad()
  }
}