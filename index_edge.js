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
                id: 'b',
                type: 'image',
                rect: ['-385px', '-81px','1070px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.svg",'0px','0px'],
                transform: [[],[],[],['0.3','0.3']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-357px', '138px','1010px','50px','auto', 'auto'],
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
                rect: ['-39px', '-177px','530px','500px','auto', 'auto'],
                clip: ['rect(0px 530px -35.55546951293945px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.27','0.27']]
            },
            {
                id: 'g',
                type: 'image',
                rect: ['-330px', '-65px','960px','100px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"g.svg",'0px','0px'],
                transform: [[],[],[],['0.32','0.32']]
            },
            {
                id: 'h',
                type: 'image',
                rect: ['-310px', '118px','920px','90px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"h.svg",'0px','0px'],
                transform: [[],[],[],['0.27','0.27']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['2px', '2px','222px','101px','auto', 'auto'],
                text: "ПРОДАЖ",
                font: ['Arial, Helvetica, sans-serif', 30, "rgba(18,140,9,1.00)", "700", "none", ""]
            },
            {
                id: '_122',
                type: 'image',
                rect: ['-43px', '23px','200px','132px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"122.gif",'0px','0px'],
                transform: [[],[],[],['-1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["transform", "scaleX", '0.3'],
                ["style", "left", '-385px'],
                ["transform", "scaleY", '0.3'],
                ["style", "top", '143px']
            ],
            "${_li}": [
                ["style", "top", '-177px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "scaleX", '0.27'],
                ["style", "left", '-39px'],
                ["style", "clip", [0,530,-35.55546951293945,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_a}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "scaleX", '0.27'],
                ["style", "left", '-135px'],
                ["style", "background-position", [0,-68.147786458333], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_g}": [
                ["style", "top", '-65px'],
                ["transform", "scaleY", '0.32'],
                ["transform", "scaleX", '0.32'],
                ["style", "opacity", '0'],
                ["style", "left", '-330px']
            ],
            "${_Text}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(18,140,9,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '2px'],
                ["style", "font-size", '30px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(225,225,0,1.00)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_h}": [
                ["style", "top", '118px'],
                ["transform", "scaleY", '0.27'],
                ["transform", "scaleX", '0.27'],
                ["style", "opacity", '0'],
                ["style", "left", '-310px']
            ],
            "${_t}": [
                ["style", "top", '138px'],
                ["transform", "scaleY", '0.28'],
                ["transform", "scaleX", '0.28'],
                ["style", "opacity", '1'],
                ["style", "left", '-357px'],
                ["style", "background-position", [0,68.148238570602], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${__122}": [
                ["style", "top", '23px'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '-43px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6510,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_a}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-68.147786458333]}], position: 2858, duration: 123 },
                { id: "eid86", tween: [ "style", "${_a}", "background-position", [0,-68.147786458333], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6279, duration: 123 },
                { id: "eid66", tween: [ "style", "${_b}", "top", '103px', { fromValue: '143px'}], position: 0, duration: 120 },
                { id: "eid48", tween: [ "transform", "${_a}", "scaleX", '0.35', { fromValue: '0.27'}], position: 2750, duration: 315 },
                { id: "eid85", tween: [ "transform", "${_a}", "scaleX", '0.27', { fromValue: '0.35'}], position: 6195, duration: 315 },
                { id: "eid63", tween: [ "style", "${_h}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 195 },
                { id: "eid65", tween: [ "style", "${_h}", "opacity", '0', { fromValue: '1'}], position: 6195, duration: 195 },
                { id: "eid20", tween: [ "style", "${_li}", "clip", [0,530,509.6300048828125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,530,-35.55546951293945,0]}], position: 155, duration: 595 },
                { id: "eid61", tween: [ "style", "${_g}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 },
                { id: "eid32", tween: [ "style", "${_g}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 195 },
                { id: "eid74", tween: [ "style", "${_g}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 195 },
                { id: "eid53", tween: [ "style", "${_a}", "top", '138px', { fromValue: '-16px'}], position: 2750, duration: 315 },
                { id: "eid84", tween: [ "style", "${_a}", "top", '-16px', { fromValue: '138px'}], position: 6195, duration: 315 },
                { id: "eid35", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 2945, duration: 140 },
                { id: "eid4", tween: [ "style", "${_t}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,68.148238570602]}], position: 0, duration: 500 },
                { id: "eid49", tween: [ "transform", "${_a}", "scaleY", '0.35', { fromValue: '0.27'}], position: 2750, duration: 315 },
                { id: "eid87", tween: [ "transform", "${_a}", "scaleY", '0.27', { fromValue: '0.35'}], position: 6195, duration: 315 },
                { id: "eid68", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 }            ]
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
