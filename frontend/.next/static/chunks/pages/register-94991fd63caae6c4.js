(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[787],{9702:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return r(3184)}])},3184:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(4848),i=r(6540),a=r(6715);let n=()=>{let[e,t]=(0,i.useState)(""),[r,n]=(0,i.useState)(""),[l,u]=(0,i.useState)(""),d=(0,a.useRouter)(),o=async t=>{t.preventDefault();try{let t=await fetch("".concat("http://127.0.0.1:8000","/auth/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:r,password:l})});if(t.ok)await t.json(),d.push("/profile");else{let e=await t.json();alert(e.detail)}}catch(e){console.error("Error registering user:",e),alert("An error occurred during registration.")}};return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Register"}),(0,s.jsxs)("form",{onSubmit:o,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Username"}),(0,s.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Email"}),(0,s.jsx)("input",{type:"email",value:r,onChange:e=>n(e.target.value),required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Password"}),(0,s.jsx)("input",{type:"password",value:l,onChange:e=>u(e.target.value),required:!0})]}),(0,s.jsx)("button",{type:"submit",children:"Register"})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(9702)),_N_E=e.O()}]);