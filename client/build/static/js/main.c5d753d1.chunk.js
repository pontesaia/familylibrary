(this.webpackJsonpfamilylibrary=this.webpackJsonpfamilylibrary||[]).push([[0],{42:function(e,a,t){e.exports=t(79)},47:function(e,a,t){},48:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),s=t(20),o=t.n(s),i=(t(47),t(6)),m=t(7),c=t(9),u=t(8),d=(t(48),t(39)),p=t.n(d),h=t(18),g=t(93),f=t(80),E=t(81),b=t(82),y=t(92),v=t(19),x=t.n(v),C=t(83),w=t(84),k=t(85),N=t(86),j=t(87),O=t(88),S=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).toggleNavbar=function(){n.setState({collapsed:!n.state.collapsed})},n.state={collapsed:!1},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{id:"navItems",className:"mb-4"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(C.a,{color:"faded",light:!0,expand:"md"},r.a.createElement(w.a,{href:"/",className:"mr-auto"}),r.a.createElement(k.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(g.a,{isOpen:this.state.collapsed,navbar:!0},r.a.createElement(N.a,{navbar:!0,className:"justify-content-center mx-auto"},r.a.createElement(j.a,null,r.a.createElement(O.a,{style:F.navLinks,href:"#",name:"aboutCollapsed",onClick:this.props.toggleComponent},"About")),r.a.createElement(j.a,null,r.a.createElement(O.a,{style:F.navLinks,href:"#",name:"contactCollapsed",onClick:this.props.toggleComponent},"Contact")),r.a.createElement(j.a,null,r.a.createElement(O.a,{style:F.navLinks,href:"#",name:"featuresCollapsed",onClick:this.props.toggleComponent},"Features")))))))))}}]),t}(l.Component),F={navLinks:{fontFamily:"Comfortaa",fontSize:"1.8rem",paddingLeft:"52px",paddingRight:"52px"}},B=S,L=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"componentContainer"},r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"text-left mt-4"},r.a.createElement("h1",{style:z.header},"About"))),r.a.createElement(E.a,{className:"text-left mt-4"},r.a.createElement(b.a,{xs:"12",md:"6"},r.a.createElement("p",{style:z.introPara},"Families come in all sizes, colors, cultures and traditions! Families who share their values, and traditions with each generation are bound closer together through their common family histories. Reading stories written directly by family members is like reading letters from home. These personal memories offer perspectives on \u201cWho\u2019s who\u201d, and the \u201cWhy\u2019s\u201d and the \u201cWhen\u2019s\u201d of family life. Family Library offers a convenient way to share precious family stories with family members no matter where they are in the world. Get started and invite your family today!")),r.a.createElement(b.a,{xs:"12",md:"3"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("p",{style:z.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:z.icons,src:"/images/earth.svg",alt:"holding hands icon",height:"24px"})),"Family Library brings families closer together, even when separated, and memories come back to life in story form"),r.a.createElement("p",{style:z.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:z.icons,src:"/images/hand-heart.svg",alt:"multiple hearts icon",height:"24px"})),"Family \u201cmembers\u201d post stories, old photos or recipes for generations to enjoy.")))),r.a.createElement(b.a,{xs:"12",md:"3",className:"mb-5"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("p",{style:z.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:z.icons,src:"/images/book-edit-outline.svg",alt:"holding hands icon",height:"24px"})),"Browse, read, export, print, or share, via email, links to those special family events and milestones"),r.a.createElement("p",{style:z.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:z.icons,src:"/images/human-queue.svg",alt:"holding hands icon",height:"24px"})),"Memories of precious \u201cold time\u201d family photo albums, letters from Grandpa, or family favorite recipes!"))))),r.a.createElement("hr",null))))}}]),t}(l.Component),z={header:{color:"black",fontSize:"2rem",fontFamily:"Comfortaa"},icons:{paddingLeft:"4px",paddingBottom:"3px"},introPara:{fontSize:"1.1rem",lineHeight:"30px"},imageBullets:{lineHeight:"30px"}},P=L,R=t(17),T=t(89),q=t(90),M=t(91),I=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={input:{},errors:{}},n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){var a=this.state.input;a[e.target.name]=e.target.value,this.setState({input:a})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.validate()){console.log(this.state);var a={email:"",title:"",message:""};this.setState({input:a}),alert("Contact Form is submitted")}}},{key:"validate",value:function(){var e=this.state.input,a={},t=!0;(e.email||(t=!1,a.email="Please enter your email Address."),"undefined"!==typeof e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(t=!1,a.email="Please enter valid email address."));return e.title||(t=!1,a.title="Please enter your subject title."),e.message||(t=!1,a.message="Please enter your message."),this.setState({errors:a}),t}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"componentContainer"},r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"text-left mt-4"},r.a.createElement(b.a,{xs:"12",sm:"12",md:"7",className:"mx-auto"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"text-left mt-2 mb-4"},r.a.createElement("h1",{style:W.header},"Contact"))),r.a.createElement(T.a,{style:W.form1},r.a.createElement(q.a,null,r.a.createElement(M.a,{type:"text",name:"email",value:this.state.input.email,onChange:this.handleChange,className:"form-control",placeholder:"Enter your email",id:"email"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.email)),r.a.createElement(q.a,null,r.a.createElement(M.a,{type:"text",name:"title",value:this.state.input.title,onChange:this.handleChange,className:"form-control",placeholder:"Enter your subject title",id:"title"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.title)),r.a.createElement(q.a,null,r.a.createElement(M.a,{type:"textarea",name:"message",value:this.state.input.message,onChange:this.handleChange,className:"form-control",placeholder:"Enter your message",id:"message"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.message)),r.a.createElement(y.a,{type:"submit",value:"Submit",style:W.sendBtn},"SEND")))),r.a.createElement("hr",null))))}}]),t}(l.Component),W={header:{color:"black",fontSize:"2rem",fontFamily:"Comfortaa"},form1:{margin:"0 auto"},sendBtn:{float:"right",width:"100%",marginBottom:"80px",backgroundColor:"black",fontSize:"1.5rem"}},D=I,_=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"componentContainer"},r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"text-left mt-4"},r.a.createElement("h1",{style:A.header},"Features"))),r.a.createElement(E.a,{className:"text-left mt-4"},r.a.createElement(b.a,{xs:"12",sm:"6",md:"3"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/account-circle.svg",alt:"family account",height:"24px"})),"Archive family stories, histories, memories, photos, videos and recipes in secure family group accounts.")),r.a.createElement(b.a,{xs:"12",sm:"6",md:"3"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/highway.svg",alt:"family journey",height:"24px"})),"Follow stories of family heritage and legacies, or add your own families' journey.")),r.a.createElement(b.a,{xs:"12",sm:"6",md:"3"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/baby-carriage.svg",alt:"safe place",height:"24px"})),"Keep family folklore in a sacred space where safety-checked content is posted for families to enjoy.")),r.a.createElement(b.a,{xs:"12",sm:"6",md:"3"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/human-female-boy.svg",alt:"siblings",height:"24px"})),"Preserve those curated daily visuals that you text to mom, dad, and siblings."))),r.a.createElement(E.a,null,r.a.createElement(b.a,{xs:"12",sm:"6",md:"3"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/badge-account-horizontal.svg",alt:"badges",height:"24px"})),"Tag content for creating family movies for online get-togethers.")),r.a.createElement(b.a,{xs:"12",sm:"6",md:"3"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/human-queue.svg",alt:"families",height:"24px"})),"Join Family Groups where you can browse or post on multiple family lineages.")),r.a.createElement(b.a,{xs:"12",sm:"6",md:"3"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/human-male-girl.svg",alt:"lineages",height:"24px"})),"Exporting for creating those wonderful story-books or family-photo-books for gift-giving.")),r.a.createElement(b.a,{xs:"12",sm:"6",md:"3",className:"mb-5"},r.a.createElement("p",{style:A.imageBullets},r.a.createElement("span",{className:"backgroundCircle"},r.a.createElement("img",{style:A.icons,src:"/images/human-male-child.svg",alt:"relatives",height:"24px"})),"Share your favorites stories via email by sending invitations to family members."))),r.a.createElement("hr",null))))}}]),t}(l.Component),A={header:{color:"black",fontSize:"2rem",fontFamily:"Comfortaa"},icons:{paddingLeft:"4px",paddingBottom:"3px"},introPara:{fontSize:"1.5rem",lineHeight:"2.5rem"},imageBullets:{lineHeight:"30px"}},$=_,G=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={input:{},errors:{}},n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){var a=this.state.input;a[e.target.name]=e.target.value,this.setState({input:a})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.validate()){console.log(this.state);var a={email:"",password:""};this.setState({input:a}),alert("Login Form is submitted")}}},{key:"validate",value:function(){var e=this.state.input,a={},t=!0;(e.email||(t=!1,a.email="Please enter your email address."),"undefined"!==typeof e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(t=!1,a.email="Please enter valid email address."));return e.password||(t=!1,a.password="Please enter your password."),"undefined"!==typeof e.password&&e.password.length<6&&(t=!1,a.password="Please add at least 6 characters."),this.setState({errors:a}),t}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"componentContainer"},r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"text-left mt-4"},r.a.createElement(b.a,{xs:"12",sm:"12",md:"7",className:"mx-auto"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"text-left mt-4"},r.a.createElement("h1",{style:H.header},r.a.createElement(y.a,{name:"loginCollapsed",onClick:this.props.toggleComponent,style:H.backLink},"\u21a9")))),r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"text-left mt-2 mb-4"},r.a.createElement("h1",{style:H.header},"Login"))),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"email",value:this.state.input.email,onChange:this.handleChange,className:"form-control",placeholder:"Enter your email",id:"email"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",value:this.state.input.password,onChange:this.handleChange,className:"form-control",placeholder:"Enter your password",id:"password"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.password)),r.a.createElement(y.a,{type:"submit",value:"Submit",style:H.sendBtn},"SEND")))),r.a.createElement("hr",null))))}}]),t}(l.Component),H={header:{color:"black",fontSize:"2rem",fontFamily:"Comfortaa"},form1:{margin:"0 auto"},sendBtn:{float:"right",width:"100%",marginBottom:"80px",backgroundColor:"black",fontSize:"1.5rem"},backLink:{textDecoration:"none",color:"black",backgroundColor:"transparent",borderColor:"transparent"}},J=G,V=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={input:{},errors:{}},n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(m.a)(t,[{key:"handleChange",value:function(e){var a=this.state.input;a[e.target.name]=e.target.value,this.setState({input:a})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.validate()){console.log(this.state);var a={username:"",email:"",password:"",confirm_password:""};this.setState({input:a}),alert("Register Form is submitted")}}},{key:"validate",value:function(){var e=this.state.input,a={},t=!0;if(e.username||(t=!1,a.username="Please enter your username."),"undefined"!==typeof e.username){(e.username.length<6||!/^\S*$/.test(e.username))&&(t=!1,a.username="Please enter valid username.")}(e.email||(t=!1,a.email="Please enter your email Address."),"undefined"!==typeof e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(t=!1,a.email="Please enter valid email address."));return e.password||(t=!1,a.password="Please enter your password."),e.confirm_password||(t=!1,a.confirm_password="Please enter your confirm password."),"undefined"!==typeof e.password&&e.password.length<6&&(t=!1,a.password="Please add at least 6 characters."),"undefined"!==typeof e.password&&"undefined"!==typeof e.confirm_password&&e.password!==e.confirm_password&&(t=!1,a.password="Passwords don't match."),this.setState({errors:a}),t}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"componentContainer"},r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"text-left mt-4"},r.a.createElement(b.a,{xs:"12",sm:"12",md:"7",className:"mx-auto"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"text-left mt-4"},r.a.createElement("h1",{style:K.header},r.a.createElement(y.a,{name:"registerCollapsed",onClick:this.props.toggleComponent,style:K.backLink},"\u21a9")))),r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"text-left mt-2 mb-4"},r.a.createElement("h1",{style:K.header},"Register"))),r.a.createElement(T.a,{onSubmit:this.handleSubmit},r.a.createElement(q.a,null,r.a.createElement(M.a,{type:"text",name:"username",value:this.state.input.username,onChange:this.handleChange,className:"form-control",placeholder:"Enter your username",id:"username"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.username)),r.a.createElement(q.a,null,r.a.createElement(M.a,{type:"text",name:"email",value:this.state.input.email,onChange:this.handleChange,className:"form-control",placeholder:"Enter your email",id:"email"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.email)),r.a.createElement(q.a,null,r.a.createElement(M.a,{type:"password",name:"password",value:this.state.input.password,onChange:this.handleChange,className:"form-control",placeholder:"Enter your password",id:"password"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.password)),r.a.createElement(q.a,null,r.a.createElement(M.a,{type:"password",name:"confirm_password",value:this.state.input.confirm_password,onChange:this.handleChange,className:"form-control",placeholder:"Enter confirm password",id:"confirm_password"}),r.a.createElement("div",{className:"text-danger"},this.state.errors.confirm_password)),r.a.createElement(y.a,{type:"submit",value:"Submit",style:K.sendBtn},"SEND")))),r.a.createElement("hr",null))))}}]),t}(l.Component),K={header:{color:"black",fontSize:"2rem",fontFamily:"Comfortaa"},form1:{margin:"0 auto"},sendBtn:{float:"right",width:"100%",marginBottom:"80px",backgroundColor:"black",fontSize:"1.5rem"},backLink:{textDecoration:"none",color:"black",backgroundColor:"transparent",borderColor:"transparent"}},Q=V,U=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).toggleLogoWidth=function(e){e?(x()("#logoImage").stop().animate({width:550},300),x()("#logoTitle").stop().animate({fontSize:100},300)):(x()("#logoImage").stop().animate({width:300},300),x()("#logoTitle").stop().animate({fontSize:40},300))},n.toggleComponent=function(e){var a=e.target.name;n.setState(Object(h.a)({aboutCollapsed:!1,contactCollapsed:!1,featuresCollapsed:!1,loginCollapsed:!1,registerCollapsed:!1},a,!n.state[a])),n.toggleLogoWidth(n.state[a])},n.state={aboutCollapsed:!1,contactCollapsed:!1,featuresCollapsed:!1,loginCollapsed:!1,registerCollapsed:!1},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.props.response.body),r.a.createElement(g.a,{isOpen:this.state.aboutCollapsed},r.a.createElement(P,null)),r.a.createElement(g.a,{isOpen:this.state.contactCollapsed},r.a.createElement(D,null)),r.a.createElement(g.a,{isOpen:this.state.featuresCollapsed},r.a.createElement($,null)),r.a.createElement(g.a,{isOpen:this.state.loginCollapsed},r.a.createElement(J,{toggleComponent:this.toggleComponent})),r.a.createElement(g.a,{isOpen:this.state.registerCollapsed},r.a.createElement(Q,{toggleComponent:this.toggleComponent})),r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"mt-5"},r.a.createElement(b.a,{className:"text-center"},r.a.createElement(B,{toggleComponent:this.toggleComponent}))),r.a.createElement(E.a,{className:"mt-1"},r.a.createElement(b.a,{className:"text-center"},r.a.createElement("img",{src:"/images/logoImage.png",id:"logoImage",alt:""}),r.a.createElement("h1",{className:"mt-3",id:"logoTitle",style:X.logoType},"family library"))),r.a.createElement(E.a,{className:"text-center mt-4"},r.a.createElement(b.a,{xs:"12",md:"6"},r.a.createElement(y.a,{className:"btn-block mb-2",style:X.buttonLogin,id:"loginBtn",name:"loginCollapsed",onClick:this.toggleComponent},"LOG IN")),r.a.createElement(b.a,{xs:"12",md:"6"},r.a.createElement(y.a,{className:"btn-block mb-2",style:X.buttonRegister,id:"registerBtn",name:"registerCollapsed",onClick:this.toggleComponent},"REGISTER")))))}}]),t}(l.Component),X={buttonLogin:{borderRadius:"8px",backgroundColor:"white",border:"solid black 3px",color:"black",fontSize:"2rem",width:"60%",padding:"15px"},buttonRegister:{borderRadius:"8px",backgroundColor:"black",border:"solid black 3px",fontSize:"2rem",width:"60%",padding:"15px"},logoType:{fontFamily:"Comfortaa",fontSize:"clamp(40px, 8vw, 100px)"}},Y=U,Z=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{expand:"md",className:"px-0 py-4 flex-shrink-0 footer",id:"navItems"},r.a.createElement(w.a,{href:"/",className:"d-none d-lg-block"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/logoImage.png",style:{width:"150px"},id:"brandLogo"}),r.a.createElement("h1",{id:"brandLogoTitle",style:ee.brandLogoTitle},"family library"))),r.a.createElement(N.a,{navbar:!0,className:"nav-fill w-100",style:ee.nav},r.a.createElement(j.a,null,r.a.createElement(O.a,{href:"#",style:ee.navLinks},"Read")),r.a.createElement(j.a,null,r.a.createElement(O.a,{href:"#",style:ee.navLinks},"Write",r.a.createElement("span",{className:"d-none d-lg-inline"},r.a.createElement(y.a,{className:"rounded-pill",style:ee.writeButton},r.a.createElement("span",{style:ee.plusSign},"+"))))),r.a.createElement(j.a,null,r.a.createElement(O.a,{href:"#",style:ee.navLinks},"Log Out")))))}}]),t}(l.Component),ee={nav:{paddingLeft:"200px"},navLinks:{fontFamily:"Comfortaa",fontSize:"1.8rem"},writeButton:{marginLeft:"8px",height:"2.75rem",width:"5rem",border:"none",backgroundColor:"hotpink",fontSize:"3.5rem",backgroundImage:"linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)"},plusSign:{position:"relative",top:"-22px"},brandLogoTitle:{fontFamily:"Comfortaa",fontSize:"clamp(1.5rem, 2vw, 2rem)",marginTop:"20px",letterSpacing:"-1.1px",lineHeight:"2.5rem",textAlign:"center"}},ae=Z,te=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"flex-column sidebar h-100 d-none d-lg-block"},r.a.createElement(b.a,{className:"text-center px-0"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/Ellipse2.png",style:ne.avatar}),r.a.createElement("h1",{className:"mt-4",style:ne.text},"Maria"),r.a.createElement("h6",null,"BOSTON, MA"),r.a.createElement(y.a,{className:"mt-3 text-center",style:ne.button},r.a.createElement("p",{className:"mb-0"},"The "),r.a.createElement("p",{className:"mb-0"},"McCarthy's"))))))}}]),t}(l.Component),ne={avatar:{width:"150px",marginTop:"100px"},text:{fontFamily:"Comfortaa"},button:{backgroundColor:"black",height:"57px",width:"140px",borderRadius:"2.76px",border:"1px solid #000000",fontFamily:"Roboto",fontSize:"18px",fontWeight:"bold",lineHeight:"19.11px",letterSpacing:"0.09em",wordWrap:"break-all",textWidth:"1em"}},le=te,re=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{expand:"md",className:"nav-fill w-100 footer py-4",id:"navItems",style:se.footer},r.a.createElement(k.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(N.a,{navbar:!0,className:"w-100"},r.a.createElement(j.a,null,r.a.createElement(O.a,{style:se.navLinks,href:"#",name:"aboutCollapsed",onClick:this.props.toggleComponent},"About")),r.a.createElement(j.a,null,r.a.createElement(O.a,{style:se.navLinks,href:"#",name:"inviteCollapsed",onClick:this.props.toggleComponent},"Invite")),r.a.createElement(j.a,null,r.a.createElement(O.a,{style:se.navLinks,href:"#",name:"contactCollapsed",onClick:this.props.toggleComponent},"Contact")),r.a.createElement(j.a,null,r.a.createElement(O.a,{style:se.navLinks,href:"#",name:"featuresCollapsed",onClick:this.props.toggleComponent},"Features")))))}}]),t}(l.Component),se={navLinks:{fontFamily:"Comfortaa",fontSize:"1.8rem"},footer:{position:"fixed",height:"100px",bottom:"0",width:"100%"}},oe=re,ie=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).toggleRead=function(){n.setState({writeFlag:!1,readFlag:!n.state.readFlag})},n.toggleWrite=function(){n.setState({readFlag:!1,writeFlag:!n.state.writeFlag})},n.state={readFlag:!1,writeFlag:!1},n}return Object(m.a)(t,[{key:"render",value:function(){for(var e,a=[],t=0;t<10;++t)a.push({id:t});return this.state.readFlag?e=a.map((function(e){return r.a.createElement("span",{key:e.id},r.a.createElement("hr",{className:"horizRule mb-5 mt-4 px-0 mx-0",style:me.horizRule}),r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"ml-2"},r.a.createElement(b.a,{xs:"12",lg:"1",className:"pr-2 px-0 text-lg-center"},r.a.createElement("img",{src:"/images/Ellipse2.png",style:me.avatar,className:"mb-2"})),r.a.createElement(b.a,{className:"px-0"},r.a.createElement("h4",null,"My Father Patrick McCarthy's Garden"),r.a.createElement("h6",null,"Posted By: Maria McCarthy"),r.a.createElement("h6",null,"Date posted: June 10, 2020"),r.a.createElement("h6",{className:"mb-4"},"Memories | Folklore | Father"))),r.a.createElement(E.a,{className:"ml-2 mr-5"},r.a.createElement(b.a,{xs:"12",lg:"11",className:"px-0 offset-lg-1"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus velit ligula, vehicula eu egestas at, bibendum eget ligula. Mauris vehicula mattis ultrices. Nulla auctor risus nulla, quis dictum nulla semper nec. Curabitur nec orci ex. Integer viverra augue odio, nec consequat nisl tincidunt sit amet. Pellentesque ac lacus pulvinar, condimentum orci sed, varius nibh. Phasellus ac ligula a massa ultrices dapibus. Pellentesque condimentum a purus nec vehicula. Ut ac massa pulvinar, ullamcorper libero id, suscipit risus. Maecenas volutpat consectetur sapien, sed convallis sem hendrerit porta. Morbi pharetra elit et nibh luctus eleifend. Suspendisse et pellentesque enim."),r.a.createElement("p",null,"Sed lectus leo, interdum in vestibulum sit amet, elementum sed ipsum. Praesent volutpat turpis nec enim malesuada, at volutpat lorem sagittis. Integer sit amet enim dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur faucibus nibh ac dolor pulvinar, non ullamcorper ex vulputate. Suspendisse aliquam eu sapien id laoreet. Maecenas vitae arcu justo."),r.a.createElement("p",null,"Praesent nisl est, sagittis quis tempor non, pellentesque at urna. Proin pharetra gravida rhoncus. Curabitur fermentum sem eget tortor porttitor, non aliquam erat elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dignissim convallis urna ac hendrerit. Donec viverra tincidunt nisi, in dapibus dui scelerisque nec. Proin gravida odio sit amet quam rutrum, sed imperdiet leo rutrum. Integer eu mattis urna."),r.a.createElement(y.a,{className:"rounded-pill m-0",style:me.readMoreButton},r.a.createElement("span",null,"read more..."))))))})):this.state.writeFlag&&(e=r.a.createElement("h1",null,"This is the Write Screen!")),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onClick:this.toggleRead},"Read"),r.a.createElement(y.a,{onClick:this.toggleWrite},"Write"),r.a.createElement("div",{className:"pb-4"},e))}}]),t}(l.Component),me=(n={search:{paddingBottom:"100px"},horizRule:{borderBottom:"2px solid black",marginBottom:"50px"},avatar:{width:"clamp(10px, 100%, 105px)"}},Object(h.a)(n,"horizRule",{width:"calc(100% + 30px)",borderTop:"2px solid rgba(0,0,0,.15)"}),Object(h.a)(n,"readMoreButton",{fontFamily:"Comfortaa",fontWeight:"400",fontSize:"20px",marginLeft:"8px",width:"152px",border:"none",backgroundImage:"linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%)"}),n),ce=ie,ue=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"ml-2"},r.a.createElement(b.a,{className:"ml-2"},r.a.createElement("div",{className:"ml-3",style:de.search},r.a.createElement("div",{style:de.searchText},"Search \ud83d\udd0d"),r.a.createElement("span",{style:de.title},"Family Stories Feed:"," "),r.a.createElement("span",{style:de.subject},"Patrick McCarthy"))))))}}]),t}(l.Component),de={search:{},searchText:{fontSize:"2rem",fontFamily:"Comfortaa",paddingBottom:"100px"},title:{fontWeight:"bold",fontSize:"1.7rem",fontFamily:"Roboto"},subject:{fontSize:"1.5rem",fontFamily:"Roboto"}},pe=ue,he=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={},n}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{fluid:!0,className:"d-flex flex-column vh-100 overflow-hidden"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"px-0"},r.a.createElement("h1",null,this.props.response.body),r.a.createElement(ae,null))),r.a.createElement(E.a,{className:"flex-grow-1 overflow-hidden"},r.a.createElement(b.a,{xs:"0",lg:"2",className:"mh-100 overflow-auto"},r.a.createElement(le,null)),r.a.createElement(b.a,{xs:"12",lg:"10",className:"mh-100 px-0",style:ge.mainBody},r.a.createElement(E.a,{className:"flex-grow-1"},r.a.createElement(b.a,{className:"mh-100 pt-5"},r.a.createElement(E.a,{className:"m-2"},r.a.createElement(b.a,{className:"offset-lg-1 p-0"},r.a.createElement(pe,null))),r.a.createElement(ce,null))))),r.a.createElement(E.a,{className:"flex-shrink-0 mt-5 pt-5"},r.a.createElement(b.a,{xs:"12",className:"px-0 pt-1",styles:ge.footer},r.a.createElement(oe,null)))))}}]),t}(l.Component),ge={footer:{position:"fixed",left:"0",bottom:"0",width:"100%"},mainBody:{overflowY:"auto",overflowX:"hidden"}},fe=he,Ee=t(40),be=t(11),ye=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={response:{}},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/v1/say-something").then((function(a){var t=a.data;e.setState({response:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(Ee.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(be.d,null,r.a.createElement(be.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Y,{response:e.state.response})}}),r.a.createElement(be.b,{exact:!0,path:"/pageView",render:function(){return r.a.createElement(fe,{response:e.state.response})}}),r.a.createElement(be.a,{to:"/"}))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(78);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.c5d753d1.chunk.js.map