const startDateTime = new Date('2021-12-12T14:35:00Z');
const today = new Date();
const timeDiff = Math.abs(today.getTime() - startDateTime.getTime());
const daysSince = Math.ceil(timeDiff / (1000 * 3600 * 24));

document.getElementById('daysSince').innerHTML = daysSince;