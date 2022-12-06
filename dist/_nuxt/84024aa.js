(window.webpackJsonp=window.webpackJsonp||[]).push([[88,28],{1017:function(e,t,o){"use strict";o.r(t);var l={components:{Destinav:o(323).default},data:function(){return{index:{video:"708087309",bishTitle:{subTitle:"LAKE TANA, BAHIRDAR",title:"kuriftu resort & spa Lake Tana",text:"Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & Spa Lake Tana represents the Kuriftu brands second resort venture. As we seek to expand across Ethiopia, Lake Tana with its historic and cultural value was the perfect choice for expansion. Paired with scenic views, wildlife excursions and religious routes - this destination offers a new adventure for our Kuriftu family!"},photos:["laketana/acc/lakeview/lvL1.webp","laketana/corp/ConferenceHall.webp","laketana/event/Honeymoon.webp","laketana/exp/CabanaDinig.webp","laketana/well/2L.webp","laketana/Lake tana.webp","laketana/dining.webp"],accImg:"laketana/acc.webp",accTitle:{subTitle:"ACCOMODATION",title:"Surrounded by Nature",text:"With only 28 rooms, Kuriftu Tana offers guests a more intimate experience with their natural surroundings and an opportunity to explore areas in and out of the resort",link:"view all accomodations",url:"laketana/acc"},highlight:[{id:1,img:"laketana/exp.webp",subTitle:"Experience",title:"Adventure",text:"From boat rides to local monestaries to bird watching tours, Kuriftu Tana has a unique relationship with the natural environment that allows guests to relax",uri:"laketana/exp",url:"Explore"},{id:2,img:"laketana/Dining1.webp",subTitle:"dining",title:"culinary on the lake",text:"Enjoy the various traditional and western cuisines carefully prepared while taking in the beautiful scenery. Our restaurant has a stunning backdrop of Lake Tana as well as several cabanas for our guests convenience ",uri:"laketana/dining",url:"Explore"},{id:3,img:"laketana/well.webp",subTitle:"wellness",title:"Rejuvination",text:"A place of peace where relaxation and wellness go hand in hand",uri:"laketana/well",url:"Explore"},{id:4,img:"laketana/corp.webp",subTitle:"Corporate Teams",title:"CORPORATE EXPERIENCE",text:"A space for your team to work, strengthen relationships and relax together. ",uri:"laketana/corp",url:"Explore"},{id:5,img:"laketana/cele.webp",subTitle:"Celebration",title:"A memorable experience",text:"Share your unforgettable moments with us at our resort with birthdays, weddings and more! ",uri:"laketana/event",url:"Explore"},{id:6,img:"laketana/FutureTravels.webp",subTitle:"gift voucher",title:"future travels",text:"Get gift vouchers for your loved ones to be part of the incredible experiences provided at our resort.",uri:"laketana/gift",url:"Explore"}],mapInfo:"491 km from Addis Abeba Bole International Airport Lake Tana, Ethiopia",iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.3489744311732!2d37.37921672875011!3d11.598450320334624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cde2a39aad09%3A0xe0ed4292e70a9eef!2sKuriftu%20Resort%20and%20Spa%20Bahir%20Dar!5e0!3m2!1sen!2sus!4v1655483010985!5m2!1sen!2sus"}}}},n=o(20),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("HeaderApp"),e._v(" "),o("Destinav",{attrs:{base:"laketana/",home:"laketana/",dir:"Lake Tana"}}),e._v(" "),o("Dindex",{attrs:{index:e.index}}),e._v(" "),o("Sticky",{attrs:{path:"tana"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderApp:o(143).default,Destinav:o(323).default,Dindex:o(388).default,Sticky:o(315).default})},313:function(e,t,o){var content=o(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("22c0b836",content,!0,{sourceMap:!1})},315:function(e,t,o){"use strict";o.r(t);var l=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"book-stay col-2"},[l("h2",{staticClass:"title"},[e._v("book your stay")]),e._v(" "),l("img",{attrs:{src:o(142),alt:""}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-group bootstrap-dates col-3"},[o("h5",{staticClass:"sub-title"},[e._v("Select dates")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",name:"daterange",id:"date",value:"",readonly:""}})])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"book-stay col-3 col-offset-2"},[l("h2",{staticClass:"title"},[e._v("book spa day")]),e._v(" "),l("img",{attrs:{src:o(142),alt:""}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"location col-3"},[o("h5",{staticClass:"sub-title"},[e._v("Call For Reservation")]),e._v(" "),o("a",{staticClass:"text",attrs:{href:"tel:+251116623808"}},[e._v("+251 11 662 3808")]),e._v(" "),o("a",{staticClass:"text",attrs:{href:"tel:+251116636557"}},[e._v("+251 11 663 6557")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cta-container col-3"},[o("a",{staticClass:"btn-primary",attrs:{href:"bostonMenu.pdf",target:"_blank"}},[e._v("View spa menu")])])}],n=(o(88),o(316),{props:["path","page"],data:function(){return{location:this.path,checkin:"",checkout:"",guest:""}},methods:{show:function(){console.log("Location",this.location),console.log("check in",this.checkin),console.log("check out",this.checkout),console.log("Guest",this.guest),window.open("https://reservations.kurifturesorts.com/reserve.php?location=".concat(this.location,"&checkin=").concat(this.checkin,"&checkout=").concat(this.checkout),"_blank")}},mounted:function(){var e,t,o=new Date,dd=String(o.getDate()).padStart(2,"0"),l=String(o.getMonth()+1).padStart(2,"0"),n=o.getFullYear(),r=new Date(o);r.setDate(r.getDate()+1),r=new Date((new Date).getTime()+864e5);var td=String(r.getDate()).padStart(2,"0"),c=String(r.getMonth()+1).padStart(2,"0"),f=r.getFullYear();o=l+"/"+dd+"/"+n,r=c+"/"+td+"/"+f,e=n+"-"+l+"-"+dd,t=f+"-"+c+"-"+td,this.checkin=e,this.checkout=t,console.log("inital start",this.checkin),console.log("inital end",this.checkout),console.log("this",this);var d=this;$(document).ready((function(){console.log("initial start",e),console.log("initial end",t),$("#date").daterangepicker({drops:"up",parentEl:".sticky-book"}),$("#date").data("daterangepicker").setStartDate(o),$("#date").data("daterangepicker").setEndDate(r),$("#date").on("apply.daterangepicker",(function(o,l){e=l.startDate.format("YYYY-MM-DD"),t=l.endDate.format("YYYY-MM-DD"),console.log("updated start",e),console.log("updated end",t),d.checkin=e,d.checkout=t}))}))}}),r=(o(319),o(20)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"sticky-book"},["boston"!=this.page?o("div",{staticClass:"container row"},[e._m(0),e._v(" "),o("div",{staticClass:"location col-3"},[o("h5",{staticClass:"sub-title"},[e._v("location")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.location=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"awash"}},[e._v("Awash Falls")]),e._v(" "),o("option",{attrs:{value:"bishoftu"}},[e._v("Bishoftu")]),e._v(" "),o("option",{attrs:{value:"entoto"}},[e._v("Entoto")]),e._v(" "),o("option",{attrs:{value:"tana"}},[e._v("Lake Tana")])])]),e._v(" "),e._m(1),e._v(" "),o("div",{staticClass:"guests col-2"},[o("h5",{staticClass:"sub-title"},[e._v("guests")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.guest,expression:"guest"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.guest=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"1"}},[e._v("1")]),e._v(" "),o("option",{attrs:{value:"2"}},[e._v("2")]),e._v(" "),o("option",{attrs:{value:"3"}},[e._v("3")]),e._v(" "),o("option",{attrs:{value:"4"}},[e._v("4")])])]),e._v(" "),o("div",{staticClass:"cta-container col-2"},[o("a",{staticClass:"btn-primary",staticStyle:{cursor:"pointer"},attrs:{to:"#"},on:{click:function(t){return t.preventDefault(),e.show.apply(null,arguments)}}},[e._v("\n        Check availability\n      ")])])]):o("div",{staticClass:"container row"},[e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)])])}),l,!1,null,null,null);t.default=component.exports},316:function(e,t,o){"use strict";var l=o(3),n=o(317).start;l({target:"String",proto:!0,forced:o(318)},{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},317:function(e,t,o){var l=o(4),n=o(50),r=o(12),c=o(207),f=o(21),d=l(c),m=l("".slice),h=Math.ceil,x=function(e){return function(t,o,l){var c,x,v=r(f(t)),k=n(o),w=v.length,y=void 0===l?" ":r(l);return k<=w||""==y?v:((x=d(y,h((c=k-w)/y.length))).length>c&&(x=m(x,0,c)),e?v+x:x+v)}};e.exports={start:x(!1),end:x(!0)}},318:function(e,t,o){var l=o(65);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(l)},319:function(e,t,o){"use strict";o(313)},320:function(e,t,o){var l=o(33),n=o(84),r=o(85),c=o(86),f=o(87),d=l(!1),m=n(r),h=n(c),x=n(f);d.push([e.i,'*,:after,:before{box-sizing:border-box}a,b,blockquote,body,canvas,caption,code,div,em,embed,fieldset,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,label,li,main,nav,object,ol,p,pre,section,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none}img{border-style:none;max-width:100%;height:auto;display:block}html{line-height:1.15;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}input{-webkit-appearance:none;border-radius:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;text-decoration:none;color:#000;display:block}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,select{text-transform:none}button,input{overflow:visible}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}@font-face{font-family:"Neue Helvetica Medium";font-style:normal;font-weight:400;src:local("Neue Helvetica Medium"),url('+m+') format("woff")}@font-face{font-family:"Neue Helvetica Thin";font-style:normal;font-weight:400;src:local("Neue Helvetica Thin"),url('+h+') format("woff")}@font-face{font-family:"Neue Helvetica Condensed Medium";font-style:normal;font-weight:400;src:local("Neue Helvetica Condensed Medium"),url('+x+') format("woff")}.container{width:90%;max-width:1920px;margin:0 auto}.row{display:flex;flex-wrap:wrap}.col{flex:1 0 0%}.col-0{flex:0 0 0%}.col-offset-0{margin-left:0}.col-1{flex:0 0 8.3333333333%}.col-offset-1{margin-left:8.3333333333%}.col-2{flex:0 0 16.6666666667%}.col-offset-2{margin-left:16.6666666667%}.col-3{flex:0 0 25%}.col-offset-3{margin-left:25%}.col-4{flex:0 0 33.3333333333%}.col-offset-4{margin-left:33.3333333333%}.col-5{flex:0 0 41.6666666667%}.col-offset-5{margin-left:41.6666666667%}.col-6{flex:0 0 50%}.col-offset-6{margin-left:50%}.col-7{flex:0 0 58.3333333333%}.col-offset-7{margin-left:58.3333333333%}.col-8{flex:0 0 66.6666666667%}.col-offset-8{margin-left:66.6666666667%}.col-9{flex:0 0 75%}.col-offset-9{margin-left:75%}.col-10{flex:0 0 83.3333333333%}.col-offset-10{margin-left:83.3333333333%}.col-11{flex:0 0 91.6666666667%}.col-offset-11{margin-left:91.6666666667%}.col-12{flex:0 0 100%}.col-offset-12{margin-left:100%}@media screen and (min-width:576px){.col-sm-0{flex:0 0 0%}.col-sm-offset-0{margin-left:0}.col-sm-1{flex:0 0 8.3333333333%}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{flex:0 0 25%}.col-sm-offset-3{margin-left:25%}.col-sm-4{flex:0 0 33.3333333333%}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{flex:0 0 50%}.col-sm-offset-6{margin-left:50%}.col-sm-7{flex:0 0 58.3333333333%}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{flex:0 0 75%}.col-sm-offset-9{margin-left:75%}.col-sm-10{flex:0 0 83.3333333333%}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{flex:0 0 100%}.col-sm-offset-12{margin-left:100%}}@media screen and (min-width:768px){.col-md-0{flex:0 0 0%}.col-md-offset-0{margin-left:0}.col-md-1{flex:0 0 8.3333333333%}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{flex:0 0 25%}.col-md-offset-3{margin-left:25%}.col-md-4{flex:0 0 33.3333333333%}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{flex:0 0 50%}.col-md-offset-6{margin-left:50%}.col-md-7{flex:0 0 58.3333333333%}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{flex:0 0 75%}.col-md-offset-9{margin-left:75%}.col-md-10{flex:0 0 83.3333333333%}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{flex:0 0 100%}.col-md-offset-12{margin-left:100%}}@media screen and (min-width:992px){.col-lg-0{flex:0 0 0%}.col-lg-offset-0{margin-left:0}.col-lg-1{flex:0 0 8.3333333333%}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{flex:0 0 25%}.col-lg-offset-3{margin-left:25%}.col-lg-4{flex:0 0 33.3333333333%}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{flex:0 0 50%}.col-lg-offset-6{margin-left:50%}.col-lg-7{flex:0 0 58.3333333333%}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{flex:0 0 75%}.col-lg-offset-9{margin-left:75%}.col-lg-10{flex:0 0 83.3333333333%}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{flex:0 0 100%}.col-lg-offset-12{margin-left:100%}}@media screen and (min-width:1200px){.col-xl-0{flex:0 0 0%}.col-xl-offset-0{margin-left:0}.col-xl-1{flex:0 0 8.3333333333%}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{flex:0 0 25%}.col-xl-offset-3{margin-left:25%}.col-xl-4{flex:0 0 33.3333333333%}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{flex:0 0 50%}.col-xl-offset-6{margin-left:50%}.col-xl-7{flex:0 0 58.3333333333%}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{flex:0 0 75%}.col-xl-offset-9{margin-left:75%}.col-xl-10{flex:0 0 83.3333333333%}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{flex:0 0 100%}.col-xl-offset-12{margin-left:100%}}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem 1.75rem;font-size:.9rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (min-width:992px){.btn{font-size:.9rem;font-weight:400}}.btn-cta,.btn-font,.btn-primary,.btn-secondary{font-family:"Neue Helvetica thin";font-weight:600;letter-spacing:.1rem}.btn-primary{font-size:.8rem;color:#313131;padding:.7rem 1rem;background:#fff;border:1px solid #707070;max-width:24.5rem;text-align:center}.btn-cta,.btn-secondary{background:#313131;padding:.7rem 8rem;color:#fff;border:none;max-width:24.5rem;text-align:center}@media screen and (min-width:768px){.btn-cta,.btn-secondary{padding:.7rem 2rem}}.btn-secondary{background:#f3eee7;border:1px solid #707070;color:#313131}.sub-title{font-family:"Neue Helvetica thin";font-weight:600;color:#525252;font-size:.6rem;text-transform:uppercase;letter-spacing:.2rem}.title{font-family:"Neue Helvetica Medium";text-transform:capitalize;font-weight:400;font-size:1.2rem}.E-bg{background:#f3eee7}.sticky-book .container .guests select,.sticky-book .container .guests select option,.sticky-book .container .location select,.sticky-book .container .location select option,.text{font-family:"Neue Helvetica thin";font-weight:600;letter-spacing:.07rem;font-size:.7rem;line-height:1.5rem}.center{display:grid;align-items:center;justify-items:center;place-items:center}.link{font-family:"Neue Helvetica thin";font-weight:600;color:#525252;font-size:1rem;position:relative;letter-spacing:.07rem;display:inline-block}.link:after{content:"";position:absolute;font-size:.8rem;top:120%;left:0;height:1px;width:100%;background:#525252}.sticky-book{display:none}@media screen and (min-width:1200px){.sticky-book{z-index:999;display:block;padding:1rem 0;position:fixed;width:100%;border-top:.07143rem solid #d5d1c8;background:#fff;bottom:0;left:0}.sticky-book .container{align-items:center}.sticky-book .container .location select{width:90%;padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}.sticky-book .container .book-stay{display:flex;align-items:center}.sticky-book .container .select-dates .t-datepicker{position:relative}.sticky-book .container .select-dates .t-datepicker .t-datepicker-day{position:absolute;top:-950%}.sticky-book .container .bootstrap-dates{position:relative}.sticky-book .container .bootstrap-dates input{width:90%;padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}.sticky-book .container .guests{padding-left:1rem}.sticky-book .container .guests select{padding:.5rem .2rem;margin-top:.2rem;border:none;border-bottom:1px solid #707070;outline:none}}',""]),e.exports=d}}]);