(this["webpackJsonpcrypto-app"]=this["webpackJsonpcrypto-app"]||[]).push([[0],{101:function(e,n,t){},103:function(e,n,t){},104:function(e,n,t){"use strict";t.r(n);var c=t(3),r=t(1),a=t.n(r),i=t(13),o=t.n(i),s=t(16),l=t(117),u=t(116),j=t(68),d=t(113),b=t(112),p=t(63),x=t(67),h=t(69),O=t(58),f=t(119),m=t(59),g=function(e){var n=e.alert,t=n.id,r=n.type,a=n.message,i=S().removeAlert;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(f.a,{variant:r,onClose:function(){return i(t)},dismissible:!0,children:[Object(c.jsx)(m.a,{size:"24"}),"\xa0",a]})})},v=t(19),y=t(20);function k(){var e=Object(v.a)(["\n  position: absolute;\n  right: 0;\n  top: 60px;\n  padding: 30px;\n  overflow: hidden;\n"]);return k=function(){return e},e}var w=y.a.div(k()),C=function(e){var n=e.alerts;return Object(c.jsx)(w,{children:n.map((function(e){return Object(c.jsx)(g,{alert:e},e.id)}))})},_=Object(r.createContext)({});function S(){var e=Object(r.useContext)(_);if(!e)throw new Error("useAlert must be inside a AlertProvider");return e}var q=function(e){var n=e.children,t=Object(r.useState)([]),a=Object(s.a)(t,2),i=a[0],o=a[1],l=Object(r.useCallback)((function(e){var n=e.type,t=e.message,c={id:Object(O.uuid)(),type:n,message:t};o([].concat(Object(h.a)(i),[c]))}),[i]),u=Object(r.useCallback)((function(e){o((function(n){return n.filter((function(n){return n.id!==e}))}))}),[]);return Object(c.jsxs)(_.Provider,{value:{addAlert:l,removeAlert:u},children:[n,Object(c.jsx)(C,{alerts:i})]})},z=t(48),F=function(e){return new Intl.DateTimeFormat("en-IN").format(new Date(e))};function N(){var e=Object(v.a)(["\n  font-size: 10px;\n  font-weight: 100;\n  color: var(--secondary-text-color);\n"]);return N=function(){return e},e}function A(){var e=Object(v.a)(["\n  p {\n    font-size: 15px;\n    font-weight: 100;\n    margin-bottom: 3px;\n  }\n\n  span {\n    color: ",";\n    font-weight: bold;\n  }\n"]);return A=function(){return e},e}function D(){var e=Object(v.a)(["\n  width: 100%;\n  margin-bottom: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return D=function(){return e},e}function I(){var e=Object(v.a)(["\n  color: var(--primary-text-color);\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 10px;\n\n  svg {\n    margin: 0 6px 5px 0;\n  }\n"]);return I=function(){return e},e}function B(){var e=Object(v.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin: 10px 0;\n\n  span {\n    font-weight: 400;\n    margin-left: 5px;\n    color: var(--secondary-text-color);\n  }\n"]);return B=function(){return e},e}function P(){var e=Object(v.a)(["\n  height: 175px;\n  width: 100%;\n  margin: 5px 0;\n  color: var(--primary-text-color);\n  border: 1px solid var(--primary-border-color);\n  border-radius: 4px;\n  background-image: linear-gradient(black, var(--secondary-background-color));\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n\n  transition: 0.2s;\n\n  &:hover {\n    -moz-transform: translate(-2px, -2px);\n    -ms-transform: translate(-2px, -2px);\n    -o-transform: translate(-2px, -2px);\n    -webkit-transform: translate(-2px, -2px);\n    transform: translate(-2px, -2px);\n    border: 2px solid var(--secondary-border-color);\n    background-image: linear-gradient(var(--secondary-background-color), black);\n  }\n\n  &:active,\n  &:focus {\n    outline: none;\n    border: 2px solid var(--third-border-color);\n  }\n"]);return P=function(){return e},e}var T=y.a.button(P()),E=y.a.p(B()),U=y.a.p(I()),L=y.a.div(D()),R=y.a.div(A(),(function(e){return e.percent>0?"dodgerblue":"red"})),V=y.a.p(N()),W=function(e){var n,t,r,a=e.data,i=e.onPress,o=Object.keys(a.quote),l=Object(s.a)(o,1)[0];return Object(c.jsxs)(T,{onClick:i,children:[Object(c.jsxs)(E,{children:[a.name,Object(c.jsx)("span",{children:"(".concat(a.symbol,")")})]}),Object(c.jsxs)(U,{children:[a.quote[l].percent_change_24h>0?Object(c.jsx)(z.b,{size:20}):Object(c.jsx)(z.a,{size:20}),(t=a.quote[l].price,r=l,new Intl.NumberFormat("en-US",{style:"currency",currency:r,minimumFractionDigits:5}).format(t))]}),Object(c.jsxs)(L,{children:[Object(c.jsxs)(R,{percent:a.quote[l].percent_change_1h,children:[Object(c.jsx)("p",{children:"1 hour"}),Object(c.jsx)("span",{children:"".concat(a.quote[l].percent_change_1h.toFixed(2),"%")})]}),Object(c.jsxs)(R,{percent:a.quote[l].percent_change_24h,children:[Object(c.jsx)("p",{children:"24 hours"}),Object(c.jsx)("span",{children:"".concat(a.quote[l].percent_change_24h.toFixed(2),"%")})]}),Object(c.jsxs)(R,{percent:a.quote[l].percent_change_7d,children:[Object(c.jsx)("p",{children:"7 days"}),Object(c.jsx)("span",{children:"".concat(a.quote[l].percent_change_7d.toFixed(2),"%")})]})]}),Object(c.jsxs)(V,{children:["last update:\xa0",(n=a.quote[l].last_updated,new Intl.DateTimeFormat("en-IN",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}).format(new Date(n))),"\xa0",F(a.quote[l].last_updated)]})]})},H=t(115),J=t(110),M=t(111),G=(t(81),function(e){var n=e.data,t=e.isVisible,r=e.toogleVisibility;return Object(c.jsxs)(H.a,{show:t,onHide:r,animation:!1,size:"lg",children:[Object(c.jsx)(H.a.Header,{closeButton:!0,children:Object(c.jsxs)(H.a.Title,{children:[Object(c.jsx)(J.a,{src:null===n||void 0===n?void 0:n.logo,thumbnail:!0}),Object(c.jsxs)("div",{children:[null===n||void 0===n?void 0:n.name,"\xa0",Object(c.jsx)("span",{className:"symbol-name",children:"(".concat(n.symbol,")")})]})]})}),Object(c.jsxs)(H.a.Body,{children:[Object(c.jsx)("p",{children:null===n||void 0===n?void 0:n.description}),Object(c.jsxs)("p",{children:["Category:\xa0",n.category]})]}),Object(c.jsx)(H.a.Footer,{children:n.tags&&n.tags.map((function(e){return Object(c.jsx)(M.a,{variant:"light",children:e},e)}))})]})}),K=t(64),Q=(t(82),function(e){var n=e.message,t=void 0===n?"":n;return Object(c.jsx)(b.a,{children:Object(c.jsxs)(p.a,{className:"loading",children:[Object(c.jsx)(K.a,{size:"100",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(c.jsx)("p",{children:t})]})})}),X=t(118),Y=t(114),Z=t(65),$=(t(83),function(e){var n=e.credits,t=Object(c.jsxs)(X.a,{id:"popover",children:[Object(c.jsx)(X.a.Title,{as:"h3",children:"Requests left:"}),n?Object(c.jsxs)(X.a.Content,{children:[Object(c.jsx)("h6",{children:"month: ".concat(n.current_month.credits_left)}),Object(c.jsx)("h6",{children:"today: ".concat(n.current_day.credits_left)})]}):Object(c.jsx)(X.a.Content,{children:Object(c.jsx)("h6",{children:"Fetching data..."})})]});return Object(c.jsx)(Y.a,{placement:"bottom",overlay:t,children:Object(c.jsx)(Z.a,{size:32,id:"popover-button"})})}),ee=t(66),ne=t.n(ee).a.create({baseURL:"https://dio-crypto-api.herokuapp.com"}),te=(t(101),function(){var e=Object(r.useState)(!0),n=Object(s.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(!1),o=Object(s.a)(i,2),h=o[0],O=o[1],f=Object(r.useState)(),m=Object(s.a)(f,2),g=m[0],v=m[1],y=Object(r.useState)([]),k=Object(s.a)(y,2),w=k[0],C=k[1],_=Object(r.useState)({}),q=Object(s.a)(_,2),z=q[0],F=q[1],N=Object(r.useState)(),A=Object(s.a)(N,2),D=A[0],I=A[1],B=S().addAlert,P=Object(r.useCallback)((function(e){localStorage.setItem("@CryptocurrencyApp:currency-code",e),I(e)}),[]),T=Object(r.useCallback)((function(){var e=localStorage.getItem("@CryptocurrencyApp:currency-code");e?I(e):P("USD")}),[P]),E=Object(r.useCallback)((function(){O(!h)}),[h]),U=Object(r.useCallback)((function(e){ne.get("cryptocoins",{params:{convert:e}}).then((function(e){var n=e.data.data;C(n),a(!1)})).catch((function(){return B({type:"warning",message:"We are unable to get cryptocoin list data. Please try again later."})}))}),[]),L=Object(r.useCallback)((function(e){ne.get("cryptocoins/".concat(e)).then((function(n){var t=n.data.data;F(t[e]),E()})).catch((function(){return B({type:"warning",message:"We are unable to get cryptocoin info data. Please try again later."})}))}),[E]),R=Object(r.useCallback)((function(){ne.get("usage").then((function(e){var n=e.data.data;v(n.usage)}))}),[]);return Object(r.useEffect)((function(){T()}),[T]),Object(r.useEffect)((function(){D&&U(D)}),[D,U]),Object(r.useEffect)((function(){R()}),[w,z,R]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{bg:"dark",variant:"dark",expand:"sm",children:[Object(c.jsxs)(l.a.Brand,{href:"",onClick:function(){return U(D)},children:[Object(c.jsx)(x.a,{className:"d-inline-block align-top",size:"30"}),Object(c.jsx)("span",{className:"title",children:" Cryptocurrency App"})]}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(l.a.Collapse,{className:"responsive-navbar-nav justify-content-end",children:[Object(c.jsx)(u.a,{inline:!0,children:Object(c.jsxs)(j.a,{id:"currency-code-select",className:"mr-sm-2 mt-sm-1",value:D,onChange:function(e){return P(e.target.value)},as:"select",custom:!0,children:[Object(c.jsx)("option",{value:"USD",children:"USD"}),Object(c.jsx)("option",{value:"BRL",children:"BRL"})]})}),Object(c.jsx)(l.a.Text,{children:Object(c.jsx)($,{credits:g})})]})]}),Object(c.jsxs)(d.a,{fluid:!0,children:[t&&Object(c.jsx)(Q,{message:"Waking up the backend instance..."}),Object(c.jsx)(b.a,{children:w.map((function(e){return Object(c.jsx)(p.a,{sm:6,md:4,xl:3,children:Object(c.jsx)(W,{data:e,onPress:function(){return L(e.id)}})},e.id)}))})]}),Object(c.jsx)(G,{data:z,isVisible:h,toogleVisibility:E})]})}),ce=function(e){var n=e.children;return Object(c.jsx)(q,{children:n})},re=(t(103),function(){return Object(c.jsx)(ce,{children:Object(c.jsx)(te,{})})});o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(re,{})}),document.getElementById("root"))},81:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.f7142540.chunk.js.map