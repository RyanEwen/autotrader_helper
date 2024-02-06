;(async function () {
    console.log('AutoTrader Helper Loaded')

    const selectors = [
        '#mastheadStickyAchorPriority',
        '#divPriorityListingsTitle',
        '.listingHeadingNewSRP ',
        '.priority-qa',
        '.billboard',
        '.billboardBannerElement',
        '.srp-ad-label',
        '.advertisementlbl',
        '.promo-box',
    ]

    function removeCrap() {
        selectors.forEach(selector => {
            const els = document.querySelectorAll(selector)

            els.forEach(el => {
                el.style.display = 'none'
            })
        })
    }

    removeCrap()

    // also redo it every 1s as filters are adjusted etc
    setInterval(() => {
        removeCrap()
    }, 1000)
}())
