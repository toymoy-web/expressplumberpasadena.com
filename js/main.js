(function () {
  "use strict";

  // Mobile drawer nav
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");

  if (toggle && drawer && overlay) {
    function openDrawer() {
      drawer.removeAttribute("hidden");
      overlay.classList.add("visible");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
      document.documentElement.style.overflow = "hidden";
    }
    function closeDrawer() {
      drawer.setAttribute("hidden", "");
      overlay.classList.remove("visible");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      document.documentElement.style.overflow = "";
    }
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);
    var drawerLinks = drawer.querySelectorAll("a");
    for (var i = 0; i < drawerLinks.length; i++) {
      drawerLinks[i].addEventListener("click", closeDrawer);
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDrawer();
    });
  }

  // FAQ accordion
  var faqItems = document.querySelectorAll(".faq-item");
  for (var j = 0; j < faqItems.length; j++) {
    (function (item) {
      var q = item.querySelector(".faq-q");
      if (!q) return;
      q.addEventListener("click", function () {
        var wasOpen = item.classList.contains("open");
        // close siblings within the same faq group for a cleaner UI
        var group = item.parentElement;
        if (group) {
          var siblings = group.querySelectorAll(".faq-item.open");
          for (var k = 0; k < siblings.length; k++) {
            if (siblings[k] !== item) siblings[k].classList.remove("open");
          }
        }
        if (wasOpen) {
          item.classList.remove("open");
        } else {
          item.classList.add("open");
        }
      });
    })(faqItems[j]);
  }
})();
