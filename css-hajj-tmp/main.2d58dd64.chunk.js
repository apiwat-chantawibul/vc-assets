(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{109:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c.n(s),a=c(34),n=c.n(a),i=c(19),r=(c(109),c(159)),d=c(160),j=c(162),o=c(161),x=c(57),b=c(58),h=c(72),m=c(67),O=c(158),g=c(11),p=c(10),u=c(0),v=function(e){Object(h.a)(c,e);var t=Object(m.a)(c);function c(e){return Object(x.a)(this,c),t.call(this,e)}return Object(b.a)(c,[{key:"render",value:function(){var e="#B9B5BE",t="#B9B5BE",c="#B9B5BE",s="500",l="500",a="500",n=Object(u.jsx)(O.a,{size:"sm",color:"secondary"}),i=Object(u.jsx)(O.a,{size:"sm",color:"secondary"}),j=Object(u.jsx)(O.a,{size:"sm",color:"secondary"});return this.props.docReceived&&(e="green",n=Object(u.jsx)(p.a,{icon:g.c,style:{color:"green",fontSize:"1.38rem"}}),s="500"),this.props.docDataValidated&&(t="green",i=Object(u.jsx)(p.a,{icon:g.c,style:{color:"green",fontSize:"1.38rem"}}),l="500"),this.props.docIssuerValidated&&(c="green",j=Object(u.jsx)(p.a,{icon:g.c,style:{color:"green",fontSize:"1.38rem"}}),a="500"),Object(u.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-loader",alt:"logo"}),Object(u.jsx)("div",{className:"mt-4 mb-3",children:Object(u.jsx)(O.a,{size:"lg",style:{color:"rgba(5,104,57,0.5)"},type:"grow"})}),Object(u.jsx)("h4",{className:"mb-3",style:{color:"#676D75",fontWeight:"550"},children:"Loading Data ..."}),Object(u.jsxs)("div",{style:{width:"fit-content",textAlign:"left",whiteSpace:"nowrap",margin:0,padding:0},children:[Object(u.jsxs)(r.a,{children:[Object(u.jsx)(d.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:n}),Object(u.jsx)(d.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:e,fontWeight:s},children:"   Retrieving Certificate"})})]}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(d.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:i}),Object(u.jsx)(d.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:t,fontWeight:l},children:"   Checking Data Correctness"})})]}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(d.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:j}),Object(u.jsx)(d.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:c,fontWeight:a},children:"   Verifying Authenticity of Issuer"})})]})]})]})})}}]),c}(s.Component),f=function(e){Object(h.a)(c,e);var t=Object(m.a)(c);function c(e){return Object(x.a)(this,c),t.call(this,e)}return Object(b.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-err",alt:"logo"}),!0===this.props.isUnableRetrieveCert&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{class:"mt-5",style:{overflowWrap:"break-word",color:"rgb(103, 109, 117)",fontWeight:"600"},children:"Cannot retrieve the requested certificate"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{style:{paddingLeft:"4%",paddingRight:"4%",overflowWrap:"break-word",textAlign:"center"},children:"If you are recently issued with a certificate, please wait one working day before the certificate is ready. For further information, please contact DDC Thailand."})]}),0!==this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(u.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is invalid"}),0===this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(u.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is canceled"})]})})}}]),c}(s.Component),y=c(93),N=c.n(y),w=function(e){var t=e.result,c=Object(s.useState)(null),l=Object(i.a)(c,2),a=l[0],n=l[1],x=Object(s.useState)(!0),b=Object(i.a)(x,2),h=b[0],m=b[1],O=Object(s.useState)(!0),y=Object(i.a)(O,2),w=y[0],C=y[1],_=Object(s.useState)(!0),k=Object(i.a)(_,2),A=k[0],D=k[1],S=Object(s.useState)(!0),R=Object(i.a)(S,2),V=R[0],I=R[1],W=Object(s.useState)(!1),z=Object(i.a)(W,2),F=z[0],L=z[1],B=Object(s.useState)(null),T=Object(i.a)(B,2),M=T[0],E=T[1],H=Object(s.useState)(!1),Y=Object(i.a)(H,2),U=(Y[0],Y[1],Object(s.useState)(null)),P=Object(i.a)(U,2),G=P[0],J=P[1],X=Object(s.useState)(!1),q=Object(i.a)(X,2),K=q[0],Z=q[1],Q=Object(s.useState)({MENINGGOCOCCAL:"Meningococcal Disease",INF:"Influenza","YELLOW FEVER":"Yellow Fever",CHO:"Cholera","COVID-19":"Coronavirus disease (COVID-19)"}),$=Object(i.a)(Q,2),ee=$[0];$[1];if(Object(s.useEffect)((function(){var e=t.replace(/'/g,'"'),c=(e=JSON.parse(e)).qr_token;E(c),c&&fetch("/get_user_data/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){if("results"in e&&"data not found"===e.results&&(L(!0),Z(!0)),m(!1),0===e.cert_status)J(e.cert_status),L(!0);else{J(e.cert_status);var t=e.signature.public_key,c=function(e){(e=e.replace(/^0x/,"")).length%2!=0&&console.log("WARNING: expecting an even number of characters in the hexString");var t=e.match(/[G-Z\s]/i);t&&console.log("WARNING: found non-hex characters",t);var c=e.match(/[\dA-F]{2}/gi).map((function(e){return parseInt(e,16)}));return new Uint8Array(c).buffer}(e.signature.sig_val),s=(l=e.user_data,(new TextEncoder).encode(l));window.crypto.subtle.importKey("jwk",t,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]).then((function(t){window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},t,c,s).then((function(t){setTimeout((function(){return C(!1)}),750),setTimeout((function(){return D(!1)}),1e3),setTimeout((function(){n(JSON.parse(e.user_data)),I(!1)}),2410)})).catch((function(e){console.error(e),L(!0),I(!1)}))})).catch((function(e){console.error(e),L(!0),I(!1)}))}var l})).catch((function(e){console.log(e),L(!0),I(!1)}))}),[]),F)return Object(u.jsx)(f,{isCertCanceled:G,isUnableRetrieveCert:K});if(h||w||A||V)return Object(u.jsx)(v,{docReceived:!h,docDataValidated:!w,docIssuerValidated:!A});if(a){var te,ce=[];0!=a.vaccines.length&&(ce=a.vaccines.sort((function(e,t){return Date.parse(new Date(e.vacc_date.split("-").reverse().join("-")))-Date.parse(new Date(t.vacc_date.split("-").reverse().join("-")))}))),te=document.createElement("canvas"),N.a.toCanvas(te,"https://cert-intervac.ddc.moph.go.th/"+M,{errorCorrectionLevel:"H"});var se=te.toDataURL();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header mt-4 mb-1",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo-full.png",className:"App-logo mb-1",alt:"logo"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"title-div",style:{marginTop:"2%"},children:Object(u.jsx)("h3",{className:"title",children:"International Vaccination Certificate"})}),Object(u.jsx)("div",{className:"d-block d-md-none",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:[Object(u.jsx)("img",{src:se,style:{width:"75%",maxWidth:"220px",minWidth:"200px"}}),Object(u.jsx)("h6",{className:"mt-2",children:Object(u.jsxs)("b",{children:[a.pre_name," ",a.f_name," ",a.l_name]})})]})}),Object(u.jsx)("div",{className:"d-none d-md-block",style:{position:"absolute",top:10,right:"7vw"},children:Object(u.jsx)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:Object(u.jsx)("img",{src:se,style:{width:"16vw",maxWidth:"170px",minWidth:"152px"}})})}),Object(u.jsx)("div",{className:"container-header",style:{width:"100%"},children:Object(u.jsxs)("div",{style:{width:"100%"},children:[Object(u.jsx)("div",{className:"d-none d-md-block",children:Object(u.jsxs)(r.a,{className:"row-styling mb-1",style:{marginLeft:"max(5px,0.1%)"},children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"3",sm:"3",md:"2",lg:"2",xl:"2",children:Object(u.jsx)("h5",{className:"info-title",children:"Name :  "})}),Object(u.jsx)(d.a,{xs:"8",sm:"8",md:"9",lg:"9",xl:"9",children:Object(u.jsx)("h6",{children:Object(u.jsxs)("b",{children:[a.pre_name," ",a.f_name," ",a.l_name]})})})]})}),Object(u.jsxs)(r.a,{xs:"1",sm:"1",md:"2",lg:"2",xl:"2",children:[Object(u.jsxs)(d.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(u.jsxs)(r.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",children:"User Info"})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Nationality"})}),Object(u.jsx)(d.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:a.is_thai?"Thai":a.nation})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Passport Number"})}),Object(u.jsx)(d.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:a.passport_no})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Date of Birth"})}),Object(u.jsx)(d.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsxs)("p",{children:[a.has_bd_day?a.birth_date.split("-")[0]:"XX","-",a.has_bd_month?a.birth_date.split("-")[1]:"XX","-",a.birth_date.split("-")[2]]})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Sex"})}),Object(u.jsxs)(d.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:[("m"===a.sex||"M"===a.sex)&&Object(u.jsx)("p",{children:"Male"}),("f"===a.sex||"F"===a.sex)&&Object(u.jsx)("p",{children:"Female"}),"m"!==a.sex&&"M"!==a.sex&&"f"!==a.sex&&"F"!==a.sex&&Object(u.jsx)("p",{children:a.sex.toUpperCase()})]})]})]}),Object(u.jsxs)(d.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(u.jsxs)(r.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",children:"Certificate Info"})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Certificate Identifier"})}),Object(u.jsx)(d.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:a.cert_id})})]})]})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-5",children:[Object(u.jsx)(d.a,{className:"d-none d-md-block",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{className:"d-none d-md-block",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsx)("h5",{className:"info-title",children:"Vaccination Record"})}),Object(u.jsx)(d.a,{className:"d-block d-md-none",style:{paddingLeft:"max(5%,10px)"},children:Object(u.jsxs)(r.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(d.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{xs:"6",sm:"6",md:"6",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",style:{paddingTop:"1px",paddingBottom:"1px"},children:"Vaccination Record"})})]})})]}),Object(u.jsxs)(r.a,{className:"row-styling pt-3 mb-3",style:{backgroundColor:"#f0f0f0"},children:[Object(u.jsx)(d.a,{style:{padding:"0",margin:"0"},xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsxs)(d.a,{className:"d-block d-md-none",style:{paddingRight:"5%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:[0==ce.length&&Object(u.jsx)(r.a,{children:Object(u.jsx)("p",{style:{color:"red"},children:Object(u.jsx)("i",{children:"Record not found"})})}),ce.length>0&&Object.keys(ee).map((function(e,t){var c=[];ce.find((function(t){t.vacc_disease===e&&c.push(t)}));var s=["col-dose-n-blue","col-dose-n-orange","col-dose-n-yellow","col-dose-n-tomato","col-dose-n-green"],l=["col-vc-detail-white"],a=[];return c.map((function(e,c){e.vacc_expired?Date.parse(new Date(e.vacc_expired.split("-").reverse().join("-")))>=Date.parse(new Date)&&(0==c&&a.push(Object(u.jsx)("h4",{className:"detail-txt-focus mb-2 pb-1",children:ee[e.vacc_disease]})),a.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.a,{className:"shadow mb-4 ",style:{borderRadius:"6px"},children:[Object(u.jsx)(d.a,{className:"pt-3 pb-3 ".concat(s[t%s.length]),xs:"2",sm:"2",children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h5",{children:"Dose"}),Object(u.jsx)("span",{style:{fontSize:11},children:"Number"}),Object(u.jsx)("h2",{className:"mt-2",children:c+1})]})}),Object(u.jsxs)(d.a,{className:"pt-4 pb-3 ".concat(l[t%l.length]),xs:"10",sm:"10",children:[Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.e})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Name"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("h5",{className:"detail-txt-focus",children:e.vacc_name})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.b})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccination Date"})})]}),Object(u.jsxs)(d.a,{xs:"10",sm:"7",children:[Object(u.jsx)("p",{className:"detail-txt-focus",children:e.vacc_date}),e.vacc_expired?Object(u.jsxs)("p",{className:"mb-1",style:{color:"black"},children:[" (Expire : ",e.vacc_expired,")"]}):null]})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Batch Number"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_lotno})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.a})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Manufacturer"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_manufac})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.d})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Administering Center"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.adm_center})})]}),e.authorize_by&&Object(u.jsxs)(r.a,{className:"row-vc-detail",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.f})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Authorizer"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsxs)("p",{children:[e.authorize_by," (Doctor)"]})})]})]})]})}))):(0==c&&a.push(Object(u.jsx)("h4",{className:"detail-txt-focus mb-2 pb-1",children:ee[e.vacc_disease]})),a.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.a,{className:"shadow mb-4 ",style:{borderRadius:"6px"},children:[Object(u.jsx)(d.a,{className:"pt-3 pb-3 ".concat(s[t%s.length]),xs:"2",sm:"2",children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h5",{children:"Dose"}),Object(u.jsx)("span",{style:{fontSize:11},children:"Number"}),Object(u.jsx)("h2",{className:"mt-2",children:c+1})]})}),Object(u.jsxs)(d.a,{className:"pt-4 pb-3 ".concat(l[t%l.length]),xs:"10",sm:"10",children:[Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.e})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Name"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("h5",{className:"detail-txt-focus",children:e.vacc_name})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.b})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccination Date"})})]}),Object(u.jsxs)(d.a,{xs:"10",sm:"7",children:[Object(u.jsx)("p",{className:"detail-txt-focus",children:e.vacc_date}),e.vacc_expired?Object(u.jsxs)("p",{className:"mb-1",style:{color:"black"},children:[" (Expire : ",e.vacc_expired,")"]}):null]})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Batch Number"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_lotno})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.a})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Manufacturer"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_manufac})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail",children:[Object(u.jsxs)(d.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.d})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Administering Center"})})]}),Object(u.jsx)(d.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.adm_center})})]})]})]})})))})),a}))]}),Object(u.jsx)(d.a,{className:"d-none d-md-block",style:{paddingRight:"2%",overflowX:"scroll"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsxs)(j.a,{size:"large",className:"shadow",children:[Object(u.jsx)(j.a.Header,{children:Object(u.jsxs)(j.a.Row,{children:[Object(u.jsx)(j.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Dose Number"})}),Object(u.jsx)(j.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Name of Vaccine"})}),Object(u.jsx)(j.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsxs)("p",{className:"table-title",children:["Date of Vaccination / ",Object(u.jsx)("br",{})," Valid Until"]})}),Object(u.jsx)(j.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Vaccine Batch Number"})}),Object(u.jsx)(j.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Vaccine Manufacturer"})}),Object(u.jsx)(j.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Administering Center"})}),Object(u.jsx)(j.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Authorizer"})})]})}),Object(u.jsxs)(j.a.Body,{children:[0==ce.length&&Object(u.jsx)(j.a.Row,{children:Object(u.jsx)(j.a.Cell,{colSpan:"7",textAlign:"center",children:Object(u.jsx)("p",{children:Object(u.jsx)("i",{children:"Record not found"})})})}),ce.length>0&&Object.keys(ee).map((function(e,t){var c=[];ce.find((function(t){t.vacc_disease===e&&c.push(t)}));var s=["white"],l=["linear-gradient(#3391c7,#3391c7)","linear-gradient(#db703c,#db703c)","linear-gradient(#e3c92b,#e3c92b)","linear-gradient(#e27c6f,#e27c6f)","linear-gradient(#5c873f,#5c873f)"],a=[];return c.map((function(e,c){e.vacc_expired?Date.parse(new Date(e.vacc_expired.split("-").reverse().join("-")))>=Date.parse(new Date)&&(0==c&&a.push(Object(u.jsx)(j.a.Row,{children:Object(u.jsx)(j.a.Cell,{colSpan:"7",textAlign:"left",style:{backgroundColor:"#f0f0f0"},children:Object(u.jsx)("h5",{className:"mt-1",style:{fontWeight:"550"},children:ee[e.vacc_disease]})})})),a.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(j.a.Row,{children:[Object(u.jsx)(j.a.Cell,{style:{backgroundImage:l[t%l.length]},children:Object(u.jsx)(o.a,{className:"table-dose-title",as:"h5",textAlign:"center",children:c+1})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},singleLine:!0,children:Object(u.jsx)("p",{style:{fontWeight:"550",whiteSpace:"initial"},children:e.vacc_name})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsxs)("p",{children:[e.vacc_date," ",e.vacc_expired?"/":null," ",Object(u.jsx)("br",{}),e.vacc_expired?e.vacc_expired:null]})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_lotno})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_manufac})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.adm_center})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:e.authorize_by?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:e.authorize_by}),Object(u.jsx)("n",{}),Object(u.jsx)("p",{children:"(Doctor)"})]}):Object(u.jsx)("p",{children:"-"})})]})}))):(0==c&&a.push(Object(u.jsx)(j.a.Row,{children:Object(u.jsx)(j.a.Cell,{colSpan:"7",textAlign:"left",style:{backgroundColor:"#f0f0f0"},children:Object(u.jsx)("h5",{className:"mt-1",style:{fontWeight:"550"},children:ee[e.vacc_disease]})})})),a.push(Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(j.a.Row,{children:[Object(u.jsx)(j.a.Cell,{style:{backgroundImage:l[t%l.length]},children:Object(u.jsx)(o.a,{className:"table-dose-title",as:"h5",textAlign:"center",children:c+1})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},singleLine:!0,children:Object(u.jsx)("p",{style:{fontWeight:"550",whiteSpace:"initial"},children:e.vacc_name})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsxs)("p",{children:[e.vacc_date," ",e.vacc_expired?"/":null," ",Object(u.jsx)("br",{}),e.vacc_expired?e.vacc_expired:null]})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_lotno})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_manufac})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:Object(u.jsx)("p",{children:e.adm_center})}),Object(u.jsx)(j.a.Cell,{style:{backgroundColor:s[t%s.length]},textAlign:"center",children:e.authorize_by?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:e.authorize_by}),Object(u.jsx)("n",{}),Object(u.jsx)("p",{children:"(Doctor)"})]}):Object(u.jsx)("p",{children:"-"})})]})})))})),a}))]})]})}),Object(u.jsx)(d.a,{className:"d-none d-md-block",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{className:"d-none d-md-block",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsx)("p",{className:"mt-4",style:{color:"black"},children:"* Date Format: DD-MM-YYYY"})}),Object(u.jsx)(d.a,{className:"d-block d-md-none",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(d.a,{className:"d-block d-md-none",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsx)("p",{className:"mt-0 mb-2",style:{color:"gray"},children:"* Date Format: DD-MM-YYYY"})})]}),ce.length>0&&Object(u.jsxs)("div",{className:"d-block d-sm-none",style:{margin:"0 5% 5% 8%"},children:[Object(u.jsx)("h5",{className:"mb-2 mt-0",style:{textAlign:"left"},children:"Icon Representation"}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.e})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Name of Vaccine"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.b})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Date of Vaccination"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Batch Number"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.a})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Manufacturer"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.d})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Administering Center"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.f})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Authorizer"})]})]})]})}),Object(u.jsxs)("footer",{className:"mb-2 mt-5",style:{paddingLeft:"6%",paddingRight:"6%"},children:[Object(u.jsx)("hr",{}),Object(u.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"The electronic certificate is provided by Department of Disease Control Ministry of Public Health, Thailand."}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"Certificate authenticity is protected by an RSA digital signature"}),Object(u.jsx)("p",{style:{color:"gray",marginTop:10},children:"DDC , MOPH THAILAND"})]})]})]})}},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,163)).then((function(t){var c=t.getCLS,s=t.getFID,l=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),l(e),a(e),n(e)}))};c(143);n.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(w,{result:document.getElementById("content").getAttribute("result")})}),document.getElementById("root")),C()}},[[144,1,2]]]);
//# sourceMappingURL=main.2d58dd64.chunk.js.map