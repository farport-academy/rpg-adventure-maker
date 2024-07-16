import{A as _,C as T,D as I,E,F as d,G as F,H as k,I as J,J as w,K as P,L as O,N as Q,O as j,P as W,Q as X,R as tt,S as et,T as it,V as ot,Z as nt,i as Z,k as x,l as L,o as K,t as y,u as $}from"./chunk-M2DH2HLS.js";import{Ab as a,Bb as q,Ib as g,Jc as Y,Sb as c,Tb as M,W as A,Wa as p,Xb as z,aa as G,ba as v,c as U,fa as V,ga as s,ib as S,ka as u,la as b,pb as f,s as N,wa as D,xc as H,zb as r}from"./chunk-KYIDISFL.js";function rt(i,t){return l=>l.get(i)?.value!==l.get(t)?.value?{passwordMismatch:!0,relatedFields:[i,t]}:null}var at=[rt("password","confirmPassword")],B=[{name:"email",label:"Indirizzo Email",type:"text",validators:[d.required,d.email]},{name:"password",label:"Password",type:"password",validators:[d.required]},{name:"confirmPassword",label:"Conferma Password",type:"password",validators:[d.required]},{name:"type",label:"Tipo di account",type:"select",options:[{label:"Giocatore",value:I.PLAYER},{label:"Master",value:I.MASTER}],validators:[d.required]}],st=[...B,{name:"partyId",label:"Codice Party ID",type:"text",validators:[d.required]}],ct=[{name:"email",label:"Indirizzo Email",type:"text",validators:[d.required,d.email]},{name:"password",label:"Password",type:"password",validators:[d.required]}];var bt=()=>["signup"],dt=(()=>{let t=class t extends E{constructor(){super(...arguments),this.signInFormConfig=ct,this.loginRoute=s(K),this.authService=s(T)}ngOnInit(){}signIn(e){this.takeUntilDestroy(this.authService.login(e)).subscribe({next:()=>this.router.navigate([this.loginRoute])})}};t.\u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})(),t.\u0275cmp=u({type:t,selectors:[["app-signin"]],features:[S],decls:9,vars:3,consts:[[1,"card_sm"],[3,"onSubmit","formConfig"],["mat-button","",3,"routerLink"]],template:function(o,n){o&1&&(r(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),c(3," Login "),a()(),r(4,"mat-card-content")(5,"app-form",1),g("onSubmit",function(m){return n.signIn(m)}),a()(),r(6,"mat-card-actions")(7,"button",2),c(8,"Sign Up"),a()()()),o&2&&(p(5),f("formConfig",n.signInFormConfig),p(2),f("routerLink",z(2,bt)))},dependencies:[x,F,y,k,P,w,O,J],styles:[".button-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}"],changeDetection:0});let i=t;return i})();var R=class{constructor(t,l){this._document=l;let e=this._textarea=this._document.createElement("textarea"),o=e.style;o.position="fixed",o.top=o.opacity="0",o.left="-999em",e.setAttribute("aria-hidden","true"),e.value=t,e.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(e)}copy(){let t=this._textarea,l=!1;try{if(t){let e=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),l=this._document.execCommand("copy"),e&&e.focus()}}catch{}return l}destroy(){let t=this._textarea;t&&(t.remove(),this._textarea=void 0)}},lt=(()=>{let t=class t{constructor(e){this._document=e}copy(e){let o=this.beginCopy(e),n=o.copy();return o.destroy(),n}beginCopy(e){return new R(e,this._document)}};t.\u0275fac=function(o){return new(o||t)(V(H))},t.\u0275prov=G({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var ut=(()=>{let t=class t{constructor(){this.clipBoard=s(lt),this.snackBar=s(_),this.data=s(Q)}copyTioClipboard(e){this.clipBoard.copy(e),this.snackBar.open("Party ID copiato","Chiudi",{duration:2e3})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-partyId-dialog"]],decls:13,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-mini-fab","",3,"click"],["mat-dialog-actions",""],["mat-flat-button","",3,"mat-dialog-close"]],template:function(o,n){o&1&&(r(0,"h1",0),c(1),a(),r(2,"div",1)(3,"p"),c(4),a(),r(5,"code"),c(6),a(),r(7,"button",2),g("click",function(){return n.copyTioClipboard(n.data.partyId)}),r(8,"mat-icon"),c(9,"content_copy"),a()()(),r(10,"div",3)(11,"button",4),c(12,"Ok"),a()()),o&2&&(p(),M(n.data.title),p(3),M(n.data.content),p(2),M(n.data.partyId),p(5),f("mat-dialog-close",!0))},dependencies:[y,$,it,W,X,et,tt],encapsulation:2});let i=t;return i})();var ft=(()=>{let t=class t extends E{constructor(){super(...arguments),this.authService=s(T),this.dialog=s(j),this.snackbBar=s(_),this.formConfig=B,this.globalValidators=at,this.canLeave=!0,this.dialogTitle="Attenzione!",this.dialogContent="I tuoi dati andranno persi"}createUser(e){let h=e,{confirmPassword:o}=h,n=U(h,["confirmPassword"]);this.authService.signup(n).pipe(A(this.destroy$)).subscribe({next:m=>{this.canLeave=!0,m.user.type==="master"?this.partyIdDialog(m):this.router.navigate(["/"]),this.snackbBar.open("Registrazione avvenuta con successo","Chiudi",{duration:2e3})},error:m=>{console.log("erroneous",m.message)}})}partyIdDialog(e){this.dialog.open(ut,{data:{title:"Party ID",content:"Copia il tuo party Id per condividere la partita",partyId:e.user.partyId}}).afterClosed().pipe(A(this.destroy$)).subscribe(n=>{this.router.navigate(["/"])})}canDeactivate(){return this.canLeave}monitorFormState(e){console.log("form",e.value),e.value.type===I.PLAYER?this.formConfig=st:this.formConfig=B,this.canLeave=!(e.touched&&e.dirty)&&e.valid}};t.\u0275fac=(()=>{let e;return function(n){return(e||(e=D(t)))(n||t)}})(),t.\u0275cmp=u({type:t,selectors:[["app-signup"]],features:[S],decls:9,vars:2,consts:[[1,"card_md"],[3,"onSubmit","formState","formConfig","globalValidators"],["mat-button","","routerLink","/"]],template:function(o,n){o&1&&(r(0,"mat-card",0)(1,"mat-card-header")(2,"h1"),c(3,"Create User"),a()(),r(4,"mat-card-content")(5,"app-form",1),g("onSubmit",function(m){return n.createUser(m)})("formState",function(m){return n.monitorFormState(m)}),a()(),r(6,"mat-card-actions")(7,"button",2),c(8,"Sign In"),a()()()),o&2&&(p(5),f("formConfig",n.formConfig)("globalValidators",n.globalValidators))},dependencies:[x,F,y,k,P,w,O],changeDetection:0});let i=t;return i})();var gt=i=>{let t=s(j),l={title:i.dialogTitle,content:i.dialogContent};if(i.canDeactivate())return Promise.resolve(!0);{let e=t.open(ot,{data:l});return N(e.afterClosed()).then(o=>o||!1)}};var It=[{path:"",component:dt},{path:"signup",component:ft,canDeactivate:[gt]}],ht=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=b({type:t}),t.\u0275inj=v({imports:[L.forChild(It),L]});let i=t;return i})();var yt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-auth"]],decls:1,vars:0,template:function(o,n){o&1&&q(0,"router-outlet")},dependencies:[Z],encapsulation:2,changeDetection:0});let i=t;return i})();var Ee=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=b({type:t,bootstrap:[yt]}),t.\u0275inj=v({imports:[Y,ht,nt]});let i=t;return i})();export{Ee as AuthFeatureModule};