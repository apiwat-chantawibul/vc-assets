(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{295:function(e,t,s){},304:function(e,t){},306:function(e,t){},340:function(e,t){},341:function(e,t){},423:function(e,t){},606:function(e,t,s){"use strict";s.r(t);var l=s(3),c=s.n(l),i=s(62),n=s.n(i),a=s(11),r=s(37),d=(s(295),s(621)),j=s(622),o=s(620),b=s(624),x=s(623),h=s(115),m=s(116),O=s(130),g=s(125),f=s(31),y=s(30),p=s(1),u=function(e){Object(O.a)(s,e);var t=Object(g.a)(s);function s(e){return Object(h.a)(this,s),t.call(this,e)}return Object(m.a)(s,[{key:"render",value:function(){var e="#B9B5BE",t="#B9B5BE",s="#B9B5BE",l="500",c="500",i="500",n=Object(p.jsx)(o.a,{size:"sm",color:"secondary"}),a=Object(p.jsx)(o.a,{size:"sm",color:"secondary"}),r=Object(p.jsx)(o.a,{size:"sm",color:"secondary"});return this.props.docReceived&&(e="green",n=Object(p.jsx)(y.a,{icon:f.c,style:{color:"green",fontSize:"1.38rem"}}),l="500"),this.props.docDataValidated&&(t="green",a=Object(p.jsx)(y.a,{icon:f.c,style:{color:"green",fontSize:"1.38rem"}}),c="500"),this.props.docIssuerValidated&&(s="green",r=Object(p.jsx)(y.a,{icon:f.c,style:{color:"green",fontSize:"1.38rem"}}),i="500"),Object(p.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(p.jsxs)("div",{className:"mb-5",children:[Object(p.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-loader",alt:"logo"}),Object(p.jsx)("div",{className:"mt-4 mb-3",children:Object(p.jsx)(o.a,{size:"lg",style:{color:"rgba(5,104,57,0.5)"},type:"grow"})}),Object(p.jsx)("h4",{className:"mb-3",style:{color:"#676D75",fontWeight:"550"},children:"Loading Data ..."}),Object(p.jsxs)("div",{style:{width:"fit-content",textAlign:"left",whiteSpace:"nowrap",margin:0,padding:0},children:[Object(p.jsxs)(d.a,{children:[Object(p.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:n}),Object(p.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(p.jsx)("p",{className:"mb-1",style:{color:e,fontWeight:l},children:"   Retrieving Certificate"})})]}),Object(p.jsxs)(d.a,{children:[Object(p.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:a}),Object(p.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(p.jsx)("p",{className:"mb-1",style:{color:t,fontWeight:c},children:"   Checking Data Correctness"})})]}),Object(p.jsxs)(d.a,{children:[Object(p.jsx)(j.a,{xs:"2",sm:"2",md:"2",lg:"2",style:{margin:0,padding:0},children:r}),Object(p.jsx)(j.a,{xs:"10",sm:"10",md:"10",lg:"10",style:{margin:0,padding:0},children:Object(p.jsx)("p",{className:"mb-1",style:{color:s,fontWeight:i},children:"   Verifying Authenticity of Issuer"})})]})]})]})})}}]),s}(l.Component),w=function(e){Object(O.a)(s,e);var t=Object(g.a)(s);function s(e){return Object(h.a)(this,s),t.call(this,e)}return Object(m.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(p.jsxs)("div",{className:"mb-5",children:[Object(p.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo.png",className:"App-logo-err",alt:"logo"}),!0===this.props.isUnableRetrieveCert&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{class:"mt-5",style:{overflowWrap:"break-word",color:"rgb(103, 109, 117)",fontWeight:"600"},children:"Cannot retrieve the requested certificate"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{style:{paddingLeft:"4%",paddingRight:"4%",overflowWrap:"break-word",textAlign:"center"},children:"If you are recently issued with a certificate, please wait one working day before the certificate is ready. For further information, please contact DDC Thailand."})]}),0!==this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(p.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is invalid"}),0===this.props.isCertCanceled&&!0!==this.props.isUnableRetrieveCert&&Object(p.jsx)("h3",{className:"mt-5 mb-3",style:{color:"#676D75",fontWeight:"600"},children:"Certificate is canceled"})]})})}}]),s}(l.Component),v=s(4),S=s(279),N=s.n(S),C=function(e){var t=e.result,s=Object(l.useState)(null),c=Object(r.a)(s,2),i=c[0],n=c[1],h=Object(l.useState)(!0),m=Object(r.a)(h,2),O=m[0],g=m[1],S=Object(l.useState)(!0),C=Object(r.a)(S,2),V=C[0],T=C[1],D=Object(l.useState)(!0),A=Object(r.a)(D,2),_=A[0],B=A[1],W=Object(l.useState)(null),z=Object(r.a)(W,2),R=z[0],F=z[1],I=Object(l.useState)(!0),L=Object(r.a)(I,2),k=L[0],H=L[1],M=Object(l.useState)(!1),U=Object(r.a)(M,2),Y=U[0],X=U[1],P=Object(l.useState)(null),E=Object(r.a)(P,2),J=E[0],Z=E[1],G=Object(l.useState)(!1),q=Object(r.a)(G,2),K=(q[0],q[1],Object(l.useState)(null)),Q=Object(r.a)(K,2),$=Q[0],ee=Q[1],te=Object(l.useState)(!1),se=Object(r.a)(te,2),le=se[0],ce=se[1];if(Object(l.useEffect)((function(){var e=t.replace(/'/g,'"'),s=(e=JSON.parse(e)).qr_token;Z(s),s&&fetch("/get_user_data/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){if("results"in e&&"data not found"===e.results&&(X(!0),ce(!0)),g(!1),0===e.cert_status)ee(e.cert_status),X(!0);else{ee(e.cert_status);var t=e.signature.public_key,s=function(e){(e=e.replace(/^0x/,"")).length%2!=0&&console.log("WARNING: expecting an even number of characters in the hexString");var t=e.match(/[G-Z\s]/i);t&&console.log("WARNING: found non-hex characters",t);var s=e.match(/[\dA-F]{2}/gi).map((function(e){return parseInt(e,16)}));return new Uint8Array(s).buffer}(e.signature.sig_val),l=(c=e.user_data,(new TextEncoder).encode(c));window.crypto.subtle.importKey("jwk",t,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]).then((function(t){window.crypto.subtle.verify({name:"RSA-PSS",saltLength:32},t,s,l).then((function(t){t?(setTimeout((function(){return T(!1)}),750),setTimeout((function(){return B(!1)}),1e3),setTimeout((function(){n(JSON.parse(e.user_data)),F(e.version),H(!1)}),2410)):setTimeout((function(){X(!0),H(!1)}),800)})).catch((function(e){console.error(e),X(!0),H(!1)}))})).catch((function(e){console.error(e),X(!0),H(!1)}))}var c})).catch((function(e){console.log(e),X(!0),H(!1)}))}),[]),Y)return Object(p.jsx)(w,{isCertCanceled:$,isUnableRetrieveCert:le});if(O||V||_||k)return Object(p.jsx)(u,{docReceived:!O,docDataValidated:!V,docIssuerValidated:!_});if(i){var ie,ne=[];0!=i.vaccines.length&&(ne=i.vaccines.sort((function(e,t){return Date.parse(new Date(e.vacc_date.split("-").reverse().join("-")))-Date.parse(new Date(t.vacc_date.split("-").reverse().join("-")))}))),ie=document.createElement("canvas"),N.a.toCanvas(ie,"https://cert-intervac.ddc.moph.go.th/"+J,{errorCorrectionLevel:"H"});var ae=ie.toDataURL(),re=function(){return Object(p.jsx)(v.Document,{children:Object(p.jsxs)(v.Page,{style:de.body,children:[Object(p.jsx)(v.View,{style:{width:"100%",justifyContent:"center",display:"flex",alignItems:"center"},children:Object(p.jsx)(v.Image,{style:{height:80},src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/logoDDC.jpg"})}),Object(p.jsx)(v.Text,{style:de.title,children:"International COVID-19 Vaccination Certificate"}),Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.title),{},{marginTop:2,fontSize:5}),children:" "}),Object(p.jsx)(v.View,{style:{display:"flex",justifyContent:"center",marginTop:1,marginBottom:10,alignItems:"center"},children:Object(p.jsx)(v.View,{style:{width:"79%",borderBottomColor:"gray",borderBottomWidth:1}})}),Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsxs)(v.View,{style:{flex:3},children:[Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsxs)(v.View,{style:{flex:3},children:[Object(p.jsx)(v.Text,{style:de.username,children:"Name"}),Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.username),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(p.jsx)(v.View,{style:{flex:5},children:Object(p.jsxs)(v.Text,{style:Object(a.a)(Object(a.a)({},de.username),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:[i.pre_name," ",i.f_name," ",i.l_name]})})]}),Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsxs)(v.View,{style:{flex:3},children:[Object(p.jsx)(v.Text,{style:de.data,children:"Passport No."}),Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(p.jsx)(v.View,{style:{flex:5},children:Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:i.passport_no})})]}),Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsxs)(v.View,{style:{flex:3},children:[Object(p.jsx)(v.Text,{style:de.data,children:"Nationality"}),Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(p.jsx)(v.View,{style:{flex:5},children:Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:i.is_thai?"THAI":i.nation.toUpperCase()})})]}),Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsxs)(v.View,{style:{flex:3},children:[Object(p.jsx)(v.Text,{style:de.data,children:"Date of Birth"}),Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(p.jsx)(v.View,{style:{flex:5},children:Object(p.jsxs)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:[i.has_bd_day?i.birth_date.split("-")[0]:"XX","-",i.has_bd_month?i.birth_date.split("-")[1]:"XX","-",i.birth_date.split("-")[2]]})})]}),Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsxs)(v.View,{style:{flex:3},children:[Object(p.jsx)(v.Text,{style:de.data,children:"Sex"}),Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:1.2,marginTop:0}),children:" "})]}),Object(p.jsxs)(v.View,{style:{flex:5},children:[("m"===i.sex||"M"===i.sex)&&Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:"Male"}),("f"===i.sex||"F"===i.sex)&&Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:"Female"}),"m"!==i.sex&&"M"!==i.sex&&"f"!==i.sex&&"F"!==i.sex&&Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11.3,fontFamily:"OpenSans-SemiBold"}),children:i.sex})]})]})]}),Object(p.jsx)(v.View,{style:{flex:2,justifyContent:"center",display:"flex",alignItems:"center",alignContent:"center"},children:Object(p.jsx)(v.Image,{src:ae,style:{width:150}})})]}),Object(p.jsx)(v.View,{style:{display:"flex",justifyContent:"center",marginTop:9,alignItems:"center"},children:Object(p.jsx)(v.View,{style:{width:"95%",borderBottomColor:"gray",borderBottomWidth:.5}})}),Object(p.jsxs)(v.View,{style:{marginTop:10},children:[Object(p.jsx)(v.View,{style:de.titleRibbon,children:Object(p.jsx)(v.Text,{style:de.titleText,children:"Certificate Information"})}),Object(p.jsx)(v.View,{style:{display:"flex",flexDirection:"row"},children:Object(p.jsxs)(v.View,{style:{flex:1},children:[Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row",flex:3},children:[Object(p.jsx)(v.View,{style:{flex:5},children:Object(p.jsx)(v.Text,{style:de.data,children:"Certificate Status"})}),Object(p.jsx)(v.View,{style:{flex:6},children:Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontFamily:"OpenSans-SemiBold",fontSize:11,color:1==$?"green":"gray"}),children:1===$?"VALID":"INVALID"})})]}),Object(p.jsx)(v.View,{style:{flex:2},children:Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsx)(v.View,{style:{flex:5},children:Object(p.jsx)(v.Text,{style:de.data,children:"Issuance Date"})}),Object(p.jsx)(v.View,{style:{flex:6},children:Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11,fontFamily:"OpenSans-SemiBold"}),children:"1.4"==R?ne[ne.length-1].issue_date:i.issue_date})})]})})]}),Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsx)(v.View,{style:{flex:3},children:Object(p.jsx)(v.Text,{style:de.data,children:"Certificate Identifier"})}),Object(p.jsx)(v.View,{style:{flex:8},children:Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11,fontFamily:"OpenSans-SemiBold"}),children:i.cert_id})})]}),Object(p.jsxs)(v.View,{style:{display:"flex",flexDirection:"row"},children:[Object(p.jsx)(v.View,{style:{flex:3},children:Object(p.jsx)(v.Text,{style:de.data,children:"Certificate Issuer"})}),Object(p.jsx)(v.View,{style:{flex:8},children:Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.data),{},{fontSize:11,fontFamily:"OpenSans-SemiBold"}),children:"1.4"==R?ne[ne.length-1].cert_issuer:i.cert_issuer})})]})]})})]}),Object(p.jsx)(v.View,{style:{display:"flex",justifyContent:"center",marginTop:15,marginBottom:3,alignItems:"center"},children:Object(p.jsx)(v.View,{style:{width:"95%",borderBottomColor:"gray",borderBottomWidth:.5}})}),Object(p.jsx)(v.View,{style:{marginTop:8},children:Object(p.jsx)(v.View,{style:Object(a.a)(Object(a.a)({},de.titleRibbon),{},{width:280}),children:Object(p.jsx)(v.Text,{style:de.titleText,children:"Vaccination Record"})})}),Object(p.jsxs)(v.View,{children:[0==ne.length&&Object(p.jsx)(v.Text,{style:{marginLeft:17,marginTop:15,fontFamily:"OpenSans-SemiBold",color:"red",fontSize:11.5},children:"Record not found"}),Object(p.jsxs)(v.View,{style:Object(a.a)(Object(a.a)({},de.table),{},{marginLeft:10,marginTop:8}),children:[ne.length>0&&Object(p.jsxs)(v.View,{style:de.tableRowH,children:[Object(p.jsx)(v.View,{style:Object(a.a)(Object(a.a)({},de.tableColH),{},{width:"7%"}),children:Object(p.jsx)(v.Text,{style:de.tableCellH,children:"Dose"})}),Object(p.jsx)(v.View,{style:de.tableColH,children:Object(p.jsx)(v.Text,{style:de.tableCellH,children:"Name of Vaccine"})}),Object(p.jsx)(v.View,{style:de.tableColH,children:Object(p.jsx)(v.Text,{style:de.tableCellH,children:"Date of Vaccination"})}),Object(p.jsx)(v.View,{style:Object(a.a)(Object(a.a)({},de.tableColH),{},{width:"17%"}),children:Object(p.jsx)(v.Text,{style:de.tableCellH,children:"Vaccine Batch Number"})}),Object(p.jsx)(v.View,{style:Object(a.a)(Object(a.a)({},de.tableColH),{},{width:"23%"}),children:Object(p.jsx)(v.Text,{style:de.tableCellH,children:"Vaccine Manufacturer"})}),Object(p.jsx)(v.View,{style:Object(a.a)(Object(a.a)({},de.tableColH),{},{width:"15%"}),children:Object(p.jsx)(v.Text,{style:de.tableCellH,children:"Administering Center"})})]}),ne.length>0&&ne.map((function(e,t){return Object(p.jsxs)(v.View,{style:de.tableRow,children:[Object(p.jsx)(v.View,{style:de.tableColDose,children:Object(p.jsx)(v.Text,{style:de.tableCell,children:t+1})}),Object(p.jsx)(v.View,{style:de.tableCol,children:Object(p.jsx)(v.Text,{style:de.tableCell,children:e.vacc_name})}),Object(p.jsx)(v.View,{style:de.tableCol,children:Object(p.jsx)(v.Text,{style:de.tableCell,children:e.vacc_date})}),Object(p.jsx)(v.View,{style:de.tableColLot,children:Object(p.jsx)(v.Text,{style:de.tableCell,children:e.vacc_lotno})}),Object(p.jsx)(v.View,{style:Object(a.a)(Object(a.a)({},de.tableCol),{},{width:"23%"}),children:Object(p.jsx)(v.Text,{style:de.tableCell,children:e.vacc_manufac})}),Object(p.jsx)(v.View,{style:Object(a.a)(Object(a.a)({},de.tableCol),{},{width:"15%"}),children:Object(p.jsx)(v.Text,{style:de.tableCell,children:e.adm_center})})]})}))]})]}),Object(p.jsx)(v.Text,{style:Object(a.a)(Object(a.a)({},de.infoText2),{},{fontSize:9}),children:"Date Format: DD-MM-YYYY"})]})})};v.Font.register({family:"OpenSans",src:"https://fonts.gstatic.com/s/opensans/v26/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4uaVc.ttf"}),v.Font.register({family:"OpenSans-SemiBold",src:"https://fonts.gstatic.com/s/opensans/v26/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4uaVc.ttf"}),v.Font.register({family:"OpenSans-Bold",src:"https://fonts.gstatic.com/s/opensans/v26/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4uaVc.ttf"});var de=v.StyleSheet.create({nameText:{fontFamily:"OpenSans",flexDirection:"row",width:"100%",flex:1,paddingLeft:10,marginTop:25,fontSize:14},infoText2:{lineHeight:1,fontFamily:"OpenSans",flexDirection:"row",width:"100%",flex:1,paddingLeft:10,marginTop:8,fontSize:14},infoTitle:{fontFamily:"OpenSans-SemiBold",fontSize:9.5,paddingBottom:0,marginBottom:0},infoDetail:{fontFamily:"OpenSans",fontSize:9.5,paddingBottom:0,marginBottom:0},titleRibbon:{backgroundColor:"#3e8a66",height:26,width:"60%",maxWidth:190,justifyContent:"center",paddingLeft:6,paddingRight:10,borderTopRightRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:2,borderBottomLeftRadius:2,marginLeft:10,marginBottom:5},titleText:{fontFamily:"OpenSans-SemiBold",color:"white",fontSize:11},table:{display:"table",width:"auto",borderRadius:5,borderStyle:"solid",borderWidth:1,borderColor:"gray"},tableRow:{margin:"auto",flexDirection:"row",backgroundColor:"white"},tableCol:{width:"19%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableCell:{margin:"auto",marginTop:6.5,marginBottom:6.5,fontSize:9.2,fontFamily:"OpenSans"},tableRowH:{margin:"auto",flexDirection:"row",backgroundColor:"#A7C9B9",borderTopLeftRadius:4,borderTopRightRadius:4},tableColH:{width:"19%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0,display:"flex",justifyContent:"center",paddingTop:1,paddingBottom:1},tableCellH:{textAlign:"center",marginTop:2,marginBottom:2,fontSize:9.2,fontFamily:"OpenSans-SemiBold"},tableColDose:{width:"7%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableColLot:{width:"17%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableColDoseH:{textAlign:"center",paddingTop:1,width:"7%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},tableColLotH:{textAlign:"center",paddingTop:1,width:"17%",borderStyle:"solid",borderWidth:.5,borderLeftWidth:0,borderTopWidth:0},body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:14.5,textAlign:"center",fontFamily:"OpenSans-Bold",marginTop:17,fontWeight:"bold"},author:{fontSize:12.2,textAlign:"center",marginBottom:40},username:{fontSize:10.7,marginLeft:17,marginTop:18.5,fontFamily:"OpenSans",fontWeight:"bold"},data:{fontSize:10.7,marginLeft:17,marginTop:8,fontFamily:"OpenSans",fontWeight:"bold"},subtitle:{fontSize:14,margin:12,marginTop:55,fontFamily:"OpenSans-SemiBold",fontWeight:600},text:{margin:12,fontSize:14,textAlign:"justify",fontFamily:"Times-Roman"},image:{maxWidth:67},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:9.5,bottom:30,left:0,right:0,textAlign:"center",color:"grey",fontFamily:"OpenSans"}});return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{className:"App-header mt-4 mb-1",children:Object(p.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/ministry-of-public-health-logo-full.png",className:"App-logo mb-1",alt:"logo"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"title-div",style:{marginTop:"2%"},children:Object(p.jsx)("h3",{className:"title",children:"International COVID-19 Vaccination Certificate"})}),Object(p.jsx)("div",{className:"d-block d-md-none",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(p.jsxs)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:[Object(p.jsx)("img",{src:ae,style:{width:"75%",maxWidth:"220px",minWidth:"200px"}}),Object(p.jsx)("h6",{className:"mt-2",children:Object(p.jsxs)("b",{children:[i.pre_name," ",i.f_name," ",i.l_name]})})]})}),Object(p.jsx)("div",{className:"d-none d-md-block",style:{position:"absolute",top:10,right:"7vw"},children:Object(p.jsx)("div",{style:{margin:0,padding:0,borderRadius:10,borderWidth:"thin",marginTop:"min(5%,15px)"},children:Object(p.jsx)("img",{src:ae,style:{width:"16vw",maxWidth:"170px",minWidth:"152px"}})})}),Object(p.jsx)("div",{className:"container-header",style:{width:"100%"},children:Object(p.jsxs)("div",{style:{width:"100%"},children:[Object(p.jsx)("div",{className:"d-none d-md-block",children:Object(p.jsxs)(d.a,{className:"row-styling mb-1",style:{marginLeft:"max(5px,0.1%)"},children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"3",sm:"3",md:"2",lg:"2",xl:"2",children:Object(p.jsx)("h5",{className:"info-title",children:"Name :  "})}),Object(p.jsx)(j.a,{xs:"8",sm:"8",md:"9",lg:"9",xl:"9",children:Object(p.jsx)("h6",{children:Object(p.jsxs)("b",{children:[i.pre_name," ",i.f_name," ",i.l_name]})})})]})}),Object(p.jsxs)(d.a,{xs:"1",sm:"1",md:"2",lg:"2",xl:"2",children:[Object(p.jsxs)(j.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(p.jsxs)(d.a,{className:"row-styling mt-2 mb-3",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(p.jsx)("h5",{className:"info-title-strip",children:"User Info"})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Nationality"})}),Object(p.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(p.jsx)("p",{children:i.is_thai?"THAI":i.nation.toUpperCase()})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Passport Number"})}),Object(p.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(p.jsx)("p",{children:i.passport_no})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Date of Birth"})}),Object(p.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(p.jsxs)("p",{children:[i.has_bd_day?i.birth_date.split("-")[0]:"XX","-",i.has_bd_month?i.birth_date.split("-")[1]:"XX","-",i.birth_date.split("-")[2]]})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Sex"})}),Object(p.jsxs)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:[("m"===i.sex||"M"===i.sex)&&Object(p.jsx)("p",{children:"Male"}),("f"===i.sex||"F"===i.sex)&&Object(p.jsx)("p",{children:"Female"}),"m"!==i.sex&&"M"!==i.sex&&"f"!==i.sex&&"F"!==i.sex&&Object(p.jsx)("p",{children:i.sex.toUpperCase()})]})]})]}),Object(p.jsxs)(j.a,{style:{paddingLeft:"max(5%,10px)"},children:[Object(p.jsxs)(d.a,{className:"row-styling mt-2 mb-3",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"5",md:"7",lg:"5",xl:"5",className:"shadow strip-bar",children:Object(p.jsx)("h5",{className:"info-title-strip",children:"Certificate Info"})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Certificate Status"})}),Object(p.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(p.jsx)("p",{style:{color:1===$?"green":"gray"},children:Object(p.jsx)("b",{children:1===$?"VALID":"INVALID"})})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Certificate Identifier"})}),Object(p.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(p.jsx)("p",{children:i.cert_id})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Issuance Date"})}),Object(p.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(p.jsx)("p",{children:"1.4"==R?ne[ne.length-1].issue_date:i.issue_date})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-1 mb-2",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"5",sm:"4",md:"5",lg:"5",xl:"4",children:Object(p.jsx)("h6",{className:"info-title",children:"Certificate Issuer"})}),Object(p.jsx)(j.a,{xs:"6",sm:"7",md:"6",lg:"6",xl:"7",children:Object(p.jsx)("p",{children:"1.4"==R?ne[ne.length-1].cert_issuer:i.cert_issuer})})]})]})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-5",children:[Object(p.jsx)(j.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(p.jsx)("h5",{className:"info-title",children:"Vaccination Record"})})]}),Object(p.jsxs)(d.a,{className:"row-styling mt-3 mb-3",children:[Object(p.jsx)(j.a,{style:{padding:"0",margin:"0"},xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsxs)(j.a,{className:"d-block d-md-none",style:{paddingRight:"5%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:[0==ne.length&&Object(p.jsx)(d.a,{children:Object(p.jsx)("p",{style:{color:"red"},children:Object(p.jsx)("i",{children:"Record not found"})})}),ne.length>0&&ne.map((function(e,t){return Object(p.jsxs)(d.a,{className:"shadow mb-4 ",style:{borderRadius:"6px"},children:[Object(p.jsx)(j.a,{className:"pt-3 pb-3 col-dose",xs:"2",sm:"2",children:Object(p.jsxs)("div",{style:{textAlign:"center"},children:[Object(p.jsx)("h5",{children:"Dose"}),Object(p.jsx)("span",{style:{fontSize:11},children:"Number"}),Object(p.jsx)("h2",{className:"mt-2",children:t+1})]})}),Object(p.jsxs)(j.a,{className:"pt-4 pb-3 col-vc-detail",xs:"10",sm:"10",children:[Object(p.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(p.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(p.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(p.jsx)(y.a,{icon:f.f})}),Object(p.jsx)("div",{className:"d-none d-sm-block",children:Object(p.jsx)("p",{className:"detail-title",children:"Vaccine Name"})})]}),Object(p.jsx)(j.a,{xs:"10",sm:"7",children:Object(p.jsx)("h5",{className:"detail-txt-focus",children:e.vacc_name})})]}),Object(p.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(p.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(p.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(p.jsx)(y.a,{icon:f.b})}),Object(p.jsx)("div",{className:"d-none d-sm-block",children:Object(p.jsx)("p",{className:"detail-title",children:"Vaccination Date"})})]}),Object(p.jsx)(j.a,{xs:"10",sm:"7",children:Object(p.jsx)("p",{className:"detail-txt-focus",children:e.vacc_date})})]}),Object(p.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(p.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(p.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(p.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(p.jsx)("div",{className:"d-none d-sm-block",children:Object(p.jsx)("p",{className:"detail-title",children:"Vaccine Batch Number"})})]}),Object(p.jsx)(j.a,{xs:"10",sm:"7",children:Object(p.jsx)("p",{children:e.vacc_lotno})})]}),Object(p.jsxs)(d.a,{className:"row-vc-detail mb-sm-3",children:[Object(p.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(p.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(p.jsx)(y.a,{icon:f.a})}),Object(p.jsx)("div",{className:"d-none d-sm-block",children:Object(p.jsx)("p",{className:"detail-title",children:"Vaccine Manufacturer"})})]}),Object(p.jsx)(j.a,{xs:"10",sm:"7",children:Object(p.jsx)("p",{children:e.vacc_manufac})})]}),Object(p.jsxs)(d.a,{className:"row-vc-detail",children:[Object(p.jsxs)(j.a,{xs:"2",sm:"5",children:[Object(p.jsx)("div",{className:"d-block d-sm-none icon-align",children:Object(p.jsx)(y.a,{icon:f.d})}),Object(p.jsx)("div",{className:"d-none d-sm-block",children:Object(p.jsx)("p",{className:"detail-title",children:"Administering Center"})})]}),Object(p.jsx)(j.a,{xs:"10",sm:"7",children:Object(p.jsx)("p",{children:e.adm_center})})]})]})]})}))]}),Object(p.jsx)(j.a,{className:"d-none d-md-block",style:{paddingRight:"2%"},xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(p.jsxs)(b.a,{size:"large",className:"shadow",children:[Object(p.jsx)(b.a.Header,{children:Object(p.jsxs)(b.a.Row,{children:[Object(p.jsx)(b.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(p.jsx)("p",{className:"table-title",children:"Dose Number"})}),Object(p.jsx)(b.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(p.jsx)("p",{className:"table-title",children:"Name of Vaccine"})}),Object(p.jsx)(b.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(p.jsx)("p",{className:"table-title",children:"Date of Vaccination"})}),Object(p.jsx)(b.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(p.jsx)("p",{className:"table-title",children:"Vaccine Batch Number"})}),Object(p.jsx)(b.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(p.jsx)("p",{className:"table-title",children:"Vaccine Manufacturer"})}),Object(p.jsx)(b.a.HeaderCell,{textAlign:"center",style:{verticalAlign:"text-top"},children:Object(p.jsx)("p",{className:"table-title",children:"Administering Center"})})]})}),Object(p.jsxs)(b.a.Body,{children:[0==ne.length&&Object(p.jsx)(b.a.Row,{children:Object(p.jsx)(b.a.Cell,{colSpan:"6",textAlign:"center",children:Object(p.jsx)("p",{children:Object(p.jsx)("i",{children:"Record not found"})})})}),ne.length>0&&ne.map((function(e,t){return Object(p.jsxs)(b.a.Row,{children:[Object(p.jsx)(b.a.Cell,{style:{backgroundColor:"#c8d7c6"},children:Object(p.jsx)(x.a,{className:"table-dose-title",as:"h5",textAlign:"center",children:t+1})}),Object(p.jsx)(b.a.Cell,{singleLine:!0,children:Object(p.jsx)("p",{style:{fontWeight:"550"},children:e.vacc_name})}),Object(p.jsx)(b.a.Cell,{textAlign:"center",children:Object(p.jsx)("p",{children:e.vacc_date})}),Object(p.jsx)(b.a.Cell,{textAlign:"center",children:Object(p.jsx)("p",{children:e.vacc_lotno})}),Object(p.jsx)(b.a.Cell,{textAlign:"center",children:Object(p.jsx)("p",{children:e.vacc_manufac})}),Object(p.jsx)(b.a.Cell,{textAlign:"center",children:Object(p.jsx)("p",{children:e.adm_center})})]})}))]})]})}),Object(p.jsx)(j.a,{className:"d-none d-md-block",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{className:"d-none d-md-block",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(p.jsx)("p",{className:"mt-4",style:{color:"black"},children:"* Date Format: DD-MM-YYYY"})}),Object(p.jsx)(j.a,{className:"d-block d-md-none",xs:"1",sm:"1",md:"1",lg:"1",xl:"1"}),Object(p.jsx)(j.a,{className:"d-block d-md-none",xs:"11",sm:"11",md:"11",lg:"11",xl:"11",children:Object(p.jsx)("p",{className:"mt-0 mb-2",style:{color:"gray"},children:"* Date Format: DD-MM-YYYY"})})]}),ne.length>0&&Object(p.jsxs)("div",{className:"d-block d-sm-none",style:{margin:"0 5% 5% 8%"},children:[Object(p.jsx)("h5",{className:"mb-2 mt-0",style:{textAlign:"left"},children:"Icon Representation"}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("div",{style:{width:"15%"},children:Object(p.jsx)(y.a,{icon:f.f})}),Object(p.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Name of Vaccine"})]}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("div",{style:{width:"15%"},children:Object(p.jsx)(y.a,{icon:f.b})}),Object(p.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Date of Vaccination"})]}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("div",{style:{width:"15%"},children:Object(p.jsx)("img",{src:"https://cdn.jsdelivr.net/gh/gaewcha/vc-assets@main/lot.svg",style:{width:"40%",height:"auto",minWidth:"22px"},alt:"lotLogo"})}),Object(p.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Batch Number"})]}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("div",{style:{width:"15%"},children:Object(p.jsx)(y.a,{icon:f.a})}),Object(p.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Vaccine Manufacturer"})]}),Object(p.jsxs)("div",{style:{display:"flex"},children:[Object(p.jsx)("div",{style:{width:"15%"},children:Object(p.jsx)(y.a,{icon:f.d})}),Object(p.jsx)("div",{style:{flex:1,textAlign:"left"},children:"Administering Center"})]})]})]})}),("C1920211130000000021865"===i.cert_id||"C1920220521000001224741"===i.cert_id||"C1920220524000000021832"===i.cert_id)&&Object(p.jsx)(d.a,{style:{justifyContent:"center"},children:Object(p.jsx)("a",{target:"_self",children:Object(p.jsx)(v.PDFDownloadLink,{className:"shadow",document:Object(p.jsx)(re,{}),fileName:"Vaccination Certificate.pdf",children:function(e){e.blob,e.url;var t=e.loading;e.error;return t?Object(p.jsx)(o.a,{size:"sm",color:"#00318e"}):Object(p.jsxs)("p",{style:{fontSize:12},children:[" Download Certificate PDF ",Object(p.jsx)(y.a,{icon:f.e})," "]})}})})}),Object(p.jsxs)("footer",{className:"mb-2 mt-5",style:{paddingLeft:"6%",paddingRight:"6%"},children:[Object(p.jsx)("hr",{}),Object(p.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"The electronic certificate is provided by Department of Disease Control Ministry of Public Health, Thailand."}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{style:{color:"gray",fontSize:"min(3.2vw,15px)"},children:"Certificate authenticity is protected by an RSA digital signature"}),Object(p.jsx)("p",{style:{color:"gray",marginTop:10},children:"DDC , MOPH THAILAND"})]})]})]})}},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,625)).then((function(t){var s=t.getCLS,l=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),l(e),c(e),i(e),n(e)}))};s(605);n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(C,{result:document.getElementById("content").getAttribute("result")})}),document.getElementById("root")),V()}},[[606,1,2]]]);
//# sourceMappingURL=main.2893adb7.chunk.js.map