self.addEventListener('fetch', function(event) {
    if (event.request.url.endsWith('/api/system-info')) {
        event.respondWith(
            new Response(JSON.stringify(getSystemInfo()), {
                headers: { 'Content-Type': 'application/json' }
            })
        );
    }
});

// Sistem bilgilerini döndüren bir fonksiyon
function getSystemInfo() {
    const systemInfo = {
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages,
        online: navigator.onLine,
        cookieEnabled: navigator.cookieEnabled,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        screenColorDepth: window.screen.colorDepth,
    };
    
    return systemInfo;
}
