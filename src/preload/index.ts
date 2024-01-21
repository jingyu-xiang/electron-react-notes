import { contextBridge } from "electron"

// Custom APIs for renderer
// const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.

if (!process.contextIsolated) throw new Error("contextIsolated is must be true")

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("context", {
      // TODO
    })
  } catch (error) {
    console.error(error)
  }
}
