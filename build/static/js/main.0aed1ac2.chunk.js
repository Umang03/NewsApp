(this["webpackJsonpvoice_enabled-news_app"]=this["webpackJsonpvoice_enabled-news_app"]||[]).push([[0],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a.n(r),o=(a(86),a(13)),c=a(41),s=a.n(c),m=a(167),d=a(166),u=a(162),p=a(168),g=a(160),f=a(161),b=a(163),h=a(164),x=a(165),y=a(158),w=Object(y.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),v=a(72),E=a.n(v),j=function(e){var t=e.article,a=t.description,r=t.publishedAt,l=t.source,c=t.title,s=t.url,m=t.urlToImage,d=e.i,y=e.activeArticle,v=w(),j=Object(n.useState)([]),C=Object(o.a)(j,2),N=C[0],k=C[1];return Object(n.useEffect)((function(){k((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;d===y&&N[y]&&(e=N[y],window.scroll(0,e.current.offsetTop-50))}),[d,y,N]),i.a.createElement(p.a,{ref:N[d],className:E()(v.card,y===d?v.activeCard:null)},i.a.createElement(g.a,{href:s,target:"_blank"},i.a.createElement(f.a,{className:v.media,image:m||"https://www.indiafellow.org/blog/wp-content/uploads/2020/05/Marketplace-Lending-News.jpg"}),i.a.createElement("div",{className:v.details},i.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(r).toDateString()),i.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"h2"},l.name)),i.a.createElement(u.a,{className:v.title,gutterBottom:!0,variant:"h5"},c),i.a.createElement(b.a,null,i.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},a))),i.a.createElement(h.a,{className:v.cardActions},i.a.createElement(x.a,{size:"small",color:"primary"},"Learn More"),i.a.createElement(u.a,{variant:"body2",color:"textSecondary"}," Article: ",d+1)))},C=Object(y.a)({container:{padding:"3% 5%",width:"100%",margin:"0"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flexstart",borderBottom:"10px solid #04071A",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column"}}),N=[{color:"#082348",title:"Latest News",text:"Give me the latest news..."},{color:"#1565c0",title:"News by Categories",info:"Entertainment, Health, Business, Science, Sports, Technology...",text:"Give me the latest Business news..."},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with Bitcoin..."},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN..."}],k=function(e){var t=e.articles,a=e.activeArticle,n=C();return t.length?i.a.createElement(m.a,{in:!0},i.a.createElement(d.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t&&t.map((function(e,t){return i.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(j,{article:e,activeArticle:a,i:t}))})))):i.a.createElement(m.a,{in:!0},i.a.createElement(d.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},N.map((function(e){return i.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(u.a,{variant:"h6",style:{color:"#e9f0b9"}},i.a.createElement("strong",null,e.title)),e.info?i.a.createElement(u.a,{variant:"subtitle1"},i.a.createElement("strong",null,e.title.split(" ")[2],":")," ",i.a.createElement("br",null),e.info):i.a.createElement(u.a,{variant:"h5"},i.a.createElement("strong",null,i.a.createElement("i",null,"Alan at your service!"))),i.a.createElement(u.a,{variant:"body2"},i.a.createElement("strong",null,"Try saying:")," ",i.a.createElement("br",null),i.a.createElement("i",null,e.text))))}))))},O=a(74),A=a.n(O),B=a(8),S=Object(y.a)((function(e){return{footer:Object(B.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(B.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(B.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(B.a)({backgroundImage:'url("https://thetechpanda.com/wp-content/uploads/2018/08/voice-recog-960x440.jpeg")',backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"95%",height:"35vh",margin:" 0 auto",position:"relative",padding:"0 3%",display:"flex",justifyContent:"space-around",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(B.a)({width:"28%",height:"30vmin",borderRadius:"5%",margin:"1.5% 0"},e.breakpoints.down("sm"),{height:"37vmin",margin:"2% 0"})}})),D=function(){var e=S(),t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(-1),m=Object(o.a)(c,2),d=m[0],u=m[1];return Object(n.useEffect)((function(){s()({key:"871bb42135775d06b86906a4b85681df2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadlines"===t)l(a),u(-1);else if("highlight"===t)u((function(e){return e+1}));else{var i=n.length>2?A()(n,{fuzzy:!0}):n,r=a[i-1];i>20?s()().playText("Please try that again"):r&&(window.open(a[i].url,"_blank"),s()().playText("Opening the article"))}}})}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:e.logoContainer},i.a.createElement("img",{src:"https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg",className:e.alanLogo,alt:"alan logo"})),i.a.createElement(k,{articles:r,activeArticle:d}))};l.a.render(i.a.createElement(D,null),document.getElementById("root"))},81:function(e,t,a){e.exports=a(144)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.0aed1ac2.chunk.js.map