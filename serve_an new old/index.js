/*
 *Order or operation*

1. Links
    
    '/'

    '/p/:id'
    (post.id === req.params.id)

    '/:id'
    (post.title === req.params.id)

2. onAuthStateChanged

3. DOMContentLoaded
    opening.appendChild
    sequence_Load
    get_dimensions
    handle_play_DOMContentLoaded

4. load
    auth_buffer
    check_for_auth_after_load
        handle_firebase_events
        handle_if_AUTH
            handle_ANIMATION_AUTOMATION (looping animation)
            handle_if_AUTH_checked_CLICK_SCENE_1 (clickable)

    Still has to:
        correct looping animation assets so no player_1 overlapping
        - refreash after sign in/out/register exc.
        - routes?!
        - easy asset change
        - after post/user made
        - Events
        - Modals
        - Guis
        - Game shots
        - sorts
        - filter types
        - card views
            - is_Mobile vs isDesktop
        - home page/route vs post vs users
        - image upload
        - signed in/out ui
            - user_logged_in

        - animation of assets on 24fps loop handle_ANIMATION_AUTOMATION
            player_1
            gui_stage_tv
            gui_stage_lights
            mark
            facer
            logo

5. Scene (interval controlled transition)

6. Shots (Views with events)

7. Set
    - gui_stage_tv
    - gui_stage_lights

*/

/* to dos

    check_ui_after_auth DONE!
    valid users posts!
*/

// Imports
import style from './style.scss';
import events from './imports/events';
import elements from './imports/elements';

let tiny_height = 0;
let tiny_width = 0;
let body = document.getElementById('body');
let auth_has_been_checked = false;

let stored_auth_user_cred = {};
let posts_guides = [];
let upload_details = ``;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDE41kN8BeObYTbfb1Ymp9HrZAXD5OZqFQ",
    authDomain: "antenuh-9d2ca.firebaseapp.com",
    databaseURL: "https://antenuh-9d2ca.firebaseio.com",
    projectId: "antenuh-9d2ca",
    storageBucket: "antenuh-9d2ca.appspot.com",
    messagingSenderId: "56750865675",
    appId: "1:56750865675:web:26f53c0aa771186245b60e",
    measurementId: "G-R9DE6SKETE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// make auth ref
const auth = firebase.auth();

// make firestore ref
const db = firebase.firestore();

// listenforauth state changes
auth.onAuthStateChanged(logged_auth_user => {
    console.log('onAuthStateChanged');

    if ( (logged_auth_user) == null) {
        //alert('logged_auth_user == null');
        get_db_guides();
        console.log('please login');
        auth_has_been_checked = true;
    };

    if ( (logged_auth_user) != null) {
        //alert('logged_auth_user != null');
        stored_auth_user_cred = logged_auth_user;
        get_db_guides();
        console.log('logined in: ' + stored_auth_user_cred.uid);
        auth_has_been_checked = true;
    };

});

let post_view = 'card';
let dark_view = false;

let state = {
    
    data: {
        onload_url: '',
        scene: 0,
        route: 0,
        game: 0,
        time: 0,
        onload_time: 0,
        dark_mode: 0
    },
    
    interaction: {

        root: {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollWidth: 0,
            scrollTop: 0,
            scrollLeft: 0,
            component_app_gui_scroll_y_position: 0,
                wheel: 'still',
                wheels: 0,
                isWheeling: false
        },

        key: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: 1,
            yaxis: 1,
            height: 2,
            width: 2,
            action: {
                breathing: false,
                blinking: true,
                standing: false,
                walking: false,
                sitting: false,
                left: true,
                right: false
            }
        },

        keyhole: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: 5,
            yaxis: 4,
            height: 2,
            width: 2,
            action: {
                breathing: false,
                blinking: true,
                walking: false,
                sitting: false,
                left: true,
                right: false
            }
        },

        playable: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: false,
                running: false,
                stunned: false,
            }
        },

        player_1: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 0,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        player_2: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        enemy: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        vr: {

            transform: false,
            opacity: false,
            display: false,
            clientX: -1,
            clientY: -1,
            height: 4,
            width: 1,
            stance: 5,
            clientX_increase: false,
            clientY_increase: false,
            clientX_auto: true,
            clientY_auto: false,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: false,
                running: false,
                stunned: false,
            }
        },

        vomit: {
            frame: 1,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_1: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_2: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_3: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_4: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_5: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_6: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_7: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 4,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_8: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 8,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        bridge_9: {
            frame: 0,
            stance: 0,
            angle: 0,
            transform: false,
            opacity: false,
            display: false,
            clientX: 6,
            clientY: 0,
            height: 4,
            width: 1,
            idle: {
                floating: false,
                sneak: false,
                standing: true,
                lean: false,
                deep_lean: false,
                squat: false,
                sitting: false,
                bend: false,
                deep_squat: false,
                crawl: false,
                prone: false,
                dead: false,
            },
            action: {
                jumping: false,
                punching: false,
                kicking: false,
                shooting: false,
                grabing: false,
                blocking: false,
            },
            status: {
                jumped: false,
                punched: false,
                kicked: false,
                shot: false,
                grabbed: false,
                blocked: false,
            },
            weapon: {
                hands: false,
                paint: false,
                shoes: true,
                gun: true
            },
            cycles: {
                growth: false,
                shrink: false,
                walking: true,
                running: false,
                stunned: false,
            }
        },

        logo: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: -1,
            yaxis: -4,
            height: 8,
            width: 4,
        },

        helper: {

            transform: false,
            opacity:false,
            display: false,
            xaxis: -1,
            yaxis: -4,
            height: 8,
            width: 4,
        },

        pen: [],
        pencil: [],

        dice: (Math.floor(Math.random() * 6) + 1),

        random: (Math.floor(Math.random() * 100) + 1),

        bullets: [
        ],

        hands: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        track_x: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        track_y: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        ball: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        bounce: {
            transform: false,
            opacity:false,
            display: false,
            speed: 1,
            xaxis: 3,
            xaxisascending: true,
            yaxis: 1,
            yaxisascending: true,
        },

        snake: {
            create: false,
            direction: 'up',
            snakes: [{
                clientX: 0,
                clientY: 0,
                clientXGrow:false,
                clientYGrow:false
            }
            ],
        },

        parallax: {
            xaxis: 0,
            yaxis: 0,
        },
    },

    ux: {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth),
            post_view: post_view,
            dark_view: dark_view,

        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        }
    },

    modal: {

        gui: {

            top: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            top_left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            top_right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom_left: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            bottom_right: {
                transform: false,
                opacity: false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            },
            right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                yaxis: 0,
                height: 0,
                width: 0
            }
        },
        pip: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        pop: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        page: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        fade: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        gradient: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        morph: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        menu: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        overlay: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        nav: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        },
        corner: {
            top: {

                transform: false,
                opacity:false,
                display: false
            },
            bottom: {

                transform: false,
                opacity:false,
                display: false
            },
            left: {

                transform: false,
                opacity:false,
                display: false
            },
            right: {

                transform: false,
                opacity:false,
                display: false
            }
        }
    },

    motion: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000,
        sequence_game: 0
    },

    events: {
        mouse: {
            current: {
                clientX: 0,
                clientY: 0
            },
            status: {
                enter: true,
                leave: false,
                up: true,
                down: false
            },
            history: [],
            timer: 0
        },
        mouse_enter: {
            history: [],
            timer: 0
        },
        mouse_leave: {
            history: [],
            timer: 0
        },
        mouse_up: {
            history: [],
            timer: 0
        },
        mouse_down: {
            history: [],
            timer: 0
        },
        mouse_up_move: {
            history: [],
            timer: 0
        },
        mouse_down_move: {
            history: [],
            timer: 0
        },
        mouse_drag_drop: {
            history: [],
            timer: 0
        },
        touch: {
            history: [],
            timer: 0
        },
        touch_start: {
            history: [],
            timer: 0
        },
        touch_end: {
            history: [],
            timer: 0
        },
        touch_drag_drop: {
            history: [],
            timer: 0
        },
        scroll: {
            history: [],
            timer: 0
        },
        key: {
            history: [],
            timer: 0
        },
        key_up: {
            history: [],
            timer: 0
        },
        keys_held: {
            history: [],
            timer: 0
        },
        motion: {
            event_accelerationIncludingGravity_x: 0,
            event_accelerationIncludingGravity_y: 0,
            event_accelerationIncludingGravity_z: 0,
            orientation_string: '',
            event_alpha: '',
            event_beta: '',
            event_gamma: ''
        }
    },

};

if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
    tiny_height = state.ux.dimensions.height;
};

if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
    tiny_width = state.ux.dimensions.width;
};

state.ux.platform.is_Desktop = (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
state.ux.platform.is_Mobile = ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));

console.log('index.js from nownigel');

let handle_time = () => {
    
    // 1/sec loop
    (() => {
        let interval = 0;
        setInterval(
            function() {
                
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let date = new Date();
                state.data.time = 'Today is ' + (days[date.getDay()]) + ', ' + (months[date.getMonth()]) + ', ' + (date.getDay()) + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
                state.motion.duration ++;
                console.log('duration: ' + state.motion.duration);

                //handle_render_data_value();

            }, (1000));
    })();
};

let handle_if_AUTH_checked_CLICK_SCENE_1 = () => {
    alert('handle_if_AUTH_checked_CLICK_SCENE_1');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_start_of_authing();

                    };

                };

                if (interval == 24 * 1) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_mid_of_authing();

                    };

                };
               
                if (interval == 24 * 2) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        shot_end_of_authing();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let handle_if_AUTH_checked_CLICK_SCENE_2 = () => {
    alert('handle_if_AUTH_checked_CLICK_SCENE_2');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_start_of_authing();

                    };

                };
                
                if (interval == 24 * 1) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        shot_end_of_authing();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let handle_if_AUTH_checked_CLICK_SCENE_3 = () => {
    alert('handle_if_AUTH_checked_CLICK_SCENE_3');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        shot_start_of_authing();

                    };

                };
                
                if (interval == 24 * 1) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        shot_end_of_authing();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};


let shot_game_start = () => {
    
    if (document.getElementById('set') != null) {
        let set = document.getElementById('set');
        set.innerHTML = `
            <div id="gui_stage_tv" class=""></div>
            <div id="gui_stage_lights" class=""></div>
        `
    };

    if (document.getElementById('scene') != null) {
        let scene = document.getElementById('scene');
        scene.innerHTML = `
            <div id="player_1" class=""></div>
            <div id="mark" class=""></div>
            <div id="logo" class=""></div>
        `
    };
}

let shot_game_end = () => {
    
    if (document.getElementById('set') != null) {
        let set = document.getElementById('set');
        set.innerHTML = `
        `
    };

    if (document.getElementById('scene') != null) {
        let scene = document.getElementById('scene');
        scene.innerHTML = `
        `
    };
}


let shot_action_single_wall = () => {

    //alert('shot_action_single_wall');

    if (document.getElementById('shot_1') != null) {
    };

    // 24/fps loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_wall') != null) {

                    document.getElementById('shot_2_wall').classList = (' width_100 height_100 top_0 right_0 bottom_0 left_0 gui_wall_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 6) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                if (interval == 6) {
                    clearInterval(play)
                };

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let shot_action_single_vomit = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
            <div id="shot_2_character_1" class=""></div>
            <div id="shot_2_wall" class=""></div>
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_1') != null) {

                    document.getElementById('shot_2_character_1').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 7) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 7) {
                    clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_enter = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_single_enter_character" class=""></div>
            <div id="shot_action_single_enter_logo" class=""></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_enter_character') != null) {

                    document.getElementById('shot_action_single_enter_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_enter_logo') != null) {

                    document.getElementById('shot_action_single_enter_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_idle = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_single_idle_character" class=""></div>
            <div id="shot_action_single_idle_logo" class=""></div>
        </div>
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_idle_character') != null) {

                    document.getElementById('shot_action_single_idle_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_idle_logo') != null) {

                    document.getElementById('shot_action_single_idle_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_leave = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 leaveBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_single_leave_character" class=""></div>
            <div id="shot_action_single_leave_logo" class=""></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_leave_character') != null) {

                    document.getElementById('shot_action_single_leave_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_leave_logo') != null) {

                    document.getElementById('shot_action_single_leave_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_blank = () => {

    if (document.getElementById('shots') != null) {
        let shots = document.getElementById('shots');
        shots.innerHTML = `
        `

        let element = document.createElement('div');

        element.setAttribute("id", `shot_1`);
        element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
        element.innerHTML = `
            <div id="nigga_click"></div>
        `
        element.addEventListener("click", function(event) {
            act_4();
        });

        document.getElementById('shots').appendChild(
            element
        );

    };

}

let shot_action_single_blink = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
            <div id="vomit_face" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto"></div>
        `
    };

    // vomit_face single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('vomit_face') != null) {

                    document.getElementById('vomit_face').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 7) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 7) {
                    clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let shot_action_single_loaded_leave = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="" class="">

            <div class="animated1 leaveBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div id="shot_action_single_loaded_leave" class="width_50 height_50  top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );

    // shot_action_single_loaded_leave loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_single_loaded_leave') != null) {

                    document.getElementById('shot_action_single_loaded_leave').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                /*
                if (interval == 4) {
                    clearInterval(play)
                };
                */

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let shot_at_animation_begin_1 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="animated1 enterTop width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_2 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_3 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_4 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

            <div class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_5 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="begin_graphic" class="">
            
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div class="width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

        </div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_at_animation_begin_6 = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        
        <div id="shot_facer_button_character_1"></div>
        <div id="shot_facer_button_character_2"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_to_scene_facer_button = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="shot_facer_button_character_1"></div>
        <div id="shot_facer_button_character_2"></div>
        <div id="shot_facer_button_character_3"></div>
    `
    element.addEventListener("click", function(event) {
        act_4();
    });

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_to_scene_1 = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="shot_1_character_1"></div>
        <div id="shot_1_character_2"></div>
        <div id="shot_1_character_3"></div>
        <div id="shot_1_character_4"></div>
        <div id="shot_1_character_5"></div>
        <div id="shot_1_character_6"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );

    document.getElementById('shot_1_character_3').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_1();
    });
    document.getElementById('shot_1_character_4').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_2();
    });
    document.getElementById('shot_1_character_5').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });
    document.getElementById('shot_1_character_6').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });
}

let action_shot_single_1 = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_wall') != null) {

                    document.getElementById('shot_2_wall').classList = (' width_100 height_100 top_0 right_0 bottom_0 left_0 gui_wall_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 6) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                if (interval == 6) {
                    clearInterval(play)
                };

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let action_shot_mix = () => {

    
    // 24/fps loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_2_character_1') != null) {

                    document.getElementById('shot_2_character_1').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_'+state.interaction.vomit.frame+ ' position_absolute margin_auto ');
                            
                    if (state.interaction.vomit.frame == 6) {
                        state.interaction.vomit.frame = 0;
                        action_shot_single_1();
                    };
                
                    state.interaction.vomit.frame += 1;
                };

                interval += 1;

                if (interval == 12) {
                    clearInterval(play)
                };

            }, (500));

            play;
    })();
}

let shot_to_scene_2 = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="shot_2_wall"></div>
        <div id="shot_2_character_1"></div>
        <div id="shot_2_character_2"></div>
        <div id="shot_2_character_3"></div>
        <div id="shot_2_character_4"></div>
        <div id="shot_2_character_5"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );

    document.getElementById('shot_2_character_3').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_1();
    });
    document.getElementById('shot_2_character_4').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_2();
    });
    document.getElementById('shot_2_character_5').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });

    action_shot_mix();

}

let shot_start_of_authing = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="start_graphic_1" class="width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        <div id="start_graphic_2" class="width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_mid_of_authing = () => {

    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="start_graphic_1" class="animated1 leaveTop width_50 height_50 gui_character_face_left_shadow_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        <div id="start_graphic_2" class="animated1 leaveTop width_50 height_50 gui_logo_type_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );
}

let shot_end_of_authing = () => {
    
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="facer_1"></div>
        <div id="facer_2"></div>
        <div id="facer_buttons"></div>
    `


    document.getElementById('shots').appendChild(
        element
    );


    // facer_buttons
    
    if (document.getElementById('facer_buttons') != null) {
        document.getElementById('facer_buttons').addEventListener("click", function(event) {
            alert('yup facer_buttons');

            if (document.getElementById('set') != null) {
                let set = document.getElementById('set');
                set.innerHTML = `
                    <div id="gui_stage_tv" class=""></div>
                    <div id="gui_stage_lights" class=""></div>
                `
            };

            if (document.getElementById('scene') != null) {
                let scene = document.getElementById('scene');
                scene.innerHTML = `
                    <div id="player_1" class=""></div>
                    <div id="mark" class=""></div>
                    <div id="logo" class=""></div>
                `
            };

            shot_to_scene_facer_button();
        });
    }
}

let act_4_shot_enter = () => {

    
    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 enterBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_enter_character" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto"></div>
            <div id="act_4_enter_logo" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_enter_character') != null) {

                    document.getElementById('act_4_enter_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_enter_logo') != null) {

                    document.getElementById('act_4_enter_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4_shot_mid = () => {

    
    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_shot_mid_character" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto"></div>
            <div id="act_4_shot_mid_logo" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_mid_character') != null) {

                    document.getElementById('act_4_shot_mid_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_mid_logo') != null) {

                    document.getElementById('act_4_shot_mid_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4_shot_ending = () => {

    
    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="animated1 leaveBottom width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_shot_ending_character" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto"></div>
            <div id="act_4_shot_ending_logo" class="width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto"></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_ending_character') != null) {

                    document.getElementById('act_4_shot_ending_character').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();


    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_ending_logo') != null) {

                    document.getElementById('act_4_shot_ending_logo').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4_shot_buttons = () => {

    if (document.getElementById('shot_1') != null) {
        let shot_1 = document.getElementById('shot_1');
        shot_1.innerHTML = `
        <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="act_4_shot_buttons_button_1" class=""></div>
            <div id="act_4_shot_buttons_button_2" class=""></div>
            <div id="act_4_shot_buttons_button_3" class=""></div>
        </div>
            
        `
    };

    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_buttons_button_1') != null) {

                    document.getElementById('act_4_shot_buttons_button_1').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_continue '+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_buttons_button_2') != null) {

                    document.getElementById('act_4_shot_buttons_button_2').classList = (' width_33 height_50 top_0 right_0 bottom_0 gui_text_continue '+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
    // shot_2_character_1 single
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('act_4_shot_buttons_button_3') != null) {

                    document.getElementById('act_4_shot_buttons_button_3').classList = (' width_33 height_50 top_0 bottom_0 left_0 gui_text_continue '+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;

                };

                if (interval == 4) {
                    //clearInterval(play)
                };

            }, (1000 / 12));

            play;
    })();
}

let act_4 = () => {
    //alert('act_4');
    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == 0) {
                    
                    if (document.getElementById('shots') != null) {
                        act_4_shot_enter();

                    };

                };
                
                if (interval == 24 * 1) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        act_4_shot_mid();
                    };
                };

                if (interval == 24 * 2) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        act_4_shot_ending();
                    };
                };


                if (interval == 24 * 3) {

                    // the final shot of opening scene
                    if (document.getElementById('shots') != null) {
                        act_4_shot_buttons();
                    };

                    clearInterval(play)
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let shot_action_preloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `preloader_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div class=" width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="shot_action_preloader" class="width_50 height_50 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        </div>
    `
    element.addEventListener("click", function(event) {
        alert('shot_1 yup');
    });

    document.getElementById('preloader').appendChild(
        element
    );

    // shot_1_character_1 loop
    (() => {
        let interval = 1;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_action_preloader') != null) {

                    // loading

                    if (interval == 1) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_1 position_absolute margin_auto ');
                    };

                    if (interval == 2) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_2 position_absolute margin_auto ');
                    };

                    if (interval == 3) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_3 position_absolute margin_auto ');
                    };

                    if (interval == 4) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_4 position_absolute margin_auto ');
                    };

                    // loaded

                    if (interval == 5) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_1 position_absolute margin_auto ');
                    };

                    if (interval == 6) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_2 position_absolute margin_auto ');
                    };

                    if (interval == 7) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_3 position_absolute margin_auto ');
                    };

                    if (interval == 8) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_4 position_absolute margin_auto ');
                    };

                    // face

                    if (interval == 9) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_1 position_absolute margin_auto ');
                    };

                    if (interval == 10) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_2 position_absolute margin_auto ');
                    };

                    if (interval == 11) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_3 position_absolute margin_auto ');
                    };

                    if (interval == 12) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_shadow_4 position_absolute margin_auto ');
                    };

                    // logo

                    if (interval == 13) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_1 position_absolute margin_auto ');
                    };

                    if (interval == 14) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_2 position_absolute margin_auto ');
                    };

                    if (interval == 15) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_3 position_absolute margin_auto ');
                    };

                    if (interval == 16) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_logo_type_4 position_absolute margin_auto ');
                    };

                    // blink

                    if (interval == 17) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_1 position_absolute margin_auto ');
                    };

                    if (interval == 18) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_2 position_absolute margin_auto ');
                    };

                    if (interval == 19) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_3 position_absolute margin_auto ');
                    };

                    if (interval == 20) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_left_blink_4 position_absolute margin_auto ');
                    };

                    // vomit

                    if (interval == 21) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_1 position_absolute margin_auto ');
                    };

                    if (interval == 22) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_2 position_absolute margin_auto ');
                    };

                    if (interval == 23) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_3 position_absolute margin_auto ');
                    };

                    if (interval == 24) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_4 position_absolute margin_auto ');
                    };

                    if (interval == 25) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_5 position_absolute margin_auto ');
                    };

                    if (interval == 26) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_6 position_absolute margin_auto ');
                    };

                    // wall

                    if (interval == 27) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_1 position_absolute margin_auto ');
                    };

                    if (interval == 28) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_2 position_absolute margin_auto ');
                    };

                    if (interval == 29) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_3 position_absolute margin_auto ');
                    };

                    if (interval == 30) {
                        document.getElementById('shot_action_preloader').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_wall_4 position_absolute margin_auto ');
                    };
                
                    interval += 1;
                };

                
                if (interval == 24) {
                    clearInterval(play)
                };
                

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let shot_action_single_loading = () => {
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div class=" width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
            <div id="gui_text_loading" class="width_50 height_50 gui_text_loading_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
        </div>
    `
    element.addEventListener("click", function(event) {
        alert('shot_1 yup');
    });

    document.getElementById('shots').appendChild(
        element
    );

    // shot_1_character_1 loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('gui_text_loading') != null) {

                    document.getElementById('gui_text_loading').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loading_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                /*
                if (interval == 4) {
                    clearInterval(play)
                };
                */

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let shot_action_single_loaded = () => {
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        
            <div class="width_100 height_100 bottom_0 left_0 margin_auto position_absolute">
                <div id="gui_text_loaded" class="width_50 height_50 gui_text_loaded_1 top_0 right_0 bottom_0 left_0 margin_auto position_absolute"></div>
            </div>

    `
    element.addEventListener("click", function(event) {
        alert('shot_1 yup');
    });

    document.getElementById('shots').appendChild(
        element
    );

    // shot_1_character_1 loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('gui_text_loaded') != null) {

                    document.getElementById('gui_text_loaded').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_text_loaded_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                /*
                if (interval == 4) {
                    clearInterval(play)
                };
                */

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let shot_home = () => {
    let shots = document.getElementById('shots');
    shots.innerHTML = ``

    let element = document.createElement('div');

    element.setAttribute("id", `shot_1`);
    element.classList = `width_100 height_100 top_0 bottom_0 left_0 right_0 margin_auto position_absolute`
    element.innerHTML = `
        <div id="shot_1_character_1"></div>
        <div id="shot_1_character_2"></div>
        <div id="shot_1_character_3"></div>
        <div id="shot_1_character_4"></div>
        <div id="shot_1_character_5"></div>
        <div id="shot_1_character_6"></div>
    `

    document.getElementById('shots').appendChild(
        element
    );

    document.getElementById('shot_1_character_3').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_1();
    });
    document.getElementById('shot_1_character_4').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_2();
    });
    document.getElementById('shot_1_character_5').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });
    document.getElementById('shot_1_character_6').addEventListener("click", function(event) {
        handle_if_AUTH_checked_CLICK_SCENE_3();
    });

    // shot_1_character_1 loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_1_character_1') != null) {

                    document.getElementById('shot_1_character_1').classList = (' width_50 height_50 top_0 right_0 bottom_0 left_0 gui_character_face_vomit_left_shadow_'+interval+ ' position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                /*
                if (interval == 4) {
                    clearInterval(play)
                };
                */

            }, (1000 / state.motion.framerate));

            play;
    })();

    // shot_1_character_3 loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                // shot 2
                if (document.getElementById('shot_1_character_3') != null) {

                    document.getElementById('shot_1_character_3').classList = (' width_33 height_33 left_0 bottom_0 top_0 gui_text_continue position_absolute margin_auto ');
                            
                    if (interval == 4) {
                        interval = 0;
                    };
                
                    interval += 1;
                };

                /*
                if (interval == 4) {
                    clearInterval(play)
                };
                */

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let handle_play_DOMContentLoaded = () => {

    document.getElementById('opening').appendChild(
        elements.gen('basics')
    );

    get_dimensions();

    // 24/fps loop
    let fps = 24;
    let loading_buffer = .5;

    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                if ( interval == (0)) {
                
                    if (document.getElementById('shots') != null) {
                        shot_action_preloader();

                    };
                };

                if ( interval < (fps)) {
                
                    if (document.getElementById('shots') != null) {
                        shot_action_single_loading();

                    };
                };
                
                if ( interval == ((fps)*(loading_buffer)) ) {
                
                    if (document.getElementById('shots') != null) {
                        shot_action_single_loaded();

                    };
                    clearInterval(play)

                };

                //console.log('handle_play_DOMContentLoaded: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let handle_ANIMATION_AUTOMATION = () => {

    // 24/fps loop
    (() => {
        let interval = 0;
        setInterval(
            () => {

                if (state.ux.platform.is_Desktop == true) {
                };

                // start loops
                if (document.getElementById('player_1') != null) {

                    // svg classlist
                    if (state.interaction.player_1.stance == 0) {
                        if (state.interaction.player_1.angle == 0) {
                        document.getElementById('player_1').classList = (' width_100 height_100 gui_character_body_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                   
                        if (state.interaction.player_1.angle == 1) {
                        document.getElementById('player_1').classList = (' width_100 height_100 gui_character_body_right_'+state.interaction.player_1.frame+ ' position_absolute margin_auto ');
                        
                        };
                    };

                    // automated motion
                    if ( state.interaction.player_1.cycles.walking == true) {

                        // stance: up
                        if ( state.interaction.player_1.stance == 3 ) {

                            
                            // player walking and pause
                            if (state.interaction.player_1.clientY < 3) {
                                state.interaction.player_1.clientY += (1/32);
                            };
                        };

                        // stance: down
                        if ( state.interaction.player_1.stance == 2 ) {

                            // player walking and pause
                            if (state.interaction.player_1.clientY > -4) {
                                state.interaction.player_1.clientY -= (1/32);
                            };
                        };

                        // stance: right
                        if ( state.interaction.player_1.stance == 1 ) {
                            // player walking and pause
                            if (state.interaction.player_1.clientX < 8) {
                                state.interaction.player_1.clientX += (1/32);
                            };
                        };

                        // stance: left
                        if ( state.interaction.player_1.stance == 0 ) {

                            // player walking and pause
                            if (state.interaction.player_1.clientX > 0) {
                                state.interaction.player_1.clientX -= (1/32);
                            };
                        };
                    };

                    // left
                    if ( state.interaction.player_1.clientX <= 0 && state.interaction.player_1.cycles.walking == true ) {
                        state.interaction.player_1.clientX = 0;
                        //state.interaction.player_1.cycles.walking = false;

                        // reset face
                        state.interaction.player_1.stance = 1;

                        // auto walk
                        state.interaction.player_1.clientX += (1/32);
                    };

                    // right
                    if ( state.interaction.player_1.clientX >= 7 && state.interaction.player_1.cycles.walking == true ) {
                        state.interaction.player_1.clientX = 7;
                        //state.interaction.player_1.cycles.walking = false;

                        // reset face
                        state.interaction.player_1.stance = 0;

                        // auto walk
                        state.interaction.player_1.clientX -= (1/32);
                    };

                    // automated moving
                    // size & position
                    let player_1 = document.getElementById('player_1');
                    player_1.style =
                        'height: ' + (state.interaction.player_1.height * (tiny_height / 8)) + 'px;' +
                        'width: ' + (state.interaction.player_1.width * (tiny_width / 8)) + 'px;' +
                        'bottom: ' + (state.interaction.player_1.clientY * (tiny_height / 8)) + 'px;' +
                        'left: ' + (state.interaction.player_1.clientX * (tiny_width / 8)) + 'px;';
                };

                    
                    // frame reset
                    if (state.interaction.player_1.frame == 4) {
                        state.interaction.player_1.frame = 0;
                    };
                    
                    // frame increase
                    state.interaction.player_1.frame += 1;

                state.motion.frame += 1;
                //console.log('state.motion.frame: ' + state.motion.frame)

            }, (1000 / state.motion.framerate));
    })();
};

let act_3 = () => {
    // 24/fps loop !! initial !!
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {

                if ( interval == (24 * 0)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_loaded_leave();
                    };
                };


                if ( interval == (24 * 1)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_game_start');
                        shot_game_start();
                    };
                };

                if ( interval == (24 * 4)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_game_start');
                        shot_game_end();
                    };
                };

                if ( interval == (24 * 4)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_blink()
                        //shot_home();
                    };
                };

                if ( interval == (24 * 6)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_vomit()
                        //shot_home();
                    };
                };

                if ( interval == (24 * 8)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_blink()
                        //shot_home();
                    };
                };

                if ( interval == (24 * 10)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_vomit()
                        //shot_home();
                    };
                };

                if ( interval == (24 * 12)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_wall();
                        //shot_home();
                    };
                };

                if ( interval == (24 * 14)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_enter()
                        //shot_home();
                    };
                };

                if ( interval == (24 * 16)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_idle()
                        //shot_home();
                    };
                };

                if ( interval == (24 * 18)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_leave()
                        //shot_home();
                    };
                };

                if ( interval == (24 * 20)) {
                    if (document.getElementById('shots') != null) {
                        //alert('shot_action_single_loaded_leave');
                        shot_action_single_blank()
                        //shot_home();
                    };
                };

                //console.log('handle_if_AUTH: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
}

let handle_INITIAL_LOOP = () => {
       
    // if first timer
    if (localStorage.user == null) {
        //alert('welcome first timer, handle_INITIAL_LOOP');
        act_3();
        //
        check_local_user();
    };

    // if returning user
    if (localStorage.user == 'new') {
        //alert('welcome returning user, handle_INITIAL_LOOP');
        act_3();
    };


};

// after DOM, LOAD, AUTH (handle_if_AUTH_ACT_1)
let handle_if_AUTH_ACT_2 = () => {

    handle_firebase_events();
    handle_ANIMATION_AUTOMATION();
    handle_INITIAL_LOOP();

};

// sorting
let find_sort = (mode) => {

    if (mode == 'likesup') {
            
            if (mode == 'likesup') {
                return function(a, b) {
                    return a.likes - b.likes
                }
            };
    };

    if (mode == 'likesdown') {

            if (mode == 'likesdown') {
                return function(a, b) {
                    return b.likes - a.likes
                }
            };
    };

    if (mode == 'viewsup') {

            if (mode == 'viewsup') {
                return function(a, b) {
                    return a.views - b.views
                }
            };

    };

    if (mode == 'viewsdown') {

            if (mode == 'viewsdown') {
                return function(a, b) {
                    return b.views - a.views
                }
            };

    };

    if (mode == 'timeup') {

            if (mode == 'timeup') {
                return function(a, b) {
                    return b.time - a.time
                }
            };

    };

    if (mode == 'timedown') {
            
            if (mode == 'timedown') {
                return function(a, b) {
                    return a.time - b.time
                }
            };

    };

    if (mode == 'titleup') {

            if (mode == 'titleup') {
                return function(a, b) {
                    
                        var textA = a.title.toUpperCase();
                        var textB = b.title.toUpperCase();
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;

                }
            };

    };

    if (mode == 'titledown') {
            
            if (mode == 'titledown') {
                return function(a, b) {

                        var textA = a.title.toUpperCase();
                        var textB = b.title.toUpperCase();
                        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
                        
                }
            };

    };
};

let fb_sorted_library = (the_arr, x) => {  return (the_arr).sort(find_sort(x)) };

let filtered_posts_guides = [];

let handle_firebase_events = () => {

    // filter by title
    if (document.getElementById('element_input_filter') != null) {
        document.getElementById('element_input_filter').addEventListener('keydown', (event) => {
            // filter library
            setTimeout(function() {
                get_db_guides();
            }, 0);
        });
    };

    // post view controls
    if (document.getElementById('pop_bottom') != null) {
        document.getElementById('pop_bottom').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.bottom.transform = !state.modal.pop.bottom.transform;
                get_dimensions();
            }, 0);
        });
    };

    // post view controls
    if (document.getElementById('pop_top') != null) {
        document.getElementById('pop_top').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    // post view controls
    if (document.getElementById('pop_left') != null) {
        document.getElementById('pop_left').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.left.transform = !state.modal.pop.left.transform;
                get_dimensions();
            }, 0);
        });
    };

    // post view controls
    if (document.getElementById('pop_right') != null) {
        document.getElementById('pop_right').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                state.modal.pop.right.transform = !state.modal.pop.right.transform;
                get_dimensions();
            }, 0);
        });
    };

    // post view controls
    if (document.getElementById('view_card') != null) {
        document.getElementById('view_card').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'card';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_list') != null) {
        document.getElementById('view_list').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'list';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_numbered') != null) {
        document.getElementById('view_numbered').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'numbered';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_read') != null) {
        document.getElementById('view_read').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'read';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_fifth') != null) {
        document.getElementById('view_fifth').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'fifth';
                get_dimensions();
            }, 0);
        });
    };
    
    if (document.getElementById('view_sixth') != null) {
        document.getElementById('view_sixth').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'sixth';
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('view_eighth') != null) {
        document.getElementById('view_eighth').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                post_view = 'eighth';
                get_dimensions();
            }, 0);
        });
    };
    
    if (document.getElementById('dark_view_toggle') != null) {
        document.getElementById('dark_view_toggle').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_1') != null) {
        document.getElementById('interactions_button_1').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                //dark_view = !dark_view;
                state.modal.pop.top.transform = !state.modal.pop.top.transform;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_2') != null) {
        document.getElementById('interactions_button_2').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                modal_reset();
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_3') != null) {
        document.getElementById('interactions_button_3').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                modal_reset();
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('interactions_button_4') != null) {
        document.getElementById('interactions_button_4').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                modal_reset();
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_loading') != null) {
        document.getElementById('a_big_loading').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_home') != null) {
        document.getElementById('a_big_home').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_latest') != null) {
        document.getElementById('a_big_latest').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_start') != null) {
        document.getElementById('a_big_start').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_learn') != null) {
        document.getElementById('a_big_learn').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_planner') != null) {
        document.getElementById('a_big_planner').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_contact') != null) {
        document.getElementById('a_big_contact').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

    if (document.getElementById('a_big_welcome') != null) {
        document.getElementById('a_big_welcome').addEventListener('click', (event) => {
            // filter library
            setTimeout(function() {
                dark_view = !dark_view;
                get_dimensions();
            }, 0);
        });
    };

};

let valid_user = {};
let user_logged_in = false;

let check_ui_after_auth = () => {

    // if logged
    if (user_logged_in == true) {
        //alert('user_logged_in == true, : ' + valid_user.id);

        document.getElementById('account-details').innerHTML = `
            id: ${valid_user.id}
            title: ${valid_user.title}
            email: ${valid_user.email}
        `;

        document.getElementById('modal-edit').innerHTML = `
            
                     <form id="edit-form">
                        <p>edit profile</p>
                        <input placeholder="title" type="text" id="title"/>
                        <div id="edit_button" class="">edit</div>

                        <div id="signout" alt="sign out">
                           sign out
                        </div>
                        <div id="delete_button" alt="sign out">
                           delete
                        </div>

                     </form> 
        `

        document.getElementById('modal-create').innerHTML = `
            <form id="create-form">
                <p>modal-create</p>
                
                <input class="display_none" type="file" value="upload" id="fileButton" accept="image/*" title="&nbsp;"/>
                <input placeholder="title" type="text" id="create_title" required />
                <input placeholder="child" type="text" id="create_child" required />
                <input placeholder="content" type="text" id="create_content" required />
                <progress value="0" max="100" id="uploader">0%</progress>
                <p id="upload_progress">images only</p>
                <label for="fileButton">Select file</label>
                <div id="upload_details"></div>
                <div id="create_button" class="">create</div>
             </form>
        `

        document.getElementById('modal-signup').innerHTML = ``;
        document.getElementById('modal-signin').innerHTML = ``;
    };

    // if not logged
    if (user_logged_in == false) {
        //alert('user_logged_in == false');

        document.getElementById('account-details').innerHTML = `please log in`;

        document.getElementById('modal-edit').innerHTML = ``;
        document.getElementById('modal-create').innerHTML = ``;

        document.getElementById('modal-signup').innerHTML = `
            
                     <form id="signup-form">
                     <p>modal-signup</p>
                        <input placeholder="email" type="email" id="signup-email" required />
                        <input placeholder="password" type="password" id="signup-password" required />
                        <div id="signup_submit" class="">sign up</div>
                     </form>
        `

        document.getElementById('modal-signin').innerHTML = `
            
            <form id="signin-form">
                <p>modal-signin</p>
                <input placeholder="signin-email" type="signin-email" id="signin-email" required />
                <input placeholder="signin-password" type="signin-password" id="signin-password" required />
                <div id="signin" class="">sign in</div>
            </form>
        `

    };

    if ((document.getElementById('signup-form')) != null) {

        // sign up / auth / create user
        let signup_form = document.getElementById('signup-form');
        let signup_email = document.getElementById('signup-email');
        let signup_password = document.getElementById('signup-password');
        let signup_submit = document.getElementById('signup_submit');

        signup_submit.addEventListener('click', (event) => {
            event.preventDefault();
            auth.createUserWithEmailAndPassword(signup_email.value, signup_password.value).then(cred => {
                db_create_user(cred);        
            });
        });
    };

    if ((document.getElementById('signin-form')) != null) {
    
        // sign in / auth
        let signin_form = document.getElementById('signin-form');
        let signin_email = document.getElementById('signin-email');
        let signin_password = document.getElementById('signin-password');
        let signin = document.getElementById('signin');

        signin.addEventListener('click', (event) => {
            event.preventDefault();
            auth.signInWithEmailAndPassword(signin_email.value, signin_password.value).then(cred => {
                signin_email.value = ``;
                signin_password.value = ``;
            });
        });
    };

    if ((document.getElementById('uploader')) != null) {
        // upload
        let uploader = document.getElementById('uploader');
        let upload_progress = document.getElementById('upload_progress');
        let fileButton = document.getElementById('fileButton');
        fileButton.addEventListener('change', (event) => {

                // assign metadata
                let metadata = {
                       customMetadata: {
                    'location': 'Yosemite, CA, USA',
                    'activity': 'Hiking'
                      }
                };

                // get file
                let file = event.target.files[0];

                // create a storage ref
                let storageRef = firebase.storage().ref('sweet_gifs/' + file.name);

                // upload file
                let task = storageRef.put(file, metadata);

                // upload progress bar
                task.on('state_changed',
                function progress(snapshot){
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');

                    uploader.value = progress;
                    upload_progress.innerHTML = progress;
                },
                
                function error(err) {

                },
                
                function complete(snapshot) {

                    setTimeout(function () {
                        uploader.value = 0;
                        upload_progress.innerHTML = ``;
                    }, 2000);
                    // Handle successful uploads on complete
                      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        console.log('File available at', downloadURL);
                        upload_details = downloadURL;
                        document.getElementById('upload_details').innerHTML = `upload complete, available at: ${upload_details}`;
                        document.getElementById('upload_details').innerHTML += `
                        <div id="uploaded_image" style="background-image: url(${(upload_details)})">
                        </div>`;
                      });
                }
            );

        });
    };

    if ((document.getElementById('signout')) != null) {

        // signout / un-auth
        let signout = document.getElementById('signout');

        signout.addEventListener('click', (event) => {
            event.preventDefault();
            auth.signOut().then(() => {
                alert('signout');
                console.log('logged out');
                user_logged_in = false;
            });
        });
    };

    if ((document.getElementById('edit_button')) != null) {

        document.getElementById('edit_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_update_user("users", stored_auth_user_cred.uid);
        });

        document.getElementById('delete_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_delete_user("users", stored_auth_user_cred.uid);
        });


        document.getElementById('create_button').addEventListener('click', (event) => {
            event.preventDefault();
            db_create_post("users");
        });
    };

};

// retrieve
let get_db_guides = () => {
    //db.settings({timestampsInSnapshots: true});
    db.collection('users').get().then(snapshot => {
        
        console.log('snapshot.docs: ');
        console.log(snapshot.docs);
        posts_guides = [];
        filtered_posts_guides = [];
        document.getElementById('posts_all').innerHTML = ``;
        document.getElementById('posts_filtered').innerHTML = ``;

        snapshot.docs.forEach(doc => {
            let items = doc.data();
            posts_guides.push(items)
        });

        if ((stored_auth_user_cred.uid) != null) {

            console.log('stored_auth_user_cred.uid');
            console.log(stored_auth_user_cred.uid);
            console.log('posts_guides');
            console.log(posts_guides);

            // match auth user with database collection: users
            valid_user = {};
            //valid_user_post = [];
            user_logged_in = false;
            console.log('check match from posts_guides[i]');
            for (var i = 0; i < posts_guides.length; i++) {
               console.log(posts_guides[i]);
                if (posts_guides[i].id == stored_auth_user_cred.uid) {
                       valid_user = posts_guides[i];
                       user_logged_in = true;
                }
            };

            /*
            for (var i = 0; i < posts_guides.length; i++) {
                   console.log('posts_guides[i]');
                   console.log(posts_guides[i]);

                if (valid_user.id == posts_guides[i].author_id) {
                   alert('found post by user: ' + posts_guides[i]);
                    valid_user_post.push(posts_guides[i]);
                }
            }

            for (var i = 0; i < valid_user_post.length; i++) { 
               console.log(valid_user_post[i]);
            };

            valid_user_post.forEach(post => {
                document.getElementById('posts_users').appendChild(
                    elements.Generate_new_li_post(post)
                );
            });
            */

            console.log('valid_user');
            console.log(valid_user);

        };

        // set ui depending on user log status
        check_ui_after_auth();
        
        /*
        fb_sorted_library(posts_guides, 'timedown').forEach(post => {
            document.getElementById('posts_random').appendChild(
                elements.Generate_new_li_post(post)
            );
        });
        */

        // render SORTED post to view 
        fb_sorted_library(posts_guides, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `
                <div class="feat_img">
                    <div class="container"></div>
                </div>
                <h2>
                    post title: ${post.title}
                </h2>
                <p>
                    post id: ${post.id}
                </p>
                <a href="https://antenuh.com/p/${post.id}">see post</a>
            `
            element.addEventListener("click", function(event) {
                alert('post');
                post_up = !post_up;
                get_classes();
            });

            document.getElementById('posts_all').appendChild(
                element
            );
        });

        //  FILTERED BY TITLE
        if ((filtered_posts_guides) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if (
                    // title filter
                    (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                    ||
                    // if filter
                    (posts_guides[i].id.toString().includes(document.getElementById('element_input_filter').value))

                    ) {
                    filtered_posts_guides.push(posts_guides[i]);
                };
                console.log('filtered_posts_guides[i]');
                console.log(filtered_posts_guides[i]);
            };
        };

        // render SORTED && FILTERED BY TITLE post to view 
        fb_sorted_library(filtered_posts_guides, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `${post.id}
            `
            element.addEventListener("click", function(event) {
                alert('delete post');
                db_delete_user("users", post.id);
            });

            document.getElementById('posts_filtered').appendChild(
                element
            );
        });

        //  FILTERED BY TITLE *USER ONLY*
        let filtered_posts_guides_user_only = [];
        if ((filtered_posts_guides_user_only) != null) {
            for (var i = 0; i < posts_guides.length; i++) {
                if (
                    // title filter
                    (posts_guides[i].title.toString().toLowerCase().includes(document.getElementById('element_input_filter').value))
                    &&
                    // if filter
                    (posts_guides[i].child == 'user')

                    ) {
                    filtered_posts_guides_user_only.push(posts_guides[i]);
                };
                console.log('filtered_posts_guides_user_only[i]');
                console.log(filtered_posts_guides_user_only[i]);
            };
        };


        // render SORTED post to view 
        document.getElementById('posts_all_user_only').innerHTML = ``;
        fb_sorted_library(filtered_posts_guides_user_only, 'titleup').forEach(post => {
            console.log(post);
            let element = document.createElement('div');

            element.setAttribute("id", `post`);
            element.classList = `width_100 margin_auto position_relative float_left`
            element.innerHTML = `
                <div class="feat_img">
                    <div class="container"></div>
                </div>
                <h2>
                    user title: ${post.title}
                </h2>
                <p>
                    user id: ${post.id}
                </p>
                <a href="https://antenuh.com/p/${post.id}">see post</a>
            `
            element.addEventListener("click", function(event) {
                alert('post');
                post_up = !post_up;
                get_classes();
            });

            document.getElementById('posts_all_user_only').appendChild(
                element
            );
        });

        console.log('posts_guides');
        console.log(posts_guides);
    });
};

// create post
let db_create_post = () => {
    
    let date = new Date();
    const ref = db.collection('users').doc();
    const id = ref.id;
    let featured_image;
    if (upload_details == ``) {
        featured_image = `https://firebasestorage.googleapis.com/v0/b/nownigel-67004.appspot.com/o/sweet_gifs%2FE813A0D5-E695-4AA8-B761-6D340C271F5D.jpeg?alt=media&token=0b501f8f-8fd4-43bd-a2ee-6ddeac61b78c`
    };

            let create_title = document.getElementById('create_title');
            let create_child = document.getElementById('create_child');
            let create_content = document.getElementById('create_content');

    db.collection('users').doc(ref.id).set({
        title: create_title.value,
        child: create_child.value,
        content: create_content.value,
        image: featured_image,
        video: create_content.value,
        likes: 0,
        views: 0,
        time: date.getTime(),
        id: ref.id,
        author_id: stored_auth_user_cred.uid,
        email: stored_auth_user_cred.email,
    }).then(()=> {
        console.log('guide made');
        create_title.value = ``;
        create_child.value = ``;
        create_content.value = ``;
        get_db_guides();
    }).catch(err => {
        console.log(err.message)
    })
};

// create user
let db_create_user = (cred) => {
    // create user after auth
    db.collection('users').doc(cred.user.uid).set({
        id: cred.user.uid,
        email: cred.user.email,
        title: cred.user.email,
        child: 'user'
    }).then(()=> {
        console.log(cred);
        console.log(cred.user.uid);
        console.log(cred.user.email);
        console.log(cred.user.metadata.creationTime);
        console.log(cred.user.metadata.lastSignInTime);
        console.log(cred.additionalUserInfo.isNewUser);
        stored_auth_user_cred = cred;
        signup_email.value = ``;
        signup_password.value = ``;
        get_db_guides();
    }).catch(err => {
        console.log(err.message)
    });
};

// update user
let db_update_user = (collection, deletable_id) => {
    console.log(deletable_id);

    let date = new Date();

    db.collection(collection).doc(deletable_id).set({
        id: deletable_id,
        email: stored_auth_user_cred.email,
        title: document.getElementById('title').value
    }).then(function() {
        document.getElementById('title').value = ``,
        alert("Document successfully written!");
        get_db_guides();
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
};

// delete user
let db_delete_user = (collection, deletable_id) => {
    console.log(deletable_id);
    db.collection(collection).doc(deletable_id).delete().then(function() {
        console.log("Document successfully deleted!");
        get_db_guides();
    }).catch(function(error) {
        console.error("Error removing document: ", error);
        get_db_guides();
    });
};

let handle_ReturnState = () => {
    return state
};

let handle_update = () => {
        if (document.getElementById("scroll_clientHeight") != null) {
          document.getElementById("scroll_clientHeight").innerHTML =
            state.interaction.root.clientHeight;
        }

        if (document.getElementById("scroll_clientWidth") != null) {
          document.getElementById("scroll_clientWidth").innerHTML =
            state.interaction.root.clientWidth;
        }

        if (document.getElementById("scroll_scrollHeight") != null) {
          document.getElementById("scroll_scrollHeight").innerHTML =
            state.interaction.root.scrollHeight;
        }

        if (document.getElementById("scroll_scrollWidth") != null) {
          document.getElementById("scroll_scrollWidth").innerHTML =
            state.interaction.root.scrollWidth;
        }

        if (document.getElementById("scroll_scrollTop") != null) {
          document.getElementById("scroll_scrollTop").innerHTML =
            state.interaction.root.scrollTop;
        }

        if (document.getElementById("scroll_scrollLeft") != null) {
          document.getElementById("scroll_scrollLeft").innerHTML =
            state.interaction.root.scrollLeft;
        }

    // gui
    if ((document.getElementById('component_app_status_transform_gui_top')) != null ) {
        document.getElementById('component_app_status_transform_gui_top').innerHTML = state.modal.gui.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_left').innerHTML = state.modal.gui.top_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_top_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_top_right').innerHTML = state.modal.gui.top_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_left').innerHTML = state.modal.gui.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom').innerHTML = state.modal.gui.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_left')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_left').innerHTML = state.modal.gui.bottom_left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_bottom_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_bottom_right').innerHTML = state.modal.gui.bottom_right.transform;
    };
    if ((document.getElementById('component_app_status_transform_gui_right')) != null ) {
        document.getElementById('component_app_status_transform_gui_right').innerHTML = state.modal.gui.right.transform;
    };

    // modal nav
    if ((document.getElementById('component_app_status_transform_nav_top')) != null ) {
        document.getElementById('component_app_status_transform_nav_top').innerHTML = state.modal.nav.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_left')) != null ) {
        document.getElementById('component_app_status_transform_nav_left').innerHTML = state.modal.nav.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_bottom')) != null ) {
        document.getElementById('component_app_status_transform_nav_bottom').innerHTML = state.modal.nav.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_nav_right')) != null ) {
        document.getElementById('component_app_status_transform_nav_right').innerHTML = state.modal.nav.right.transform;
    };

    // modal pip
    if ((document.getElementById('component_app_status_transform_pip_top')) != null ) {
        document.getElementById('component_app_status_transform_pip_top').innerHTML = state.modal.pip.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_pip_left')) != null ) {
        document.getElementById('component_app_status_transform_pip_left').innerHTML = state.modal.pip.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_pip_bottom')) != null ) {
        document.getElementById('component_app_status_transform_pip_bottom').innerHTML = state.modal.pip.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_pip_right')) != null ) {
        document.getElementById('component_app_status_transform_pip_right').innerHTML = state.modal.pip.right.transform;
    };

    // modal page
    if ((document.getElementById('component_app_status_transform_page_top')) != null ) {
        document.getElementById('component_app_status_transform_page_top').innerHTML = state.modal.page.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_left')) != null ) {
        document.getElementById('component_app_status_transform_page_left').innerHTML = state.modal.page.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_bottom')) != null ) {
        document.getElementById('component_app_status_transform_page_bottom').innerHTML = state.modal.page.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_page_right')) != null ) {
        document.getElementById('component_app_status_transform_page_right').innerHTML = state.modal.page.right.transform;
    };

    // modal menu
    if ((document.getElementById('component_app_status_transform_menu_top')) != null ) {
        document.getElementById('component_app_status_transform_menu_top').innerHTML = state.modal.menu.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_left')) != null ) {
        document.getElementById('component_app_status_transform_menu_left').innerHTML = state.modal.menu.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_bottom')) != null ) {
        document.getElementById('component_app_status_transform_menu_bottom').innerHTML = state.modal.menu.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_menu_right')) != null ) {
        document.getElementById('component_app_status_transform_menu_right').innerHTML = state.modal.menu.right.transform;
    };

    // modal morph
    if ((document.getElementById('component_app_status_transform_morph_top')) != null ) {
        document.getElementById('component_app_status_transform_morph_top').innerHTML = state.modal.morph.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_left')) != null ) {
        document.getElementById('component_app_status_transform_morph_left').innerHTML = state.modal.morph.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_bottom')) != null ) {
        document.getElementById('component_app_status_transform_morph_bottom').innerHTML = state.modal.morph.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_morph_right')) != null ) {
        document.getElementById('component_app_status_transform_morph_right').innerHTML = state.modal.morph.right.transform;
    };

    // modal gradient
    if ((document.getElementById('component_app_status_transform_gradient_top')) != null ) {
        document.getElementById('component_app_status_transform_gradient_top').innerHTML = state.modal.gradient.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_left')) != null ) {
        document.getElementById('component_app_status_transform_gradient_left').innerHTML = state.modal.gradient.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_bottom')) != null ) {
        document.getElementById('component_app_status_transform_gradient_bottom').innerHTML = state.modal.gradient.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_gradient_right')) != null ) {
        document.getElementById('component_app_status_transform_gradient_right').innerHTML = state.modal.gradient.right.transform;
    };

    // modal pop
    if ((document.getElementById('component_app_status_transform_pop_top')) != null ) {
        document.getElementById('component_app_status_transform_pop_top').innerHTML = state.modal.pop.top.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_left')) != null ) {
        document.getElementById('component_app_status_transform_pop_left').innerHTML = state.modal.pop.left.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_bottom')) != null ) {
        document.getElementById('component_app_status_transform_pop_bottom').innerHTML = state.modal.pop.bottom.transform;
    };
    if ((document.getElementById('component_app_status_transform_pop_right')) != null ) {
        document.getElementById('component_app_status_transform_pop_right').innerHTML = state.modal.pop.right.transform;
    };

    // ux
    if ((document.getElementById('is_Desktop')) != null ) {
        document.getElementById('is_Desktop').innerHTML = state.ux.platform.is_Desktop;
    };
    if ((document.getElementById('is_Mobile')) != null ) {
        document.getElementById('is_Mobile').innerHTML = state.ux.platform.is_Mobile;
    };

    if ((document.getElementById('current_frame_motion')) != null ) {
        document.getElementById('current_frame_motion').innerHTML = state.motion.frame;
    };
    if ((document.getElementById('current_duration')) != null ) {
        document.getElementById('current_duration').innerHTML = state.motion.duration;
    };

    if ((document.getElementById('time')) != null ) {
        document.getElementById('time').innerHTML = state.data.time;
    };

    if ((document.getElementById('time_onload')) != null ) {
        document.getElementById('time_onload').innerHTML = state.data.onload_time;
    };

    if ((document.getElementById('ux_dimensions_height')) != null ) {
        document.getElementById('ux_dimensions_height').innerHTML = state.ux.dimensions.height;
    };
    
    if ((document.getElementById('ux_dimensions_width')) != null ) {
        document.getElementById('ux_dimensions_width').innerHTML = state.ux.dimensions.width;
    };
    
    if ((document.getElementById('ux_browser_height')) != null ) {
        document.getElementById('ux_browser_height').innerHTML = state.ux.browser.height;
    };
    
    if ((document.getElementById('ux_browser_width')) != null ) {
        document.getElementById('ux_browser_width').innerHTML = state.ux.browser.width;
    };

    if ((document.getElementById('ux_screen_height')) != null ) {
        document.getElementById('ux_screen_height').innerHTML = state.ux.screen.height;
    };
    
    if ((document.getElementById('ux_screen_width')) != null ) {
        document.getElementById('ux_screen_width').innerHTML = state.ux.screen.width;
    };

    if(state.ux.orientation.is_Landscape){
        if ((document.getElementById('event_portrait')) != null ) {
            document.getElementById('event_portrait').innerHTML = `'this is not portrait.'`;
        };
        if ((document.getElementById('event_landscape')) != null ) {
            document.getElementById('event_landscape').innerHTML = `'this is landscape.'`;
        };
    };
    if(state.ux.orientation.is_Portrait){
        if ((document.getElementById('event_portrait')) != null ) {
            document.getElementById('event_portrait').innerHTML = `'this is portrait.'`;
        };
        if ((document.getElementById('event_landscape')) != null ) {
            document.getElementById('event_landscape').innerHTML = `'this is not landscape.'`;
        };
    };

};

let post_up = false;
let get_classes = () => {
    let class_this = document.getElementById('root');
    if (post_up == true) {
        class_this.classList += " post_up"
    };

    if (post_up == false) {
        class_this.classList -= " post_up"
    };
};

let ui_check = () => {
    if (state.ux.platform.is_Desktop) {
        state.interaction.player_1.width = 1;
        state.interaction.player_1.height = 4;
    };

    if (state.ux.platform.is_Mobile) {
        state.interaction.player_1.width = 8;
        state.interaction.player_1.height = 8;
    };

    if (state.ux.orientation.is_Landscape) {
        body.classList += " is_Landscape"
    };

    if (state.ux.orientation.is_Portrait) {
        body.classList += " is_Portrait"
    };

    if (state.modal.pop.left.transform == true) {
        body.classList += " modal_pop_left"
    };

    if (state.modal.pop.right.transform == true) {
        body.classList += " modal_pop_right"
    };

    if (state.modal.pop.bottom.transform == true) {
        body.classList += " modal_pop_bottom"
    };

    if (state.modal.pop.top.transform == true) {
        body.classList += " modal_pop_top"
    };

    if (state.ux.orientation.post_view == 'card') {
        body.classList += " card"
    };

    if (state.ux.orientation.post_view == 'list') {
        body.classList += " list"
    };

    if (state.ux.orientation.post_view == 'numbered') {
        body.classList += " numbered"
    };

    if (state.ux.orientation.post_view == 'read') {
        body.classList += " read"
    };

    if (state.ux.orientation.post_view == 'fifth') {
        body.classList += " fifth"
    };

    if (state.ux.orientation.post_view == 'sixth') {
        body.classList += " sixth"
    };

    if (state.ux.orientation.post_view == 'eighth') {
        body.classList += " eighth"
    };

    if (state.ux.orientation.dark_view == true) {
        body.classList += " dark"
    };

    if (state.ux.orientation.dark_view == false) {
        body.classList += " light"
    };


    console.log('resize');
    console.log(state.ux);

};

let get_dimensions = () => {
    state.ux = {
        platform: {
            is_Desktop: (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))),
            is_Mobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)))
        },
        orientation: {
            is_Landscape: (window.innerHeight < window.innerWidth),
            is_Portrait: (window.innerHeight > window.innerWidth),
            post_view: post_view,
            dark_view: dark_view,
        },
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        }
    };

    if (state.ux.platform.is_Desktop) {

        tiny_height = state.ux.dimensions.height;
        console.log('tiny_height: ' + tiny_height);

        tiny_width = state.ux.dimensions.width;
        console.log('tiny_width: ' + tiny_width);

        body.classList = "is_Desktop";
    };

    if (state.ux.platform.is_Mobile) {
        
        if (tiny_height == 0 || tiny_height > state.ux.dimensions.height) {
            tiny_height = state.ux.dimensions.height;
            console.log('tiny_height: ' + tiny_height);
        };

        if (tiny_width == 0 || tiny_width > state.ux.dimensions.width) {
            tiny_width = state.ux.dimensions.width;
            console.log('tiny_width: ' + tiny_width);
        };

        body.classList = "is_Mobile";
    };

    if (body != null) {
        body.style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (document.getElementById('outro') != null) {
        document.getElementById('outro').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (document.getElementById('credits') != null) {
        document.getElementById('credits').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };

    if (document.getElementById('interactions') != null) {
        document.getElementById('interactions').style =
            'height: ' + (state.ux.dimensions.height) + 'px;' +
            'width: ' + (state.ux.dimensions.width) + 'px;';
    };
    
    if (state.ux.platform.is_Desktop) {
        if (document.getElementById('lead') != null) {
            document.getElementById('lead').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };

        if (document.getElementById('shots') != null) {
            document.getElementById('shots').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };

        if (document.getElementById('scene') != null) {
            document.getElementById('scene').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };

        if (document.getElementById('set') != null) {
            document.getElementById('set').style =
                'height: ' + (state.ux.dimensions.height) + 'px;' +
                'width: ' + (state.ux.dimensions.width) + 'px;';
        };
    };

    if (state.ux.platform.is_Mobile) {
        if (document.getElementById('lead') != null) {
            document.getElementById('lead').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };

        if (document.getElementById('shots') != null) {
            document.getElementById('shots').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };

        if (document.getElementById('scene') != null) {
            document.getElementById('scene').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };

        if (document.getElementById('set') != null) {
            document.getElementById('set').style =
                'height: ' + (tiny_height) + 'px;' +
                'width: ' + (tiny_width) + 'px;';
        };
    };

    console.log('resize');
    console.log(state.ux);

    ui_check();
};

let handle_ReturnedState_fromEvents = () => {
    state = events.handle_ReturnState_fromEvents();
    get_dimensions();
    handle_update();
};


let check_for_auth_after_load = () => {

    let auth_buffer = 5;
    setTimeout(function () {
        body.scrollTo(0, 0);
    }, 0);
    handle_time();

    // 24/fps loop
    (() => {
        let interval = 0;
        let play = setInterval(
            () => {
                
                if (interval > (24 * auth_buffer) ) {

                    if ((auth_has_been_checked == true) && (has_loaded == true)) {
                        handle_if_AUTH_ACT_2();
                        clearInterval(play)
                    };
                };

                console.log('check_for_auth_after_load: ' + interval);
                interval += 1;

            }, (1000 / state.motion.framerate));

            play;
    })();
};

let modal_reset = () => {
    state.modal.pop.top.transform = false;
    state.modal.pop.left.transform = false;
    state.modal.pop.right.transform = false;
    state.modal.pop.bottom.transform = false;

    shot_to_scene_2();
};

// inital
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded');
    handle_play_DOMContentLoaded();

});

let check_local_user = () => {

        // Localize data
        if (localStorage.user == null) {
            //alert('welcome first timer');

            localStorage.setItem("user", "new");
            /*
            document.getElementById('users_username').innerHTML = 'Welcome <u>new user!</u> Please sign up or Log in.';
            */
            return;
        };

        // Localize data
        if (localStorage.user != null) {
            //alert('weolcome back: ' + localStorage.user + 'login please');

            /*
            document.getElementById('users_username').innerHTML = 'Welcome back <u>returning user!</u> please login';
            */

            return;
        };
};

let has_loaded = false;

window.addEventListener("load", (event) => {
    console.log('load');
    has_loaded = true;
    check_for_auth_after_load();
});

window.addEventListener("resize", (event) => {
    get_dimensions();

});

// scroll
window.addEventListener('scroll', (event) => {
    events.handle_Function_Scroll(event);
    handle_ReturnedState_fromEvents();
});

// events
body.addEventListener('keydown', (event) => {
    events.handle_Function_Key_Down(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('keyup', (event) => {
    events.handle_Function_Key_Up(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mousemove', (event) => {
    events.handle_Function_Mouse_Move(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mouseenter', (event) => {
    events.handle_Function_Mouse_Enter(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mouseleave', (event) => {
    events.handle_Function_Mouse_Leave(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mouseup', (event) => {
    events.handle_Function_Mouse_Up(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('mousedown', (event) => {
    events.handle_Function_Mouse_Down(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('click', (event) => {
    events.handle_Function_Mouse_Down(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('touchmove', (event) => {
    events.handle_Function_Touch_Move(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('touchstart', (event) => {
    events.handle_Function_Touch_Start(event);
    handle_ReturnedState_fromEvents();
});

body.addEventListener('touchend', (event) => {
    events.handle_Function_Touch_End(event);
    handle_ReturnedState_fromEvents();
});
``
window.addEventListener("devicemotion", (event) => {
    events.handle_Function_Device_Motion(event);
    handle_ReturnedState_fromEvents();
});

window.addEventListener("deviceorientation", (event) => {
    state.events.motion.event_alpha = event.alpha;
    state.events.motion.event_beta = event.beta;
    state.events.motion.event_gamma = event.gamma;
    //alert('change');
});

window.addEventListener("orientationchange", (event) => {
    tiny_height = 0;
    tiny_width = 0;
    alert('orientationchange');
    get_dimensions();

    state.events.motion.orientation_string = state.ux.screen.orientation;
    console.log('state.ux.screen.orientation');
    console.log(state.ux.screen.orientation);
});

window.addEventListener("beforeunload", (event) => {
});


export default {
    handle_ReturnState,
    modal_reset
}