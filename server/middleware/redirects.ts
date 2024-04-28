export default defineEventHandler((event) => {
    const urlObj = getRequestURL(event)
    const geo = getCookie(event, 'geo')
    const path = urlObj.pathname

    // don't touch error routes
    if (path === '/__nuxt_error') return


    // Обработка завершающего слеша, для главной он всегда проставляется
    if (path == '') {
        return sendRedirect(event, '/', 301)
    }

    if (urlObj.pathname.endsWith('/') && urlObj.pathname!=='/') {
        console.log('Trailing slash', urlObj.pathname )
        urlObj.pathname = urlObj.pathname.slice(0, -1)
        return sendRedirect(event, urlObj.toString(), 301)
    }


})