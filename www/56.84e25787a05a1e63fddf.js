(self.webpackChunkBCleanCheck=self.webpackChunkBCleanCheck||[]).push([[56],{5001:(e,t,n)=>{"use strict";n.d(t,{L:()=>r});var o=n(9786),i=n(3018),s=n(7053);let r=(()=>{class e{constructor(e){this.authService=e,this.lang="",this.userId=""}getLano(e){var t="";return o.Z.firestore().collection("userLanguage").doc(e).get().then(e=>{t=e.data().language}),t}getLanguage(e){return o.Z.firestore().collection("userLanguage").doc(e).get().then(e=>{this.lang=e.data().language}),this.lang}languageValidation(){}addLanguage(e,t){return new Promise((n,i)=>{o.Z.firestore().collection("userLanguage").doc(t).set({language:e,updatedOn:o.Z.firestore.FieldValue.serverTimestamp()}).then(e=>n(e),e=>i(e))})}setLanguage(){}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(s.$))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},56:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UsersPageModule:()=>x});var o=n(8583),i=n(665),s=n(2859),r=n(5496),a=n(4762),c=n(9786),l=n(3018),u=n(5001),d=n(7053);function g(e,t){if(1&e&&(l.TgZ(0,"ion-input",10),l._uU(1),l.qZA()),2&e){const e=l.oxw().$implicit,t=l.oxw();l.xp6(1),l.AsE("",t.role," ",e.data().role,"")}}function h(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"ion-button",14),l.NdJ("click",function(){l.CHM(e);const t=l.oxw().$implicit;return l.oxw().changeRole(t.data().userEmail,t.data().role)}),l._UZ(1,"ion-icon",15),l.qZA()}}function p(e,t){if(1&e&&(l.TgZ(0,"ion-select-option",19),l._uU(1),l.qZA()),2&e){const e=l.oxw(3);l.xp6(1),l.Oqu(e.manag)}}function f(e,t){if(1&e&&(l.TgZ(0,"ion-select-option",20),l._uU(1),l.qZA()),2&e){const e=l.oxw(3);l.xp6(1),l.Oqu(e.sub)}}function Z(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"ion-select",16),l.NdJ("ngModelChange",function(t){return l.CHM(e),l.oxw(2).soption=t})("ionCancel",function(){return l.CHM(e),l.oxw(2).onCancel()})("ionChange",function(){l.CHM(e);const t=l.oxw().$implicit,n=l.oxw();return n.onChange(t.id,n.soption)}),l.YNc(1,p,2,1,"ion-select-option",17),l.YNc(2,f,2,1,"ion-select-option",18),l.qZA()}if(2&e){const e=l.oxw(2);l.Q6J("ngModel",e.soption),l.xp6(1),l.Q6J("ngIf","manager"!=e.usrol),l.xp6(1),l.Q6J("ngIf","subordinate"!=e.usrol)}}function m(e,t){if(1&e&&(l.TgZ(0,"ion-card"),l.TgZ(1,"ion-item-divider"),l.TgZ(2,"ion-grid"),l.TgZ(3,"ion-row"),l.TgZ(4,"ion-input",10),l._uU(5),l.qZA(),l.qZA(),l.TgZ(6,"ion-row"),l.TgZ(7,"ion-input",10),l._uU(8),l.qZA(),l._UZ(9,"br"),l.qZA(),l.TgZ(10,"ion-row"),l.TgZ(11,"ion-input",10),l._uU(12),l.qZA(),l.qZA(),l.TgZ(13,"ion-row"),l.YNc(14,g,2,2,"ion-input",11),l.YNc(15,h,2,0,"ion-button",12),l.YNc(16,Z,3,3,"ion-select",13),l.qZA(),l.TgZ(17,"ion-row"),l.TgZ(18,"ion-input",10),l._uU(19),l.ALo(20,"date"),l.qZA(),l.qZA(),l.TgZ(21,"ion-row"),l.TgZ(22,"ion-input",10),l._uU(23),l.ALo(24,"date"),l.qZA(),l.qZA(),l.TgZ(25,"ion-row"),l.TgZ(26,"ion-input",10),l._uU(27),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e){const e=t.$implicit,n=l.oxw();l.xp6(5),l.Oqu(e.data().photoURL),l.xp6(3),l.AsE("",n.name," ",e.data().displayName,""),l.xp6(4),l.AsE("",n.email," ",e.data().userEmail,""),l.xp6(2),l.Q6J("ngIf",!1===n.hiddenRoleInput),l.xp6(1),l.Q6J("ngIf",!1===n.hiddenBtnUpdate),l.xp6(1),l.Q6J("ngIf",!0===n.hiddenSelect&&n.account===e.data().userEmail),l.xp6(3),l.AsE("",n.created," ",l.xi3(20,13,1e3*e.data().created.seconds,"medium"),""),l.xp6(4),l.AsE("",n.updated," ",l.xi3(24,16,1e3*e.data().updatedOn.seconds,"medium"),""),l.xp6(4),l.Oqu(e.enabled)}}const C=function(){return["/manager"]},A=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i,s){this.loadingCtrl=e,this.toastCtrl=t,this.route=n,this.lanServ=o,this.authService=i,this.navCtrl=s,this.registeredUsers=[],this.hiddenRoleInput=!1,this.hiddenBtnUpdate=!1,this.hiddenSelect=!1,this.account="",this.usrol="",this.soption="",this.users="",this.name="",this.email="",this.role="",this.created="",this.updated="",this.manag="",this.sub="",this.sup="",this.langu="",this.userLanguage(),this.getRegisteredUsers(),this.registeredUsers.forEach(e=>{e.userEmail=!1})}userLanguage(){this.authService.userDetails().forEach(e=>{c.Z.firestore().collection("userLanguage").doc(e.uid).get().then(e=>{this.getUserLanguage(e.data().language)})})}ngOnInit(){}getRegisteredUsers(){return(0,a.__awaiter)(this,void 0,void 0,function*(){this.registeredUsers=[];let e=this.loadingCtrl.create({message:"Loading ..."});(yield e).present(),c.Z.firestore().collection("userRole").get().then(t=>(0,a.__awaiter)(this,void 0,void 0,function*(){t.forEach(e=>{this.registeredUsers.push(e)}),(yield e).dismiss()})).catch(e=>(0,a.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})}changeRole(e,t){this.account=e,this.hiddenRoleInput=!0,this.hiddenBtnUpdate=!0,this.hiddenSelect=!0,this.usrol=t}onCancel(){console.log("cancel"),this.account="",this.hiddenRoleInput=!1,this.hiddenBtnUpdate=!1,this.hiddenSelect=!1}onChange(e,t){c.Z.firestore().collection("userRole").doc(e).update({role:t,updatedOn:c.Z.firestore.FieldValue.serverTimestamp()}).then(()=>{this.account="",this.hiddenRoleInput=!1,this.hiddenBtnUpdate=!1,this.hiddenSelect=!1,this.getRegisteredUsers()}).catch(e=>{console.log(e)})}Logout(){this.authService.logoutUser().then(()=>(0,a.__awaiter)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("login"),(yield this.toastCtrl.create({message:"Logout successfull",duration:3e3})).present()})).catch(e=>(0,a.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e,duration:3e3})).present()}))}refresh(e){this.infiniteEvent&&this.infiniteEvent.enable(!0),e.complete()}getUserLanguage(e){switch(e){case"English":this.users="Users",this.name="Name:",this.email="Email:",this.role="Role:",this.created="Created:",this.updated="Updated:",this.manag="Manager",this.sub="Subordinate",this.sup="Supervisor";break;case"Spanish":this.users="Usuarios:",this.name="Nombre:",this.email="Correo:",this.role="Rol:",this.created="Creado:",this.updated="Actualizado:",this.manag="Administrador",this.sub="Subordinado",this.sup="Supervisor"}}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(s.HT),l.Y36(s.yF),l.Y36(r.F0),l.Y36(u.L),l.Y36(d.$),l.Y36(s.SH))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-users"]],decls:15,vars:4,consts:[["color","danger"],[1,"lblHeading"],["slot","start"],["block","","clear","","color","Light","icon-only","",1,"backButton",3,"routerLink"],["name","arrow-back-outline",1,"backArrow"],["slot","end"],["icon-only","","clear","",1,"logoutBtn",3,"click"],["name","log-out",1,"lgIcon"],["slot","fixed",3,"ionRefresh"],[4,"ngFor","ngForOf"],["type","text"],["type","text",4,"ngIf"],["icon-only","","color","success",3,"click",4,"ngIf"],["placeholder","New Role",3,"ngModel","ngModelChange","ionCancel","ionChange",4,"ngIf"],["icon-only","","color","success",3,"click"],["name","pencil-outline",1,"upPen"],["placeholder","New Role",3,"ngModel","ngModelChange","ionCancel","ionChange"],["value","manager",4,"ngIf"],["value","subordinate",4,"ngIf"],["value","manager"],["value","subordinate"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-title"),l.TgZ(3,"ion-label",1),l._uU(4),l.qZA(),l.qZA(),l.TgZ(5,"ion-buttons",2),l.TgZ(6,"ion-button",3),l._UZ(7,"ion-icon",4),l.qZA(),l.qZA(),l.TgZ(8,"ion-buttons",5),l.TgZ(9,"ion-button",6),l.NdJ("click",function(){return t.Logout()}),l._UZ(10,"ion-icon",7),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"ion-content"),l.TgZ(12,"ion-refresher",8),l.NdJ("ionRefresh",function(e){return t.refresh(e)}),l._UZ(13,"ion-refresher-content"),l.qZA(),l.YNc(14,m,28,19,"ion-card",9),l.qZA()),2&e&&(l.xp6(4),l.Oqu(t.users),l.xp6(2),l.Q6J("routerLink",l.DdM(3,C)),l.xp6(8),l.Q6J("ngForOf",t.registeredUsers))},directives:[s.Gu,s.sr,s.wd,s.Q$,s.Sm,s.YG,s.YI,r.rH,s.gu,s.W2,s.nJ,s.Wo,o.sg,s.PM,s.rH,s.jY,s.Nd,s.pK,s.j9,o.O5,s.t9,s.QI,i.JJ,i.On,s.n0],pipes:[o.uU],styles:[".rowStyle[_ngcontent-%COMP%]{background-color:#fff;padding-left:30px;border-radius:30px;margin-top:10px;background-color:#ed5249}.rowStyle[_ngcontent-%COMP%], .rowStyle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.rowStyle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:13px;font-size:64px;border:solid;background-color:#daa520;position:relative}.rowStyle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}.colStyle[_ngcontent-%COMP%]{align-items:center}.headerStyle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:0}.backArrow[_ngcontent-%COMP%], .lblHeading[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[r.Bz.forChild(A)],r.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[o.ez,i.u5,s.Pc,w]]}),e})()}}]);