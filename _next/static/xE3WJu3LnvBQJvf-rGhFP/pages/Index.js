(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ABnS:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),s=n.n(a),r=n("eVuF"),o=n.n(r);function c(e,t,n,a,s,r,c){try{var i=e[r](c),l=i.value}catch(u){return void n(u)}i.done?t(l):o.a.resolve(l).then(a,s)}function i(e){return function(){var t=this,n=arguments;return new o.a(function(a,s){var r=e.apply(t,n);function o(e){c(r,a,s,o,i,"next",e)}function i(e){c(r,a,s,o,i,"throw",e)}o(void 0)})}}var l=n("q1tI"),u=n.n(l),d=n("pJ0N"),m=n("zgjP"),p=n.n(m),f=u.a.createElement,v=function(e){var t=e.precio,n=t.price,a=t.percent_change_1h,s=t.percent_change_24h,r=t.percent_change_7d;return f("div",{className:"card text-white bg-success mb-3"},f("div",{className:"card-header"},"Precio del bitcoin"),f("div",{className:"card-body"},f("h4",{className:"card-body-title"},"Precio actual: $",n.toFixed(2)),f("div",{className:"d-md-flex justify-content-between"},f("p",{className:"card-text"},f("span",{className:"font-weight-bold"},"Ultima hora "),a.toFixed(2),"%"),f("p",{className:"card-text"},f("span",{className:"font-weight-bold"},"Ultimas 24 horas "),s.toFixed(2),"%"),f("p",{className:"card-text"},f("span",{className:"font-weight-bold"},"Ultimos 7 dias "),r.toFixed(2),"%"))))},h=u.a.createElement,b=function(e){var t,n=e.noticia,a=n.urlToImage,s=n.url,r=n.title,o=n.description,c=n.source;return t=""!==a?h("img",{src:a,alt:r,className:"card-img-top"}):h("p",{className:"text-center my-5"},"Imagen no disponible"),h("div",{className:"col-md-6 col-12 mb-4"},h("div",{className:"card"},h("div",{className:"card-image"},t),h("div",{className:"card-body"},h("h3",{className:"card-title"},r),h("p",{className:"card-text"},o),h("p",{className:"card-text"},c.name),h("a",{href:s,target:"_blank",className:"btn btn-primary"},"Ver mas"))))},w=u.a.createElement,g=function(e){return w("div",{className:"row"},e.noticias.map(function(e){return w(b,{key:e.url,noticia:e})}))},N=n("pLtp"),x=n.n(N),y=u.a.createElement,_=function(e){var t=e.info,n=t.name,a=t.url,s=t.description,r=n.text;r.length>150&&(r=r.substr(0,100)+"...");var o=s.text;return o&&(o=o.substr(0,250)+"..."),y("a",{href:a,target:"_blank",className:"list-group-item active text-light mb-1"},y("h3",{className:"mb-3"},n.text),y("p",null,o))},P=u.a.createElement,k=function(e){var t=x()(e.eventos);return console.log(e.eventos),P("div",{className:"list-group"},t.map(function(t){return P(_,{key:t,info:e.eventos[t]})}))},E=u.a.createElement,B=function(e){return E(d.a,null,E("div",{className:"row"},E("div",{className:"col-12"},E("h2",null,"Precio del bitcoin"),E(v,{precio:e.precioBitcoin})),E("div",{className:"col-md-8"},E("h2",null,"Noticias sobre bitcoin"),console.log(e.noticias),E(g,{noticias:e.noticias})),E("div",{className:"col-md-4"},E("h2",null,"Proximos eventos bitcoin"),E(k,{eventos:e.eventos}))))};B.getInitialProps=i(s.a.mark(function e(){var t,n,a,r,o,c,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=96d26c4e5baa4d6185535bd66f8bdef9&language=es");case 2:return t=e.sent,e.next=5,p()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Colombia&token=K7JJEVR6YVY5CPBOSVXS");case 5:return n=e.sent,"e1f35cdd-c426-4451-b546-e44afb47d641",a={headers:{"X-CMC_PRO_API_KEY":"e1f35cdd-c426-4451-b546-e44afb47d641","Accept-Encoding":"deflate"},json:!0,gzip:!0},e.next=10,p()("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC",a);case 10:return r=e.sent,e.next=13,r.json();case 13:return o=e.sent,e.next=16,t.json();case 16:return c=e.sent,e.next=19,n.json();case 19:return i=e.sent,e.abrupt("return",{precioBitcoin:o.data.BTC.quote.USD,noticias:c.articles,eventos:i.events});case 21:case"end":return e.stop()}},e)}));t.default=B},S4i4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Index",function(){var e=n("ABnS");return{page:e.default||e}}])},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,a){var s=new XMLHttpRequest,r=[],o=[],c={},i=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:i,headers:{keys:function(){return r},entries:function(){return o},get:function(e){return c[e.toLowerCase()]},has:function(e){return e.toLowerCase()in c}}}};for(var l in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){r.push(t=t.toLowerCase()),o.push([t,n]),c[t]=c[t]?c[t]+","+n:n}),n(i())},s.onerror=a,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(l,t.headers[l]);s.send(t.body||null)})}},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["S4i4",1,0]]]);