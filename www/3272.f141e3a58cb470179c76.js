(self.webpackChunkBCleanCheck=self.webpackChunkBCleanCheck||[]).push([[3272],{3272:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createSwipeBackGesture:()=>s});var n=a(2377),r=a(9461);a(960);const s=(e,t,a,s,c)=>{const o=e.ownerDocument.defaultView;return(0,r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:a,onMove:e=>{s(e.deltaX/o.innerWidth)},onEnd:e=>{const t=o.innerWidth,a=e.deltaX/t,r=e.velocityX,s=r>=0&&(r>.2||e.deltaX>t/2),i=(s?1-a:a)*t;let l=0;if(i>5){const e=i/Math.abs(r);l=Math.min(e,540)}c(s,a<=0?.01:(0,n.j)(0,a,.9999),l)}})}}}]);