function unitize(s) {
    const units = ['', 'K', 'M', 'B', 'T'];
    s = Number(s);
    return s.toPrecision(3).replace(/^(\d+)\.(\d+)e\+(\d+)$/, function($0, integer, fractional, pow) {
        var mod = (pow % 3);
        var unit = units[(pow - mod) / 3];
        if (unit) {
            const point = fractional.length === mod ? '' : '.';
            return (integer + fractional.slice(0, mod) + point + fractional.slice(mod) + unit);
        }
        return $0;
    });
}

function unitize(s) {
    if (isNaN(s)) {
        return '-';
    }
    s = s - 0;
    const toRound = d => Math.round(d * 100) / 100;

    if (s < 1e+3) {
        return toRound(s) + '';
    }
    else if (s < 1e+6) {
        return toRound(s / 1e+3) + 'K';
    }
    else if (s < 1e+9) {
        return toRound(s / 1e+6) + 'M';
    }
    else {
        return toRound(s / 1e+9) + 'B';
    }
}