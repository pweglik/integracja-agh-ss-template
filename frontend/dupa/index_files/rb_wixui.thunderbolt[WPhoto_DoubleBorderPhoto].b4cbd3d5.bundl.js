!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[WPhoto_DoubleBorderPhoto]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[WPhoto_DoubleBorderPhoto]"]=t(require("react")):e["rb_wixui.thunderbolt[WPhoto_DoubleBorderPhoto]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},i={};function n(e){var a=i[e];if(void 0!==a)return a.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){"use strict";n.r(a),n.d(a,{components:function(){return qt}});var e={};n.r(e),n.d(e,{STATIC_MEDIA_URL:function(){return ft},ph:function(){return dt}});var t=n(448),i=n.n(t),r=n(5329);const o=new RegExp("<%= compId %>","g"),c=(e,t)=>e.replace(o,t),s="expandButton",l="zoomButton";var u=e=>{const{skin:t,id:n,uri:a,alt:o,name:s,width:l,height:u,displayMode:h,focalPoint:d,filterEffectSvgUrl:g,quality:p,crop:f,onSizeChange:m,onLoad:_,getPlaceholder:T,containerWidth:I,containerHeight:E,isInFirstFold:L,hasAnimation:A,responsiveImageProps:b,zoomedImageResponsiveOverride:w,encoding:O}=e,y={containerId:n,uri:a||"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",alt:o,name:s,width:l,height:u,displayMode:h,focalPoint:d,quality:p,crop:f,onLoad:_&&(M=a,/(^https?)|(^data)|(^blob)|(^\/\/)/.test(M))?e=>{const{naturalWidth:t,naturalHeight:i}=e.target;t&&i&&(t!==l||i!==u)&&(m(t,i),null==_||_())}:void 0,getPlaceholder:T,containerWidth:I,containerHeight:E,isInFirstFold:L,hasAnimation:A,responsiveImageProps:b,zoomedImageResponsiveOverride:w,encoding:O};var M;const C=g?c(g,n):void 0;return r.createElement(t,i()({},e,{imageProps:y,filterEffectSvgUrl:C}))},h={link:"bWtdXu",image:"xG6Gwj",root:"LE0APo"};function d(e){var t,i,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=d(e[t]))&&(n&&(n+=" "),n+=i);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var g=function(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=d(e))&&(n&&(n+=" "),n+=t);return n};const p=e=>Object.entries(e).reduce(((e,[t,i])=>(t.includes("data-")&&(e[t]=i),e)),{});const f="wixui-",m=(e,...t)=>{const i=[];return e&&i.push(`${f}${e}`),t.forEach((e=>{e&&(i.push(`${f}${e}`),i.push(e))})),i.join(" ")};var _="rYiAuL",T="gSXewE";const I=e=>{const{id:t,children:n,className:a,title:o,onClick:s,onDblClick:l,withOnClickHandler:u,onMouseEnter:h,onMouseLeave:d,filterEffectSvgString:f,filterEffectSvgUrl:m}=e,I=u?_:"",E=m?{style:{"--filter-effect-svg-url":m}}:{},L=f?r.createElement("svg",{id:"svg_"+t,className:T},r.createElement("defs",{dangerouslySetInnerHTML:{__html:c(f,t)}})):null;return r.createElement("div",i()({id:t},p(e),{className:g(a,I),title:o,onClick:s,onDoubleClick:l,onMouseEnter:h,onMouseLeave:d},E),L,n)},E=13,L=27;function A(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}const b=A(32),w=A(E),O=e=>{w(e),b(e)},y=(A(L),{root:"linkElement"}),M=(e,t)=>{const{href:n,role:a,target:o,rel:c,className:s="",children:l,linkPopupId:u,anchorDataId:h,anchorCompId:d,tabIndex:g,dataTestId:f=y.root,title:m,onClick:_,onDoubleClick:T,onMouseEnter:I,onMouseLeave:E,onFocus:L,onFocusCapture:A,onBlurCapture:M,"aria-live":C,"aria-disabled":R,"aria-label":G,"aria-labelledby":S,"aria-pressed":v,"aria-expanded":k,"aria-describedby":P,"aria-haspopup":F,"aria-current":x,dataPreview:N,dataPart:B}=e,H=void 0!==e.activateByKey?e.activateByKey:(e=>e?"SpaceOrEnter":"Space")(u);let Y;switch(H){case"Enter":Y=w;break;case"Space":Y=b;break;case"SpaceOrEnter":Y=O;break;default:Y=void 0}return void 0!==n||u?r.createElement("a",i()({},p(e),{"data-testid":f,"data-popupid":u,"data-anchor":h,"data-anchor-comp-id":d,"data-preview":N,"data-part":B,href:n||void 0,target:o,role:u?"button":a,rel:c,className:s,onKeyDown:Y,"aria-live":C,"aria-disabled":R,"aria-label":G,"aria-labelledby":S,"aria-pressed":v,"aria-expanded":k,"aria-haspopup":F,"aria-describedby":P,"aria-current":x,title:m,onClick:_,onMouseEnter:I,onMouseLeave:E,onDoubleClick:T,onFocus:L,onFocusCapture:A,onBlurCapture:M,ref:t,tabIndex:u?0:g}),l):r.createElement("div",i()({},p(e),{"data-testid":f,"data-preview":N,"data-part":B,className:s,tabIndex:g,"aria-label":G,"aria-labelledby":S,"aria-haspopup":F,"aria-disabled":R,"aria-expanded":k,title:m,role:a,onClick:_,onDoubleClick:T,onMouseEnter:I,onMouseLeave:E,ref:t}),l)};var C=r.forwardRef(M);var R={root:"image"},G="HlRz5e";const S="v1",v=2,k=1920,P=1920,F=1e3,x=1e3,N={SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},B={FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},H={CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},Y={[H.CENTER]:{x:.5,y:.5},[H.TOP_LEFT]:{x:0,y:0},[H.TOP_RIGHT]:{x:1,y:0},[H.TOP]:{x:.5,y:0},[H.BOTTOM_LEFT]:{x:0,y:1},[H.BOTTOM_RIGHT]:{x:1,y:1},[H.BOTTOM]:{x:.5,y:1},[H.RIGHT]:{x:1,y:.5},[H.LEFT]:{x:0,y:.5}},U={center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},D={BG:"bg",IMG:"img",SVG:"svg"},$={AUTO:"auto",CLASSIC:"classic",SUPER:"super"},z={classic:1,super:2},j={radius:"0.66",amount:"1.00",threshold:"0.01"},V={uri:"",css:{img:{},container:{}},attr:{img:{},container:{}},transformed:!1},W=25e6,Z=[1.5,2,4],q={HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},J={HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},X={CONTRAST:"contrast",BRIGHTNESS:"brightness",SATURATION:"saturation",HUE:"hue",BLUR:"blur"},K={JPG:"jpg",JPEG:"jpeg",JPE:"jpe",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",AVIF:"avif",UNRECOGNIZED:"unrecognized"},Q={AVIF:"AVIF",PAVIF:"PAVIF"};K.JPG,K.JPEG,K.JPE,K.PNG,K.GIF,K.WEBP;function ee(e,...t){return function(...i){const n=i[i.length-1]||{},a=[e[0]];return t.forEach((function(t,r){const o=Number.isInteger(t)?i[t]:n[t];a.push(o,e[r+1])})),a.join("")}}function te(e){return e[e.length-1]}const ie=[K.PNG,K.JPEG,K.JPG,K.JPE,K.WIX_ICO_MP,K.WIX_MP,K.WEBP,K.AVIF],ne=[K.JPEG,K.JPG,K.JPE];function ae(e,t,i){return i&&t&&!(!(n=t.id)||!n.trim()||"none"===n.toLowerCase())&&Object.values(N).includes(e);var n}function re(e,t,i){return function(e,t,i=!1){return!((ce(e)||le(e))&&t&&!i)}(e,t,i)&&(function(e){return ie.includes(pe(e))}(e)||function(e,t=!1){return se(e)&&t}(e,i))&&!/(^https?)|(^data)|(^\/\/)/.test(e)}function oe(e){return pe(e)===K.PNG}function ce(e){return pe(e)===K.WEBP}function se(e){return pe(e)===K.GIF}function le(e){return pe(e)===K.AVIF}const ue=["/","\\","?","<",">","|","\u201c",":",'"'].map(encodeURIComponent),he=["\\.","\\*"],de="_";function ge(e){return function(e){return ne.includes(pe(e))}(e)?K.JPG:oe(e)?K.PNG:ce(e)?K.WEBP:se(e)?K.GIF:le(e)?K.AVIF:K.UNRECOGNIZED}function pe(e){return(/[.]([^.]+)$/.exec(e)&&/[.]([^.]+)$/.exec(e)[1]||"").toLowerCase()}function fe(e,t,i,n,a){let r;return r=a===B.FILL?function(e,t,i,n){return Math.max(i/e,n/t)}(e,t,i,n):a===B.FIT?function(e,t,i,n){return Math.min(i/e,n/t)}(e,t,i,n):1,r}function me(e,t,i,n,a,r){e=e||n.width,t=t||n.height;const{scaleFactor:o,width:c,height:s}=function(e,t,i,n,a){let r,o=i,c=n;if(r=fe(e,t,i,n,a),a===B.FIT&&(o=e*r,c=t*r),o&&c&&o*c>W){const i=Math.sqrt(W/(o*c));o*=i,c*=i,r=fe(e,t,o,c,a)}return{scaleFactor:r,width:o,height:c}}(e,t,n.width*a,n.height*a,i);return function(e,t,i,n,a,r,o){const{optimizedScaleFactor:c,upscaleMethodValue:s,forceUSM:l}=function(e,t,i,n){if("auto"===n)return function(e,t){const i=Ee(e,t);return{optimizedScaleFactor:q[i].maxUpscale,upscaleMethodValue:z.classic,forceUSM:!1}}(e,t);if("super"===n)return function(e){return{optimizedScaleFactor:te(Z),upscaleMethodValue:z.super,forceUSM:!(Z.includes(e)||e>te(Z))}}(i);return function(e,t){const i=Ee(e,t);return{optimizedScaleFactor:q[i].maxUpscale,upscaleMethodValue:z.classic,forceUSM:!1}}(e,t)}(e,t,r,a);let u=i,h=n;if(r<=c)return{width:u,height:h,scaleFactor:r,upscaleMethodValue:s,forceUSM:l,cssUpscaleNeeded:!1};switch(o){case B.FILL:u=i*(c/r),h=n*(c/r);break;case B.FIT:u=e*c,h=t*c}return{width:u,height:h,scaleFactor:c,upscaleMethodValue:s,forceUSM:l,cssUpscaleNeeded:!0}}(e,t,c,s,r,o,i)}function _e(e,t,i,n){const a=Ie(i)||function(e=H.CENTER){return Y[e]}(n);return{x:Math.max(0,Math.min(e.width-t.width,a.x*e.width-t.width/2)),y:Math.max(0,Math.min(e.height-t.height,a.y*e.height-t.height/2)),width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}}function Te(e){return e.alignment&&U[e.alignment]||U[H.CENTER]}function Ie(e){let t;return!e||"number"!=typeof e.x||isNaN(e.x)||"number"!=typeof e.y||isNaN(e.y)||(t={x:Le(Math.max(0,Math.min(100,e.x))/100,2),y:Le(Math.max(0,Math.min(100,e.y))/100,2)}),t}function Ee(e,t){const i=e*t;return i>q[J.HIGH].size?J.HIGH:i>q[J.MEDIUM].size?J.MEDIUM:i>q[J.LOW].size?J.LOW:J.TINY}function Le(e,t){const i=Math.pow(10,t||0);return(e*i/i).toFixed(t)}function Ae(e){return e&&e.upscaleMethod&&$[e.upscaleMethod.toUpperCase()]||$.AUTO}function be(e,t){const i=ce(e)||le(e);return pe(e)===K.GIF||i&&t}const we={isMobile:!1},Oe=function(e){return we[e]};function ye(){if("undefined"!=typeof window&&"undefined"!=typeof navigator){const t=window.matchMedia&&window.matchMedia("(max-width: 767px)").matches,i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e=t&&i,we["isMobile"]=e}var e}function Me(e,t){const i={css:{container:{}}},{css:n}=i,{fittingType:a}=e;switch(a){case N.ORIGINAL_SIZE:case N.LEGACY_ORIGINAL_SIZE:case N.LEGACY_STRIP_ORIGINAL_SIZE:n.container.backgroundSize="auto",n.container.backgroundRepeat="no-repeat";break;case N.SCALE_TO_FIT:case N.LEGACY_STRIP_SCALE_TO_FIT:n.container.backgroundSize="contain",n.container.backgroundRepeat="no-repeat";break;case N.STRETCH:n.container.backgroundSize="100% 100%",n.container.backgroundRepeat="no-repeat";break;case N.SCALE_TO_FILL:case N.LEGACY_STRIP_SCALE_TO_FILL:n.container.backgroundSize="cover",n.container.backgroundRepeat="no-repeat";break;case N.TILE_HORIZONTAL:case N.LEGACY_STRIP_TILE_HORIZONTAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-x";break;case N.TILE_VERTICAL:case N.LEGACY_STRIP_TILE_VERTICAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-y";break;case N.TILE:case N.LEGACY_STRIP_TILE:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat";break;case N.LEGACY_STRIP_FIT_AND_TILE:n.container.backgroundSize="contain",n.container.backgroundRepeat="repeat";break;case N.FIT_AND_TILE:case N.LEGACY_BG_FIT_AND_TILE:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat";break;case N.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-x";break;case N.LEGACY_BG_FIT_AND_TILE_VERTICAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="repeat-y";break;case N.LEGACY_BG_NORMAL:n.container.backgroundSize="auto",n.container.backgroundRepeat="no-repeat"}switch(t.alignment){case H.CENTER:n.container.backgroundPosition="center center";break;case H.LEFT:n.container.backgroundPosition="left center";break;case H.RIGHT:n.container.backgroundPosition="right center";break;case H.TOP:n.container.backgroundPosition="center top";break;case H.BOTTOM:n.container.backgroundPosition="center bottom";break;case H.TOP_RIGHT:n.container.backgroundPosition="right top";break;case H.TOP_LEFT:n.container.backgroundPosition="left top";break;case H.BOTTOM_RIGHT:n.container.backgroundPosition="right bottom";break;case H.BOTTOM_LEFT:n.container.backgroundPosition="left bottom"}return i}const Ce={[H.CENTER]:"center",[H.TOP]:"top",[H.TOP_LEFT]:"top left",[H.TOP_RIGHT]:"top right",[H.BOTTOM]:"bottom",[H.BOTTOM_LEFT]:"bottom left",[H.BOTTOM_RIGHT]:"bottom right",[H.LEFT]:"left",[H.RIGHT]:"right"},Re={position:"absolute",top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ge(e,t){const i={css:{container:{},img:{}}},{css:n}=i,{fittingType:a}=e,r=t.alignment;switch(n.container.position="relative",a){case N.ORIGINAL_SIZE:case N.LEGACY_ORIGINAL_SIZE:e.parts&&e.parts.length?(n.img.width=e.parts[0].width,n.img.height=e.parts[0].height):(n.img.width=e.src.width,n.img.height=e.src.height);break;case N.SCALE_TO_FIT:case N.LEGACY_FIT_WIDTH:case N.LEGACY_FIT_HEIGHT:case N.LEGACY_FULL:n.img.width=t.width,n.img.height=t.height,n.img.objectFit="contain",n.img.objectPosition=Ce[r]||"unset";break;case N.LEGACY_BG_NORMAL:n.img.width="100%",n.img.height="100%",n.img.objectFit="none",n.img.objectPosition=Ce[r]||"unset";break;case N.STRETCH:n.img.width=t.width,n.img.height=t.height,n.img.objectFit="fill";break;case N.SCALE_TO_FILL:n.img.width=t.width,n.img.height=t.height,n.img.objectFit="cover"}if("number"==typeof n.img.width&&"number"==typeof n.img.height&&(n.img.width!==t.width||n.img.height!==t.height)){const e=Math.round((t.height-n.img.height)/2),i=Math.round((t.width-n.img.width)/2);Object.assign(n.img,Re,function(e,t,i){return{[H.TOP_LEFT]:{top:0,left:0},[H.TOP_RIGHT]:{top:0,right:0},[H.TOP]:{top:0,left:t},[H.BOTTOM_LEFT]:{bottom:0,left:0},[H.BOTTOM_RIGHT]:{bottom:0,right:0},[H.BOTTOM]:{bottom:0,left:t},[H.RIGHT]:{top:e,right:0},[H.LEFT]:{top:e,left:0},[H.CENTER]:{width:i.width,height:i.height,objectFit:"none"}}}(e,i,t)[r])}return i}function Se(e,t){const i={css:{container:{}},attr:{container:{},img:{}}},{css:n,attr:a}=i,{fittingType:r}=e,o=t.alignment,{width:c,height:s}=e.src;let l;switch(n.container.position="relative",r){case N.ORIGINAL_SIZE:case N.LEGACY_ORIGINAL_SIZE:case N.TILE:e.parts&&e.parts.length?(a.img.width=e.parts[0].width,a.img.height=e.parts[0].height):(a.img.width=c,a.img.height=s),a.img.preserveAspectRatio="xMidYMid slice";break;case N.SCALE_TO_FIT:case N.LEGACY_FIT_WIDTH:case N.LEGACY_FIT_HEIGHT:case N.LEGACY_FULL:a.img.width="100%",a.img.height="100%",a.img.transform="",a.img.preserveAspectRatio="";break;case N.STRETCH:a.img.width=t.width,a.img.height=t.height,a.img.x=0,a.img.y=0,a.img.transform="",a.img.preserveAspectRatio="none";break;case N.SCALE_TO_FILL:re(e.src.id)?(a.img.width=t.width,a.img.height=t.height):(l=function(e,t,i,n,a){const r=fe(e,t,i,n,a);return{width:Math.round(e*r),height:Math.round(t*r)}}(c,s,t.width,t.height,B.FILL),a.img.width=l.width,a.img.height=l.height),a.img.x=0,a.img.y=0,a.img.transform="",a.img.preserveAspectRatio="xMidYMid slice"}if("number"==typeof a.img.width&&"number"==typeof a.img.height&&(a.img.width!==t.width||a.img.height!==t.height)){let e,i,n=0,c=0;r===N.TILE?(e=t.width%a.img.width,i=t.height%a.img.height):(e=t.width-a.img.width,i=t.height-a.img.height);const s=Math.round(e/2),l=Math.round(i/2);switch(o){case H.TOP_LEFT:n=0,c=0;break;case H.TOP:n=s,c=0;break;case H.TOP_RIGHT:n=e,c=0;break;case H.LEFT:n=0,c=l;break;case H.CENTER:n=s,c=l;break;case H.RIGHT:n=e,c=l;break;case H.BOTTOM_LEFT:n=0,c=i;break;case H.BOTTOM:n=s,c=i;break;case H.BOTTOM_RIGHT:n=e,c=i}a.img.x=n,a.img.y=c}return a.container.width=t.width,a.container.height=t.height,a.container.viewBox=[0,0,t.width,t.height].join(" "),i}function ve(e,t,i){let n;switch(t.crop&&(n=function(e,t){const i=Math.max(0,Math.min(e.width,t.x+t.width)-Math.max(0,t.x)),n=Math.max(0,Math.min(e.height,t.y+t.height)-Math.max(0,t.y));return i&&n&&(e.width!==i||e.height!==n)?{x:Math.max(0,t.x),y:Math.max(0,t.y),width:i,height:n}:null}(t,t.crop),n&&(e.src.width=n.width,e.src.height=n.height,e.src.isCropped=!0,e.parts.push(Pe(n)))),e.fittingType){case N.SCALE_TO_FIT:case N.LEGACY_FIT_WIDTH:case N.LEGACY_FIT_HEIGHT:case N.LEGACY_FULL:case N.FIT_AND_TILE:case N.LEGACY_BG_FIT_AND_TILE:case N.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case N.LEGACY_BG_FIT_AND_TILE_VERTICAL:case N.LEGACY_BG_NORMAL:e.parts.push(ke(e,i));break;case N.SCALE_TO_FILL:e.parts.push(function(e,t){const i=me(e.src.width,e.src.height,B.FILL,t,e.devicePixelRatio,e.upscaleMethod),n=Ie(e.focalPoint);return{transformType:n?B.FILL_FOCAL:B.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:Te(t),focalPointX:n&&n.x,focalPointY:n&&n.y,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}(e,i));break;case N.STRETCH:e.parts.push(function(e,t){const i=fe(e.src.width,e.src.height,t.width,t.height,B.FILL),n={...t};return n.width=e.src.width*i,n.height=e.src.height*i,ke(e,n)}(e,i));break;case N.TILE_HORIZONTAL:case N.TILE_VERTICAL:case N.TILE:case N.LEGACY_ORIGINAL_SIZE:case N.ORIGINAL_SIZE:n=_e(e.src,i,e.focalPoint,i.alignment),e.src.isCropped?(Object.assign(e.parts[0],n),e.src.width=n.width,e.src.height=n.height):e.parts.push(Pe(n));break;case N.LEGACY_STRIP_TILE_HORIZONTAL:case N.LEGACY_STRIP_TILE_VERTICAL:case N.LEGACY_STRIP_TILE:case N.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push(function(e){return{transformType:B.LEGACY_CROP,width:Math.round(e.width),height:Math.round(e.height),alignment:Te(e),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case N.LEGACY_STRIP_SCALE_TO_FIT:case N.LEGACY_STRIP_FIT_AND_TILE:e.parts.push(function(e){return{transformType:B.FIT,width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case N.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push(function(e){return{transformType:B.LEGACY_FILL,width:Math.round(e.width),height:Math.round(e.height),alignment:Te(e),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i))}}function ke(e,t){const i=me(e.src.width,e.src.height,B.FIT,t,e.devicePixelRatio,e.upscaleMethod);return{transformType:!e.src.width||!e.src.height?B.FIT:B.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:U.center,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}function Pe(e){return{transformType:B.CROP,x:Math.round(e.x),y:Math.round(e.y),width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}function Fe(e,t){t=t||{},e.quality=function(e,t){const i=e.fileType===K.PNG,n=e.fileType===K.JPG,a=e.fileType===K.WEBP,r=e.fileType===K.AVIF,o=n||i||a||r;if(o){const n=te(e.parts),a=(c=n.width,s=n.height,q[Ee(c,s)].quality);let r=t.quality&&t.quality>=5&&t.quality<=90?t.quality:a;return r=i?r+5:r,r}var c,s;return 0}(e,t),e.progressive=function(e){return!1!==e.progressive}(t),e.watermark=function(e){return e.watermark}(t),e.autoEncode=t.autoEncode??!0,e.encoding=t?.encoding,e.unsharpMask=function(e,t){if(function(e){const t="number"==typeof(e=e||{}).radius&&!isNaN(e.radius)&&e.radius>=.1&&e.radius<=500,i="number"==typeof e.amount&&!isNaN(e.amount)&&e.amount>=0&&e.amount<=10,n="number"==typeof e.threshold&&!isNaN(e.threshold)&&e.threshold>=0&&e.threshold<=255;return t&&i&&n}(t.unsharpMask))return{radius:Le(t.unsharpMask?.radius,2),amount:Le(t.unsharpMask?.amount,2),threshold:Le(t.unsharpMask?.threshold,2)};if(("number"!=typeof(i=(i=t.unsharpMask)||{}).radius||isNaN(i.radius)||0!==i.radius||"number"!=typeof i.amount||isNaN(i.amount)||0!==i.amount||"number"!=typeof i.threshold||isNaN(i.threshold)||0!==i.threshold)&&function(e){const t=te(e.parts);return!(t.scaleFactor>=1)||t.forceUSM||t.transformType===B.FIT}(e))return j;var i;return}(e,t),e.filters=function(e){const t=e.filters||{},i={};xe(t[X.CONTRAST],-100,100)&&(i[X.CONTRAST]=t[X.CONTRAST]);xe(t[X.BRIGHTNESS],-100,100)&&(i[X.BRIGHTNESS]=t[X.BRIGHTNESS]);xe(t[X.SATURATION],-100,100)&&(i[X.SATURATION]=t[X.SATURATION]);xe(t[X.HUE],-180,180)&&(i[X.HUE]=t[X.HUE]);xe(t[X.BLUR],0,100)&&(i[X.BLUR]=t[X.BLUR]);return i}(t)}function xe(e,t,i){return"number"==typeof e&&!isNaN(e)&&0!==e&&e>=t&&e<=i}function Ne(e,t,i,n){const a=function(e){return e?.isSEOBot??!1}(n),r=ge(t.id),o=function(e,t){const i=/\.([^.]*)$/,n=new RegExp(`(${ue.concat(he).join("|")})`,"g");if(t&&t.length){let e=t;const a=t.match(i);return a&&ie.includes(a[1])&&(e=t.replace(i,"")),encodeURIComponent(e).replace(n,de)}const a=e.match(/\/(.*?)$/);return(a?a[1]:e).replace(i,"")}(t.id,t.name),c=a?1:function(e){return Math.min(e.pixelAspectRatio||1,v)}(i),s=pe(t.id),l=s,u=re(t.id,n?.hasAnimation,n?.allowAnimatedTransform),h={fileName:o,fileExtension:s,fileType:r,fittingType:e,preferredExtension:l,src:{id:t.id,width:t.width,height:t.height,isCropped:!1,isAnimated:be(t.id,n?.hasAnimation)},focalPoint:{x:t.focalPoint&&t.focalPoint.x,y:t.focalPoint&&t.focalPoint.y},parts:[],devicePixelRatio:c,quality:0,upscaleMethod:Ae(n),progressive:!0,watermark:"",unsharpMask:{},filters:{},transformed:u};return u&&(ve(h,t,i),Fe(h,n)),h}function Be(e,t,i){const n={...i},a=Oe("isMobile");switch(e){case N.LEGACY_BG_FIT_AND_TILE:case N.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case N.LEGACY_BG_FIT_AND_TILE_VERTICAL:case N.LEGACY_BG_NORMAL:const e=a?F:k,i=a?x:P;n.width=Math.min(e,t.width),n.height=Math.min(i,Math.round(n.width/(t.width/t.height))),n.pixelAspectRatio=1}return n}const He=ee`fit/w_${"width"},h_${"height"}`,Ye=ee`fill/w_${"width"},h_${"height"},al_${"alignment"}`,Ue=ee`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_${"focalPointY"}`,De=ee`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,$e=ee`crop/w_${"width"},h_${"height"},al_${"alignment"}`,ze=ee`fill/w_${"width"},h_${"height"},al_${"alignment"}`,je=ee`,lg_${"upscaleMethodValue"}`,Ve=ee`,q_${"quality"}`,We=ee`,quality_auto`,Ze=ee`,usm_${"radius"}_${"amount"}_${"threshold"}`,qe=ee`,bl`,Je=ee`,wm_${"watermark"}`,Xe={[X.CONTRAST]:ee`,con_${"contrast"}`,[X.BRIGHTNESS]:ee`,br_${"brightness"}`,[X.SATURATION]:ee`,sat_${"saturation"}`,[X.HUE]:ee`,hue_${"hue"}`,[X.BLUR]:ee`,blur_${"blur"}`},Ke=ee`,enc_auto`,Qe=ee`,enc_avif`,et=ee`,enc_pavif`,tt=ee`,pstr`;function it(e,t,i,n={},a){if(re(t.id,n?.hasAnimation,n?.allowAnimatedTransform)){if(ce(t.id)||le(t.id)){const{alignment:r,...o}=i;t.focalPoint={x:void 0,y:void 0},delete t?.crop,a=Ne(e,t,o,n)}else a=a||Ne(e,t,i,n);return function(e){const t=[];e.parts.forEach((e=>{switch(e.transformType){case B.CROP:t.push(De(e));break;case B.LEGACY_CROP:t.push($e(e));break;case B.LEGACY_FILL:let i=ze(e);e.upscale&&(i+=je(e)),t.push(i);break;case B.FIT:let n=He(e);e.upscale&&(n+=je(e)),t.push(n);break;case B.FILL:let a=Ye(e);e.upscale&&(a+=je(e)),t.push(a);break;case B.FILL_FOCAL:let r=Ue(e);e.upscale&&(r+=je(e)),t.push(r)}}));let i=t.join("/");return e.quality&&(i+=Ve(e)),e.unsharpMask&&(i+=Ze(e.unsharpMask)),e.progressive||(i+=qe(e)),e.watermark&&(i+=Je(e)),e.filters&&(i+=Object.keys(e.filters).map((t=>Xe[t](e.filters))).join("")),e.fileType!==K.GIF&&(e.encoding===Q.AVIF?(i+=Qe(e),i+=We(e)):e.encoding===Q.PAVIF?(i+=et(e),i+=We(e)):e.autoEncode&&(i+=Ke(e))),e.src?.isAnimated&&e.transformed&&(i+=tt(e)),`${e.src.id}/${S}/${i}/${e.fileName}.${e.preferredExtension}`}(a)}return t.id}const nt={[H.CENTER]:"50% 50%",[H.TOP_LEFT]:"0% 0%",[H.TOP_RIGHT]:"100% 0%",[H.TOP]:"50% 0%",[H.BOTTOM_LEFT]:"0% 100%",[H.BOTTOM_RIGHT]:"100% 100%",[H.BOTTOM]:"50% 100%",[H.RIGHT]:"100% 50%",[H.LEFT]:"0% 50%"},at=Object.entries(nt).reduce(((e,[t,i])=>(e[i]=t,e)),{}),rt=[N.TILE,N.TILE_HORIZONTAL,N.TILE_VERTICAL,N.LEGACY_BG_FIT_AND_TILE,N.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,N.LEGACY_BG_FIT_AND_TILE_VERTICAL],ot=[N.LEGACY_ORIGINAL_SIZE,N.ORIGINAL_SIZE,N.LEGACY_BG_NORMAL];function ct(e,t,{width:i,height:n}){return e===N.TILE&&t.width>i&&t.height>n}function st(e,{width:t,height:i}){if(!t||!i){const n=t||Math.min(980,e.width),a=n/e.width;return{width:n,height:i||e.height*a}}return{width:t,height:i}}function lt(e,t,i,n="center"){const a={img:{},container:{}};if(e===N.SCALE_TO_FILL){const e=t.focalPoint&&function(e){const t=`${e.x}% ${e.y}%`;return at[t]||""}(t.focalPoint),r=e||n;t.focalPoint&&!e?a.img={objectPosition:ut(t,i,t.focalPoint)}:a.img={objectPosition:nt[r]}}else[N.LEGACY_ORIGINAL_SIZE,N.ORIGINAL_SIZE].includes(e)?a.img={objectFit:"none",top:"auto",left:"auto",right:"auto",bottom:"auto"}:rt.includes(e)&&(a.container={backgroundSize:`${t.width}px ${t.height}px`});return a}function ut(e,t,i){const{width:n,height:a}=e,{width:r,height:o}=t,{x:c,y:s}=i;if(!r||!o)return`${c}% ${s}%`;const l=Math.max(r/n,o/a),u=n*l,h=a*l,d=Math.max(0,Math.min(u-r,u*(c/100)-r/2)),g=Math.max(0,Math.min(h-o,h*(s/100)-o/2));return`${d&&Math.floor(d/(u-r)*100)}% ${g&&Math.floor(g/(h-o)*100)}%`}const ht={width:"100%",height:"100%"};function dt(e,t,i,n={}){const{autoEncode:a=!0,isSEOBot:r,shouldLoadHQImage:o,hasAnimation:c,allowAnimatedTransform:s,encoding:l}=n;if(!ae(e,t,i))return V;const u=void 0===s||s,h=re(t.id,c,u);if(!h||o)return gt(e,t,i,{...n,autoEncode:a,useSrcset:h});const d={...i,...st(t,i)},{alignment:g,htmlTag:p}=d,f=ct(e,t,d),m=function(e,t,{width:i,height:n},a=!1){if(a)return{width:i,height:n};const r=!ot.includes(e),o=ct(e,t,{width:i,height:n}),c=!o&&rt.includes(e),s=c?t.width:i,l=c?t.height:n,u=r?function(e,t){return e>900?t?.05:.15:e>500?t?.1:.18:e>200?.25:1}(s,oe(t.id)):1;return{width:o?1920:s*u,height:l*u}}(e,t,d,r),_=function(e,t,i){return i?0:rt.includes(t)?1:e>200?2:3}(d.width,e,r),T=function(e,t){const i=rt.includes(e)&&!t;return e===N.SCALE_TO_FILL||i?N.SCALE_TO_FIT:e}(e,f),I=lt(e,t,i,g),{uri:E}=gt(T,t,{...m,alignment:g,htmlTag:p},{autoEncode:a,filters:_?{blur:_}:{},hasAnimation:c,allowAnimatedTransform:u,encoding:l}),{attr:L={},css:A}=gt(e,t,{...d,alignment:g,htmlTag:p},{});return A.img=A.img||{},A.container=A.container||{},Object.assign(A.img,I.img,ht),Object.assign(A.container,I.container),{uri:E,css:A,attr:L,transformed:!0}}function gt(e,t,i,n){let a={};if(ae(e,t,i)){const r=Be(e,t,i),o=Ne(e,t,r,n);a.uri=it(e,t,r,n,o),n?.useSrcset&&(a.srcset=function(e,t,i,n,a){const r=i.pixelAspectRatio||1;return{dpr:[`${1===r?a.uri:it(e,t,{...i,pixelAspectRatio:1},n)} 1x`,`${2===r?a.uri:it(e,t,{...i,pixelAspectRatio:2},n)} 2x`]}}(e,t,r,n,a)),Object.assign(a,function(e,t){let i;return i=t.htmlTag===D.BG?Me:t.htmlTag===D.SVG?Se:Ge,i(e,t)}(o,r),{transformed:o.transformed})}else a=V;return a}const pt="https://static.wixstatic.com/media/";"undefined"!=typeof window&&window.devicePixelRatio;ye();ye();const ft=pt,{STATIC_MEDIA_URL:mt}=e,_t=({fittingType:e,src:t,target:i,options:n})=>{const a=dt(e,t,i,{...n,autoEncode:!0});return a?.uri&&!/^[a-z]+:/.test(a.uri)&&(a.uri=`${mt}${a.uri}`),a},Tt=/^[a-z]+:/,It=e=>{const{id:t,containerId:i,uri:n,alt:a,name:o="",role:c,width:s,height:l,displayMode:u,devicePixelRatio:h,quality:d,alignType:g,bgEffectName:p="",focalPoint:f,upscaleMethod:m,className:_="",crop:T,imageStyles:I={},targetWidth:E,targetHeight:L,targetScale:A,onLoad:b=(()=>{}),onError:w=(()=>{}),shouldUseLQIP:O,containerWidth:y,containerHeight:M,getPlaceholder:C,isInFirstFold:R,placeholderTransition:S,socialAttrs:v,isSEOBot:k,skipMeasure:P,hasAnimation:F,encoding:x}=e,N=r.useRef(null);let B="";const H="blur"===S,Y=r.useRef(null);if(!Y.current)if(C||O||R||k){const e={upscaleMethod:m,...d||{},shouldLoadHQImage:R,isSEOBot:k,hasAnimation:F,encoding:x};Y.current=(C||_t)({fittingType:u,src:{id:n,width:s,height:l,crop:T,name:o,focalPoint:f},target:{width:y,height:M,alignment:g,htmlTag:"img"},options:e}),B=!Y.current.transformed||R||k?"":"true"}else Y.current={uri:void 0,css:{img:{}},attr:{img:{},container:{}},transformed:!1};const U=!k&&(C||O)&&!R&&Y.current.transformed,D=r.useMemo((()=>JSON.stringify({containerId:i,...i&&{containerId:i},...g&&{alignType:g},...P&&{skipMeasure:!0},displayMode:u,...y&&{targetWidth:y},...M&&{targetHeight:M},...E&&{targetWidth:E},...L&&{targetHeight:L},...A&&{targetScale:A},isLQIP:U,isSEOBot:k,lqipTransition:S,encoding:x,imageData:{width:s,height:l,uri:n,name:o,displayMode:u,hasAnimation:F,...d&&{quality:d},...h&&{devicePixelRatio:h},...f&&{focalPoint:f},...T&&{crop:T},...m&&{upscaleMethod:m}}})),[i,g,P,u,y,M,E,L,A,U,k,S,x,s,l,n,o,F,d,h,f,T,m]),$=Y.current,z=$?.uri,j=$?.srcset,V=$.css?.img,W=`${G} ${_}`;r.useEffect((()=>{const e=N.current;b&&e?.currentSrc&&e?.complete&&b({target:e})}),[]);const Z=$&&!$?.transformed?`max(${s}px, 100%)`:E?`${E}px`:null;return r.createElement("wow-image",{id:t,class:W,"data-image-info":D,"data-motion-part":`BG_IMG ${i}`,"data-bg-effect-name":p,"data-has-ssr-src":B,"data-animate-blur":!k&&U&&H?"":void 0,style:Z?{"--wix-img-max-width":Z}:{}},r.createElement("img",{src:z,ref:N,alt:a||"",role:c,style:{...V,...I},onLoad:b,onError:w,width:y||void 0,height:M||void 0,...v,srcSet:R?j?.dpr?.map((e=>Tt.test(e)?e:`${mt}${e}`)).join(", "):void 0,fetchpriority:R?"high":void 0,loading:!1===R?"lazy":void 0,suppressHydrationWarning:!0}))};var Et="I5zqsT";var Lt,At,bt,wt=e=>{var t,n;const{id:a,alt:o,role:c,className:s,imageStyles:l={},targetWidth:u,targetHeight:h,onLoad:d,onError:p,containerWidth:f,containerHeight:m,isInFirstFold:_,socialAttrs:T,skipMeasure:I,responsiveImageProps:E,zoomedImageResponsiveOverride:L}=e,A=u||f,b=h||m,w=A+"px",{fallbackSrc:O,srcset:y,css:M}=E||{};return O&&y&&M?r.createElement("img",i()({fetchpriority:_?"high":void 0,loading:!1===_?"lazy":void 0,sizes:w,srcSet:I?null==L?void 0:L.srcset:null==E?void 0:E.srcset,id:a,src:O,alt:o||"",role:c,style:{...l,...I?{...null==L||null==(t=L.css)?void 0:t.img}:{...null==E||null==(n=E.css)?void 0:n.img}},onLoad:d,onError:p,className:g(s,Et),width:A,height:b},T)):r.createElement(It,e)},Ot="nTOEE9",yt="sqUyGm",Mt="C_JY0G",Ct="RZQnmg";function Rt(){return Rt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},Rt.apply(this,arguments)}var Gt=function(e){return r.createElement("svg",Rt({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Lt||(Lt=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.611 22.389A5.464 5.464 0 0 1 14 18.5c0-1.468.572-2.849 1.611-3.888A5.465 5.465 0 0 1 19.5 13c1.469 0 2.85.573 3.889 1.612A5.463 5.463 0 0 1 25 18.5c0 1.469-.572 2.85-1.611 3.889A5.464 5.464 0 0 1 19.5 24a5.464 5.464 0 0 1-3.889-1.611Zm13.392 4.907-4.57-4.571A6.446 6.446 0 0 0 26 18.5a6.453 6.453 0 0 0-1.904-4.595A6.456 6.456 0 0 0 19.5 12a6.458 6.458 0 0 0-4.596 1.905A6.453 6.453 0 0 0 13 18.5c0 1.737.676 3.368 1.904 4.596A6.457 6.457 0 0 0 19.5 25a6.446 6.446 0 0 0 4.226-1.568l4.57 4.571.707-.707Z",fill:"#000624"})),At||(At=r.createElement("path",{fill:"#000",d:"M19 16h1v5h-1z"})),bt||(bt=r.createElement("path",{fill:"#000",d:"M17 19v-1h5v1z"})))};const St=(e,t,i)=>{t(!e),e||i({x:0,y:0})};let vt,kt,Pt,Ft=!1;var xt=e=>{const{width:t,height:n,className:a,magnifyKeyboardOperabilityEnabled:o,translations:c,zoomedImageResponsiveOverride:s}=e,[u,h]=r.useState(!1),[d,p]=r.useState({x:0,y:0}),f=r.useRef(null),m=r.useRef(null),[_,T]=r.useState(!1),I=e=>{const t=e.nativeEvent;if(u)h(!1);else if(!u&&t&&"click"===t.type){h(!0);const{offsetX:e,offsetY:i}=L(t.clientX,t.clientY),{x:n,y:a}=E(e,i);p({x:n,y:a})}},E=(e,i)=>{const a=f.current.offsetWidth,r=f.current.offsetHeight;return{x:e/a*(t-a),y:i/r*(n-r)}},L=(e,t)=>{const i=f.current.getBoundingClientRect();return{offsetX:e-i.left,offsetY:t-i.top}},A=()=>{p({x:vt,y:kt}),Ft=!1},b={onMouseLeave:e=>{Pt=setTimeout((()=>I(e)),1200)},onMouseEnter:()=>{clearTimeout(Pt)},onMouseMove:e=>{const t=e.nativeEvent,{offsetX:i,offsetY:n}=L(t.clientX,t.clientY);({x:vt,y:kt}=E(i,n)),Ft||requestAnimationFrame(A),Ft=!0}};let w={};u&&!_?w={transform:"translate(-"+d.x+"px, -"+d.y+"px)",transitionTimingFunction:"ease-out",transitionDuration:"0.2s",willChange:"transform"}:_&&!u&&(w={transform:"translate("+d.x+"px, "+d.y+"px)",transition:"transform 0.3s ease",willChange:"transform"});const O=u?{onClick:I,...b}:{onClick:I},y=u||_?{targetWidth:e.width,targetHeight:e.height,skipMeasure:!0,zoomedImageResponsiveOverride:s}:{skipMeasure:!1};return r.createElement("div",i()({},O,{className:g(Ot,""+(u?Mt:yt)),ref:f,onKeyDown:e=>((e,t,i,n,a)=>{if(!t)return;["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"].includes(e.key)&&e.preventDefault();const r=n.current.getBoundingClientRect(),o=r.width,c=r.height,s=a.width,l=a.height,u=l/20,h=s/20,d=e.key;i((e=>{const{x:t,y:i}=e,n={ArrowUp:{x:t,y:Math.min(i+u,0)},ArrowDown:{x:t,y:Math.max(i-u,c-l)},ArrowLeft:{x:Math.min(t+h,0),y:i},ArrowRight:{x:Math.max(t-h,o-s),y:i}}[d];return null!=n?n:e}))})(e,_,p,f,{width:t,height:n}),onBlur:()=>T(!1),tabIndex:0}),r.createElement(wt,i()({},e,{className:a,imageStyles:w},y)),o&&r.createElement("button",{className:Ct,"data-testid":l,"aria-label":null==c?void 0:c.zoomInButtonAriaLabel,"aria-pressed":_,onClick:()=>St(_,T,p),onKeyDown:e=>((e,t,i)=>{"Enter"===e.key||" "===e.key?(e.preventDefault(),t()):"Escape"===e.key&&i()})(e,(()=>St(_,T,p)),(()=>T(!1))),ref:m},r.createElement(Gt,null)))};var Nt="OJQ_3L";var Bt=e=>{const{skinsStyle:t,id:n,className:a,customClassNames:o=[],link:c,imageProps:l,title:u,onClick:h,hasPlatformClickHandler:d=!1,onClickBehavior:f,onDblClick:_,onMouseEnter:T,onMouseLeave:E,reportBiOnClick:L,filterEffectSvgString:A,filterEffectSvgUrl:b,magnifyKeyboardOperabilityEnabled:w,popupA11yExperimentEnabled:O,translations:y}=e,M="zoomAndPanMode"===f?xt:wt;const G="zoomMode"===f;let S;G&&(S=c);var v;const k=!(!(v=c)||0===Object.keys(v).length&&v.constructor===Object)||d||G,P=(({reportBiOnClick:e,onClick:t})=>(0,r.useCallback)((i=>{e?.(i),t?.(i)}),[e,t]))({onClick:h,reportBiOnClick:L});let F;(k||Boolean(h))&&(F=P);const x=G&&O,N=(e=>{let{onClickBehavior:t,className:i,link:n}=e;const a={className:i};return"zoomMode"===t||"zoomAndPanMode"===t?a:{...n,...a}})({onClickBehavior:f,className:t.link,link:c});return r.createElement(I,i()({id:n},p(e),{className:g(t.root,a,m(R.root,...o)),title:u,onClick:F,onDblClick:_,onMouseEnter:T,onMouseLeave:E,withOnClickHandler:k,filterEffectSvgString:A,filterEffectSvgUrl:b}),r.createElement(C,N,r.createElement(M,i()({id:"img_"+n},l,{className:t.image,magnifyKeyboardOperabilityEnabled:w,translations:y,link:S}))),x&&r.createElement("button",{"data-testid":s,onClick:F,className:Nt,"aria-haspopup":"dialog","aria-label":null==y?void 0:y.expandAriaLabel,"aria-describedby":l.alt?l.containerId:void 0},r.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 4V5H5.5C5.224 5 5 5.225 5 5.5V18.5C5 18.775 5.224 19 5.5 19H18.5C18.776 19 19 18.775 19 18.5V12H20V18.5C20 19.327 19.327 20 18.5 20H5.5C4.673 20 4 19.327 4 18.5V5.5C4 4.673 4.673 4 5.5 4H12ZM20 4V9H19V5.707L12.71 11.997L12.003 11.29L18.293 5H15V4H20Z"}))))};const Ht=e=>r.createElement(Bt,i()({},e,{skinsStyle:h}));var Yt=e=>r.createElement(u,i()({},e,{skin:Ht}));const Ut=e=>e.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`)),Dt=e=>"linkPopupId"in e,$t=(e,t)=>{if(Dt(e))return e.linkPopupId;{const{pagesMap:i,mainPageId:n}=t||{};if(!i)return;const a=new URL(e.href??"");let r=Object.values(i).find((({pageUriSEO:e})=>!!e&&a.pathname?.includes(e)));return r||(r=n?i[n]:void 0),r?.pageId}},zt=e=>{if(void 0!==e)return null===e?"None":e.type},jt=(e,t)=>{if(!e?.type)return;const{type:i}=e;switch(i){case"AnchorLink":return e.anchorDataId;case"DocumentLink":return e.docInfo?.name;case"PageLink":const i=$t(e,t);return i&&t?.pagesMap?.[i]?.title;default:return e.href}},Vt=(e,t,i)=>{const{link:n,value:a,details:r,actionName:o,elementType:c,trackClicksAnalytics:s,pagesMetadata:l,...u}=t;if(!s)return;const h=l&&{...l,pagesMap:window.viewerModel?.siteFeaturesConfigs?.router?.pagesMap},d=((e,t)=>{if(!e?.type)return;const{type:i}=e;switch(i){case"AnchorLink":return(e=>"anchorDataId"in e&&("SCROLL_TO_TOP"===e.anchorDataId||"SCROLL_TO_BOTTOM"===e.anchorDataId))(e)?void 0:{id:e.anchorDataId};case"DocumentLink":return{id:e.docInfo?.docId};case"PageLink":return{id:$t(e,t),isLightbox:Dt(e)};default:return}})(n,h),g=r||d?JSON.stringify({...d,...r}):void 0;e({src:76,evid:1113,...{...u,bl:navigator.language,url:window.location.href,details:g,elementType:c??"Unknown",actionName:o??zt(n),value:a??jt(n,h)}},{endpoint:"pa",...i})};var Wt;!function(e){e.Text="Text",e.Menu="Menu",e.Image="Image",e.Input="Input",e.Login="Login",e.Button="Button",e.Social="Social",e.Gallery="Gallery",e.Community="Community",e.Decorative="Decorative",e.MenuAndSearch="MenuAndSearch",e.MenuAndAnchor="MenuAndAnchor"}(Wt||(Wt={}));var Zt;const qt={WPhoto_DoubleBorderPhoto:{component:Yt,controller:(Zt=e=>{let{controllerUtils:t,mapperProps:i,stateValues:n}=e;const{reportBi:a}=n,{compId:r,language:o,mainPageId:c,fullNameCompType:s,trackClicksAnalytics:l,...u}=i,h=!0===(d=n.experiments)[g="specs.thunderbolt.magnifyKeyboardOperability"]||"true"===d[g]||"new"===d[g];var d,g;return{...u,reportBiOnClick:()=>{const{link:e,title:t,uri:i}=u;Vt(a,{link:e,language:o,trackClicksAnalytics:l,details:{uri:i},element_id:r,elementTitle:t,elementType:s,pagesMetadata:{mainPageId:c},elementGroup:Wt.Image})},onSizeChange:(e,i)=>{t.updateProps({width:e,height:i})},magnifyKeyboardOperabilityEnabled:h}},{useComponentProps:(e,t,i)=>{const n=(e=>({...e,updateStyles:t=>{const i=Object.entries(t).reduce(((e,[t,i])=>{return{...e,[(n=t,n.startsWith("--")?t:Ut(t))]:void 0===i?null:i};var n}),{});e.updateStyles(i)}}))(i);return Zt({mapperProps:e,stateValues:t,controllerUtils:n})}})}}}(),a}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[WPhoto_DoubleBorderPhoto].b4cbd3d5.bundle.min.js.map