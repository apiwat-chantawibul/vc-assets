(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{109:function(e,t,s){},144:function(e,t,s){"use strict";s.r(t);var c=s(1),l=s.n(c),i=s(34),n=s.n(i),a=s(23),r=(s(109),s(159)),j=s(160),d=s(162),x=s(161),b=s(57),m=s(58),h=s(72),o=s(67),O=s(158),g=s(15),p=s(14),u=s(0),f=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(e){return Object(b.a)(this,s),t.call(this,e)}return Object(m.a)(s,[{key:"render",value:function(){var e="#B9B5BE",t="#B9B5BE",s="#B9B5BE",c="500",l="500",i="500",n=Object(u.jsx)(O.a,{size:"sm",color:"secondary"}),a=Object(u.jsx)(O.a,{size:"sm",color:"secondary"}),d=Object(u.jsx)(O.a,{size:"sm",color:"secondary"});return this.props.docReceived&&(e="green",n=Object(u.jsx)(p.a,{icon:g.c,style:{color:"green",fontSize:"1.38rem"}}),c="500"),this.props.docDataValidated&&(t="green",a=Object(u.jsx)(p.a,{icon:g.c,style:{color:"green",fontSize:"1.38rem"}}),l="500"),this.props.docIssuerValidated&&(s="green",d=Object(u.jsx)(p.a,{icon:g.c,style:{color:"green",fontSize:"1.38rem"}}),i="500"),Object(u.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-loader",alt:"logo"}),Object(u.jsx)("div",{className:"mt-4 mb-3",children:Object(u.jsx)(O.a,{size:"lg",style:{color:"rgba(5,104,57,0.5)"},type:"grow"})}),Object(u.jsx)("h4",{className:"mb-3",style:{color:"#676D75",fontWeight:"550"},children:"Loading Data ..."}),Object(u.jsxs)("div",{style:{width:"fit-content",textAlign:"left",whiteSpace:"nowrap",margin:0,padding:0},children:[Object(u.jsxs)(r.a,{children:[Object(u.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:n}),Object(u.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:e,fontWeight:c},children:"   Retrieving Certificate"})})]}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:a}),Object(u.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:t,fontWeight:l},children:"   Checking Data Correctness"})})]}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:d}),Object(u.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(u.jsx)("p",{className:"mb-1",style:{color:s,fontWeight:i},children:"   Verifying Authenticity of Issuer"})})]})]})]})})}}]),s}(c.Component),y=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(e){return Object(b.a)(this,s),t.call(this,e)}return Object(m.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-err",alt:"logo"}),Object(u.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is invalid"})]})})}}]),s}(c.Component),v=s(93),N=s.n(v),w=function(e){var t=e.result,s=Object(c.useState)(null),l=Object(a.a)(s,2),i=l[0],n=l[1],b=Object(c.useState)(!0),m=Object(a.a)(b,2),h=m[0],o=m[1],O=Object(c.useState)(!0),v=Object(a.a)(O,2),w=v[0],A=v[1],C=Object(c.useState)(!0),_=Object(a.a)(C,2),S=_[0],D=_[1],k=Object(c.useState)(!0),I=Object(a.a)(k,2),R=I[0],V=I[1],B=Object(c.useState)(!1),T=Object(a.a)(B,2),W=T[0],L=T[1],H=Object(c.useState)(null),z=Object(a.a)(H,2),E=z[0],P=z[1],M=Object(c.useState)(!1),F=Object(a.a)(M,2);F[0],F[1];if(Object(c.useEffect)((function(){var e=t.replace(/'/g,'"'),s=(e=JSON.parse(e)).qr_token;P(s),s&&fetch("/get_user_data/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){o(!1);var t,s=e.result.signature.public_key,c=function(e){(e=e.replace(/^0x/,"")).length%2!=0&&console.log("WARNING: expecting an even number of characters in the hexString");var t=e.match(/[G-Z\s]/i);t&&console.log("WARNING: found non-hex characters",t);var s=e.match(/[\dA-F]{2}/gi).map((function(e){return parseInt(e,16)}));return new Uint8Array(s).buffer}(e.result.signature.sig_val),l=(t=e.result.user_data,(new TextEncoder).encode(t));window.crypto.subtle.importKey("jwk",s,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]).then((function(t){window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},t,c,l).then((function(t){t?(setTimeout((function(){return A(!1)}),750),setTimeout((function(){return D(!1)}),1e3),setTimeout((function(){n(JSON.parse(e.result.user_data)),V(!1)}),2410)):setTimeout((function(){L(!0),V(!1)}),800)})).catch((function(e){console.error(e),L(!0),V(!1)}))})).catch((function(e){console.error(e),L(!0),V(!1)}))})).catch((function(e){console.log(e),L(!0),V(!1)}))}),[]),W)return Object(u.jsx)(y,{});if(h||w||S||R)return Object(u.jsx)(f,{docReceived:!h,docDataValidated:!w,docIssuerValidated:!S});if(i){var J,U=[];0!=i.vaccines.length&&(U=i.vaccines.sort((function(e,t){return Date.parse(new Date(e.vacc_date.split("-").reverse().join("-")))-Date.parse(new Date(t.vacc_date.split("-").reverse().join("-")))}))),J=document.createElement("canvas"),N.a.toCanvas(J,"https://cert-intervac.ddc.moph.go.th/"+E,{errorCorrectionLevel:"H"});var X=J.toDataURL();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header mt-4 mb-1",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo-full.png",className:"App-logo mb-1",alt:"logo"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"title-div",style:{marginTop:"2%"},children:Object(u.jsx)("h3",{className:"title",children:"International COVID-19 Vaccination Certificate"})}),Object(u.jsx)("div",{className:"d-block d-md-none",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsxs)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:[Object(u.jsx)("img",{src:X,style:{width:"75%",maxWidth:"220px",minWidth:"200px"}}),Object(u.jsx)("h6",{className:"mt-2",children:Object(u.jsxs)("b",{children:[i.pre_name," ",i.f_name," ",i.l_name]})})]})}),Object(u.jsx)("div",{className:"d-none d-md-block",style:{position:"absolute",top:10,right:"7vw"},children:Object(u.jsx)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:Object(u.jsx)("img",{src:X,style:{width:"16vw",maxWidth:"170px",minWidth:"152px"}})})}),Object(u.jsx)("div",{className:"container-header",style:{width:"100%"},children:Object(u.jsxs)("div",{style:{width:"100%"},children:[Object(u.jsx)("div",{className:"d-none d-md-block",children:Object(u.jsxs)(r.a,{className:"row-styling mb-1",style:{marginLeft:"max(5px,0.1%)"},children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"3",sm:"3",md:"2",lg:"2",xl:"2",children:Object(u.jsx)("h5",{className:"info-title",children:"Name :  "})}),Object(u.jsx)(j.a,{xs:"8",sm:"8",md:"9",lg:"9",xl:"9",children:Object(u.jsx)("h6",{children:Object(u.jsxs)("b",{children:[i.pre_name," ",i.f_name," ",i.l_name]})})})]})}),Object(u.jsxs)(r.a,{xs:"1",sm:"1",md:"2",lg:"2",xl:"2",children:[Object(u.jsxs)(j.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(u.jsxs)(r.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",children:"User Info"})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Nationality"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:i.is_thai?"Thai":i.nation})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Passport Number"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:i.passport_no})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Date of Birth"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsxs)("p",{children:[i.has_bd_day?i.birth_date.split("-")[0]:"XX","-",i.has_bd_month?i.birth_date.split("-")[1]:"XX","-",i.birth_date.split("-")[2]]})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Sex"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:i.sex.toUpperCase()})})]})]}),Object(u.jsxs)(j.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(u.jsxs)(r.a,{className:"row-styling mt-2 mb-3",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(u.jsx)("h5",{className:"info-title-strip",children:"Certificate Info"})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Certificate Status"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{style:{color:"VALID"==i.cert_status?"green":"gray"},children:Object(u.jsx)("b",{children:i.cert_status})})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Certificate Identifier"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:i.cert_id})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Issuance Date"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:i.issue_date})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-1 mb-2",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(u.jsx)("h6",{className:"info-title",children:"Certificate Issuer"})}),Object(u.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(u.jsx)("p",{children:i.cert_issuer})})]})]})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-5",children:[Object(u.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsx)(j.a,{xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsx)("h5",{className:"info-title",children:"Vaccination Record"})})]}),Object(u.jsxs)(r.a,{className:"row-styling mt-3 mb-3",children:[Object(u.jsx)(j.a,{style:{padding:"0",margin:"0"},xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(u.jsxs)(j.a,{className:"d-block d-md-none",style:{paddingRight:"5%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:[0==U.length&&Object(u.jsx)(r.a,{children:Object(u.jsx)("p",{style:{color:"red"},children:Object(u.jsx)("i",{children:"Record not found"})})}),U.length>0&&U.map((function(e,t){return Object(u.jsxs)(r.a,{className:"shadow mb-4 ",style:{borderRadius:"6px"},children:[Object(u.jsx)(j.a,{className:"pt-3 pb-3 col-dose",xs:"2",sm:"2",children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h5",{children:"Dose"}),Object(u.jsx)("span",{style:{fontSize:11},children:"Number"}),Object(u.jsx)("h2",{className:"mt-2",children:t+1})]})}),Object(u.jsxs)(j.a,{className:"pt-4 pb-3 col-vc-detail",xs:"10",sm:"10",children:[Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.e})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Name"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("h5",{className:"detail-txt-focus",children:e.vacc_name})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.b})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccination Date"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{className:"detail-txt-focus",children:e.vacc_date})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Batch Number"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_lotno})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail mb-sm-3",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.a})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Vaccine Manufacturer"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.vacc_manufac})})]}),Object(u.jsxs)(r.a,{className:"row-vc-detail",children:[Object(u.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(u.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(u.jsx)(p.a,{icon:g.d})}),Object(u.jsx)("div",{className:"d-none d-sm-block",children:Object(u.jsx)("p",{className:"detail-title",children:"Administering Center"})})]}),Object(u.jsx)(j.a,{xs:"10",sm:"7",children:Object(u.jsx)("p",{children:e.adm_center})})]})]})]})}))]}),Object(u.jsx)(j.a,{className:"d-none d-md-block",style:{paddingRight:"2%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(u.jsxs)(d.a,{size:"large",className:"shadow",children:[Object(u.jsx)(d.a.Header,{children:Object(u.jsxs)(d.a.Row,{children:[Object(u.jsx)(d.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Dose Number"})}),Object(u.jsx)(d.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Name of Vaccine"})}),Object(u.jsx)(d.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Date of Vaccination"})}),Object(u.jsx)(d.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Vaccine Batch Number"})}),Object(u.jsx)(d.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Vaccine Manufacturer"})}),Object(u.jsx)(d.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(u.jsx)("p",{className:"table-title",children:"Administering Center"})})]})}),Object(u.jsxs)(d.a.Body,{children:[0==U.length&&Object(u.jsx)(d.a.Row,{children:Object(u.jsx)(d.a.Cell,{colSpan:"6",textAlign:"center",children:Object(u.jsx)("p",{children:Object(u.jsx)("i",{children:"Record not found"})})})}),U.length>0&&U.map((function(e,t){return Object(u.jsxs)(d.a.Row,{children:[Object(u.jsx)(d.a.Cell,{style:{backgroundColor:"#c8d7c6"},children:Object(u.jsx)(x.a,{className:"table-dose-title",as:"h5",textAlign:"center",children:t+1})}),Object(u.jsx)(d.a.Cell,{singleLine:!0,children:Object(u.jsx)("p",{style:{fontWeight:"550"},children:e.vacc_name})}),Object(u.jsx)(d.a.Cell,{textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_date})}),Object(u.jsx)(d.a.Cell,{textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_lotno})}),Object(u.jsx)(d.a.Cell,{textAlign:"center",children:Object(u.jsx)("p",{children:e.vacc_manufac})}),Object(u.jsx)(d.a.Cell,{textAlign:"center",children:Object(u.jsx)("p",{children:e.adm_center})})]})}))]})]})})]}),U.length>0&&Object(u.jsxs)("div",{className:"d-block d-sm-none",style:{margin:"0 5% 5% 8%"},children:[Object(u.jsx)("h5",{className:"mb-2 mt-0",style:{textAlign:"left"},children:"Icon Representation"}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.e})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Name of Vaccine"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.b})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Date of Vaccination"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Batch Number"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.a})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Manufacturer"})]}),Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{width:"15%"},children:Object(u.jsx)(p.a,{icon:g.d})}),Object(u.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Administering Center"})]})]})]})}),Object(u.jsxs)("footer",{className:"mb-2 mt-5",style:{paddingLeft:"6%",paddingRight:"6%"},children:[Object(u.jsx)("hr",{}),Object(u.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"The electronic certificate is provided by Department of Disease Control Ministry of Public Health, Thailand."}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"Certificate authenticity is protected by an RSA digital signature"}),Object(u.jsx)("p",{style:{color:"gray",marginTop:10},children:"DDC , MOPH THAILAND"})]})]})]})}},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,163)).then((function(t){var s=t.getCLS,c=t.getFID,l=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),l(e),i(e),n(e)}))};s(143);n.a.render(Object(u.jsx)(l.a.StrictMode,{children:Object(u.jsx)(w,{result:document.getElementById("content").getAttribute("result")})}),document.getElementById("root")),A()}},[[144,1,2]]]);
//# sourceMappingURL=main.d160d0d0.chunk.js.map