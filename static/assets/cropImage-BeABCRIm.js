import{G as R,u as K,j as P,L as J}from"./index-Cx9aHWms.js";import{g as Q,r as y,S as $}from"./antd-bK47dtYc.js";import{a as ee}from"./ProtectedRoutes-BInEfiaw.js";var Z=function(i,r){return Z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},Z(i,r)};function te(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Z(i,r);function e(){this.constructor=i}i.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var v=function(){return v=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},v.apply(this,arguments)};var T,j;function re(){if(j)return T;j=1;var i=!1,r,e,t,o,n,a,s,c,u,h,d,l,C,m,g;function p(){if(!i){i=!0;var w=navigator.userAgent,f=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(w),x=/(Mac OS X)|(Windows)|(Linux)/.exec(w);if(l=/\b(iPhone|iP[ao]d)/.exec(w),C=/\b(iP[ao]d)/.exec(w),h=/Android/i.exec(w),m=/FBAN\/\w+;/i.exec(w),g=/Mobile/i.exec(w),d=!!/Win64/.exec(w),f){r=f[1]?parseFloat(f[1]):f[5]?parseFloat(f[5]):NaN,r&&document&&document.documentMode&&(r=document.documentMode);var D=/(?:Trident\/(\d+.\d+))/.exec(w);a=D?parseFloat(D[1])+4:r,e=f[2]?parseFloat(f[2]):NaN,t=f[3]?parseFloat(f[3]):NaN,o=f[4]?parseFloat(f[4]):NaN,o?(f=/(?:Chrome\/(\d+\.\d+))/.exec(w),n=f&&f[1]?parseFloat(f[1]):NaN):n=NaN}else r=e=t=n=o=NaN;if(x){if(x[1]){var b=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(w);s=b?parseFloat(b[1].replace("_",".")):!0}else s=!1;c=!!x[2],u=!!x[3]}else s=c=u=!1}}var S={ie:function(){return p()||r},ieCompatibilityMode:function(){return p()||a>r},ie64:function(){return S.ie()&&d},firefox:function(){return p()||e},opera:function(){return p()||t},webkit:function(){return p()||o},safari:function(){return S.webkit()},chrome:function(){return p()||n},windows:function(){return p()||c},osx:function(){return p()||s},linux:function(){return p()||u},iphone:function(){return p()||l},mobile:function(){return p()||l||C||h||g},nativeApp:function(){return p()||m},android:function(){return p()||h},ipad:function(){return p()||C}};return T=S,T}var O,H;function oe(){if(H)return O;H=1;var i=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:i,canUseWorkers:typeof Worker<"u",canUseEventListeners:i&&!!(window.addEventListener||window.attachEvent),canUseViewport:i&&!!window.screen,isInWorker:!i};return O=r,O}var N,U;function ne(){if(U)return N;U=1;var i=oe(),r;i.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function e(t,o){if(!i.canUseDOM||o&&!("addEventListener"in document))return!1;var n="on"+t,a=n in document;if(!a){var s=document.createElement("div");s.setAttribute(n,"return;"),a=typeof s[n]=="function"}return!a&&r&&t==="wheel"&&(a=document.implementation.hasFeature("Events.wheel","3.0")),a}return N=e,N}var I,q;function ie(){if(q)return I;q=1;var i=re(),r=ne(),e=10,t=40,o=800;function n(a){var s=0,c=0,u=0,h=0;return"detail"in a&&(c=a.detail),"wheelDelta"in a&&(c=-a.wheelDelta/120),"wheelDeltaY"in a&&(c=-a.wheelDeltaY/120),"wheelDeltaX"in a&&(s=-a.wheelDeltaX/120),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(s=c,c=0),u=s*e,h=c*e,"deltaY"in a&&(h=a.deltaY),"deltaX"in a&&(u=a.deltaX),(u||h)&&a.deltaMode&&(a.deltaMode==1?(u*=t,h*=t):(u*=o,h*=o)),u&&!s&&(s=u<1?-1:1),h&&!c&&(c=h<1?-1:1),{spinX:s,spinY:c,pixelX:u,pixelY:h}}return n.getEventType=function(){return i.firefox()?"DOMMouseScroll":r("wheel")?"wheel":"mousewheel"},I=n,I}var L,G;function ae(){return G||(G=1,L=ie()),L}var se=ae();const ce=Q(se);function ue(i,r,e,t,o,n){n===void 0&&(n=0);var a=_(i,r,n),s=a.width,c=a.height,u=Math.min(s,e),h=Math.min(c,t);return u>h*o?{width:h*o,height:h}:{width:u,height:u/o}}function he(i){return i.width>i.height?i.width/i.naturalWidth:i.height/i.naturalHeight}function z(i,r,e,t,o){o===void 0&&(o=0);var n=_(r.width,r.height,o),a=n.width,s=n.height;return{x:X(i.x,a,e.width,t),y:X(i.y,s,e.height,t)}}function X(i,r,e,t){var o=r*t/2-e/2;return A(i,-o,o)}function Y(i,r){return Math.sqrt(Math.pow(i.y-r.y,2)+Math.pow(i.x-r.x,2))}function B(i,r){return Math.atan2(r.y-i.y,r.x-i.x)*180/Math.PI}function pe(i,r,e,t,o,n,a){n===void 0&&(n=0),a===void 0&&(a=!0);var s=a?de:le,c=_(r.width,r.height,n),u=_(r.naturalWidth,r.naturalHeight,n),h={x:s(100,((c.width-e.width/o)/2-i.x/o)/c.width*100),y:s(100,((c.height-e.height/o)/2-i.y/o)/c.height*100),width:s(100,e.width/c.width*100/o),height:s(100,e.height/c.height*100/o)},d=Math.round(s(u.width,h.width*u.width/100)),l=Math.round(s(u.height,h.height*u.height/100)),C=u.width>=u.height*t,m=C?{width:Math.round(l*t),height:l}:{width:d,height:Math.round(d/t)},g=v(v({},m),{x:Math.round(s(u.width-m.width,h.x*u.width/100)),y:Math.round(s(u.height-m.height,h.y*u.height/100))});return{croppedAreaPercentages:h,croppedAreaPixels:g}}function de(i,r){return Math.min(i,Math.max(0,r))}function le(i,r){return r}function fe(i,r,e,t,o,n){var a=_(r.width,r.height,e),s=A(t.width/a.width*(100/i.width),o,n),c={x:s*a.width/2-t.width/2-a.width*s*(i.x/100),y:s*a.height/2-t.height/2-a.height*s*(i.y/100)};return{crop:c,zoom:s}}function ve(i,r,e){var t=he(r);return e.height>e.width?e.height/(i.height*t):e.width/(i.width*t)}function me(i,r,e,t,o,n){e===void 0&&(e=0);var a=_(r.naturalWidth,r.naturalHeight,e),s=A(ve(i,r,t),o,n),c=t.height>t.width?t.height/i.height:t.width/i.width,u={x:((a.width-i.width)/2-i.x)*c,y:((a.height-i.height)/2-i.y)*c};return{crop:u,zoom:s}}function k(i,r){return{x:(r.x+i.x)/2,y:(r.y+i.y)/2}}function ge(i){return i*Math.PI/180}function _(i,r,e){var t=ge(e);return{width:Math.abs(Math.cos(t)*i)+Math.abs(Math.sin(t)*r),height:Math.abs(Math.sin(t)*i)+Math.abs(Math.cos(t)*r)}}function A(i,r,e){return Math.min(Math.max(i,r),e)}function M(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return i.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var we=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,Ce=1,ye=3,xe=function(i){te(r,i);function r(){var e=i!==null&&i.apply(this,arguments)||this;return e.imageRef=y.createRef(),e.videoRef=y.createRef(),e.containerPosition={x:0,y:0},e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.gestureZoomStart=0,e.gestureRotationStart=0,e.isTouching=!1,e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.currentDoc=typeof document<"u"?document:null,e.currentWindow=typeof window<"u"?window:null,e.resizeObserver=null,e.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},e.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!e.containerRef)){var t=!0;e.resizeObserver=new window.ResizeObserver(function(o){if(t){t=!1;return}e.computeSizes()}),e.resizeObserver.observe(e.containerRef)}},e.preventZoomSafari=function(t){return t.preventDefault()},e.cleanEvents=function(){e.currentDoc&&(e.currentDoc.removeEventListener("mousemove",e.onMouseMove),e.currentDoc.removeEventListener("mouseup",e.onDragStopped),e.currentDoc.removeEventListener("touchmove",e.onTouchMove),e.currentDoc.removeEventListener("touchend",e.onDragStopped),e.currentDoc.removeEventListener("gesturemove",e.onGestureMove),e.currentDoc.removeEventListener("gestureend",e.onGestureEnd),e.currentDoc.removeEventListener("scroll",e.onScroll))},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var t=e.computeSizes();t&&(e.emitCropData(),e.setInitialCrop(t)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(t){if(e.props.initialCroppedAreaPercentages){var o=fe(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),n=o.crop,a=o.zoom;e.props.onCropChange(n),e.props.onZoomChange&&e.props.onZoomChange(a)}else if(e.props.initialCroppedAreaPixels){var s=me(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),n=s.crop,a=s.zoom;e.props.onCropChange(n),e.props.onZoomChange&&e.props.onZoomChange(a)}},e.computeSizes=function(){var t,o,n,a,s,c,u=e.imageRef.current||e.videoRef.current;if(u&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect(),e.saveContainerPosition();var h=e.containerRect.width/e.containerRect.height,d=((t=e.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((o=e.videoRef.current)===null||o===void 0?void 0:o.videoWidth)||0,l=((n=e.imageRef.current)===null||n===void 0?void 0:n.naturalHeight)||((a=e.videoRef.current)===null||a===void 0?void 0:a.videoHeight)||0,C=u.offsetWidth<d||u.offsetHeight<l,m=d/l,g=void 0;if(C)switch(e.state.mediaObjectFit){default:case"contain":g=h>m?{width:e.containerRect.height*m,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/m};break;case"horizontal-cover":g={width:e.containerRect.width,height:e.containerRect.width/m};break;case"vertical-cover":g={width:e.containerRect.height*m,height:e.containerRect.height};break}else g={width:u.offsetWidth,height:u.offsetHeight};e.mediaSize=v(v({},g),{naturalWidth:d,naturalHeight:l}),e.props.setMediaSize&&e.props.setMediaSize(e.mediaSize);var p=e.props.cropSize?e.props.cropSize:ue(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((s=e.state.cropSize)===null||s===void 0?void 0:s.height)!==p.height||((c=e.state.cropSize)===null||c===void 0?void 0:c.width)!==p.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(p),e.setState({cropSize:p},e.recomputeCropPosition),e.props.setCropSize&&e.props.setCropSize(p),p}},e.saveContainerPosition=function(){if(e.containerRef){var t=e.containerRef.getBoundingClientRect();e.containerPosition={x:t.left,y:t.top}}},e.onMouseDown=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("mousemove",e.onMouseMove),e.currentDoc.addEventListener("mouseup",e.onDragStopped),e.saveContainerPosition(),e.onDragStart(r.getMousePoint(t)))},e.onMouseMove=function(t){return e.onDrag(r.getMousePoint(t))},e.onScroll=function(t){e.currentDoc&&(t.preventDefault(),e.saveContainerPosition())},e.onTouchStart=function(t){e.currentDoc&&(e.isTouching=!0,!(e.props.onTouchRequest&&!e.props.onTouchRequest(t))&&(e.currentDoc.addEventListener("touchmove",e.onTouchMove,{passive:!1}),e.currentDoc.addEventListener("touchend",e.onDragStopped),e.saveContainerPosition(),t.touches.length===2?e.onPinchStart(t):t.touches.length===1&&e.onDragStart(r.getTouchPoint(t.touches[0]))))},e.onTouchMove=function(t){t.preventDefault(),t.touches.length===2?e.onPinchMove(t):t.touches.length===1&&e.onDrag(r.getTouchPoint(t.touches[0]))},e.onGestureStart=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("gesturechange",e.onGestureMove),e.currentDoc.addEventListener("gestureend",e.onGestureEnd),e.gestureZoomStart=e.props.zoom,e.gestureRotationStart=e.props.rotation)},e.onGestureMove=function(t){if(t.preventDefault(),!e.isTouching){var o=r.getMousePoint(t),n=e.gestureZoomStart-1+t.scale;if(e.setNewZoom(n,o,{shouldUpdatePosition:!0}),e.props.onRotationChange){var a=e.gestureRotationStart+t.rotation;e.props.onRotationChange(a)}}},e.onGestureEnd=function(t){e.cleanEvents()},e.onDragStart=function(t){var o,n,a=t.x,s=t.y;e.dragStartPosition={x:a,y:s},e.dragStartCrop=v({},e.props.crop),(n=(o=e.props).onInteractionStart)===null||n===void 0||n.call(o)},e.onDrag=function(t){var o=t.x,n=t.y;e.currentWindow&&(e.rafDragTimeout&&e.currentWindow.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=e.currentWindow.requestAnimationFrame(function(){if(e.state.cropSize&&!(o===void 0||n===void 0)){var a=o-e.dragStartPosition.x,s=n-e.dragStartPosition.y,c={x:e.dragStartCrop.x+a,y:e.dragStartCrop.y+s},u=e.props.restrictPosition?z(c,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):c;e.props.onCropChange(u)}}))},e.onDragStopped=function(){var t,o;e.isTouching=!1,e.cleanEvents(),e.emitCropData(),(o=(t=e.props).onInteractionEnd)===null||o===void 0||o.call(t)},e.onWheel=function(t){if(e.currentWindow&&!(e.props.onWheelRequest&&!e.props.onWheelRequest(t))){t.preventDefault();var o=r.getMousePoint(t),n=ce(t).pixelY,a=e.props.zoom-n*e.props.zoomSpeed/200;e.setNewZoom(a,o,{shouldUpdatePosition:!0}),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var s,c;return(c=(s=e.props).onInteractionStart)===null||c===void 0?void 0:c.call(s)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=e.currentWindow.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var s,c;return(c=(s=e.props).onInteractionEnd)===null||c===void 0?void 0:c.call(s)})},250)}},e.getPointOnContainer=function(t,o){var n=t.x,a=t.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(n-o.x),y:e.containerRect.height/2-(a-o.y)}},e.getPointOnMedia=function(t){var o=t.x,n=t.y,a=e.props,s=a.crop,c=a.zoom;return{x:(o+s.x)/c,y:(n+s.y)/c}},e.setNewZoom=function(t,o,n){var a=n===void 0?{}:n,s=a.shouldUpdatePosition,c=s===void 0?!0:s;if(!(!e.state.cropSize||!e.props.onZoomChange)){var u=A(t,e.props.minZoom,e.props.maxZoom);if(c){var h=e.getPointOnContainer(o,e.containerPosition),d=e.getPointOnMedia(h),l={x:d.x*u-h.x,y:d.y*u-h.y},C=e.props.restrictPosition?z(l,e.mediaSize,e.state.cropSize,u,e.props.rotation):l;e.props.onCropChange(C)}e.props.onZoomChange(u)}},e.getCropData=function(){if(!e.state.cropSize)return null;var t=e.props.restrictPosition?z(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return pe(t,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var t=e.getCropData();if(t){var o=t.croppedAreaPercentages,n=t.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(o,n),e.props.onCropAreaChange&&e.props.onCropAreaChange(o,n)}},e.emitCropAreaChange=function(){var t=e.getCropData();if(t){var o=t.croppedAreaPercentages,n=t.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(o,n)}},e.recomputeCropPosition=function(){if(e.state.cropSize){var t=e.props.restrictPosition?z(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(t),e.emitCropData()}},e}return r.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=we,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},r.prototype.componentWillUnmount=function(){var e,t;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((t=this.styleRef.parentNode)===null||t===void 0||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},r.prototype.componentDidUpdate=function(e){var t,o,n,a,s,c,u,h,d;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.objectFit!==this.props.objectFit?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((t=e.cropSize)===null||t===void 0?void 0:t.height)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.height)||((n=e.cropSize)===null||n===void 0?void 0:n.width)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.width)?this.computeSizes():(((s=e.crop)===null||s===void 0?void 0:s.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((u=e.crop)===null||u===void 0?void 0:u.y)!==((h=this.props.crop)===null||h===void 0?void 0:h.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((d=this.videoRef.current)===null||d===void 0||d.load());var l=this.getObjectFit();l!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:l},this.computeSizes)},r.prototype.getAspect=function(){var e=this.props,t=e.cropSize,o=e.aspect;return t?t.width/t.height:o},r.prototype.getObjectFit=function(){var e,t,o,n;if(this.props.objectFit==="cover"){var a=this.imageRef.current||this.videoRef.current;if(a&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var s=this.containerRect.width/this.containerRect.height,c=((e=this.imageRef.current)===null||e===void 0?void 0:e.naturalWidth)||((t=this.videoRef.current)===null||t===void 0?void 0:t.videoWidth)||0,u=((o=this.imageRef.current)===null||o===void 0?void 0:o.naturalHeight)||((n=this.videoRef.current)===null||n===void 0?void 0:n.videoHeight)||0,h=c/u;return h<s?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},r.prototype.onPinchStart=function(e){var t=r.getTouchPoint(e.touches[0]),o=r.getTouchPoint(e.touches[1]);this.lastPinchDistance=Y(t,o),this.lastPinchRotation=B(t,o),this.onDragStart(k(t,o))},r.prototype.onPinchMove=function(e){var t=this;if(!(!this.currentDoc||!this.currentWindow)){var o=r.getTouchPoint(e.touches[0]),n=r.getTouchPoint(e.touches[1]),a=k(o,n);this.onDrag(a),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var s=Y(o,n),c=t.props.zoom*(s/t.lastPinchDistance);t.setNewZoom(c,a,{shouldUpdatePosition:!1}),t.lastPinchDistance=s;var u=B(o,n),h=t.props.rotation+(u-t.lastPinchRotation);t.props.onRotationChange&&t.props.onRotationChange(h),t.lastPinchRotation=u})}},r.prototype.render=function(){var e=this,t=this.props,o=t.image,n=t.video,a=t.mediaProps,s=t.transform,c=t.crop,u=c.x,h=c.y,d=t.rotation,l=t.zoom,C=t.cropShape,m=t.showGrid,g=t.style,p=g.containerStyle,S=g.cropAreaStyle,w=g.mediaStyle,f=t.classes,x=f.containerClassName,D=f.cropAreaClassName,b=f.mediaClassName,E=this.state.mediaObjectFit;return y.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(V){return e.containerRef=V},"data-testid":"container",style:p,className:M("reactEasyCrop_Container",x)},o?y.createElement("img",v({alt:"",className:M("reactEasyCrop_Image",E==="contain"&&"reactEasyCrop_Contain",E==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",E==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",b)},a,{src:o,ref:this.imageRef,style:v(v({},w),{transform:s||"translate(".concat(u,"px, ").concat(h,"px) rotate(").concat(d,"deg) scale(").concat(l,")")}),onLoad:this.onMediaLoad})):n&&y.createElement("video",v({autoPlay:!0,loop:!0,muted:!0,className:M("reactEasyCrop_Video",E==="contain"&&"reactEasyCrop_Contain",E==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",E==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",b)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:v(v({},w),{transform:s||"translate(".concat(u,"px, ").concat(h,"px) rotate(").concat(d,"deg) scale(").concat(l,")")}),controls:!1}),(Array.isArray(n)?n:[{src:n}]).map(function(W){return y.createElement("source",v({key:W.src},W))})),this.state.cropSize&&y.createElement("div",{style:v(v({},S),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:M("reactEasyCrop_CropArea",C==="round"&&"reactEasyCrop_CropAreaRound",m&&"reactEasyCrop_CropAreaGrid",D)}))},r.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:ye,minZoom:Ce,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},r.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},r.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},r}(y.Component);const F=()=>["KEY_ImageCropperStore"];R.object({cropArea:R.object({width:R.number(),height:R.number(),x:R.number(),y:R.number()}).nullable()});const Ee=()=>{const i=K();ee({queryKey:F(),staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1,initialData:{cropArea:null},notifyOnChangeProps:[]});const r=y.useCallback((t,o)=>{i.setQueryData(F(),{cropArea:o})},[]);return{getCropArea:()=>{const t=i.getQueryData(F());return(t==null?void 0:t.cropArea)??null},onCropComplete:r}},De=({imgPath:i})=>{const{onCropComplete:r}=Ee(),[e,t]=y.useState({x:0,y:0}),[o,n]=y.useState(2);return P.jsxs("div",{className:"w-fit",children:[P.jsx("div",{className:"bg-global-3-bg relative m-auto h-[300px] w-[300px]",children:P.jsx(xe,{image:i,crop:e,zoom:o,aspect:3/3,onCropChange:t,onCropComplete:r,onZoomChange:n})}),P.jsx($,{value:o,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:a=>{n(a)},className:"rounded-full my-10"})]})},Re=i=>new Promise((r,e)=>{const t=new Image;t.addEventListener("load",()=>r(t)),t.addEventListener("error",o=>e(o)),t.setAttribute("crossOrigin","anonymous"),t.src=i});async function Pe(i,r){try{const e=await Re(i),t=document.createElement("canvas"),o=t.getContext("2d");if(!o)throw new Error("getCroppedImg error: ctx is null");const n=Math.max(e.width,e.height)*2;t.width=n,t.height=n,o.translate(n/2,n/2),o.translate(-n/2,-n/2),o.drawImage(e,n/2-e.width,n/2-e.height);const a=o.getImageData(0,0,n,n);return t.width=r.width,t.height=r.height,o.putImageData(a,0-n/2+e.width-r.x,0-n/2+e.height-r.y),t.toDataURL("image/jpeg","low")}catch{J("getCroppedImg error: ctx is null");return}}export{De as I,F as K,Pe as g,Ee as u};
//# sourceMappingURL=cropImage-BeABCRIm.js.map
