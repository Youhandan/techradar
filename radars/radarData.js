//This is the title for your window tab, and your Radar
document.title = "My Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'familiar'}
                  ,{'r':200,'name':'know well'}
                  ,{'r':300,'name':'know about'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 900;
var w = 1000;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 150,
        "color" : "#8FA227",
        "items" : [
            { name: "UT", pc:{r: "60", t: "100"}, movement:'c' },
            { name: "Code review", pc:{r: "80", t: "120"}, movement:'c' },
            { name: "Refactor", pc:{r: "120", t: "110"}, movement:'c' },
            { name: "TDD", pc:{r: "270", t: "100"}, movement:'c' },
            { name: "Gitflow", pc:{r: "80", t: "100"}, movement:'c' },
            { name: "Pairing coding", pc:{r: "150", t: "120"}, movement:'c' },
            { name: "Scrum", pc:{r: "150", t: "150"}, movement:'c' },
            { name: "AJAX", pc:{r: "230", t: "150"}, movement:'c' },

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 150,
        "color" : "#587486",
        "items" : [
            { name: "Git", pc:{r: "80", t: "10"}, movement:'c' },
            { name: "IntelliJ IDE", pc:{r: "80", t: "30"}, movement:'c' },
            { name: "Dreamweaver", pc:{r: "220", t: "10"}, movement:'c' },
            { name: "Photoshop", pc:{r: "150", t: "20"}, movement:'c' },
            { name: "Webpack", pc:{r: "210", t: "40"}, movement:'c' },
            { name: "Gulp", pc:{r: "230", t: "60"}, movement:'c' },
            { name: "NPM", pc:{r: "150", t: "60"}, movement:'c' },

  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            { name: "Mac OX", pc:{r: "60", t: "190"}, movement:'c' },
            { name: "Github", pc:{r: "80", t: "200"}, movement:'c' },

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            { name: "JavaScript", pc:{r: "60", t: "280"}, movement:'c' },
            { name: "ES6", pc:{r: "120", t: "300"}, movement:'c' },
            { name: "ES7", pc:{r: "200", t: "300"}, movement:'c' },
            { name: "HTML", pc:{r: "90", t: "280"}, movement:'c' },
            { name: "CSS", pc:{r: "90", t: "310"}, movement:'c' },
            { name: "CSS3", pc:{r: "180", t: "300"}, movement:'c' },
            { name: "Stylus", pc:{r: "180", t: "330"}, movement:'c' },
            { name: "SCSS", pc:{r: "250", t: "340"}, movement:'c' },
            { name: "Sass", pc:{r: "250", t: "320"}, movement:'c' },
            { name: "HTML5", pc:{r: "220", t: "320"}, movement:'c' },
            { name: "React", pc:{r: "80", t: "330"}, movement:'c' },
            { name: "jQuery", pc:{r: "80", t: "350"}, movement:'c' },
            { name: "Redux-Router", pc:{r: "230", t: "350"}, movement:'c' },
            { name: "React-Redux", pc:{r: "230", t: "340"}, movement:'c' },
            { name: "Redux", pc:{r: "230", t: "330"}, movement:'c' },
            { name: "QUnit", pc:{r: "130", t: "310"}, movement:'c' },
            { name: "Mocha", pc:{r: "130", t: "330"}, movement:'c' },
            { name: "Lodash",pc:{r: "120", t: "340"}, movement:'c' },
            { name: "Semanti UI",pc:{r: "90", t: "340"}, movement:'c' },
            { name: "Ant-Design UI",pc:{r: "100", t: "350"}, movement:'c' },

        ]
    }
];
