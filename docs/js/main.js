'use strict';
//--------------------------------------------------------------------------------------------------
/*
 * JURY CONTENT
 */
//--------------------------------------------------------------------------------------------------
const JURY_JSON = [
    {
        "name": "Mathias Kemeter",
        "position": "Software Development Manager",
        "company": "SAP",
        "image": "images/jury/mathias_kemeter.png",
        "bio": "Within SAP’s database development unit, Mathias is responsible for SAP HANA’s multi-model engines. In his role is leading the development behind the spatial, graph, hierarchies, and vector engines as well as the JSON document store.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/mathiaskemeter/"
            },
            {
                "type": "bluesky",
                "url": "https://bsky.app/profile/kemeter.rocks"
            }
        ]
    },
    {
        "name": "Susen Poppe",
        "position": "SAP HANA Product Manager",
        "company": "SAP",
        "image": "images/jury/susan_poppe.jpg",
        "bio": "Susen is part of the product management team responsible for SAP HANA and SAP HANA Cloud. Within the team she focusses on product roll-out and awareness topics.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/susen-poppe"
            }
        ]
    }
]
//--------------------------------------------------------------------------------------------------
function buildSocialHTML(obj) {
    let ret = '';
    obj.socials.forEach(social => {
        ret += `
        <li>
            <a href="${social.url}"
                aria-label="${social.type} profile of ${obj.name}" rel="nofollow" target="_blank">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="images/icons/sprite.svg#${social.type}"></use>
                </svg>
            </a>
        </li>
    `;
    });

    return ret;
}
//--------------------------------------------------------------------------------------------------
function buildMemberHTML(obj) {
    return `
    <li>
        <div class="htec-jury-member-quick">
            <img src="${obj.image}" alt="Image of ${obj.name}" />
            <div class="htec-jury-member-info">
                <h3>${obj.name}</h3>
                <h4>${obj.position}, ${obj.company}</h4>
                <ul>
                  ${buildSocialHTML(obj)}
                </ul>
            </div>
        </div>
        <div class="htec-jury-member-bio">
            <p>${obj.bio}</p>
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
