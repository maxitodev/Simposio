/// <reference types="vite/client" />

// Extend HTMLVideoElement to include webkit fullscreen methods
interface HTMLVideoElement {
  webkitRequestFullscreen?: () => Promise<void> | void;
}
