/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'magala',
                type: 'image',
                rect: ['155px', '37px','135px','134px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"magala.jpg",'0px','0px'],
                transform: [[],[],[],['1.13999','1.13998']]
            },
            {
                id: 'b',
                type: 'image',
                rect: ['-385px', '-81px','1070px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.svg",'0px','0px'],
                transform: [[],[],[],['0.3','0.3']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-357px', '-12px','1010px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.28','0.28']]
            },
            {
                id: 'a',
                type: 'image',
                rect: ['-135px', '-16px','570px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.svg",'0px','0px'],
                transform: [[],[],[],['0.27','0.27']]
            },
            {
                id: 'li',
                type: 'image',
                rect: ['-192px', '-146px','530px','500px','auto', 'auto'],
                clip: ['rect(0px 530px -35.55546951293945px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.27','0.27']]
            },
            {
                id: 'g',
                type: 'image',
                rect: ['-330px', '-35px','960px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"g.svg",'0px','0px'],
                transform: [[],[],[],['0.32','0.32']]
            },
            {
                id: 'h',
                type: 'image',
                rect: ['-310px', '-30px','920px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h.svg",'0px','0px'],
                transform: [[],[],[],['0.27','0.27']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_g}": [
                ["style", "top", '-35px'],
                ["transform", "scaleY", '0.32'],
                ["transform", "scaleX", '0.32'],
                ["style", "opacity", '0'],
                ["style", "left", '-330px']
            ],
            "${_magala}": [
                ["style", "top", '37px'],
                ["transform", "scaleY", '1.13998'],
                ["transform", "scaleX", '1.13999'],
                ["style", "height", '134px'],
                ["style", "opacity", '0'],
                ["style", "left", '155px'],
                ["style", "width", '135px']
            ],
            "${_li}": [
                ["style", "top", '-146px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "scaleX", '0.27'],
                ["style", "left", '-192px'],
                ["style", "clip", [0,530,-35.55546951293945,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "scaleX", '0.27'],
                ["style", "left", '-135px'],
                ["style", "background-position", [0,-68.147786458333], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(225,225,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_t}": [
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0.28'],
                ["transform", "scaleX", '0.28'],
                ["style", "opacity", '1'],
                ["style", "left", '-357px'],
                ["style", "background-position", [0,68.148238570602], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_h}": [
                ["style", "top", '-30px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "scaleX", '0.27'],
                ["style", "opacity", '0'],
                ["style", "left", '-310px']
            ],
            "${_b}": [
                ["style", "top", '-81px'],
                ["transform", "scaleX", '0.3'],
                ["transform", "scaleY", '0.3'],
                ["style", "left", '-385px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_a}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-68.147786458333]}], position: 5363, duration: 123 },
                { id: "eid34", tween: [ "style", "${_b}", "top", '-48px', { fromValue: '-81px'}], position: 2945, duration: 120 },
                { id: "eid48", tween: [ "transform", "${_a}", "scaleX", '0.35', { fromValue: '0.27'}], position: 5255, duration: 315 },
                { id: "eid63", tween: [ "style", "${_h}", "opacity", '1', { fromValue: '0'}], position: 155, duration: 195 },
                { id: "eid65", tween: [ "style", "${_h}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 195 },
                { id: "eid20", tween: [ "style", "${_li}", "clip", [0,530,509.6300048828125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,530,-35.55546951293945,0]}], position: 155, duration: 595 },
                { id: "eid61", tween: [ "style", "${_g}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 },
                { id: "eid32", tween: [ "style", "${_g}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 195 },
                { id: "eid53", tween: [ "style", "${_a}", "top", '-11px', { fromValue: '-16px'}], position: 5255, duration: 315 },
                { id: "eid35", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 5255, duration: 140 },
                { id: "eid4", tween: [ "style", "${_t}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,68.148238570602]}], position: 2750, duration: 500 },
                { id: "eid49", tween: [ "transform", "${_a}", "scaleY", '0.35', { fromValue: '0.27'}], position: 5255, duration: 315 },
                { id: "eid62", tween: [ "style", "${_magala}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-10096750");
