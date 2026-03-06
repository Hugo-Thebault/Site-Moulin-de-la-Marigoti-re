import "@testing-library/jest-dom/vitest";

// Mock IntersectionObserver (non disponible dans jsdom)
class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = IntersectionObserverMock;

// Mock window.scrollTo
globalThis.scrollTo = vi.fn();
window.scrollTo = vi.fn();

// Mock matchMedia (dark mode toggle)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
