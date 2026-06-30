/* ============================================================
   Media Kit — interactions
   You normally won't need to touch this file. It handles:
   1) the current year in the footer/hero
   2) the count-up animation on the stats
   3) the fade-in-on-scroll effect
   ============================================================ */

// 1) Current year, wherever #year / #year2 appear
const yr = new Date().getFullYear();
document.querySelectorAll('#year, #year2').forEach(el => el.textContent = yr);

// 2) Animated number count-up for the stats strip
function formatNumber(value, decimals, suffix) {
  let out;
  if (decimals > 0) {
    out = value.toFixed(decimals);
  } else if (value >= 1000) {
    // 1,200,000 -> "1.2M", 125,000 -> "125K"
    if (value >= 1_000_000) out = (value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1) + 'M';
    else out = Math.round(value / 1000) + 'K';
  } else {
    out = Math.round(value).toString();
  }
  return out + (suffix || '');
}

function countUp(el) {
  const target = parseFloat(el.dataset.count || '0');
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();

  function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = formatNumber(target * eased, decimals, suffix);
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = formatNumber(target, decimals, suffix);
  }
  requestAnimationFrame(frame);
}

// 3) Reveal on scroll + trigger count-up when stats enter view
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    entry.target.querySelectorAll('[data-count]').forEach(countUp);
    io.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Fallback: if IntersectionObserver is unsupported, just show everything
if (!('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  document.querySelectorAll('[data-count]').forEach(countUp);
}
