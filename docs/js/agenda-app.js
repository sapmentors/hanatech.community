'use strict';
//--------------------------------------------------------------------------------------------------
// Mappings (TODO(Johannes): this should be removed or reworked)
//--------------------------------------------------------------------------------------------------
const ROOM_NAME_MAP = {
    "audimax": "Audimax",
    "room_w1": "Room W1",
    "room_w2": "Room W2",
    "room_w3": "Room W3",
    "canteen": "Canteen",
    "experts_1": "Expert Corner"
};
//--------------------------------------------------------------------------------------------------
const ROOM_TRACK_MAP = {
    "audimax": "track-1",
    "room_w1": "track-2",
    "experts_1": "track-4",
    "room_w3": "track-3",
    "canteen": "track-1",
};
//--------------------------------------------------------------------------------------------------
function getConfUnixTime(hour = 9, minute = 0) {
    const h = hour.toString().padStart(2, "0");
    const m = minute.toString().padStart(2, "0");
    return Math.floor(Date.parse(`2026-07-16T${h}:${m}:00+02:00`) / 1000);
}
//--------------------------------------------------------------------------------------------------
function wallclockToHour(wallclock) {
    return parseInt(wallclock.split(':')[0])
}
//--------------------------------------------------------------------------------------------------
function wallclockToMinutes(wallclock) {
    return parseInt(wallclock.split(':')[1])
}
//--------------------------------------------------------------------------------------------------
// AgendaSession
//--------------------------------------------------------------------------------------------------
const AgendaSession = {
    props: ['session'],
    emits: ['open-dialog'],
    computed: {
        isMultiTrack() {
            const t = this.session.type;
            return t.includes('workshop') ||
                   t.includes('note') ||
                   t.includes('lunch_break') ||
                   t.includes('coffee_break') ||
                   t.includes('catering');
        },
        isKeynote() {
            return this.session.type.includes('note');
        },
        track() {
            return ROOM_TRACK_MAP[this.session.location] || 'track-1';
        },
        gridColumn() {
            if (this.isMultiTrack && this.isKeynote) return 'track-1-start / track-4-end';
            if (this.isMultiTrack) return 'track-1-start / track-2-end';
            return this.track;
        },
        startTimeAdj() {
            let adj = this.session.startTime.replace(':', '');
            if (adj.length === 3) adj = '0' + adj;
            return adj;
        },
        endTimeAdj() {
            let adj = this.session.endTime.replace(':', '');
            if (adj.length === 3) adj = '0' + adj;
            return adj;
        },
        gridRow() {
            return `time-${this.startTimeAdj} / time-${this.endTimeAdj}`;
        },
        gridStyle() {
            return {
                gridColumn: this.gridColumn,
                gridRow: this.gridRow
            };
        },
        isEventOver() {
            const [h, m] = this.session.endTime.split(':').map(Number);
            return Math.floor(Date.now() / 1000) > getConfUnixTime(h, m);
        },
        speakerNames() {
            if (!this.session.speakers || this.session.speakers.length === 0) {
                const t = this.session.type;
                if (t.includes('catering') || t.includes('lunch_break') || t.includes('coffee_break') || t.includes('expert')) {
                    return '-';
                }
                return 'TBD';
            }
            const names = this.session.speakers
                .map(s => `${s.firstName} ${s.lastName}`)
                .sort();
            return names.join(', ');
        },
        isWorkshop() {
            return this.session.type.includes('workshop');
        },
        locationClass() {
            return `location-${this.session.location}`;
        },
        sessionClasses() {
            return [
                'session',
                this.isWorkshop ? 'workshop' : '',
                this.isKeynote ? 'keynote-session' : '',
                this.locationClass,
                this.isMultiTrack ? 'track-multi' : this.track,
                this.isEventOver ? 'event-over' : ''
            ].filter(Boolean);
        },
        badgeLabel() {
            if (this.isKeynote) return 'Keynote';
            if (this.isWorkshop) return 'Workshop';
            if (this.session.type.includes('expert')) return 'Expert';
            return null;
        },
        badgeClass() {
            if (this.isKeynote) return 'session-badge badge-keynote';
            if (this.isWorkshop) return 'session-badge badge-workshop';
            return 'session-badge';
        },
        roomName() {
            return ROOM_NAME_MAP[this.session.location] || this.session.location;
        },
        visibleSpeakers() {
            return this.session.speakers;
        },
        extraSpeakerCount() {
            return this.session.speakers.length;
        },
        hasSpeakerAvatars() {
            return this.session.speakers && this.session.speakers.length > 0 &&
                   !this.session.type.includes('catering') &&
                   !this.session.type.includes('lunch_break') &&
                   !this.session.type.includes('coffee_break');
        }
    },
    methods: {
        handleClick(e) {
            e.preventDefault();
            this.$emit('open-dialog', this.session);
        },
        getSpeakerImage(speaker) {
            return speaker.photo === true
                ? `images/speakers/${speaker.hash}.webp`
                : 'images/speakers/smiley.webp';
        }
    },
    template: `
        <div :class="sessionClasses" :style="gridStyle">
            <!--<span v-if="badgeLabel" :class="badgeClass">{{ badgeLabel }}</span>-->
            <h3 class="session-title">
                <a href="#" @click="handleClick">{{ session.title }}</a>
            </h3>
            <div class="session-info-container">
                <div class="session-meta-row">
                    <div class="session-time-chip">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16">
                            <path fill="currentColor"
                                d="M10.2 11c-.18 0-.35-.06-.5-.18L7.4 8.96a.792.792 0 0 1-.3-.62V4.8c0-.44.36-.8.8-.8.44 0 .8.36.8.8v3.16l2.01 1.62c.34.28.4.78.12 1.12-.16.2-.39.3-.62.3Zm4.8 1.2V3.8C15 2.26 13.74 1 12.2 1H3.8C2.26 1 1 2.26 1 3.8v8.4C1 13.74 2.26 15 3.8 15h8.4c1.54 0 2.8-1.26 2.8-2.8Zm-2.8-9.6c.66 0 1.2.54 1.2 1.2v8.4c0 .66-.54 1.2-1.2 1.2H3.8c-.66 0-1.2-.54-1.2-1.2V3.8c0-.66.54-1.2 1.2-1.2h8.4Z">
                            </path>
                        </svg>
                        <span v-if="session.displayStartTime">{{ session.displayStartTime }} - {{ session.endTime }}</span>
                        <span v-else>{{ session.startTime }} - {{ session.endTime }}</span>
                    </div>
                    <div class="session-room-chip">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
                            <path fill="currentColor" d="M8 1a5 5 0 0 0-5 5c0 3.53 4.434 8.626 4.632 8.856a.5.5 0 0 0 .736 0C8.566 14.626 13 9.53 13 6a5 5 0 0 0-5-5zm0 7.5A2.5 2.5 0 1 1 8 3.5a2.5 2.5 0 0 1 0 5z"/>
                        </svg>
                        <span>{{ roomName }}</span>
                    </div>
                </div>
                <div class="session-speaker-row" v-if="hasSpeakerAvatars">
                    <div class="session-speakers-avatars">
                        <img v-for="speaker in visibleSpeakers"
                             :key="speaker.hash"
                             :src="getSpeakerImage(speaker)"
                             :alt="speaker.firstName + ' ' + speaker.lastName"
                             :title="speaker.firstName + ' ' + speaker.lastName"
                             class="session-speaker-avatar" />
                    </div>
                    <span class="session-speaker-names">{{ speakerNames }}</span>
                </div>
                <div class="session-speaker-row" v-else>
                    <span class="session-speaker-names session-speaker-names--no-avatar">{{ speakerNames }}</span>
                </div>
            </div>
        </div>
    `
};
//--------------------------------------------------------------------------------------------------
// AgendaDialog
//--------------------------------------------------------------------------------------------------
const AgendaDialog = {
    props: ['session'],
    emits: ['close'],
    computed: {
        formattedDescription() {
            if (!this.session || !this.session.description) return '';
            return this.session.description.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        },
        hasSpeakers() {
            return this.session && this.session.speakers && this.session.speakers.length > 0;
        },
        sessionTypeLabel() {
            if (!this.session) return '';
            const t = this.session.type;
            if (t.includes('keynote')) return 'Keynote';
            if (t.includes('workshop')) return 'Workshop';
            if (t.includes('presentation_long')) return 'Deep Dive (45 min)';
            if (t.includes('presentation_short')) return 'Spot Talk (25 min)';
            if (t.includes('presentation_detailed')) return 'Detailed Session';
            if (t.includes('expert')) return 'Expert Corner';
            if (t.includes('catering')) return 'Break';
            return '';
        },
        roomName() {
            return ROOM_NAME_MAP[this.session?.location] || '';
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        getSpeakerImage(speaker) {
            return speaker.photo === true
                ? `images/speakers/${speaker.hash}.webp`
                : 'images/speakers/smiley.webp';
        },
        getSpeakerFullName(speaker) {
            return `${speaker.firstName} ${speaker.lastName}`;
        }
    },
    mounted() {
        document.addEventListener('keydown', this._escHandler = (e) => {
            if (e.key === 'Escape') this.close();
        });
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this._escHandler);
    },
    template: `
        <div class="dialog-container" aria-hidden="false" role="dialog" aria-labelledby="agenda-dialog-title" aria-describedby="agenda-dialog-desc">
            <div class="dialog-overlay" @click="close"></div>
            <div class="dialog-content" role="document">
                <button class="dialog-close" aria-label="Close this dialog window" @click="close">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path fill="currentcolor"
                            d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z">
                        </path>
                    </svg>
                </button>

                <div class="htec-agenda-dialog-thick-box">
                    <div class="dialog-meta" v-if="sessionTypeLabel || session.startTime">
                        <span class="dialog-meta-badge" v-if="sessionTypeLabel">{{ sessionTypeLabel }}</span>
                        <span class="dialog-meta-time" v-if="session.startTime">
                            {{ session.startTime }} - {{ session.endTime }}
                        </span>
                        <span class="dialog-meta-room" v-if="roomName">{{ roomName }}</span>
                    </div>
                    <h3 id="agenda-dialog-title">{{ session.title }}</h3>
                    <p id="agenda-dialog-desc" v-html="formattedDescription"></p>
                </div>

                <div class="htec-agenda-dialog-thick-box agenda-dialog-speakers" v-if="hasSpeakers">
                    <h3>Speakers</h3>
                    <ul class="agenda-dialog-speakers-list">
                        <li v-for="speaker in session.speakers" :key="speaker.id || speaker.hash">
                            <div class="htec-dialog-speaker-member-quick">
                                <img aria-hidden="true"
                                     :src="getSpeakerImage(speaker)"
                                     :alt="'Image of ' + getSpeakerFullName(speaker)" />
                                <div class="htec-dialog-speaker-member-info">
                                    <h3>{{ getSpeakerFullName(speaker) }}</h3>
                                    <h4>{{ speaker.company }}</h4>
                                </div>
                            </div>
                            <div class="htec-dialog-speaker-member-bio" v-if="speaker.bio">
                                <p class="htec-agenda-bio-text">{{ speaker.bio }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
};
//--------------------------------------------------------------------------------------------------
// Time Slot
//--------------------------------------------------------------------------------------------------
function genTimeSlotArray(sessions, index) {
    const session = sessions[index]
    let startHour = wallclockToHour(sessions[0].startTime) - 1;
    if (index !== 0) {
        startHour = wallclockToHour(sessions[index - 1].startTime);
    }

    const res = [];
    const endHour = wallclockToHour(session.startTime);
    while (startHour < endHour) {
        startHour++;
        res.push(startHour);
    }

    return res;
}
//--------------------------------------------------------------------------------------------------
const TimeSlotEmitter = {
    props: ['sessions', 'index'],
    computed: {
        timeSlots() {
            return genTimeSlotArray(this.sessions, this.index);
        }
    },
    methods: {
        formatHour(hour) {
            return hour.toString().padStart(2, '0') + ':00';
        },
        hourGridRow(hour) {
            const adj = hour.toString().padStart(2, '0');
            return { gridRow: `time-${adj}00` };
        },
    },
    template: `
        <template v-for="hour in timeSlots">
            <h2 class="time-slot" :style="hourGridRow(hour)">{{ formatHour(hour) }}</h2>
        </template>
    `
};
//--------------------------------------------------------------------------------------------------
// Main App
//--------------------------------------------------------------------------------------------------
function compareSessions(a, b) {
    const [h1, m1] = a.startTime.split(':').map(Number);
    const [h2, m2] = b.startTime.split(':').map(Number);

    if (h1 !== h2) return h1 - h2;
    if (m1 !== m2) return m1 - m2;

    if (a.type === b.type) {
        return 0;
    } else if (a.type < b.type) {
        return -1;
    }
    return 1;
}
//--------------------------------------------------------------------------------------------------
const TRACK_TEAMS_LINKS = {
    'track-1': 'https://teams.microsoft.com/l/meetup-join/PLACEHOLDER_TRACK_A',
    'track-2': 'https://teams.microsoft.com/l/meetup-join/PLACEHOLDER_TRACK_B',
};
//--------------------------------------------------------------------------------------------------
const AgendaApp = {
    components: {
        'agenda-session': AgendaSession,
        'agenda-dialog': AgendaDialog,
        'agenda-time-slot-emitter': TimeSlotEmitter
    },
    data() {
        return {
            sessions_raw: AGENDA_JSON,
            selectedSession: null,
            showDialog: false
        };
    },
    computed: {
        trackLinks() {
            return TRACK_TEAMS_LINKS;
        },
        linksEnabled() {
            return Date.now() / 1000 >= getConfUnixTime(9, 0);
        },
        sortedSessions() {
            return [...this.sessions_raw].sort(compareSessions);
        },
        timeSlots() {
            const hours = new Set();
            this.sortedSessions.forEach(s => {
                const h = parseInt(s.startTime.split(':')[0]);
                hours.add(h);
            });
            return [...hours].sort((a, b) => a - b);
        }
    },
    methods: {
        openDialog(session) {
            this.selectedSession = session;
            this.showDialog = true;
        },
        closeDialog() {
            this.showDialog = false;
            this.selectedSession = null;
        },
        handleTrackLinkClick(e, track) {
            if (!this.linksEnabled) {
                e.preventDefault();
                alert('The online stream links will be available on July 16 when the conference starts.');
            }
        },
    },
    template: `
        <h3 id="Agenda" style="text-align: center;">Agenda</h3>

        <div class="track-online-bar">
            <a :href="trackLinks['track-1']" target="_blank" rel="noopener noreferrer"
               :class="['htec-btn', 'track-A', 'track-online-btn', !linksEnabled && 'track-online-btn--disabled']"
               @click="handleTrackLinkClick($event, 'track-1')"
               aria-label="Join Track A online via Microsoft Teams">
                <svg class="track-online-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 20 11h-1v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8H4a1 1 0 0 1-.707-1.707l7-7zM12 4.414L6.414 10H7v9h10v-9h.586L12 4.414z"/></svg>
                Track A – Join online
            </a>
            <a :href="trackLinks['track-2']" target="_blank" rel="noopener noreferrer"
               :class="['htec-btn', 'track-B', 'track-online-btn', !linksEnabled && 'track-online-btn--disabled']"
               @click="handleTrackLinkClick($event, 'track-2')"
               aria-label="Join Track B online via Microsoft Teams">
                <svg class="track-online-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 20 11h-1v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8H4a1 1 0 0 1-.707-1.707l7-7zM12 4.414L6.414 10H7v9h10v-9h.586L12 4.414z"/></svg>
                Track B – Join online
            </a>
        </div>

        <div class="schedule" aria-labelledby="schedule-heading">
            <a :href="trackLinks['track-1']" target="_blank" rel="noopener noreferrer"
               :class="['track-slot', 'track-slot--online', !linksEnabled && 'track-slot--disabled']"
               style="grid-column: track-1; grid-row: tracks;"
               @click="handleTrackLinkClick($event, 'track-1')"
               aria-label="Track A – Join online via Microsoft Teams">
                Track A
                <span class="track-slot-online-sub">Join online ↗</span>
            </a>
            <a :href="trackLinks['track-2']" target="_blank" rel="noopener noreferrer"
               :class="['track-slot', 'track-slot--online', !linksEnabled && 'track-slot--disabled']"
               style="grid-column: track-2; grid-row: tracks;"
               @click="handleTrackLinkClick($event, 'track-2')"
               aria-label="Track B – Join online via Microsoft Teams">
                Track B
                <span class="track-slot-online-sub">Join online ↗</span>
            </a>
            <span class="track-slot" aria-hidden="true" style="grid-column: track-3; grid-row: tracks;">Track C<span class="track-slot-online-sub">On-site only</span></span>
            <span class="track-slot" aria-hidden="true" style="grid-column: track-4; grid-row: tracks;">Track D<span class="track-slot-online-sub">On-site only</span></span>

            <template v-for="(session, index) in sortedSessions">
                <agenda-time-slot-emitter
                    :sessions="sortedSessions",
                    :index="index"
                />
                <agenda-session
                    :session="session"
                    :key="session.id"
                    @open-dialog="openDialog"
                />
            </template>
        </div>

        <teleport to="body">
            <agenda-dialog
                v-if="showDialog && selectedSession"
                :session="selectedSession"
                @close="closeDialog"
            />
        </teleport>
    `
};
//--------------------------------------------------------------------------------------------------
// Mount when index.html is ready...
//--------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
    const mountPoint = document.getElementById('agenda-app');
    if (mountPoint) {
        const { createApp } = await import('https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js');
        createApp(AgendaApp).mount('#agenda-app');
    }
});
