(self.webpackChunkBCleanCheck=self.webpackChunkBCleanCheck||[]).push([[4086],{5860:(e,t,i)=>{"use strict";i.r(t),i.d(t,{InoutPageModule:()=>p});var r=i(8583),a=i(665),s=i(2859),o=i(5496),n=i(4762),u=i(9786),c=i(3018),d=i(5001),m=i(7053);function h(e,t){if(1&e&&(c.TgZ(0,"ion-grid",16),c.TgZ(1,"ion-row"),c._uU(2," Work Time "),c.qZA(),c.TgZ(3,"ion-row"),c._uU(4),c.qZA(),c.TgZ(5,"ion-row"),c._uU(6),c.qZA(),c.TgZ(7,"ion-row"),c._uU(8),c.qZA(),c.TgZ(9,"ion-row"),c._uU(10),c.qZA(),c.TgZ(11,"ion-row"),c._uU(12),c.qZA(),c.qZA()),2&e){const e=t.$implicit;c.xp6(4),c.hij(" Date: ",e.data().Date," "),c.xp6(2),c.hij(" Approved By: ",e.data().ApprovedBy," "),c.xp6(2),c.hij(" Status: ",e.data().Status," "),c.xp6(2),c.hij(" Time In: ",e.data().TimeIn," "),c.xp6(2),c.hij(" Time Out: ",e.data().TimeOut," ")}}function l(e,t){if(1&e&&(c.TgZ(0,"ion-grid",16),c.TgZ(1,"ion-row"),c._uU(2," Break Time "),c.qZA(),c.TgZ(3,"ion-row"),c._uU(4),c.qZA(),c.TgZ(5,"ion-row"),c._uU(6),c.qZA(),c.TgZ(7,"ion-row"),c._uU(8),c.qZA(),c.qZA()),2&e){const e=t.$implicit;c.xp6(4),c.hij(" Date: ",e.data().Date," "),c.xp6(2),c.hij(" Time In: ",e.data().TimeIn," "),c.xp6(2),c.hij(" Time Out: ",e.data().TimeOut," ")}}const g=function(){return["/subordinate"]},T=[{path:"",component:(()=>{class e{constructor(e,t,i,r,a,s){this.toastCtrl=e,this.loadingCtrl=t,this.route=i,this.lanServ=r,this.authService=a,this.navCtrl=s,this.timeList=[],this.inout="",this.refLan="",this.timeFor="",this.break="",this.working="",this.in="",this.out="",this.stat="",this.workTimeList=[],this.breakTimeList=[],this.langu="",this.userId="",this.userLanguage(),this.Refresh(),this.getWorkTime(),this.getBreakTime()}ngOnInit(){}userLanguage(){this.authService.userDetails().forEach(e=>{u.Z.firestore().collection("userLanguage").doc(e.uid).get().then(e=>{this.getUserLanguage(e.data().language)})})}Logout(){this.authService.logoutUser().then(()=>(0,n.__awaiter)(this,void 0,void 0,function*(){this.navCtrl.navigateBack("login"),(yield this.toastCtrl.create({message:"Logout successfull",duration:3e3})).present()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e,duration:3e3})).present()}))}AddTask(e){this.authService.userDetails().forEach(t=>{u.Z.firestore().collection("employee").where("Email","==",sessionStorage.getItem("SessionEmail")).get().then(i=>(0,n.__awaiter)(this,void 0,void 0,function*(){i.forEach(i=>{this.currentUser=i.data().profileImageUrl.toString(),1==e?u.Z.firestore().collection("TimeEntry").add({User:t.uid,UserEmail:sessionStorage.getItem("SessionEmail"),Time:u.Z.firestore.FieldValue.serverTimestamp(),TimeType:this.currentTimeType,Type:"Start",Status:"Pending",ApprovedBy:"",profileImageUrl:this.currentUser}).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Start time for was added successfully.",duration:3e3})).present(),this.Refresh()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()})):u.Z.firestore().collection("TimeEntry").add({User:t.uid,UserEmail:t.email,Time:u.Z.firestore.FieldValue.serverTimestamp(),TimeType:this.currentTimeType,Type:"End",Status:"Pending",ApprovedBy:"",profileImageUrl:this.currentUser}).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"End time for was added successfully.",duration:3e3})).present(),this.Refresh()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})}getWorkTime(){return(0,n.__awaiter)(this,void 0,void 0,function*(){this.workTimeList=[];let e=this.loadingCtrl.create({message:"Loading ..."});(yield e).present(),u.Z.firestore().collection("WorkTime").where("Date","==",this.getCurrentDate()).get().then(t=>(0,n.__awaiter)(this,void 0,void 0,function*(){t.forEach(e=>{this.workTimeList.push(e)}),(yield e).dismiss()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})}getBreakTime(){return(0,n.__awaiter)(this,void 0,void 0,function*(){this.breakTimeList=[];let e=this.loadingCtrl.create({message:"Loading ..."});(yield e).present(),u.Z.firestore().collection("BreakTime").where("Date","==",this.getCurrentDate()).get().then(t=>(0,n.__awaiter)(this,void 0,void 0,function*(){t.forEach(e=>{this.breakTimeList.push(e)}),(yield e).dismiss()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})}Refresh(){return(0,n.__awaiter)(this,void 0,void 0,function*(){this.timeList=[];let e=this.loadingCtrl.create({message:"Loading ..."});(yield e).present(),u.Z.firestore().collection("TimeEntry").orderBy("Time").limitToLast(1).get().then(t=>(0,n.__awaiter)(this,void 0,void 0,function*(){t.forEach(e=>{this.timeList.push(e)}),(yield e).dismiss()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})}getUserLanguage(e){switch(e){case"English":this.inout="IN/OUT",this.timeFor="Time Type",this.break="Break Time",this.working="Working Time",this.in="IN",this.out="OUT",this.stat="Status:";break;case"Spanish":this.inout="Entrada/Salida",this.timeFor="Tipo de Tiempo",this.break="Tiempo de Receso",this.working="Tiempo de Trabajo",this.in="Entrada",this.out="Salida",this.stat="Estado:"}}selectedItem(e){}validateInTime(){switch(this.currentTimeType){case"Work":this.setInWorkTime();break;case"Break":this.setInBreakTime()}}validateOutTime(){switch(this.currentTimeType){case"Work":this.setOutWorkTime();break;case"Break":this.setOutBreakTime()}}setTime(){this.authService.userDetails().forEach(e=>{u.Z.firestore().collection("BreakTime").add({User:e.uid,UserEmail:e.email,Date:this.getCurrentDate(),TimeIn:this.getCurrentTime(),TimeInRef:this.getReferenceTime(),TimeInTimeStamp:u.Z.firestore.FieldValue.serverTimestamp(),TimeOut:"",TimeOutRef:"",TimeOutTimeStamp:"",Status:"Missing TimeOut",ApprovedBy:""}).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Break Time In was added successfully.",duration:3e3})).present()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})}setInWorkTime(){this.authService.userDetails().forEach(e=>{u.Z.firestore().collection("WorkTime").where("Date","==",this.getCurrentDate()).where("User","==",u.Z.auth().currentUser.uid).get().then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){e.empty?this.authService.userDetails().forEach(e=>{u.Z.firestore().collection("WorkTime").add({User:e.uid,UserEmail:e.email,Date:this.getCurrentDate(),TimeIn:this.getCurrentTime(),TimeInRef:this.getReferenceTime(),TimeInTimeStamp:u.Z.firestore.FieldValue.serverTimestamp(),TimeOut:"",TimeOutRef:"",TimeOutTimeStamp:"",Status:"Missing TimeOut",ApprovedBy:""}).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Work Time In was added successfully.",duration:3e3})).present(),this.getWorkTime()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))}):e.forEach(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Work Time In for today already registered! "+e.data().TimeIn,duration:3e3})).present()}))}))})}setInBreakTime(){this.authService.userDetails().forEach(e=>{u.Z.firestore().collection("BreakTime").where("Date","==",this.getCurrentDate()).where("User","==",u.Z.auth().currentUser.uid).get().then(t=>{t.empty?u.Z.firestore().collection("BreakTime").add({User:e.uid,UserEmail:e.email,Date:this.getCurrentDate(),TimeIn:this.getCurrentTime(),TimeInRef:this.getReferenceTime(),TimeInTimeStamp:u.Z.firestore.FieldValue.serverTimestamp(),TimeOut:"",TimeOutRef:"",TimeOutTimeStamp:"",Status:"Missing TimeOut",ApprovedBy:""}).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Break Time In was added successfully.",duration:3e3})).present(),this.getBreakTime()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()})):t.forEach(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Break Time In for today already registered! "+e.data().TimeIn,duration:3e3})).present()}))})})}setOutWorkTime(){this.authService.userDetails().forEach(e=>{u.Z.firestore().collection("WorkTime").where("Date","==",this.getCurrentDate()).where("User","==",e.uid).get().then(e=>{e.forEach(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){""==e.data().TimeOut?u.Z.firestore().collection("WorkTime").doc(e.id).update({TimeOut:this.getCurrentTime(),TimeOutRef:this.getReferenceTime(),TimeOutTimeStamp:u.Z.firestore.FieldValue.serverTimestamp(),Status:"Pending"}).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Work Time Out was added successfully.",duration:3e3})).present(),this.getWorkTime()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()})):(yield this.toastCtrl.create({message:"Work Time Out for today already registered! "+e.data().TimeOut,duration:3e3})).present()}))})})}setOutBreakTime(){this.authService.userDetails().forEach(e=>{u.Z.firestore().collection("BreakTime").where("Date","==",this.getCurrentDate()).where("User","==",e.uid).get().then(e=>{e.forEach(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){""==e.data().TimeOut?u.Z.firestore().collection("BreakTime").doc(e.id).update({TimeOut:this.getCurrentTime(),TimeOutRef:this.getReferenceTime(),TimeOutTimeStamp:u.Z.firestore.FieldValue.serverTimestamp(),Status:"Pending"}).then(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:"Break Time Out was added successfully.",duration:3e3})).present(),this.getBreakTime()})).catch(e=>(0,n.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()})):(yield this.toastCtrl.create({message:"Break Time Out for today already registered! "+e.data().TimeOut,duration:3e3})).present()}))})})}getCurrentDate(){var e=u.Z.firestore.Timestamp.now();return new Date(1e3*e.seconds).toDateString()}getCurrentTime(){var e=u.Z.firestore.Timestamp.now();return new Date(1e3*e.seconds).getHours()+":"+new Date(1e3*e.seconds).getMinutes()+":"+new Date(1e3*e.seconds).getSeconds()}getReferenceTime(){var e=u.Z.firestore.Timestamp.now();return new Date(1e3*e.seconds).getTime()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.yF),c.Y36(s.HT),c.Y36(o.F0),c.Y36(d.L),c.Y36(m.$),c.Y36(s.SH))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-inout"]],decls:34,vars:11,consts:[["color","danger"],[1,"lbls"],["slot","start"],["block","","clear","","color","Light","icon-only","",1,"backButton",3,"routerLink"],["name","arrow-back-outline",1,"backArrow"],["slot","end"],["icon-only","","clear","",1,"logoutBtn",3,"click"],["name","log-out",1,"lgIcon"],[1,"rowStyle"],[1,"TimeType"],[3,"ngModel","ngModelChange","ionChange"],["value","Break"],["value","Work"],[1,"btnIn",3,"click"],[1,"btnOut",3,"click"],["class","ion-margin",4,"ngFor","ngForOf"],[1,"ion-margin"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-title"),c.TgZ(3,"ion-label",1),c._uU(4),c.qZA(),c.qZA(),c.TgZ(5,"ion-buttons",2),c.TgZ(6,"ion-button",3),c._UZ(7,"ion-icon",4),c.qZA(),c.qZA(),c.TgZ(8,"ion-buttons",5),c.TgZ(9,"ion-button",6),c.NdJ("click",function(){return t.Logout()}),c._UZ(10,"ion-icon",7),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(11,"ion-content"),c.TgZ(12,"ion-grid"),c.TgZ(13,"ion-row",8),c.TgZ(14,"ion-label"),c._uU(15),c.qZA(),c.qZA(),c.TgZ(16,"ion-row",8),c.TgZ(17,"ion-item",9),c.TgZ(18,"ion-select",10),c.NdJ("ngModelChange",function(e){return t.currentTimeType=e})("ionChange",function(){return t.selectedItem(t.currentTimeType)}),c.TgZ(19,"ion-select-option",11),c._uU(20),c.qZA(),c.TgZ(21,"ion-select-option",12),c._uU(22),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(23,"ion-row",8),c.TgZ(24,"ion-col"),c.TgZ(25,"ion-button",13),c.NdJ("click",function(){return t.validateInTime()}),c._uU(26),c.qZA(),c.qZA(),c.TgZ(27,"ion-col"),c.TgZ(28,"ion-button",14),c.NdJ("click",function(){return t.validateOutTime()}),c._uU(29),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(30,"ion-label"),c._uU(31,"Today Time"),c.qZA(),c.YNc(32,h,13,5,"ion-grid",15),c.YNc(33,l,9,3,"ion-grid",15),c.qZA()),2&e&&(c.xp6(4),c.Oqu(t.inout),c.xp6(2),c.Q6J("routerLink",c.DdM(10,g)),c.xp6(9),c.Oqu(t.timeFor),c.xp6(3),c.Q6J("ngModel",t.currentTimeType),c.xp6(2),c.Oqu(t.break),c.xp6(2),c.Oqu(t.working),c.xp6(4),c.Oqu(t.in),c.xp6(3),c.Oqu(t.out),c.xp6(3),c.Q6J("ngForOf",t.workTimeList),c.xp6(1),c.Q6J("ngForOf",t.breakTimeList))},directives:[s.Gu,s.sr,s.wd,s.Q$,s.Sm,s.YG,s.YI,o.rH,s.gu,s.W2,s.jY,s.Nd,s.Ie,s.t9,s.QI,a.JJ,a.On,s.n0,s.wI,r.sg],styles:[".backArrow[_ngcontent-%COMP%]{color:#fff}.rowStyle[_ngcontent-%COMP%]{border-bottom-style:solid}.btnIn[_ngcontent-%COMP%]{margin-left:50px;margin-right:auto}.btnOut[_ngcontent-%COMP%]{margin-left:auto;margin-right:50px}.TimeType[_ngcontent-%COMP%]{margin-left:auto;margin-right:100px}.lblHeading[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.Bz.forChild(T)],o.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.ez,a.u5,s.Pc,f]]}),e})()},5001:(e,t,i)=>{"use strict";i.d(t,{L:()=>o});var r=i(9786),a=i(3018),s=i(7053);let o=(()=>{class e{constructor(e){this.authService=e,this.lang="",this.userId=""}getLano(e){var t="";return r.Z.firestore().collection("userLanguage").doc(e).get().then(e=>{t=e.data().language}),t}getLanguage(e){return r.Z.firestore().collection("userLanguage").doc(e).get().then(e=>{this.lang=e.data().language}),this.lang}languageValidation(){}addLanguage(e,t){return new Promise((i,a)=>{r.Z.firestore().collection("userLanguage").doc(t).set({language:e,updatedOn:r.Z.firestore.FieldValue.serverTimestamp()}).then(e=>i(e),e=>a(e))})}setLanguage(){}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(s.$))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);