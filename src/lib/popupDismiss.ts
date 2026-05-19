const DISMISS_WINDOW_MS = 72 * 60 * 60 * 1000;

export function isPopupDismissed(key: string): boolean {
  if (typeof window === "undefined") return false;
  const until = Number(localStorage.getItem(key) || 0);
  return until > Date.now();
}

export function dismissPopup(key: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, String(Date.now() + DISMISS_WINDOW_MS));
}
