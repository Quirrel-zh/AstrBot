import{_ as B}from"./LogoDark.vue_vue_type_script_setup_true_lang-4faa128a.js";import{x as y,D as o,o as b,s as U,a as e,w as a,b as n,B as $,d as u,f as d,A as _,e as f,V as r,O as m,an as A,as as E,F,c as T,N as q,J as V,L as P}from"./index-7c8bc001.js";const z="/assets/social-google-a359a253.svg",N=["src"],S=n("span",{class:"ml-2"},"Sign up with Google",-1),D=n("h5",{class:"text-h5 text-center my-4 mb-8"},"Sign up with Email address",-1),G={class:"d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold"},L=n("a",{href:"#",class:"ml-1 text-lightText"},"Terms and Condition",-1),O={class:"mt-5 text-right"},j=y({__name:"AuthRegister",setup(w){const c=o(!1),i=o(!1),p=o(""),v=o(""),g=o(),h=o(""),x=o(""),k=o([s=>!!s||"Password is required",s=>s&&s.length<=10||"Password must be less than 10 characters"]),C=o([s=>!!s||"E-mail is required",s=>/.+@.+\..+/.test(s)||"E-mail must be valid"]);function R(){g.value.validate()}return(s,l)=>(b(),U(F,null,[e(u,{block:"",color:"primary",variant:"outlined",class:"text-lightText googleBtn"},{default:a(()=>[n("img",{src:$(z),alt:"google"},null,8,N),S]),_:1}),e(r,null,{default:a(()=>[e(d,{class:"d-flex align-center"},{default:a(()=>[e(_,{class:"custom-devider"}),e(u,{variant:"outlined",class:"orbtn",rounded:"md",size:"small"},{default:a(()=>[f("OR")]),_:1}),e(_,{class:"custom-devider"})]),_:1})]),_:1}),D,e(E,{ref_key:"Regform",ref:g,"lazy-validation":"",action:"/dashboards/analytical",class:"mt-7 loginForm"},{default:a(()=>[e(r,null,{default:a(()=>[e(d,{cols:"12",sm:"6"},{default:a(()=>[e(m,{modelValue:h.value,"onUpdate:modelValue":l[0]||(l[0]=t=>h.value=t),density:"comfortable","hide-details":"auto",variant:"outlined",color:"primary",label:"Firstname"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12",sm:"6"},{default:a(()=>[e(m,{modelValue:x.value,"onUpdate:modelValue":l[1]||(l[1]=t=>x.value=t),density:"comfortable","hide-details":"auto",variant:"outlined",color:"primary",label:"Lastname"},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=t=>v.value=t),rules:C.value,label:"Email Address / Username",class:"mt-4 mb-4",required:"",density:"comfortable","hide-details":"auto",variant:"outlined",color:"primary"},null,8,["modelValue","rules"]),e(m,{modelValue:p.value,"onUpdate:modelValue":l[3]||(l[3]=t=>p.value=t),rules:k.value,label:"Password",required:"",density:"comfortable",variant:"outlined",color:"primary","hide-details":"auto","append-icon":i.value?"mdi-eye":"mdi-eye-off",type:i.value?"text":"password","onClick:append":l[4]||(l[4]=t=>i.value=!i.value),class:"pwdInput"},null,8,["modelValue","rules","append-icon","type"]),n("div",G,[e(A,{modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]=t=>c.value=t),rules:[t=>!!t||"You must agree to continue!"],label:"Agree with?",required:"",color:"primary",class:"ms-n2","hide-details":""},null,8,["modelValue","rules"]),L]),e(u,{color:"secondary",block:"",class:"mt-2",variant:"flat",size:"large",onClick:l[6]||(l[6]=t=>R())},{default:a(()=>[f("Sign Up")]),_:1})]),_:1},512),n("div",O,[e(_),e(u,{variant:"plain",to:"/auth/login",class:"mt-2 text-capitalize mr-n2"},{default:a(()=>[f("Already have an account?")]),_:1})])],64))}});const I={class:"pa-7 pa-sm-12"},J=n("h2",{class:"text-secondary text-h2 mt-8"},"Sign up",-1),Y=n("h4",{class:"text-disabled text-h4 mt-3"},"Enter credentials to continue",-1),M=y({__name:"RegisterPage",setup(w){return(c,i)=>(b(),T(r,{class:"h-100vh","no-gutters":""},{default:a(()=>[e(d,{cols:"12",class:"d-flex align-center bg-lightprimary"},{default:a(()=>[e(q,null,{default:a(()=>[n("div",I,[e(r,{justify:"center"},{default:a(()=>[e(d,{cols:"12",lg:"10",xl:"6",md:"7"},{default:a(()=>[e(V,{elevation:"0",class:"loginBox"},{default:a(()=>[e(V,{variant:"outlined"},{default:a(()=>[e(P,{class:"pa-9"},{default:a(()=>[e(r,null,{default:a(()=>[e(d,{cols:"12",class:"text-center"},{default:a(()=>[e(B),J,Y]),_:1})]),_:1}),e(j)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}))}});export{M as default};
