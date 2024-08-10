document.addEventListener("DOMContentLoaded", function() {
    // Sistem bilgilerini JSON formatında döndüren bir fonksiyon
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

    // JSON formatına dönüştür ve ekrana yazdır
    const systemInfo = getSystemInfo();
    const systemInfoJson = JSON.stringify(systemInfo, null, 2);
    document.getElementById("systemInfo").textContent = systemInfoJson;

    // Bir API endpointi simüle et
    const apiEndpoint = "/api/system-info";

    // API isteğini dinleyen bir servis işçi (service worker) kur
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('ServiceWorker.js').then(function(registration) {
            console.log('Service Worker kayıtlı:', registration.scope);
        }).catch(function(error) {
            console.log('Service Worker kayıt hatası:', error);
        });
    }

    // Fetch API ile bu endpointten veri çek
    fetch(apiEndpoint).then(response => response.json()).then(data => {
        console.log('API üzerinden alınan veri:', data);
    }).catch(error => console.log('API isteği hatası:', error));
});
