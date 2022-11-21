(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{300:function(e,t,s){},309:function(e,t){},311:function(e,t){},345:function(e,t){},346:function(e,t){},428:function(e,t){},611:function(e,t,s){"use strict";s.r(t);var c=s(3),l=s.n(c),i=s(63),n=s.n(i),a=s(11),r=s(166),d=s.n(r),o=s(272),j=s(34),b=(s(300),s(626)),x=s(627),h=s(628),m=s(625),O=s(630),g=s(629),f=s(115),p=s(116),y=s(131),u=s(126),w=s(31),v=s(30),S=s(1),C=function(e){Object(y.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(f.a)(this,s),t.call(this,e)}return Object(p.a)(s,[{key:"render",value:function(){var e="#B9B5BE",t="#B9B5BE",s="#B9B5BE",c="500",l="500",i="500",n=Object(S.jsx)(m.a,{size:"sm",color:"secondary"}),a=Object(S.jsx)(m.a,{size:"sm",color:"secondary"}),r=Object(S.jsx)(m.a,{size:"sm",color:"secondary"});return this.props.docReceived&&(e="green",n=Object(S.jsx)(v.a,{icon:w.c,style:{color:"green",fontSize:"1.38rem"}}),c="500"),this.props.docDataValidated&&(t="green",a=Object(S.jsx)(v.a,{icon:w.c,style:{color:"green",fontSize:"1.38rem"}}),l="500"),this.props.docIssuerValidated&&(s="green",r=Object(S.jsx)(v.a,{icon:w.c,style:{color:"green",fontSize:"1.38rem"}}),i="500"),Object(S.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsxs)("div",{className:"mb-5",children:[Object(S.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-loader",alt:"logo"}),Object(S.jsx)("div",{className:"mt-4 mb-3",children:Object(S.jsx)(m.a,{size:"lg",style:{color:"rgba(5,104,57,0.5)"},type:"grow"})}),Object(S.jsx)("h4",{className:"mb-3",style:{color:"#676D75",fontWeight:"550"},children:"Loading Data ..."}),Object(S.jsxs)("div",{style:{width:"fit-content",textAlign:"left",whiteSpace:"nowrap",margin:0,padding:0},children:[Object(S.jsxs)(b.a,{children:[Object(S.jsx)(x.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:n}),Object(S.jsx)(x.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(S.jsx)("p",{className:"mb-1",style:{color:e,fontWeight:c},children:"   Retrieving Certificate"})})]}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(x.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:a}),Object(S.jsx)(x.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(S.jsx)("p",{className:"mb-1",style:{color:t,fontWeight:l},children:"   Checking Data Correctness"})})]}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(x.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:r}),Object(S.jsx)(x.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(S.jsx)("p",{className:"mb-1",style:{color:s,fontWeight:i},children:"   Verifying Authenticity of Issuer"})})]})]})]})})}}]),s}(c.Component),N=function(e){Object(y.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(f.a)(this,s),t.call(this,e)}return Object(p.a)(s,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsxs)("div",{className:"mb-5",children:[Object(S.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-err",alt:"logo"}),!0===this.props.isUnableRetrieveCert&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h3",{class:"mt-5",style:{overflowWrap:"break-word",color:"rgb(103, 109, 117)",fontWeight:"600"},children:"Cannot retrieve the requested certificate"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("p",{style:{paddingLeft:"4%",paddingRight:"4%",overflowWrap:"break-word",textAlign:"center"},children:"If you are recently issued with a certificate, please wait one working day before the certificate is ready. For further information, please contact DDC Thailand."})]}),0!==this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(S.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is invalid"}),0===this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(S.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is canceled"})]})})}}]),s}(c.Component),T=s(5),V=s(282),D=s.n(V),A=s(283),B=s.n(A),_=function(e){var t=e.result,s=Object(c.useState)(null),l=Object(j.a)(s,2),i=l[0],n=l[1],r=Object(c.useState)(!0),f=Object(j.a)(r,2),p=f[0],y=f[1],u=Object(c.useState)(!0),V=Object(j.a)(u,2),A=V[0],_=V[1],W=Object(c.useState)(!0),R=Object(j.a)(W,2),z=R[0],I=R[1],F=Object(c.useState)(null),k=Object(j.a)(F,2),L=k[0],H=k[1],M=Object(c.useState)(!0),U=Object(j.a)(M,2),E=U[0],Y=U[1],X=Object(c.useState)(!1),P=Object(j.a)(X,2),J=P[0],Z=P[1],G=Object(c.useState)(null),q=Object(j.a)(G,2),Q=q[0],K=q[1],$=Object(c.useState)(!1),ee=Object(j.a)($,2),te=(ee[0],ee[1],Object(c.useState)(null)),se=Object(j.a)(te,2),ce=se[0],le=se[1],ie=Object(c.useState)(!1),ne=Object(j.a)(ie,2),ae=ne[0],re=ne[1],de=Object(c.useState)(!1),oe=Object(j.a)(de,2),je=oe[0],be=oe[1],xe=Object(c.useRef)(null);Object(c.useEffect)((function(){var e=t.replace(/'/g,'"'),s=(e=JSON.parse(e)).qr_token;K(s),s&&fetch("/get_user_data/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){if("results"in e&&"data not found"===e.results&&(Z(!0),re(!0)),y(!1),0===e.cert_status)le(e.cert_status),Z(!0);else{le(e.cert_status);var t=e.signature.public_key,s=function(e){(e=e.replace(/^0x/,"")).length%2!=0&&console.log("WARNING: expecting an even number of characters in the hexString");var t=e.match(/[G-Z\s]/i);t&&console.log("WARNING: found non-hex characters",t);var s=e.match(/[\dA-F]{2}/gi).map((function(e){return parseInt(e,16)}));return new Uint8Array(s).buffer}(e.signature.sig_val),c=(l=e.user_data,(new TextEncoder).encode(l));window.crypto.subtle.importKey("jwk",t,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]).then((function(t){window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},t,s,c).then((function(t){t?(setTimeout((function(){return _(!1)}),750),setTimeout((function(){return I(!1)}),1e3),setTimeout((function(){n(JSON.parse(e.user_data)),H(e.version),Y(!1)}),2410)):setTimeout((function(){Z(!0),Y(!1)}),800)})).catch((function(e){console.error(e),Z(!0),Y(!1)}))})).catch((function(e){console.error(e),Z(!0),Y(!1)}))}var l})).catch((function(e){console.log(e),Z(!0),Y(!1)}))}),[]);var he=function(e,t){var s=window.document.createElement("a");s.style="display:none;",s.download=t,s.href=e,document.body.appendChild(s),s.click(),document.body.removeChild(s),s.remove()},me=function(){var e=Object(o.a)(d.a.mark((function e(t,s){var c,l,i,n,a,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=document.getElementsByTagName("html")[0],l=document.getElementsByTagName("body")[0],i=c.clientWidth,n=l.clientWidth,(a=t.scrollWidth-t.clientWidth)>t.clientWidth&&(i+=a,n+=a),c.style.width=i+"px",l.style.width=n+"px",e.next=10,B()(t);case 10:r=e.sent,o=r.toDataURL("image/png",1),he(o,s),c.style.width=null,l.style.width=null;case 15:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();if(J)return Object(S.jsx)(N,{isCertCanceled:ce,isUnableRetrieveCert:ae});if(p||A||z||E)return Object(S.jsx)(C,{docReceived:!p,docDataValidated:!A,docIssuerValidated:!z});if(i){var Oe,ge=[];0!=i.vaccines.length&&(ge=i.vaccines.sort((function(e,t){return Date.parse(new Date(e.vacc_date.split("-").reverse().join("-")))-Date.parse(new Date(t.vacc_date.split("-").reverse().join("-")))}))),Oe=document.createElement("canvas"),D.a.toCanvas(Oe,"https://cert-intervac.ddc.moph.go.th/"+Q,{errorCorrectionLevel:"H"});var fe=Oe.toDataURL(),pe=function(){return Object(S.jsx)(T.Document,{children:Object(S.jsxs)(T.Page,{style:ye.body,wrap:!0,children:[Object(S.jsx)(T.View,{style:{width:"100%",justifyContent:"center",display:"flex",alignItems:"center"},children:Object(S.jsx)(T.Image,{style:{height:80},src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/logoDDC.jpg"})}),Object(S.jsx)(T.Text,{style:ye.title,children:"International COVID-19 Vaccination Certificate"}),Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.title),{},{marginTop:2,fontSize:5}),children:" "}),Object(S.jsx)(T.View,{style:{display:"flex",justifyContent:"center",marginTop:1,marginBottom:10,alignItems:"center"},children:Object(S.jsx)(T.View,{style:{width:"79%",borderBottomColor:"gray",borderBottomWidth:1}})}),Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsxs)(T.View,{style:{flex:3},children:[Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsxs)(T.View,{style:{flex:3},children:[Object(S.jsx)(T.Text,{style:ye.username,children:"Name"}),Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.username),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(S.jsx)(T.View,{style:{flex:5},children:Object(S.jsxs)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.username),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:[i.pre_name," ",i.f_name," ",i.l_name]})})]}),Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsxs)(T.View,{style:{flex:3},children:[Object(S.jsx)(T.Text,{style:ye.data,children:"Passport No."}),Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(S.jsx)(T.View,{style:{flex:5},children:Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:i.passport_no})})]}),Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsxs)(T.View,{style:{flex:3},children:[Object(S.jsx)(T.Text,{style:ye.data,children:"Nationality"}),Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(S.jsx)(T.View,{style:{flex:5},children:Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:i.is_thai?"THAI":i.nation.toUpperCase()})})]}),Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsxs)(T.View,{style:{flex:3},children:[Object(S.jsx)(T.Text,{style:ye.data,children:"Date of Birth"}),Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(S.jsx)(T.View,{style:{flex:5},children:Object(S.jsxs)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:[i.has_bd_day?i.birth_date.split("-")[0]:"XX","-",i.has_bd_month?i.birth_date.split("-")[1]:"XX","-",i.birth_date.split("-")[2]]})})]}),Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsxs)(T.View,{style:{flex:3},children:[Object(S.jsx)(T.Text,{style:ye.data,children:"Sex"}),Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(S.jsxs)(T.View,{style:{flex:5},children:[("m"===i.sex||"M"===i.sex)&&Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:"Male"}),("f"===i.sex||"F"===i.sex)&&Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:"Female"}),"m"!==i.sex&&"M"!==i.sex&&"f"!==i.sex&&"F"!==i.sex&&Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:i.sex})]})]})]}),Object(S.jsx)(T.View,{style:{flex:2,justifyContent:"center",display:"flex",alignItems:"center",alignContent:"center"},children:Object(S.jsx)(T.Image,{src:fe,style:{width:150}})})]}),Object(S.jsx)(T.View,{style:{display:"flex",justifyContent:"center",marginTop:9,alignItems:"center"},children:Object(S.jsx)(T.View,{style:{width:"95%",borderBottomColor:"gray",borderBottomWidth:.5}})}),Object(S.jsxs)(T.View,{style:{marginTop:10},children:[Object(S.jsx)(T.View,{style:ye.titleRibbon,children:Object(S.jsx)(T.Text,{style:ye.titleText,children:"Certificate Information"})}),Object(S.jsx)(T.View,{style:{display:"flex",flexDirection:"row"},children:Object(S.jsxs)(T.View,{style:{flex:1},children:[Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row",flex:3},children:[Object(S.jsx)(T.View,{style:{flex:5},children:Object(S.jsx)(T.Text,{style:ye.data,children:"Certificate Status"})}),Object(S.jsx)(T.View,{style:{flex:6},children:Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontFamily:"OpenSans-SemiBold",fontSize:11,color:1==ce?"green":"gray"}),children:1===ce?"VALID":"INVALID"})})]}),Object(S.jsx)(T.View,{style:{flex:2},children:Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsx)(T.View,{style:{flex:5},children:Object(S.jsx)(T.Text,{style:ye.data,children:"Issuance Date"})}),Object(S.jsx)(T.View,{style:{flex:6},children:Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11,fontFamily:"OpenSans-SemiBold"}),children:"1.4"==L?ge[ge.length-1].issue_date:i.issue_date})})]})})]}),Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsx)(T.View,{style:{flex:3},children:Object(S.jsx)(T.Text,{style:ye.data,children:"Certificate Identifier"})}),Object(S.jsx)(T.View,{style:{flex:8},children:Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11,fontFamily:"OpenSans-SemiBold"}),children:i.cert_id})})]}),Object(S.jsxs)(T.View,{style:{display:"flex",flexDirection:"row"},children:[Object(S.jsx)(T.View,{style:{flex:3},children:Object(S.jsx)(T.Text,{style:ye.data,children:"Certificate Issuer"})}),Object(S.jsx)(T.View,{style:{flex:8},children:Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.data),{},{fontSize:11,fontFamily:"OpenSans-SemiBold"}),children:"1.4"==L?ge[ge.length-1].cert_issuer:i.cert_issuer})})]})]})})]}),Object(S.jsx)(T.View,{style:{display:"flex",justifyContent:"center",marginTop:15,marginBottom:3,alignItems:"center"},children:Object(S.jsx)(T.View,{style:{width:"95%",borderBottomColor:"gray",borderBottomWidth:.5}})}),Object(S.jsx)(T.View,{style:{marginTop:8},children:Object(S.jsx)(T.View,{style:Object(a.a)(Object(a.a)({},ye.titleRibbon),{},{width:280}),children:Object(S.jsx)(T.Text,{style:ye.titleText,children:"Vaccination Record"})})}),Object(S.jsxs)(T.View,{children:[0==ge.length&&Object(S.jsx)(T.Text,{style:{marginLeft:17,marginTop:15,fontFamily:"OpenSans-SemiBold",color:"red",fontSize:11.5},children:"Record not found"}),Object(S.jsxs)(T.View,{style:Object(a.a)(Object(a.a)({},ye.table),{},{marginLeft:10,marginTop:8}),children:[ge.length>0&&Object(S.jsxs)(T.View,{style:ye.tableRowH,children:[Object(S.jsx)(T.View,{style:Object(a.a)(Object(a.a)({},ye.tableColH),{},{width:"7%"}),children:Object(S.jsx)(T.Text,{style:ye.tableCellH,children:"Dose"})}),Object(S.jsx)(T.View,{style:ye.tableColH,children:Object(S.jsx)(T.Text,{style:ye.tableCellH,children:"Name of Vaccine"})}),Object(S.jsx)(T.View,{style:ye.tableColH,children:Object(S.jsx)(T.Text,{style:ye.tableCellH,children:"Date of Vaccination"})}),Object(S.jsx)(T.View,{style:Object(a.a)(Object(a.a)({},ye.tableColH),{},{width:"17%"}),children:Object(S.jsx)(T.Text,{style:ye.tableCellH,children:"Vaccine Batch Number"})}),Object(S.jsx)(T.View,{style:Object(a.a)(Object(a.a)({},ye.tableColH),{},{width:"23%"}),children:Object(S.jsx)(T.Text,{style:ye.tableCellH,children:"Vaccine Manufacturer"})}),Object(S.jsx)(T.View,{style:Object(a.a)(Object(a.a)({},ye.tableColH),{},{width:"15%"}),children:Object(S.jsx)(T.Text,{style:ye.tableCellH,children:"Administering Center"})})]}),ge.length>0&&ge.map((function(e,t){return Object(S.jsxs)(T.View,{style:ye.tableRow,wrap:!1,children:[Object(S.jsx)(T.View,{style:ye.tableColDose,children:Object(S.jsx)(T.Text,{style:ye.tableCell,children:t+1})}),Object(S.jsx)(T.View,{style:ye.tableCol,children:Object(S.jsx)(T.Text,{style:ye.tableCell,children:e.vacc_name})}),Object(S.jsx)(T.View,{style:ye.tableCol,children:Object(S.jsx)(T.Text,{style:ye.tableCell,children:e.vacc_date})}),Object(S.jsx)(T.View,{style:ye.tableColLot,children:Object(S.jsx)(T.Text,{style:ye.tableCell,children:e.vacc_lotno})}),Object(S.jsx)(T.View,{style:Object(a.a)(Object(a.a)({},ye.tableCol),{},{width:"23%"}),children:Object(S.jsx)(T.Text,{style:ye.tableCell,children:e.vacc_manufac})}),Object(S.jsx)(T.View,{style:Object(a.a)(Object(a.a)({},ye.tableCol),{},{width:"15%"}),children:Object(S.jsx)(T.Text,{style:ye.tableCell,children:e.adm_center})})]})}))]})]}),Object(S.jsx)(T.Text,{style:Object(a.a)(Object(a.a)({},ye.infoText2),{},{fontSize:9}),children:"Date Format: DD-MM-YYYY"})]})})};T.Font.register({family:"OpenSans",src:"https://fonts.gstatic.com/s/opensans/v26/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVc.ttf"}),T.Font.register({family:"OpenSans-SemiBold",src:"https://fonts.gstatic.com/s/opensans/v26/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4uaVc.ttf"}),T.Font.register({family:"OpenSans-Bold",src:"https://fonts.gstatic.com/s/opensans/v26/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4uaVc.ttf"});var ye=T.StyleSheet.create({nameText:{fontFamily:"OpenSans",flexDirection:"row",width:"100%",flex:1,paddingLeft:10,marginTop:25,fontSize:14},infoText2:{lineHeight:1,fontFamily:"OpenSans",flexDirection:"row",width:"100%",flex:1,paddingLeft:10,marginTop:8,fontSize:14},infoTitle:{fontFamily:"OpenSans-SemiBold",fontSize:9.5,paddingBottom:0,marginBottom:0},infoDetail:{fontFamily:"OpenSans",fontSize:9.5,paddingBottom:0,marginBottom:0},titleRibbon:{backgroundColor:"#3e8a66",height:26,width:"60%",maxWidth:190,justifyContent:"center",paddingLeft:6,paddingRight:10,borderTopRightRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:2,borderBottomLeftRadius:2,marginLeft:10,marginBottom:5},titleText:{fontFamily:"OpenSans-SemiBold",color:"white",fontSize:11},table:{display:"table",width:"auto",borderRadius:5,borderStyle:"solid",borderWidth:1,borderColor:"gray"},tableRow:{margin:"auto",flexDirection:"row",backgroundColor:"white"},tableCol:{width:"19%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableCell:{margin:"auto",marginTop:6.5,marginBottom:6.5,fontSize:9.2,fontFamily:"OpenSans"},tableRowH:{margin:"auto",flexDirection:"row",backgroundColor:"#A7C9B9",borderTopLeftRadius:4,borderTopRightRadius:4},tableColH:{width:"19%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0,display:"flex",justifyContent:"center",paddingTop:1,paddingBottom:1},tableCellH:{textAlign:"center",marginTop:2,marginBottom:2,fontSize:9.2,fontFamily:"OpenSans-SemiBold"},tableColDose:{width:"7%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableColLot:{width:"17%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableColDoseH:{textAlign:"center",paddingTop:1,width:"7%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableColLotH:{textAlign:"center",paddingTop:1,width:"17%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:14.5,textAlign:"center",fontFamily:"OpenSans-Bold",marginTop:17,fontWeight:"bold"},author:{fontSize:12.2,textAlign:"center",marginBottom:40},username:{fontSize:10.7,marginLeft:17,marginTop:18.5,fontFamily:"OpenSans",fontWeight:"bold"},data:{fontSize:10.7,marginLeft:17,marginTop:8,fontFamily:"OpenSans",fontWeight:"bold"},subtitle:{fontSize:14,margin:12,marginTop:55,fontFamily:"OpenSans-SemiBold",fontWeight:600},text:{margin:12,fontSize:14,textAlign:"justify",fontFamily:"Times-Roman"},image:{maxWidth:67},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:9.5,bottom:30,left:0,right:0,textAlign:"center",color:"grey",fontFamily:"OpenSans"}});return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("header",{className:"App-header mt-4 mb-1",children:Object(S.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo-full.png",className:"App-logo mb-1",alt:"logo"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{style:{opacity:0,height:0},children:Object(S.jsx)("div",{ref:xe,className:"pb-3",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",padding:"1% 1.5% 0% 1.5%",backgroundColor:"#e3eee9"},children:Object(S.jsxs)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)",backgroundColor:"#e3eee9"},children:[Object(S.jsx)("h6",{className:"mb-2",children:Object(S.jsxs)("b",{children:[i.pre_name," ",i.f_name," ",i.l_name]})}),Object(S.jsx)("img",{src:fe,style:{width:"75%",maxWidth:"220px",minWidth:"200px"}}),Object(S.jsx)("p",{className:"mt-3",style:{fontWeight:550},children:"INTERNATIONAL CERTIFICATE"})]})})}),Object(S.jsx)("div",{className:"title-div",style:{marginTop:"2%"},children:Object(S.jsx)("h3",{className:"title",children:"International COVID-19 Vaccination Certificate"})}),Object(S.jsx)("div",{className:"d-block d-md-none",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsxs)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:[Object(S.jsx)("img",{src:fe,style:{width:"75%",maxWidth:"220px",minWidth:"200px"}}),Object(S.jsx)("h6",{className:"mt-2",children:Object(S.jsxs)("b",{children:[i.pre_name," ",i.f_name," ",i.l_name]})})]})}),Object(S.jsx)("div",{className:"d-none d-md-block",style:{position:"absolute",top:10,right:"7vw"},children:Object(S.jsx)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:Object(S.jsx)("img",{src:fe,style:{width:"16vw",maxWidth:"170px",minWidth:"152px"}})})}),Object(S.jsx)("div",{className:"container-header",style:{width:"100%"},children:Object(S.jsxs)("div",{style:{width:"100%"},children:[Object(S.jsx)("div",{className:"d-none d-md-block",children:Object(S.jsxs)(b.a,{className:"row-styling mb-1",style:{marginLeft:"max(5px,0.1%)"},children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"3",sm:"3",md:"2",lg:"2",xl:"2",children:Object(S.jsx)("h5",{className:"info-title",children:"Name :  "})}),Object(S.jsx)(x.a,{xs:"8",sm:"8",md:"9",lg:"9",xl:"9",children:Object(S.jsx)("h6",{children:Object(S.jsxs)("b",{children:[i.pre_name," ",i.f_name," ",i.l_name]})})})]})}),Object(S.jsxs)(b.a,{xs:"1",sm:"1",md:"2",lg:"2",xl:"2",children:[Object(S.jsxs)(x.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(S.jsxs)(b.a,{className:"row-styling mt-2 mb-3",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(S.jsx)("h5",{className:"info-title-strip",children:"User Info"})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Nationality"})}),Object(S.jsx)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(S.jsx)("p",{children:i.is_thai?"THAI":i.nation.toUpperCase()})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Passport Number"})}),Object(S.jsx)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(S.jsx)("p",{children:i.passport_no})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Date of Birth"})}),Object(S.jsx)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(S.jsxs)("p",{children:[i.has_bd_day?i.birth_date.split("-")[0]:"XX","-",i.has_bd_month?i.birth_date.split("-")[1]:"XX","-",i.birth_date.split("-")[2]]})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Sex"})}),Object(S.jsxs)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:[("m"===i.sex||"M"===i.sex)&&Object(S.jsx)("p",{children:"Male"}),("f"===i.sex||"F"===i.sex)&&Object(S.jsx)("p",{children:"Female"}),"m"!==i.sex&&"M"!==i.sex&&"f"!==i.sex&&"F"!==i.sex&&Object(S.jsx)("p",{children:i.sex.toUpperCase()})]})]})]}),Object(S.jsxs)(x.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(S.jsxs)(b.a,{className:"row-styling mt-2 mb-3",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(S.jsx)("h5",{className:"info-title-strip",children:"Certificate Info"})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Certificate Status"})}),Object(S.jsx)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(S.jsx)("p",{style:{color:1===ce?"green":"gray"},children:Object(S.jsx)("b",{children:1===ce?"VALID":"INVALID"})})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Certificate Identifier"})}),Object(S.jsx)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(S.jsx)("p",{children:i.cert_id})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Issuance Date"})}),Object(S.jsx)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(S.jsx)("p",{children:"1.4"==L?ge[ge.length-1].issue_date:i.issue_date})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-1 mb-2",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(S.jsx)("h6",{className:"info-title",children:"Certificate Issuer"})}),Object(S.jsx)(x.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(S.jsx)("p",{children:"1.4"==L?ge[ge.length-1].cert_issuer:i.cert_issuer})})]})]})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-5",children:[Object(S.jsx)(x.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(S.jsx)("h5",{className:"info-title",children:"Vaccination Record"})})]}),Object(S.jsxs)(b.a,{className:"row-styling mt-3 mb-3",children:[Object(S.jsx)(x.a,{style:{padding:"0",margin:"0"},xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsxs)(x.a,{className:"d-block d-md-none",style:{paddingRight:"5%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:[0==ge.length&&Object(S.jsx)(b.a,{children:Object(S.jsx)("p",{style:{color:"red"},children:Object(S.jsx)("i",{children:"Record not found"})})}),ge.length>0&&ge.map((function(e,t){return Object(S.jsxs)(b.a,{className:"shadow mb-4 ",style:{borderRadius:"6px"},children:[Object(S.jsx)(x.a,{className:"pt-3 pb-3 col-dose",xs:"2",sm:"2",children:Object(S.jsxs)("div",{style:{textAlign:"center"},children:[Object(S.jsx)("h5",{children:"Dose"}),Object(S.jsx)("span",{style:{fontSize:11},children:"Number"}),Object(S.jsx)("h2",{className:"mt-2",children:t+1})]})}),Object(S.jsxs)(x.a,{className:"pt-4 pb-3 col-vc-detail",xs:"10",sm:"10",children:[Object(S.jsxs)(b.a,{className:"row-vc-detail mb-sm-3",children:[Object(S.jsxs)(x.a,{xs:"2",sm:"5",children:[Object(S.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(S.jsx)(v.a,{icon:w.g})}),Object(S.jsx)("div",{className:"d-none d-sm-block",children:Object(S.jsx)("p",{className:"detail-title",children:"Vaccine Name"})})]}),Object(S.jsx)(x.a,{xs:"10",sm:"7",children:Object(S.jsx)("h5",{className:"detail-txt-focus",children:e.vacc_name})})]}),Object(S.jsxs)(b.a,{className:"row-vc-detail mb-sm-3",children:[Object(S.jsxs)(x.a,{xs:"2",sm:"5",children:[Object(S.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(S.jsx)(v.a,{icon:w.b})}),Object(S.jsx)("div",{className:"d-none d-sm-block",children:Object(S.jsx)("p",{className:"detail-title",children:"Vaccination Date"})})]}),Object(S.jsx)(x.a,{xs:"10",sm:"7",children:Object(S.jsx)("p",{className:"detail-txt-focus",children:e.vacc_date})})]}),Object(S.jsxs)(b.a,{className:"row-vc-detail mb-sm-3",children:[Object(S.jsxs)(x.a,{xs:"2",sm:"5",children:[Object(S.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(S.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(S.jsx)("div",{className:"d-none d-sm-block",children:Object(S.jsx)("p",{className:"detail-title",children:"Vaccine Batch Number"})})]}),Object(S.jsx)(x.a,{xs:"10",sm:"7",children:Object(S.jsx)("p",{children:e.vacc_lotno})})]}),Object(S.jsxs)(b.a,{className:"row-vc-detail mb-sm-3",children:[Object(S.jsxs)(x.a,{xs:"2",sm:"5",children:[Object(S.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(S.jsx)(v.a,{icon:w.a})}),Object(S.jsx)("div",{className:"d-none d-sm-block",children:Object(S.jsx)("p",{className:"detail-title",children:"Vaccine Manufacturer"})})]}),Object(S.jsx)(x.a,{xs:"10",sm:"7",children:Object(S.jsx)("p",{children:e.vacc_manufac})})]}),Object(S.jsxs)(b.a,{className:"row-vc-detail",children:[Object(S.jsxs)(x.a,{xs:"2",sm:"5",children:[Object(S.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(S.jsx)(v.a,{icon:w.d})}),Object(S.jsx)("div",{className:"d-none d-sm-block",children:Object(S.jsx)("p",{className:"detail-title",children:"Administering Center"})})]}),Object(S.jsx)(x.a,{xs:"10",sm:"7",children:Object(S.jsx)("p",{children:e.adm_center})})]})]})]})}))]}),Object(S.jsx)(x.a,{className:"d-none d-md-block",style:{paddingRight:"2%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(S.jsxs)(O.a,{size:"large",className:"shadow",children:[Object(S.jsx)(O.a.Header,{children:Object(S.jsxs)(O.a.Row,{children:[Object(S.jsx)(O.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(S.jsx)("p",{className:"table-title",children:"Dose Number"})}),Object(S.jsx)(O.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(S.jsx)("p",{className:"table-title",children:"Name of Vaccine"})}),Object(S.jsx)(O.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(S.jsx)("p",{className:"table-title",children:"Date of Vaccination"})}),Object(S.jsx)(O.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(S.jsx)("p",{className:"table-title",children:"Vaccine Batch Number"})}),Object(S.jsx)(O.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(S.jsx)("p",{className:"table-title",children:"Vaccine Manufacturer"})}),Object(S.jsx)(O.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(S.jsx)("p",{className:"table-title",children:"Administering Center"})})]})}),Object(S.jsxs)(O.a.Body,{children:[0==ge.length&&Object(S.jsx)(O.a.Row,{children:Object(S.jsx)(O.a.Cell,{colSpan:"6",textAlign:"center",children:Object(S.jsx)("p",{children:Object(S.jsx)("i",{children:"Record not found"})})})}),ge.length>0&&ge.map((function(e,t){return Object(S.jsxs)(O.a.Row,{children:[Object(S.jsx)(O.a.Cell,{style:{backgroundColor:"#c8d7c6"},children:Object(S.jsx)(g.a,{className:"table-dose-title",as:"h5",textAlign:"center",children:t+1})}),Object(S.jsx)(O.a.Cell,{singleLine:!0,children:Object(S.jsx)("p",{style:{fontWeight:"550"},children:e.vacc_name})}),Object(S.jsx)(O.a.Cell,{textAlign:"center",children:Object(S.jsx)("p",{children:e.vacc_date})}),Object(S.jsx)(O.a.Cell,{textAlign:"center",children:Object(S.jsx)("p",{children:e.vacc_lotno})}),Object(S.jsx)(O.a.Cell,{textAlign:"center",children:Object(S.jsx)("p",{children:e.vacc_manufac})}),Object(S.jsx)(O.a.Cell,{textAlign:"center",children:Object(S.jsx)("p",{children:e.adm_center})})]})}))]})]})}),Object(S.jsx)(x.a,{className:"d-none d-md-block",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{className:"d-none d-md-block",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(S.jsx)("p",{className:"mt-4",style:{color:"black"},children:"* Date Format: DD-MM-YYYY"})}),Object(S.jsx)(x.a,{className:"d-block d-md-none",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(S.jsx)(x.a,{className:"d-block d-md-none",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(S.jsx)("p",{className:"mt-0 mb-2",style:{color:"gray"},children:"* Date Format: DD-MM-YYYY"})})]}),ge.length>0&&Object(S.jsxs)("div",{className:"d-block d-sm-none",style:{margin:"0 5% 5% 8%"},children:[Object(S.jsx)("h5",{className:"mb-2 mt-0",style:{textAlign:"left"},children:"Icon Representation"}),Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)("div",{style:{width:"15%"},children:Object(S.jsx)(v.a,{icon:w.g})}),Object(S.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Name of Vaccine"})]}),Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)("div",{style:{width:"15%"},children:Object(S.jsx)(v.a,{icon:w.b})}),Object(S.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Date of Vaccination"})]}),Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)("div",{style:{width:"15%"},children:Object(S.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(S.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Batch Number"})]}),Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)("div",{style:{width:"15%"},children:Object(S.jsx)(v.a,{icon:w.a})}),Object(S.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Manufacturer"})]}),Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)("div",{style:{width:"15%"},children:Object(S.jsx)(v.a,{icon:w.d})}),Object(S.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Administering Center"})]})]})]})}),Object(S.jsxs)(b.a,{className:"pt-3",style:{justifyContent:"center"},children:[Object(S.jsx)(h.a,{style:{textDecoration:"none",padding:"18px",backgroundColor:"#eeeee3",borderRadius:5,fontFamily:"Segoe UI",fontWeight:600,color:"#00318e",width:"auto",margin:"0.8%",borderColor:"transparent"},onClick:function(){return me(xe.current,"Vaccine Certificate QR")},children:Object(S.jsxs)("p",{style:{fontSize:12},children:[" Download QR Code ",Object(S.jsx)(v.a,{icon:w.f})]})}),Object(S.jsx)(T.PDFDownloadLink,{style:{textDecoration:"none",padding:"18px",backgroundColor:"#e3e3ee",borderRadius:5,fontFamily:"Segoe UI",fontWeight:600,color:"#00318e",width:"auto",margin:"1%"},document:Object(S.jsx)(pe,{}),fileName:"Vaccination Certificate.pdf",children:function(e){e.blob,e.url;var t=e.loading;e.error;return t?Object(S.jsx)(m.a,{size:"sm",color:"#00318e"}):Object(S.jsxs)("p",{style:{fontSize:12},children:[" Download Certificate PDF ",Object(S.jsx)(v.a,{icon:w.e})," "]})}}),Object(S.jsx)("span",{className:"mt-3",style:{fontSize:"0.9em"},children:"Encounter a downloading problem?"}),Object(S.jsxs)("div",{className:"App",style:{fontSize:"0.9em"},children:[Object(S.jsx)("a",{target:"_self",onClick:function(){var e=document.createElement("input");e.value=window.location.href,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),be(!0)},children:je?Object(S.jsx)("span",{style:{color:"#00318e"},children:Object(S.jsx)("b",{children:"Link is Copied"})}):Object(S.jsx)("span",{style:{color:"#00318e"},children:Object(S.jsx)("b",{children:" Click here to copy the URL link of your certificate"})})}),Object(S.jsx)("br",{})," ","and paste it into the address bar of an external web browser."]})]}),Object(S.jsxs)("footer",{className:"mb-2 mt-5",style:{paddingLeft:"6%",paddingRight:"6%"},children:[Object(S.jsx)("hr",{}),Object(S.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"The electronic certificate is provided by Department of Disease Control Ministry of Public Health, Thailand."}),Object(S.jsx)("br",{}),Object(S.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"Certificate authenticity is protected by an RSA digital signature"}),Object(S.jsx)("p",{style:{color:"gray",marginTop:10},children:"DDC , MOPH THAILAND"})]})]})]})}},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,631)).then((function(t){var s=t.getCLS,c=t.getFID,l=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),l(e),i(e),n(e)}))};s(610);n.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(_,{result:document.getElementById("content").getAttribute("result")})}),document.getElementById("root")),W()}},[[611,1,2]]]);
//# sourceMappingURL=main.8ef40c17.chunk.js.map