(self.webpackChunkBCleanCheck=self.webpackChunkBCleanCheck||[]).push([[2906],{2906:(t,n,e)=>{"use strict";e.r(n),e.d(n,{MyTasksPageModule:()=>b});var i=e(8583),a=e(665),o=e(2859),s=e(5496),r=e(4762),c=e(9786),l=e(8747),g=e(3018),u=e(6147),h=e(5001),d=e(7053);function f(t,n){if(1&t&&(g.TgZ(0,"ion-label",13),g._uU(1),g.qZA()),2&t){const t=g.oxw().$implicit;g.xp6(1),g.hij(" ",t.data().enCleaningArea," ")}}function m(t,n){if(1&t&&(g.TgZ(0,"ion-label",13),g._uU(1),g.qZA()),2&t){const t=g.oxw().$implicit;g.xp6(1),g.hij(" ",t.data().esCleaningArea," ")}}function k(t,n){if(1&t){const t=g.EpF();g.TgZ(0,"ion-card"),g.TgZ(1,"ion-item-divider"),g.TgZ(2,"ion-button",11),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw().enCheckList(n.id,n.data().enCleaningArea,n.data().esCleaningArea)}),g.YNc(3,f,2,1,"ion-label",12),g.YNc(4,m,2,1,"ion-label",12),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=g.oxw();g.xp6(3),g.Q6J("ngIf","EN"===t.cleaningItemLan),g.xp6(1),g.Q6J("ngIf","ES"===t.cleaningItemLan)}}const Z=function(){return["/subordinate"]},A=[{path:"",component:(()=>{class t{constructor(t,n,e,i,a,o,s,r){this.route=t,this.toastCtrl=n,this.loadingCtrl=e,this.chkListSubServ=i,this.modalCtrl=a,this.lanServ=o,this.authService=s,this.navCtrl=r,this.cleaningAreas=[],this.mTasks="",this.cleaningItemLan="",this.langu="",this.userLanguage(),this.getCleaningAreas()}userLanguage(){this.authService.userDetails().forEach(t=>{c.Z.firestore().collection("userLanguage").doc(t.uid).get().then(t=>{this.getUserLanguage(t.data().language)})})}ngOnInit(){}getCleaningAreas(){return(0,r.__awaiter)(this,void 0,void 0,function*(){this.cleaningAreas=[];let t=this.loadingCtrl.create({message:"Loading ..."});(yield t).present(),c.Z.firestore().collection("cleaningArea").get().then(n=>(0,r.__awaiter)(this,void 0,void 0,function*(){n.forEach(t=>{this.cleaningAreas.push(t)}),(yield t).dismiss()})).catch(t=>(0,r.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:t.message,duration:3e3})).present()}))})}enCheckList(t,n,e){return(0,r.__awaiter)(this,void 0,void 0,function*(){const i=yield this.modalCtrl.create({component:l.z});return i.onDidDismiss().then(t=>{}),this.chkListSubServ.cleaningAreaId=t,this.chkListSubServ.enCleaningArea=n,this.chkListSubServ.esCleaningArea=e,yield i.present()})}Logout(){this.authService.logoutUser().then(()=>(0,r.__awaiter)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("login"),(yield this.toastCtrl.create({message:"Logout successfull",duration:3e3})).present()})).catch(t=>(0,r.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:t,duration:3e3})).present()}))}getUserLanguage(t){switch(t){case"English":this.mTasks="My Tasks",this.cleaningItemLan="EN";break;case"Spanish":this.mTasks="Mis Tareas",this.cleaningItemLan="ES"}}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(s.F0),g.Y36(o.yF),g.Y36(o.HT),g.Y36(u.r),g.Y36(o.IN),g.Y36(h.L),g.Y36(d.$),g.Y36(o.SH))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-my-tasks"]],decls:17,vars:4,consts:[["color","danger"],[1,"lblHeading"],["slot","start"],["block","","clear","","color","Light","icon-only","",1,"backButton",3,"routerLink"],["name","arrow-back-outline",1,"backArrow"],["slot","end"],["icon-only","","clear","",1,"logoutBtn",3,"click"],["name","log-out",1,"lgIcon"],[1,"checkListRow"],[1,"checklistLabel"],[4,"ngFor","ngForOf"],["color","light",1,"button","button-small","addCleanArea",3,"click"],["class","lbls",4,"ngIf"],[1,"lbls"]],template:function(t,n){1&t&&(g.TgZ(0,"ion-header"),g.TgZ(1,"ion-toolbar",0),g.TgZ(2,"ion-title"),g.TgZ(3,"ion-label",1),g._uU(4),g.qZA(),g.qZA(),g.TgZ(5,"ion-buttons",2),g.TgZ(6,"ion-button",3),g._UZ(7,"ion-icon",4),g.qZA(),g.qZA(),g.TgZ(8,"ion-buttons",5),g.TgZ(9,"ion-button",6),g.NdJ("click",function(){return n.Logout()}),g._UZ(10,"ion-icon",7),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(11,"ion-content"),g.TgZ(12,"ion-grid"),g.TgZ(13,"ion-row",8),g.TgZ(14,"ion-label",9),g._uU(15," CheckList"),g.qZA(),g.qZA(),g.qZA(),g.YNc(16,k,5,2,"ion-card",10),g.qZA()),2&t&&(g.xp6(4),g.Oqu(n.mTasks),g.xp6(2),g.Q6J("routerLink",g.DdM(3,Z)),g.xp6(10),g.Q6J("ngForOf",n.cleaningAreas))},directives:[o.Gu,o.sr,o.wd,o.Q$,o.Sm,o.YG,o.YI,s.rH,o.gu,o.W2,o.jY,o.Nd,i.sg,o.PM,o.rH,i.O5],styles:[".backArrow[_ngcontent-%COMP%]{color:#fff}.addCleanArea[_ngcontent-%COMP%]{height:30px;margin-left:auto;margin-right:auto;width:100%}.checkListRow[_ngcontent-%COMP%]{background-color:#00c3ff;align-content:center;height:50px}.checklistLabel[_ngcontent-%COMP%]{font:700;margin-left:auto;margin-right:auto;font-size:large}.lblHeading[_ngcontent-%COMP%]{color:#fff}.lbls[_ngcontent-%COMP%]{color:blue}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[s.Bz.forChild(A)],s.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[i.ez,a.u5,o.Pc,C]]}),t})()}}]);