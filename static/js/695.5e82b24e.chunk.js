"use strict";(self.webpackChunkhttps_github_com_sulphitic786_profile=self.webpackChunkhttps_github_com_sulphitic786_profile||[]).push([[695],{7695:function(e,n,i){i.r(n),i.d(n,{default:function(){return je}});var r=i(6222),o=i(6314),l=i(6934),t=i(4554),s=i(5574),a=i(8489),c=i(678),d=i(3738),u=i(6151),h=i(5289),x=i(7123),m=i(9157),Z=i(5661),j=i(5523),p=i(493),g=i(4852),f=i(9900),v=i(1419),b=i(8970),C=i(2791),y=i(184),k=["onClose","value","open"],w=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function S(e){var n=e.onClose,i=e.value,r=e.open,o=(0,d.Z)(e,k),l=(0,C.useState)(i),t=(0,c.Z)(l,2),s=t[0],p=t[1],g=(0,C.useRef)(null);(0,C.useEffect)((function(){r||p(i)}),[i,r]);return(0,y.jsxs)(h.Z,(0,a.Z)((0,a.Z)({maxWidth:"xs",disableEscapeKeyDown:!0,TransitionProps:{onExiting:function(){null!==g.current&&g.current.focus()}},"aria-labelledby":"confirmation-dialog-title",open:r},o),{},{children:[(0,y.jsx)(Z.Z,{id:"confirmation-dialog-title",children:"Phone Ringtone"}),(0,y.jsx)(m.Z,{dividers:!0,children:(0,y.jsx)(b.Z,{ref:g,"aria-label":"Ringtone",name:"ringtone",value:s,onChange:function(e,n){return p(n)},children:w.map((function(e){return(0,y.jsx)(j.Z,{value:e,control:(0,y.jsx)(v.Z,{}),label:e},e)}))})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:function(){return n()},children:"Cancel"}),(0,y.jsx)(u.Z,{onClick:function(){return n(s)},color:"primary",children:"Ok"})]})]}))}var P=(0,l.ZP)("div")((function(e){return{width:"100%",maxWidth:360,backgroundColor:e.theme.palette.background.paper,"& .paper":{width:"80%",maxHeight:435}}}));function T(){var e=C.useState(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=C.useState("Dione"),l=(0,c.Z)(o,2),t=l[0],s=l[1];return(0,y.jsx)(P,{children:(0,y.jsxs)(p.Z,{component:"div",role:"list",children:[(0,y.jsx)(g.ZP,{button:!0,divider:!0,disabled:!0,role:"listitem",children:(0,y.jsx)(f.Z,{primary:"Interruptions"})}),(0,y.jsx)(g.ZP,{button:!0,divider:!0,"aria-controls":"ringtone-menu","aria-label":"Phone ringtone",onClick:function(){r(!0)},role:"listitem",children:(0,y.jsx)(f.Z,{primary:"Phone ringtone",secondary:t})}),(0,y.jsx)(g.ZP,{button:!0,divider:!0,disabled:!0,role:"listitem",children:(0,y.jsx)(f.Z,{primary:"Default notification ringtone",secondary:"Tethys"})}),(0,y.jsx)(S,{keepMounted:!0,open:i,value:t,className:"paper",id:"ringtone-menu",onClose:function(e){r(!1),e&&s(e)}})]})})}var F=i(9823),D=i(3400),G=i(890),O=(0,l.ZP)(Z.Z)((function(e){var n=e.theme;return{margin:0,padding:n.spacing(2),"& .closeButton":{position:"absolute",right:n.spacing(1),top:n.spacing(1),color:n.palette.grey[500]}}})),W=function(e){var n=e.children,i=e.onClose;return(0,y.jsxs)(O,{disableTypography:!0,children:[(0,y.jsx)(G.Z,{variant:"h6",children:n}),i?(0,y.jsx)(D.Z,{"aria-label":"Close",className:"closeButton",onClick:i,children:(0,y.jsx)(F.Z,{})}):null]})},_=(0,l.ZP)(m.Z)((function(e){return{"&.root":{padding:e.theme.spacing(2)}}})),A=(0,l.ZP)(x.Z)((function(e){return{"&.root":{margin:0,padding:e.theme.spacing(1)}}})),B=function(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=function(){return r(!1)};return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:function(){return r(!0)},children:"Open dialog"}),(0,y.jsxs)(h.Z,{onClose:o,"aria-labelledby":"customized-dialog-title",open:i,children:[(0,y.jsx)(W,{id:"customized-dialog-title",onClose:o,children:"Modal title"}),(0,y.jsxs)(_,{dividers:!0,children:[(0,y.jsx)(G.Z,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),(0,y.jsx)(G.Z,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),(0,y.jsx)(G.Z,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),(0,y.jsx)(A,{children:(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Save changes"})})]})]})},L=i(1691),z=i(5931),N=(0,C.forwardRef)((function(e,n){return(0,y.jsx)(z.Z,(0,a.Z)({direction:"up",ref:n},e))}));function M(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=function(){return r(!1)};return(0,y.jsxs)("div",{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return r(!0)},children:"Slide in alert dialog"}),(0,y.jsxs)(h.Z,{open:i,keepMounted:!0,onClose:o,TransitionComponent:N,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[(0,y.jsx)(Z.Z,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),(0,y.jsx)(m.Z,{children:(0,y.jsx)(L.Z,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Disagree"}),(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Agree"})]})]})]})}var R=i(3006);function V(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=function(){return r(!1)};return(0,y.jsxs)(t.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return r(!0)},children:"Open form dialog"}),(0,y.jsxs)(h.Z,{open:i,onClose:o,"aria-labelledby":"form-dialog-title",children:[(0,y.jsx)(Z.Z,{id:"form-dialog-title",children:"Subscribe"}),(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(L.Z,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,y.jsx)(R.Z,{fullWidth:!0,autoFocus:!0,id:"name",type:"email",margin:"dense",label:"Email Address"})]}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"secondary",onClick:o,children:"Cancel"}),(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Subscribe"})]})]})]})}var E=i(4395),U=i(3967),q=i(4721),H=i(4663),I=i(6748),K=(0,C.forwardRef)((function(e,n){return(0,y.jsx)(z.Z,(0,a.Z)({direction:"up",ref:n},e))}));function Y(){var e=(0,U.Z)(),n=(0,C.useState)(!1),i=(0,c.Z)(n,2),r=i[0],o=i[1],l=function(){return o(!1)};return(0,y.jsxs)(t.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return o(!0)},children:"Open full-screen dialog"}),(0,y.jsxs)(h.Z,{fullScreen:!0,open:r,onClose:l,TransitionComponent:K,children:[(0,y.jsx)(E.Z,{sx:{position:"relative"},children:(0,y.jsxs)(H.Z,{children:[(0,y.jsx)(D.Z,{edge:"start",color:"inherit",onClick:l,"aria-label":"Close",children:(0,y.jsx)(F.Z,{})}),(0,y.jsx)(I.H6,{sx:{flex:1,marginLeft:e.spacing(2)},children:"Sound"}),(0,y.jsx)(u.Z,{color:"inherit",onClick:l,children:"save"})]})}),(0,y.jsxs)(p.Z,{children:[(0,y.jsx)(g.ZP,{children:(0,y.jsx)(f.Z,{primary:"Phone ringtone",secondary:"Titania"})}),(0,y.jsx)(q.Z,{}),(0,y.jsx)(g.ZP,{children:(0,y.jsx)(f.Z,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var J=i(8096),Q=i(829),X=i(3786),$=i(8406),ee=i(9955),ne=(0,l.ZP)("div")((function(e){var n=e.theme;return{"& form":{display:"flex",margin:"auto",flexDirection:"column",width:"fit-content"},"& .formControl":{marginTop:n.spacing(2),minWidth:120},"& .formControlLabel":{marginTop:n.spacing(1)}}}));function ie(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=(0,C.useState)(!0),l=(0,c.Z)(o,2),t=l[0],s=l[1],a=(0,C.useState)("sm"),d=(0,c.Z)(a,2),p=d[0],g=d[1];function f(){r(!1)}return(0,y.jsxs)(ne,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){r(!0)},children:"Open max-width dialog"}),(0,y.jsxs)(h.Z,{open:i,fullWidth:t,maxWidth:p,onClose:f,"aria-labelledby":"max-width-dialog-title",children:[(0,y.jsx)(Z.Z,{id:"max-width-dialog-title",children:"Optional sizes"}),(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(L.Z,{children:"You can set my maximum width and whether to adapt or not."}),(0,y.jsxs)("form",{noValidate:!0,children:[(0,y.jsxs)(J.Z,{className:"formControl",children:[(0,y.jsx)(Q.Z,{htmlFor:"max-width",children:"maxWidth"}),(0,y.jsxs)($.Z,{value:p,onChange:function(e){g(e.target.value)},inputProps:{name:"max-width",id:"max-width"},children:[(0,y.jsx)(X.Z,{value:!1,children:"false"}),(0,y.jsx)(X.Z,{value:"xs",children:"xs"}),(0,y.jsx)(X.Z,{value:"sm",children:"sm"}),(0,y.jsx)(X.Z,{value:"md",children:"md"}),(0,y.jsx)(X.Z,{value:"lg",children:"lg"}),(0,y.jsx)(X.Z,{value:"xl",children:"xl"})]})]}),(0,y.jsx)(j.Z,{className:"formControlLabel",label:"Full width",control:(0,y.jsx)(ee.Z,{checked:t,onChange:function(e){s(e.target.checked)},value:"fullWidth"})})]})]}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(u.Z,{onClick:f,color:"primary",children:"Close"})})]})]})}var re=i(5193);function oe(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=(0,U.Z)(),l=(0,re.Z)(o.breakpoints.down("sm")),s=function(){return r(!1)};return(0,y.jsxs)(t.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return r(!0)},children:"Open responsive dialog"}),(0,y.jsxs)(h.Z,{fullScreen:l,open:i,onClose:s,"aria-labelledby":"responsive-dialog-title",children:[(0,y.jsx)(Z.Z,{id:"responsive-dialog-title",children:"Use Google's location service?"}),(0,y.jsx)(m.Z,{children:(0,y.jsx)(L.Z,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{onClick:s,color:"primary",children:"Disagree"}),(0,y.jsx)(u.Z,{onClick:s,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}function le(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=function(){return r(!1)};return(0,y.jsxs)(t.Z,{children:[(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return r(!0)},children:"Open alert dialog"}),(0,y.jsxs)(h.Z,{open:i,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,y.jsx)(Z.Z,{id:"alert-dialog-title",children:"Use Google's location service?"}),(0,y.jsx)(m.Z,{children:(0,y.jsx)(L.Z,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(u.Z,{onClick:o,color:"primary",children:"Disagree"}),(0,y.jsx)(u.Z,{onClick:o,color:"primary",autoFocus:!0,children:"Agree"})]})]})]})}var te=i(2419),se=i(501),ae=i(3044),ce=i(427),de=i(653),ue=["onClose","selectedValue"],he=["username@gmail.com","user02@gmail.com"];function xe(e){var n=e.onClose,i=e.selectedValue,r=(0,d.Z)(e,ue);function o(e){n(e)}return(0,y.jsxs)(h.Z,(0,a.Z)((0,a.Z)({onClose:function(){n(i)},"aria-labelledby":"simple-dialog-title"},r),{},{children:[(0,y.jsx)(Z.Z,{id:"simple-dialog-title",children:"Set backup account"}),(0,y.jsxs)(p.Z,{children:[he.map((function(e){return(0,y.jsxs)(g.ZP,{button:!0,onClick:function(){return o(e)},children:[(0,y.jsx)(de.Z,{children:(0,y.jsx)(ae.Z,{sx:{backgroundColor:ce.Z[100],color:ce.Z[600]},children:(0,y.jsx)(se.Z,{})})}),(0,y.jsx)(f.Z,{primary:e})]},e)})),(0,y.jsxs)(g.ZP,{button:!0,onClick:function(){return o("addAccount")},children:[(0,y.jsx)(de.Z,{children:(0,y.jsx)(ae.Z,{children:(0,y.jsx)(te.Z,{})})}),(0,y.jsx)(f.Z,{primary:"add account"})]})]})]}))}function me(){var e=(0,C.useState)(!1),n=(0,c.Z)(e,2),i=n[0],r=n[1],o=(0,C.useState)("user02@gmail.com"),l=(0,c.Z)(o,2),s=l[0],a=l[1];return(0,y.jsxs)(t.Z,{children:[(0,y.jsxs)(G.Z,{variant:"subtitle1",children:["Selected: ",s]}),(0,y.jsx)("br",{}),(0,y.jsx)(u.Z,{variant:"outlined",color:"primary",onClick:function(){return r(!0)},children:"Open simple dialog"}),(0,y.jsx)(xe,{selectedValue:s,open:i,onClose:function(e){r(!1),a(e)}})]})}var Ze=(0,l.ZP)("div")((function(e){var n,i=e.theme;return n={margin:"30px"},(0,r.Z)(n,i.breakpoints.down("sm"),{margin:"16px"}),(0,r.Z)(n,"& .breadcrumb",(0,r.Z)({marginBottom:"30px"},i.breakpoints.down("sm"),{marginBottom:"16px"})),n})),je=function(){return(0,y.jsxs)(Ze,{children:[(0,y.jsx)(t.Z,{className:"breadcrumb",children:(0,y.jsx)(s.aG,{routeSegments:[{name:"Material",path:"/material"},{name:"Dialog"}]})}),(0,y.jsxs)(o.Z,{spacing:3,children:[(0,y.jsx)(s.sF,{title:"simple Dialog",children:(0,y.jsx)(me,{})}),(0,y.jsx)(s.sF,{title:"alert dialog",children:(0,y.jsx)(le,{})}),(0,y.jsx)(s.sF,{title:"transition",children:(0,y.jsx)(M,{})}),(0,y.jsx)(s.sF,{title:"form dialog",children:(0,y.jsx)(V,{})}),(0,y.jsx)(s.sF,{title:"customized dialog",children:(0,y.jsx)(B,{})}),(0,y.jsx)(s.sF,{title:"full-screen dialog",children:(0,y.jsx)(Y,{})}),(0,y.jsx)(s.sF,{title:"optimized size dialog",children:(0,y.jsx)(ie,{})}),(0,y.jsx)(s.sF,{title:"responsive dialog",children:(0,y.jsx)(oe,{})}),(0,y.jsx)(s.sF,{title:"confirmation dialog",children:(0,y.jsx)(T,{})})]})]})}}}]);
//# sourceMappingURL=695.5e82b24e.chunk.js.map