
var html =  "<!-- \nTHIS IS EMBEDDED AS scripted content .\nSource here is provided as a mechanism to make the ad more readable.\nActual source is translated into Javascript string and placed in \"portraitAdBootstrap.js\" file.\n-->\n<style>\n#adBase{\n top : 0px;\n left : 0px;\n width: 300px;\n height: 1050px;\n}\n\n#adLogo{\n  float : right;\n max-width: 270px;\n  width: 270px;\n  height : 40px;\n  margin-right : 15px;\n  margin-left : 15px;\n  margin-top : 15px;\n  margin-bottom : 10px;\n}\n\n#adModule1Collapsed{\n clear : both;\n  float : right;\n position : relative;\n  width : 270px;\n  height : 460px;\n cursor : pointer;\n  margin-right : 15px;\n  margin-left : 15px;\n  margin-bottom : 15px;\n  margin-top : 0px;\n}\n\n#adModule1Expansion{\n display : none;\n  position : absolute;\n  left : -343px;\n width : 613px;\n  height : 460px;\n cursor : pointer;\n}\n\n#adModule2Collapsed{\n clear : both;\n  float : right;\n position : relative;\n  width : 270px;\n  height : 202px;\n cursor: pointer;\n  margin-right : 15px;\n  margin-left : 15px;\n  margin-bottom : 5px;\n  margin-top : 0px;\n}\n\n#adModule2Expansion{\n display : none;\n  position : absolute;\n left : -135px;\n  width : 405px;\n  height : 303px;\n cursor : pointer;\n}\n\n#adModule3Collapsed{\n clear : both;\n  float : right;\n position : relative;\n  width : 270px;\n  height : 202px;\n cursor : pointer;\n  margin-right : 15px;\n  margin-left : 15px;\n  margin-bottom : 50px;\n  margin-top : 10px;\n}\n\n#adModule3Expansion{\n display : none;\n  position : absolute;\n top : -101px;\n left : -135px;\n  width : 405px;\n  height : 303px;\n cursor : pointer;\n}\n\n.mockContent{\n  position : relative;\n  background-color : #bbbbbb;\n  margin : 15px;\n}\n\n.mockContent > div, .mockContent > h1, .mockContent > p {\n padding: 5px;\n}\n\n</style>\n\n<scr"+"ipt>\nfunction preCollapse(){\n collapseAd();\n}\n</scr"+"ipt>\n\n<div id=\"adBase\">\n <!-- Pushdown Teaser -->\n <div id=\"adLogo\" class=\"mockContent\">\n </div>\n \n <div id=\"adModule1Collapsed\" class=\"mockContent\" onclick=\"expandModule(1)\">\n  <div id=\"adModule1Expansion\" onclick=\"collapseModule(1)\"> <!-- 343 because of the 15px margins on both sides -->\n  <img src=\"https://s3-us-west-2.amazonaws.com/safeframe/samples/rising_stars/adfiles/adModule1Expansion.png\"/>\n  </div>\n </div>\n <div id=\"adModule2Collapsed\" class=\"mockContent\" onclick=\"expandModule(2)\">\n  <div id=\"adModule2Expansion\" onclick=\"collapseModule(2)\"> \n  <img src=\"https://s3-us-west-2.amazonaws.com/safeframe/samples/rising_stars/adfiles/adModule2Expansion.png\"/>\n  </div>\n </div>\n <div id=\"adModule3Collapsed\" class=\"mockContent\" onclick=\"expandModule(3)\">\n  <div id=\"adModule3Expansion\" onclick=\"collapseModule(3)\">\n  <img src=\"https://s3-us-west-2.amazonaws.com/safeframe/samples/rising_stars/adfiles/adModule2Expansion.png\"/>\n  </div>\n </div>\n</div>\n\n<scr"+"ipt src=\"../../examples/IAB_RisingStars/adfiles/adPortraitBehavior.js\"></scr"+"ipt>"

document.write(html);