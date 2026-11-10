const chartObservers = new WeakMap();

export function renderMonthlyChart(expenses, conteneur) {
    const previousChart = conteneur.querySelector('.monthlyChart');
    if (previousChart) {
        const observer = chartObservers.get(previousChart);
        if (observer) {
            observer.disconnect();
        }
        previousChart.remove();
    }

    const section = document.createElement('section');
    section.className = 'monthlyChart';
    section.innerHTML = `
        <div class="chartHeader">
            <div>
                <span class="sectionEyebrow">Tendances</span>
                <h2>Évolution des dépenses</h2>
            </div>
            <span class="chartPeriod">6 derniers mois</span>
        </div>
        <div class="chartCanvasWrap">
            <canvas role="img"></canvas>
        </div>
    `;

    const canvas = section.querySelector('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Impossible de créer le graphique des dépenses.');
    }

    const now = new Date();
    const months = Array.from({ length: 6 }, (_, index) => {
        const monthDate = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
        const key = `${monthDate.getFullYear()}-${String(monthDate.getMonth() + 1).padStart(2, '0')}`;
        return {
            key,
            label: monthDate.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', ''),
            total: 0
        };
    });
    const totalsByMonth = new Map(months.map((month) => [month.key, month]));

    expenses.forEach((expense) => {
        const monthKey = typeof expense.date === 'string' ? expense.date.slice(0, 7) : '';
        const month = totalsByMonth.get(monthKey);
        const amount = Number(expense.montant);
        if (month && Number.isFinite(amount) && amount > 0) {
            month.total += amount;
        }
    });

    const chartSummary = months
        .map((month) => `${month.label}: ${month.total.toLocaleString('fr-FR')} FCFA`)
        .join(', ');
    canvas.setAttribute('aria-label', `Dépenses mensuelles sur six mois. ${chartSummary}`);
    conteneur.appendChild(section);

    function drawChart() {
        const width = canvas.clientWidth;
        if (!width) {
            return;
        }

        const height = 260;
        const ratio = window.devicePixelRatio || 1;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.height = `${height}px`;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.clearRect(0, 0, width, height);

        const padding = { top: 24, right: 12, bottom: 36, left: 58 };
        const chartWidth = width - padding.left - padding.right;
        const chartHeight = height - padding.top - padding.bottom;
        const maxValue = Math.max(...months.map((month) => month.total), 0);
        const scaleMax = maxValue > 0 ? Math.ceil(maxValue / 4 / 1000) * 1000 * 4 : 4;

        context.font = '12px system-ui, sans-serif';
        context.textBaseline = 'middle';
        context.strokeStyle = '#e8eaf2';
        context.fillStyle = '#72788b';
        context.lineWidth = 1;

        for (let tick = 0; tick <= 4; tick += 1) {
            const y = padding.top + chartHeight - (chartHeight * tick) / 4;
            const value = (scaleMax * tick) / 4;
            context.beginPath();
            context.moveTo(padding.left, y);
            context.lineTo(width - padding.right, y);
            context.stroke();
            context.textAlign = 'right';
            context.fillText(
                value === 0 ? '0' : `${(value / 1000).toLocaleString('fr-FR')}k`,
                padding.left - 10,
                y
            );
        }

        const slotWidth = chartWidth / months.length;
        const barWidth = Math.min(42, slotWidth * 0.56);
        months.forEach((month, index) => {
            const barHeight = (month.total / scaleMax) * chartHeight;
            const x = padding.left + slotWidth * index + (slotWidth - barWidth) / 2;
            const y = padding.top + chartHeight - barHeight;
            const gradient = context.createLinearGradient(0, y, 0, padding.top + chartHeight);
            gradient.addColorStop(0, '#635bff');
            gradient.addColorStop(1, '#a49fff');
            context.fillStyle = gradient;
            context.beginPath();
            context.roundRect(x, y, barWidth, Math.max(barHeight, 0), [6, 6, 0, 0]);
            context.fill();

            context.fillStyle = '#72788b';
            context.textAlign = 'center';
            context.fillText(month.label, x + barWidth / 2, height - 14);
        });

        if (maxValue === 0) {
            context.fillStyle = '#72788b';
            context.textAlign = 'center';
            context.fillText('Ajoutez des dépenses pour voir votre évolution.', width / 2, height / 2);
        }
    }

    const observer = new ResizeObserver(drawChart);
    chartObservers.set(section, observer);
    observer.observe(section.querySelector('.chartCanvasWrap'));
    drawChart();
}