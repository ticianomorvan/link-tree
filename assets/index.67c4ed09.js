import{j as m,F as g,a as f,b as p,c as b,d as h,e as y,f as k,g as x,h as v,i as F,R as N,k as w}from"./vendor.3d018af8.js";const j=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}};j();const d="Ticiano Morvan",C="Ti7oyan",L="https://lh3.googleusercontent.com/WO6atR9rtQjAJXsjf78uJGKqoSc_yDQCIyDca7w9iWbuVaLvPdt70sF8Us9k1bSsCMDY3amSFubvDmJfqX9dLoegtOCciMQ9mN6WjjbFoZClEJ9q6k-_sVLbcrGkYQ4qqXiRJa09s8asjBv4wGl-43T-YcKqVPevgtuW3v5XvlUmlrc2uFmyw3yT-Qmk2KynFnbhQDqn-5xkVkvttCFVOjORpzb_Tc-ZAQNUuP2QNuaX34f5CMOmBUIk9j0tYpZtk8Ayg8Ty2P_UbaA6Mn5kMen9rjB5ZF7Ra_cGfTyALGD2vtU_v0lQR_ybqIh9N8L9WvlzCG4MlA8BrkAsX-JNQsYy2Q_t_eUAgqw5dFmdGBdKKfxNAGry0iS_GkXM6f9EC_yXvE4cyiT24YLtxHECfu3l-A4xVQPOQWWmVYw2u_X-SXpmqgp9Y0Qy7jeDn156UR0Pc8xhft52Q0L25BgOGSxc91v4jqi0GQ2NDzm-iD4STPRndPYNT18CIRqElgPH43oAT0lZBzo4AQMs3WjfoHyp8NlyFEcXpgitElCZuD_hc1gFfUVSJWy_IsunhEwLWncX8_99x5pKLqb3yIPOcL5rq1zxXIgE_ZRro8mPuQgdV8pgxvJ7dsmwEWDNIoyAP3_2e5wncJ3pnRFlfkDmeMSaJf6NWKlRtVbj59dbLQWzf3P9KUKiu9vwFxXR_nR8LX5v3vD3ZyRt5KSFpqchYgjjVg=s628-no?authuser=0",e=m.exports.jsx,c=m.exports.jsxs,u={instagram:{backgroundColor:"bg-gradient-to-tr from-amber-500 to-fuchsia-700",icon:e(f,{})},twitch:{backgroundColor:"bg-purple-500",icon:e(p,{})},twitter:{backgroundColor:"bg-blue-500",icon:e(b,{})},youtube:{backgroundColor:"bg-red-600",icon:e(h,{})},linkedin:{backgroundColor:"bg-blue-300",icon:e(y,{})},facebook:{backgroundColor:"bg-blue-600",icon:e(k,{})},spotify:{backgroundColor:"bg-green-500",icon:e(x,{})},patreon:{backgroundColor:"bg-red-600",icon:e(v,{})},github:{backgroundColor:"bg-gray-500",icon:e(F,{})}},r=({platform:n,description:i,url:s,customColor:a})=>{let o="bg-white",t=e(g,{});return n in u&&(o=u[n].backgroundColor,t=u[n].icon),a&&(o=a),e("a",{href:s,rel:"noreferrer",target:"_blank",children:e("li",{id:`${d}-${n}`,className:`${o} p-2 rounded-xl`,children:c("div",{className:"p-0.5 rounded-xl w-full flex justify-between",children:[e("span",{className:"self-center text-2xl",children:t}),e("p",{children:i})]})})})},Q=()=>c("main",{className:"w-screen h-full bg-neutral-900 font-sans",children:[e("section",{id:"profile",className:"p-8",children:c("article",{id:"profile-details",className:"text-center text-white",children:[e("img",{src:L,alt:`${d}'s profile picture`,className:"w-6/12 m-auto my-4 rounded-full"}),e("h1",{className:"text-xl",children:d}),e("h2",{className:"text-md text-gray-400",children:`< ${C} >`})]})}),e("section",{id:"external-links",className:"p-8",children:c("ul",{className:"grid grid-cols-1 gap-y-2",children:[e(r,{platform:"twitch",description:"Ti7oyan",url:"https://instagram.com/ticianomorvan"}),e(r,{platform:"youtube",description:"Ti7oyan",url:"https://instagram.com/ticianomorvan"}),e(r,{platform:"instagram",description:"ticianomorvan",url:"https://instagram.com/ticianomorvan"}),e(r,{platform:"website",description:"Mi sitio web \u{1F680}",url:"https://ticianomorvan.me",customColor:"bg-blue-500"}),e(r,{platform:"linkedin",description:"Ticiano Morvan",url:"https://instagram.com/ticianomorvan"}),e(r,{platform:"github",description:"Ti7oyan",url:"https://github.com/Ti7oyan"})]})})]});N.render(e(w.StrictMode,{children:e(Q,{})}),document.getElementById("root"));