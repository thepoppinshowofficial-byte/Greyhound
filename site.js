const AFFILIATE_LINK =
  "https://admin.rewardoo.com/track/e5cd75GWpnwD1N3Rheo_axUrHQ1vyWkN61szWbOjqJLQsLKvv6pUHDLSbORGdER4L4Bw4ZsQ4SpgxeH0_c?source=inner&url=https%3A%2F%2Fwww.greyhound.com";

document.addEventListener("DOMContentLoaded", () => {
  // Connect every affiliate CTA to the Greyhound Rewardoo tracking link
  document.querySelectorAll("[data-affiliate]").forEach((link) => {
    link.href = AFFILIATE_LINK;
    link.target = "_blank";
    link.rel = "sponsored nofollow noopener";
  });

  // Demo trip-search form
  const form = document.querySelector("#trip-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Send visitors to the approved affiliate destination
      window.open(
        AFFILIATE_LINK,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
});
