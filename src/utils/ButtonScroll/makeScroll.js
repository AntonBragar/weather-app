export const makeScroll = (id,ulWithScrollRef,scrollLength=100) => {
    let lastScrollPosition = Math.floor(ulWithScrollRef.current.scrollLeft)
    const scrollRight = (length) => lastScrollPosition += length;
    const scrollLeft = (length) => lastScrollPosition -= length;

    if (id === "right") {
        scrollRight(scrollLength)
        return ulWithScrollRef.current.scrollTo({
            left: lastScrollPosition,
            behavior: "smooth"
        })
    } else if (id === "left") {
        scrollLeft(scrollLength)
        return ulWithScrollRef.current.scrollTo({
            left: lastScrollPosition,
            behavior: "smooth"
        })
    }
}