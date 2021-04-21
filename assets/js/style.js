document.querySelectorAll('a[href="#"]').forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    return false;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".notation[data-note]").forEach((element) => {
    let result =
        '<svg aria-label="" class="zWXXYhVR" height="12" viewBox="0 0 68 12" width=68>',
      note = Math.round(Number(element.getAttribute("data-note")));

    for (let i = 1; i <= Math.floor(element.getAttribute("data-note")); i++) {
      result +=
        '<path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"transform=scale(0.5)></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"transform="translate(14 0) scale(0.5)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"transform="translate(28 0) scale(0.5)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"transform="translate(42 0) scale(0.5)"></path>';
    }
    if (element.getAttribute("data-note").match(/\./)) {
      result +=
        '<path d="M 12 0C5.389 0 0 5.389 0 12c0 6.62 5.389 12 12 12 6.62 0 12-5.379 12-12S18.621 0 12 0zm0 2a9.984 9.984 0 0110 10 9.976 9.976 0 01-10 10z"transform="translate(56 0) scale(0.5)"></path>';
    }
    if (note < 5) {
      for (let i = 1; i <= 5 - note; i++) {
        result +=
          '<path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"transform="translate(56 0) scale(0.5)"></path>';
      }
    }
    result += "</svg>";
    element.innerHTML = result + element.innerHTML;
  });
});