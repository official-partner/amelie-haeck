/**
 * Moves a `.pointer-follow` label or picture after the pointer (the home's « Play Demo », the thumbnail of the hovered
 * Archives row), through the --pointer-x and --pointer-y it reads. Productive motion: it answers the pointer at once
 * and settles in about 150 ms (the faster tier), time-based so a slow frame does not lag it. Fine pointers only, never
 * under reduced motion; `.pointer-follow` is already hidden on a touch screen. It stops with `signal`.
 *
 * `area` is the element the pointer must be over for the label to show (`data-on` on the label); `offset` keeps it
 * away from the pointer, in CSS pixels, or `"center"` puts it on the pointer (the Work row's picture, the film's « Pause »).
 */
export function followPointer(
  label: HTMLElement,
  area: HTMLElement,
  signal: AbortSignal,
  offset: { x: number; y: number } | "center" = { x: 16, y: 16 },
): void {
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  if (!fine.matches || matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;

  let target = { x: 0, y: 0 };
  let shown = { x: 0, y: 0 };
  let frame = 0;
  let last = 0;
  let placed = false;

  const tick = (now: number) => {
    // exponential approach: 1 - e^(-dt / 50 ms) of the distance each frame
    const k = 1 - Math.exp(-(now - last) / 50);
    last = now;
    shown = {
      x: shown.x + (target.x - shown.x) * k,
      y: shown.y + (target.y - shown.y) * k,
    };
    label.style.setProperty("--pointer-x", `${shown.x.toFixed(1)}px`);
    label.style.setProperty("--pointer-y", `${shown.y.toFixed(1)}px`);
    const done =
      Math.abs(target.x - shown.x) < 0.2 && Math.abs(target.y - shown.y) < 0.2;
    frame = done ? 0 : requestAnimationFrame(tick);
  };

  area.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;
      // kept inside the window: a picture near the edge turns back instead of leaving it
      const x =
        event.clientX +
        (offset === "center" ? -label.offsetWidth / 2 : offset.x);
      const y =
        event.clientY +
        (offset === "center" ? -label.offsetHeight / 2 : offset.y);
      target = {
        x: Math.max(0, Math.min(x, innerWidth - label.offsetWidth)),
        y: Math.max(0, Math.min(y, innerHeight - label.offsetHeight)),
      };
      if (!placed) {
        // first move over the area: appear where the pointer is, never glide in from the corner
        placed = true;
        shown = target;
      }
      label.dataset.on = "true";
      if (!frame) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    },
    { signal, passive: true },
  );
  area.addEventListener(
    "pointerleave",
    () => {
      delete label.dataset.on;
      placed = false;
    },
    { signal },
  );
  signal.addEventListener("abort", () => cancelAnimationFrame(frame));
}
