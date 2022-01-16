(self.webpackChunkBCleanCheck=self.webpackChunkBCleanCheck||[]).push([[6010],{5001:(t,e,n)=>{"use strict";n.d(e,{L:()=>a});var i=n(9786),o=n(3018),r=n(7053);let a=(()=>{class t{constructor(t){this.authService=t,this.lang="",this.userId=""}getLano(t){var e="";return i.Z.firestore().collection("userLanguage").doc(t).get().then(t=>{e=t.data().language}),e}getLanguage(t){return i.Z.firestore().collection("userLanguage").doc(t).get().then(t=>{this.lang=t.data().language}),this.lang}languageValidation(){}addLanguage(t,e){return new Promise((n,o)=>{i.Z.firestore().collection("userLanguage").doc(e).set({language:t,updatedOn:i.Z.firestore.FieldValue.serverTimestamp()}).then(t=>n(t),t=>o(t))})}setLanguage(){}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(r.$))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},6010:(t,e,n)=>{"use strict";n.r(e),n.d(e,{TimeTrackingPageModule:()=>b});var i=n(8583),o=n(665),r=n(2859),a=n(5496),s=n(4762),c=n(9786),l=n(3018),g=n(5001),u=n(7053);function d(t,e){1&t&&l._UZ(0,"ion-icon",16)}function p(t,e){1&t&&l._UZ(0,"ion-icon",17)}function h(t,e){if(1&t&&(l.TgZ(0,"ion-card",11),l.TgZ(1,"ion-card-header"),l.TgZ(2,"ion-row",8),l._UZ(3,"img",12),l.qZA(),l._UZ(4,"br"),l.TgZ(5,"ion-card-subtitle",13),l._uU(6),l._UZ(7,"br"),l._UZ(8,"br"),l._uU(9),l.ALo(10,"date"),l.qZA(),l._UZ(11,"br"),l.TgZ(12,"ion-item"),l.YNc(13,d,1,0,"ion-icon",14),l.YNc(14,p,1,0,"ion-icon",15),l.TgZ(15,"ion-label"),l._uU(16),l.qZA(),l.TgZ(17,"ion-label"),l._uU(18),l.qZA(),l.qZA(),l.qZA(),l._UZ(19,"ion-row"),l.qZA()),2&t){const t=e.$implicit,n=l.oxw();l.xp6(3),l.Q6J("src",t.data().profileImageUrl,l.LSH),l.xp6(3),l.AsE(" ",n.email," ",t.data().UserEmail," "),l.xp6(3),l.AsE(" ",n.timel," ",l.xi3(10,9,1e3*t.data().Time.seconds,"medium")," "),l.xp6(4),l.Q6J("ngIf","Break"===t.data().TimeType),l.xp6(1),l.Q6J("ngIf","Work"===t.data().TimeType),l.xp6(2),l.Oqu(t.data().Type),l.xp6(2),l.Oqu(t.data().TimeType)}}const m=function(){return["/supervisor"]},Z=function(){return["/time-tracking"]},f=function(){return["/time-tracking-pending"]},_=[{path:"",component:(()=>{class t{constructor(t,e,n,i,o,r){this.toastCtrl=t,this.loadingCtrl=e,this.route=n,this.lanServ=i,this.authService=o,this.navCtrl=r,this.timeList=[],this.ttracking="",this.appr="",this.pend="",this.email="",this.timel="",this.langu="",this.Refresh(),this.userLanguage()}userLanguage(){this.authService.userDetails().forEach(t=>{c.Z.firestore().collection("userLanguage").doc(t.uid).get().then(t=>{this.getUserLanguage(t.data().language)})})}ngOnInit(){}Logout(){this.authService.logoutUser().then(()=>(0,s.__awaiter)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("login"),(yield this.toastCtrl.create({message:"Logout successfull",duration:3e3})).present()})).catch(t=>(0,s.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:t,duration:3e3})).present()}))}Refresh(){return(0,s.__awaiter)(this,void 0,void 0,function*(){this.timeList=[];let t=this.loadingCtrl.create({message:"Loading ..."});(yield t).present(),c.Z.firestore().collection("TimeEntry").where("Status","==","Approved").get().then(e=>(0,s.__awaiter)(this,void 0,void 0,function*(){e.forEach(t=>{this.timeList.push(t),this.option=t.data().Status}),(yield t).dismiss()})).catch(t=>{console.log(t)})})}getUserLanguage(t){switch(t){case"English":this.ttracking="Time Control",this.appr="Approved",this.pend="Pending",this.email="Email: ",this.timel="Time: ";break;case"Spanish":this.ttracking="Control de Tiempo",this.appr="Aprobado",this.pend="Pendiente",this.email="Correo: ",this.timel="Tiempo: "}}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(r.yF),l.Y36(r.HT),l.Y36(a.F0),l.Y36(g.L),l.Y36(u.$),l.Y36(r.SH))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-time-tracking"]],decls:27,vars:10,consts:[["color","danger"],[1,"lblHeading"],["slot","start"],["block","","clear","","color","Light","icon-only","",1,"backButton",3,"routerLink"],["name","arrow-back-outline",1,"backArrow"],["slot","end"],["icon-only","","clear","",1,"logoutBtn",3,"click"],["name","log-out",1,"lgIcon"],[1,"rowStyle"],[1,"btnIn",3,"routerLink"],["class","ion-margin",4,"ngFor","ngForOf"],[1,"ion-margin"],["width","300px","height","170px",2,"margin-left","auto","margin-right","auto",3,"src"],[2,"font-size","large","font-weight","bold"],["size","small","color","warning","name","ellipse",4,"ngIf"],["size","small","color","success","name","ellipse",4,"ngIf"],["size","small","color","warning","name","ellipse"],["size","small","color","success","name","ellipse"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-title"),l.TgZ(3,"ion-label",1),l._uU(4),l.qZA(),l.qZA(),l.TgZ(5,"ion-buttons",2),l.TgZ(6,"ion-button",3),l._UZ(7,"ion-icon",4),l.qZA(),l.qZA(),l.TgZ(8,"ion-buttons",5),l.TgZ(9,"ion-button",6),l.NdJ("click",function(){return e.Logout()}),l._UZ(10,"ion-icon",7),l.qZA(),l._uU(11,"s "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(12,"ion-content"),l.TgZ(13,"ion-grid"),l.TgZ(14,"ion-row",8),l._UZ(15,"ion-col"),l.TgZ(16,"ion-col"),l.TgZ(17,"ion-button",9),l._uU(18),l.qZA(),l.qZA(),l.TgZ(19,"ion-col"),l.TgZ(20,"ion-button",9),l._uU(21),l.qZA(),l.qZA(),l._UZ(22,"ion-col"),l._UZ(23,"ion-col"),l._UZ(24,"ion-col"),l._UZ(25,"ion-col"),l.qZA(),l.qZA(),l.YNc(26,h,20,12,"ion-card",10),l.qZA()),2&t&&(l.xp6(4),l.Oqu(e.ttracking),l.xp6(2),l.Q6J("routerLink",l.DdM(7,m)),l.xp6(11),l.Q6J("routerLink",l.DdM(8,Z)),l.xp6(1),l.Oqu(e.appr),l.xp6(2),l.Q6J("routerLink",l.DdM(9,f)),l.xp6(1),l.Oqu(e.pend),l.xp6(5),l.Q6J("ngForOf",e.timeList))},directives:[r.Gu,r.sr,r.wd,r.Q$,r.Sm,r.YG,r.YI,a.rH,r.gu,r.W2,r.jY,r.Nd,r.wI,i.sg,r.PM,r.Zi,r.tO,r.Ie,i.O5],pipes:[i.uU],styles:[".rowStyle[_ngcontent-%COMP%]{background-color:#fff;padding-left:30px;border-radius:30px;margin-top:10px}.rowStyle[_ngcontent-%COMP%], .rowStyle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.rowStyle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:13px;font-size:64px;border:solid;background-color:#daa520;position:relative}.rowStyle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}.colStyle[_ngcontent-%COMP%]{align-items:center}.headerStyle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:0}.backArrow[_ngcontent-%COMP%], .lblHeading[_ngcontent-%COMP%]{color:#fff}.lbls[_ngcontent-%COMP%]{color:blue}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.Bz.forChild(_)],a.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[i.ez,o.u5,r.Pc,T]]}),t})()}}]);