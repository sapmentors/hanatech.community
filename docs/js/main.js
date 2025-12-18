'use strict';
//--------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------
/*
 * JURY CONTENT
 */
//--------------------------------------------------------------------------------------------------
const JURY_JSON = [
    {
        "name": "Jörg Brandeis",
        "position": "Managing Director",
        "company": "Brandeis Consulting",
        "image": "images/jury/jörg.webp",
        "bio": "Jörg works as a trainer for development topics related to BW/4HANA and S/4HANA. He is the author of the book SQLScript for SAP HANA and is co-organiser of the HANA Tech Nights in Mannheim.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/joerg-brandeis"
            },
            {
                "type": "bluesky",
                "url": "https://bsky.app/profile/captainabap.bsky.social"
            }
        ]
    },
    {
        "name": "Jens Gleichmann",
        "position": "HANA Expert & Managing Director",
        "company": "XLC",
        "image": "images/jury/jens_gleichmann.webp",
        "bio": "As a HANA expert and former HANA trainer for SAP with more than 10 years of experience in optimizing and migrating such systems, his focus is on the technical part of HANA.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/jens-gleichmann"
            }
        ]
    },
    {
        "name": "Anna Hartmann",
        "position": "Managing Director",
        "company": "in4MD Service GmbH",
        "image": "images/jury/anna_hartmann.webp",
        "bio": "Anna brings expertise from over a decade of working with SAP HANA databases. Since 2017, she has been actively serving as the spokeswoman for the DSAG working group 'HANA Operations,'' sharing her knowledge and experiences with the community. She is also the author of the SAP Press book 'SAP HANA Administration.'",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/anna-hartmann-a936a7108"
            }
        ]
    },
    {
        "name": "Rebecca Fondermann",
        "position": "C++ Senior Developer",
        "company": "SAP",
        "image": "images/jury/rebecca_fondermann.webp",
        "bio": "Rebecca joined SAP and the Hana Deployment Infrastructure (HDI) Team on March 1, 2021, where she is working as C++ Senior Developer on HDI Core. She initially studied chemistry and specialized in theoretical chemistry after completing her undergraduate degree. During her PhD, she learned software development and programming in C++. It was during this time that Rebecca discovered a passion for programming, which led her to pursue a career in software development rather than continuing in the field of chemistry after completing her PhD thesis.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/rebecca-fondermann-42859a154/"
            }
        ]
    },
    {
        "name": "Witalij Rudnicki",
        "position": "Principal Developer Advocate",
        "company": "SAP",
        "image": "images/jury/witali.webp",
        "bio": "Witalij Rudnicki (aka. Vitaliy Rudnytskiy) is a Principal Developer Advocate at SAP. His main interests are in Big Data and Fast Data technologies, AI/ML, Analytics and Data Visualization. He graduated from the University of Technology in Wroclaw, Poland. Before joining SAP, he worked as a technology consultant in Europe and in the U.S.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/witalij/"
            },
            {
                "type": "bluesky",
                "url": "https://bsky.app/profile/sygyzmundovych.bsky.social"
            }
        ]
    },
    {
        "name": "Alexander Boehm",
        "position": "HANA Chief Architect",
        "company": "SAP",
        "image": "images/jury/boehm.webp",
        "bio": "Dr. Alexander Böhm is a Distinguished Engineer at SAP and one of the chief architects for the SAP HANA Cloud database management system. His specific focus is on system performance and core database topics. He drives strategic, tactical, and operational projects, including design and architectural changes of the database kernel for key stakeholders, i.e. SAP S/4HANA. Additionally, he is overseeing the evolution of the HANA core database management system with respect to novel hardware and technology as well as cloud-based system deployments.",
        "socials": [
            {
                "type": "linkedin",
                "url": "https://www.linkedin.com/in/alexanderb42/"
            }
        ]
    }
]
//--------------------------------------------------------------------------------------------------
function getConferenceUnixTime(hour = 9, minute = 0) {
    hour = hour.toString().padStart(2, "0");
    minute = minute.toString().padStart(2, "0");
    return Math.floor(Date.parse(`2026-07-16+-T${hour}:${minute}:00+02:00`) / 1000);
}
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
    let imgStr = "";
    if (obj.image !== undefined) {
        if (obj.isAgenda && obj.image.endsWith('.svg')) {
            imgStr = `<svg class="htec-jury-member-svg">
                        <use xlink:href="${obj.image}"></use>
                      </svg>`;
        } else {
            imgStr = `<img aria-hidden="true" src=\"${obj.image}\" alt=\"Image of ${obj.name}\" />`;
        }
    }

    let socialStr = obj.socials !== undefined ? `<ul>${buildSocialHTML(obj)}</ul>` : "";
    return `
    <li>
        <div class="htec-jury-member-quick">
            ${imgStr}
            <div class="htec-jury-member-info">
                <h3>${obj.name}</h3>
                <h4>${obj.position !== undefined ? obj.position + ", " : ""}${obj.company}</h4>
                ${socialStr}
            </div>
        </div>
        <div class="htec-jury-member-bio">
            <p ${obj.isAgenda !== undefined ? "class=\"htec-agenda-bio-text\"" : ""}>${obj.bio}</p>
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
const CONFERENCE_TIME = Date.parse('2026-07-16T00:10:00.000+01:00');
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
//--------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.htec-burger-menu');
    const menu = document.getElementById('site-menu');

    if (!burger || !menu) return;

    // Initial state
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('data-menu-collapsible', 'true');

    function openMenu() {
        menu.classList.add('is-open');
        burger.classList.add('is-active');
        burger.setAttribute('aria-expanded', 'true');

        // Prevent background scroll
        document.documentElement.classList.add('nav-open');

        // Focus first link for accessibility
        const firstLink = menu.querySelector('a');
        if (firstLink) firstLink.focus();
        trapFocus(true);
    }

    function closeMenu() {
        menu.classList.remove('is-open');
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        document.documentElement.classList.remove('nav-open');
        trapFocus(false);
    }

    function toggleMenu() {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        isOpen ? closeMenu() : openMenu();
    }

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            burger.focus();
        }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (burger.getAttribute('aria-expanded') === 'true') {
            if (!menu.contains(e.target) && !burger.contains(e.target)) {
                closeMenu();
            }
        }
    });

    // Simple focus trap while menu is open
    let focusable = [];
    function trapFocus(enable) {
        if (!enable) {
            document.removeEventListener('keydown', handleTab);
            return;
        }
        focusable = Array.from(
            menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
        );
        if (focusable.length) {
            document.addEventListener('keydown', handleTab);
        }
    }

    function handleTab(e) {
        if (e.key !== 'Tab') return;
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});
//--------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // selects and stores the deferred elements
  const deferredElements = document.querySelectorAll(".deferred");

  // creates the observer
  const elementObserver = new IntersectionObserver(
    (entries, observer) =>
      // callback function
      {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("deferred");
            observer.unobserve(entry.target);
          }
        });
      },

    // properties of the observer
    {
      root: null,
      rootMargin: "200px 0px",
      threshold: 0,
    }
  );

  // starts observing the deferred elements
  deferredElements.forEach((element) => elementObserver.observe(element));
});