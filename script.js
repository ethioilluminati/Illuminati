
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const idNumber = document.getElementById('idNumber').value;
            if (name && idNumber) {
                localStorage.setItem('agentName', name);
                localStorage.setItem('agentId', idNumber);
                window.location.href = 'scan.html';
            }
        });
    }

    const scanProgress = document.getElementById('scan-progress');
    const scanSound = document.getElementById('scan-sound');
    const eyeScan = document.getElementById('eye-scan');
    const fingerScan = document.getElementById('finger-scan');
    let eyeScanned = false;
    let fingerScanned = false;

    function tryFinishScan() {
        if (eyeScanned && fingerScanned) {
            scanProgress.textContent = "Scan Complete. Redirecting...";
            setTimeout(() => {
                window.location.href = 'completed.html';
            }, 2000);
        }
    }

    if (eyeScan) {
        eyeScan.addEventListener('click', function () {
            scanProgress.classList.add('active');
            scanSound.play();
            eyeScanned = true;
            tryFinishScan();
        });
    }

    if (fingerScan) {
        fingerScan.addEventListener('click', function () {
            scanProgress.classList.add('active');
            scanSound.play();
            fingerScanned = true;
            tryFinishScan();
        });
    }
});
