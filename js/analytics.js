document.addEventListener("click", (event) => {
    const storeLink = event.target instanceof Element
        ? event.target.closest("[data-download-store]")
        : null;

    if (!storeLink || typeof window.gtag !== "function") return;

    window.gtag("event", "store_badge_click", {
        destination_store: storeLink.dataset.downloadStore,
        link_location: storeLink.dataset.downloadLocation,
        link_url: storeLink.href,
        transport_type: "beacon"
    });
});
