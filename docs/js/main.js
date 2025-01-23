'use strict';
//--------------------------------------------------------------------------------------------------
/*
 * JURY CONTENT
 */
//--------------------------------------------------------------------------------------------------
const JURY_JSON = [
]
//--------------------------------------------------------------------------------------------------
function buildMemberHTML(obj) {
    return `
    <li class="htec-jury-member">
        <img class="htec-jury-member-image" src="${obj.image}" alt="Image of ${obj.name}"/>
        <div>
            <span>${obj.position}</span><br/>
            <span>${obj.company}</span>
        </div>
    </li>
    `
}
//--------------------------------------------------------------------------------------------------
function buildJury() {
    let jury = document.getElementById('jury');
    let elementHTML = '';

    elementHTML += '<ul class="htec-jury-list">';
    JURY_JSON.forEach(obj => {
        elementHTML += buildMemberHTML(obj);
    });
    elementHTML += '</ul>';

    jury.innerHTML = elementHTML;
}
//--------------------------------------------------------------------------------------------------
/*
 * CONFERENCE CLOCK
 */
//--------------------------------------------------------------------------------------------------
const CONFERENCE_TIME = Date.parse('2025-07-07T00:10:00.000+01:00');
//--------------------------------------------------------------------------------------------------
function ensureTwoDigits(time) {
    return time.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}
//--------------------------------------------------------------------------------------------------
function updateTime() {
    var delta = (CONFERENCE_TIME - Date.now()) / 1000;
    delta = Math.round(delta)

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;

    document.documentElement.style.setProperty('--timer-day', "'" + ensureTwoDigits(days) + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + ensureTwoDigits(hours) + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + ensureTwoDigits(minutes) + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + ensureTwoDigits(Math.round(seconds)) + "'");
    requestAnimationFrame(updateTime);
}
//--------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    let jury = document.getElementById('jury');
    if (jury)
        buildJury();

    let clock = document.getElementsByClassName('clock-container');
    if (clock.length > 0)
        updateTime();
});
