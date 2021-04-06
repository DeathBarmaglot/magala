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
                rect: ['5px', '19px','148px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"magala.jpg",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'b',
                type: 'image',
                rect: ['-385px', '-81px','1070px','120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.svg",'0px','0px'],
                transform: [[],[],[],['0.3','0.3']]
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
                rect: ['-338px', '89px','920px','90px','auto', 'auto'],
                clip: ['rect(0px -17.037036895751953px 90px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"h.svg",'0px','0px'],
                transform: [[],[],[],['0.27','0.27']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['0px', '146px','222px','101px','auto', 'auto'],
                text: "ПРОДАЖ",
                font: ['Arial, Helvetica, sans-serif', 27, "rgba(255,255,255,1.00)", "700", "none", ""]
            },
            {
                id: '_122',
                type: 'image',
                rect: ['-236px', '24px','200px','132px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"122.gif",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-607px', '114px','1972px','98px','auto', 'auto'],
                clip: ['rect(0px 689.2607421875px 98px 85.71428680419922px)'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.28','0.28']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b}": [
                ["style", "top", '143px'],
                ["transform", "scaleX", '0.3'],
                ["transform", "scaleY", '0.3'],
                ["style", "left", '-385px']
            ],
            "${_magala}": [
                ["style", "top", '3px'],
                ["transform", "scaleX", '-1'],
                ["style", "height", '147px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '148px']
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
                ["style", "top", '146px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "font-size", '27px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,14,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_h}": [
                ["style", "top", '89px'],
                ["transform", "scaleY", '0.27'],
                ["style", "clip", [0,-17.037036895751953,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0.27'],
                ["style", "opacity", '0'],
                ["style", "left", '-338px'],
                ["style", "background-position", [7.4074073703704,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_t}": [
                ["transform", "scaleX", '0.28'],
                ["style", "opacity", '1'],
                ["style", "left", '-607px'],
                ["style", "width", '1972px'],
                ["style", "top", '114px'],
                ["transform", "scaleY", '0.28'],
                ["style", "height", '98px'],
                ["style", "background-position", [0,103.86252428489], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,689.2607421875,98,85.71428680419922], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__122}": [
                ["transform", "scaleX", '-1'],
                ["style", "left", '-236px'],
                ["style", "top", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14500,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_a}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-68.147786458333]}], position: 11858, duration: 123 },
                { id: "eid93", tween: [ "style", "${_h}", "clip", [0,568.1481323242188,90,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-17.037036895751953,90,0]}], position: 2000, duration: 711 },
                { id: "eid66", tween: [ "style", "${_b}", "top", '103px', { fromValue: '143px'}], position: 0, duration: 120 },
                { id: "eid68", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 },
                { id: "eid90", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 305 },
                { id: "eid97", tween: [ "style", "${_h}", "background-position", [-547.93523918519,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [7.4074073703704,0]}], position: 4750, duration: 633 },
                { id: "eid63", tween: [ "style", "${_h}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 277 },
                { id: "eid104", tween: [ "style", "${_h}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 277 },
                { id: "eid20", tween: [ "style", "${_li}", "clip", [0,530,509.6300048828125,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,530,-35.55546951293945,0]}], position: 155, duration: 595 },
                { id: "eid35", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 140 },
                { id: "eid61", tween: [ "style", "${_g}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 },
                { id: "eid32", tween: [ "style", "${_g}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 195 },
                { id: "eid74", tween: [ "style", "${_g}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 195 },
                { id: "eid102", tween: [ "style", "${_magala}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 195 },
                { id: "eid106", tween: [ "style", "${_magala}", "top", '3px', { fromValue: '3px'}], position: 7000, duration: 0 },
                { id: "eid107", tween: [ "style", "${_magala}", "top", '9px', { fromValue: '9px'}], position: 7500, duration: 0 },
                { id: "eid4", tween: [ "style", "${_t}", "background-position", [-14.285714285714,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,103.86252428489]}], position: 0, duration: 500 },
                { id: "eid89", tween: [ "style", "${_t}", "background-position", [-647.61962890625,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-14.285714285714,0]}], position: 4945, duration: 567 },
                { id: "eid98", tween: [ "style", "${_t}", "background-position", [-1297.619629,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-647.619629,0]}], position: 8500, duration: 500 },
                { id: "eid48", tween: [ "transform", "${_a}", "scaleX", '0.45', { fromValue: '0.27'}], position: 11750, duration: 315 },
                { id: "eid49", tween: [ "transform", "${_a}", "scaleY", '0.4', { fromValue: '0.27'}], position: 11750, duration: 315 },
                { id: "eid101", tween: [ "style", "${_t}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_a}", "top", '138px', { fromValue: '-16px'}], position: 11750, duration: 315 }            ]
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
