(self.webpackChunkBCleanCheck=self.webpackChunkBCleanCheck||[]).push([[1369],{3693:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AddWarningPageModule:()=>l});var a=n(8583),r=n(665),o=n(2859),u=n(5496),s=n(5205),c=n(3018);const i=[{path:"",component:s.X}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[u.Bz.forChild(i)],u.Bz]}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.ez,r.u5,o.Pc,g]]}),e})()},5001:(e,t,n)=>{"use strict";n.d(t,{L:()=>u});var a=n(9786),r=n(3018),o=n(7053);let u=(()=>{class e{constructor(e){this.authService=e,this.lang="",this.userId=""}getLano(e){var t="";return a.Z.firestore().collection("userLanguage").doc(e).get().then(e=>{t=e.data().language}),t}getLanguage(e){return a.Z.firestore().collection("userLanguage").doc(e).get().then(e=>{this.lang=e.data().language}),this.lang}languageValidation(){}addLanguage(e,t){return new Promise((n,r)=>{a.Z.firestore().collection("userLanguage").doc(t).set({language:e,updatedOn:a.Z.firestore.FieldValue.serverTimestamp()}).then(e=>n(e),e=>r(e))})}setLanguage(){}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(o.$))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);