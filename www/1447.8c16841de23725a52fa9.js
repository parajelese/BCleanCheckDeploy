(self.webpackChunkBCleanCheck=self.webpackChunkBCleanCheck||[]).push([[1447],{1447:(e,t,o)=>{"use strict";o.r(t),o.d(t,{LoginPageModule:()=>m});var i=o(8583),n=o(665),r=o(2859),a=o(5496),s=o(4762),l=o(9786),c=o(3018);let g=(()=>{class e{constructor(e){this.route=e}login(e,t){l.Z.auth().signInWithEmailAndPassword(e,t).then(e=>{console.log(e),this.route.navigateByUrl("manager")}).catch(e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(a.F0))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=o(7053),u=o(5107);const h=[{path:"",component:(()=>{class e{constructor(e,t,o,i,n,r){this.loginService=e,this.route=t,this.toastCtrl=o,this.navCtrl=i,this.authService=n,this.authGuard=r,this.email="",this.password="",this.role="",this.mssge="",this.errorMesg="",this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 5 characters long."}]}}ngOnInit(){}login(){this.authService.loginUser(this.email,this.password).then(e=>{this.errorMesg="",this.authService.userDetails().forEach(e=>{l.Z.firestore().collection("employee").where("Email","==",e.email).get().then(t=>{t.forEach(t=>(0,s.__awaiter)(this,void 0,void 0,function*(){this.mssge="Inactive"==t.data().Status?"User is Inactive":"Welcome "+e.displayName,(yield this.toastCtrl.create({message:this.mssge,duration:3e3})).present();var o=l.Z.firestore().collection("userRole");switch((t=yield o.doc(e.uid).get()).exists&&(this.role=t.data().role),"Inactive"==t.data().Status&&(this.role="Inactive"),this.role){case"manager":this.authGuard.role="manager",this.navCtrl.navigateForward("/manager"),this.email="",this.password="";break;case"subordinate":this.authGuard.role="subordinate",this.navCtrl.navigateForward("/subordinate"),this.email="",this.password="";break;case"supervisor":this.authGuard.role="supervisor",this.navCtrl.navigateForward("/supervisor"),this.email="",this.password="";break;case"Inactive":this.navCtrl.navigateForward("/login"),this.email="",this.password=""}}))}).catch(e=>(0,s.__awaiter)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:e.message,duration:3e3})).present()}))})}).catch(e=>(0,s.__awaiter)(this,void 0,void 0,function*(){console.log(e),(yield this.toastCtrl.create({message:e.message+this.errorMesg,duration:3e3})).present()}))}ForgotPassword(){this.route.navigateByUrl("forgot-password")}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(g),c.Y36(a.F0),c.Y36(r.yF),c.Y36(r.SH),c.Y36(d.$),c.Y36(u.a))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-login"]],features:[c._Bn([g])],decls:22,vars:2,consts:[["color","danger"],["text-center","","no-line",""],["src","../../assets/logo/cleaningsolutionsIcon.ico",1,"imgLogo"],[2,"width","75%"],[1,"rowStyle"],["name","mail","color","danger"],["type","email","placeholder","your email",3,"ngModel","ngModelChange"],["name","key","color","danger"],["type","password","placeholder","your password",3,"ngModel","ngModelChange"],[1,"lrowStyle"],["expand","block","shape","round","outline","translucent","color","medium",2,"margin-top","10px","margin-bottom","auto","margin-left","auto","margin-right","auto","width","500","outline-width","thick","outline-color","white",3,"click"],[1,"appName"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-title"),c._uU(3,"login"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(4,"ion-content"),c.TgZ(5,"ion-item",1),c._UZ(6,"img",2),c.qZA(),c.TgZ(7,"ion-grid",3),c.TgZ(8,"ion-row",4),c._UZ(9,"ion-icon",5),c.TgZ(10,"ion-input",6),c.NdJ("ngModelChange",function(e){return t.email=e}),c.qZA(),c.qZA(),c.TgZ(11,"ion-row",4),c._UZ(12,"ion-icon",7),c.TgZ(13,"ion-input",8),c.NdJ("ngModelChange",function(e){return t.password=e}),c.qZA(),c.qZA(),c.TgZ(14,"ion-row",9),c.TgZ(15,"ion-button",10),c.NdJ("click",function(){return t.login()}),c._uU(16,"Login"),c.qZA(),c.qZA(),c.TgZ(17,"ion-row"),c.TgZ(18,"ion-button",10),c.NdJ("click",function(){return t.ForgotPassword()}),c._uU(19,"Forgot Password"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(20,"ion-label",11),c._uU(21,"BCLEANCHECK-GSCS"),c.qZA(),c.qZA()),2&e&&(c.xp6(10),c.Q6J("ngModel",t.email),c.xp6(3),c.Q6J("ngModel",t.password))},directives:[r.Gu,r.sr,r.wd,r.W2,r.Ie,r.jY,r.Nd,r.gu,r.pK,r.j9,n.JJ,n.On,r.YG,r.Q$],styles:[".logo[_ngcontent-%COMP%]{font-size:45vh;margin:50px auto 30px}ion-content[_ngcontent-%COMP%]{--ion-background-color:#ed5249;--overflow:hidden;overflow:auto}ion-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.rowStyle[_ngcontent-%COMP%]{background-color:#fff;padding-left:10px;border-radius:30px;margin-top:10px}.rowStyle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:13px;margin-right:10px}.lrowStyle[_ngcontent-%COMP%]{background-color:#ed5249;padding-left:10px;border-radius:30px;margin-top:10px}.imgLogo[_ngcontent-%COMP%]{margin:auto}.appName[_ngcontent-%COMP%]{margin-top:20%;margin-right:15px;vertical-align:bottom;float:right!important;font-size:small}"]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(h)],a.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,n.u5,r.Pc,p]]}),e})()}}]);