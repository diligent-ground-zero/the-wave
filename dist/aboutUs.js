import{g as h}from"./assets/vendor.cdf6cd8a.js";let N=!1,L=!1;const s=[{title:"WHO THE VIBE?",paragraphText:`As the founder of VIBE, Lukas made it his mission to revolutionize the world of sound. His vision is to make music and sound as simple and accessible as possible\u2014especially in a time where technology offers us nearly limitless possibilities. With VIBE, he aims to redefine the role of music and sound and enhance their value for brands. He firmly believes that great sound sells better and leaves a lasting impression.
    Anika is a producer and new biz manager. With four years of experience in the music industry, she\u2019s been not only writing her own songs but also overseeing projects and generating artistic concepts. Her multifaceted skills make her a driving force in both creative and managerial roles at VIBE.`,leftBorder:"#11B1FF",leftImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66cf6b5237a8bc0f37c02e01_anika.webp",rightBorder:"#FF0082",rightImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66cf83d04a52e336daf84c6d_2024_vibe_Presse_Julia_Tiemann-8.jpg"},{title:"WHY THE VIBE?",paragraphText:`WE THINK OUR WORK IS ALL ABOUT THE VIBE, ABOUT THAT DIRECT AND INNER INSTINCT, ABOUT THAT FEELING OF CONNECTION.
THE VIBE LEADS US, IN RELATIONS AND IN BUSINESS. AND THAT'S WHAT'S IMPORTANT.
WE WORK WITH MORE THAN 50 INTERNATIONALLY RENOWNED COMPOSERS, AUDIO ENGINEERS & SUPERVISORS.
OUR VIBES FOR YOU: MUSIC CONCEPTION & SUPERVISION, MUSIC COMPOSITION, SOUND DESIGN, VOICE-OVER, MIXING (ALL FORMATS AVAILABLE).`,leftBorder:"#FF0082",leftImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3e3964c1900f6a331d_2.webp",rightBorder:"#11B1FF",rightImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6c2293c92b4f730d7a4eb_2024_vibe_Presse_Julia_Tiemann-10.webp"},{title:"WHAT THE VIBE?",paragraphText:`WE LOVE A CHALLENGE, WHETHER IT BE SEEKING OUT A ONE-HIT WONDER FROM 1994, REPLACING AN UNAVAILABLE TRACK THAT EVERYONE HAS "MOOD LOVE" FOR, OR TURNING A TIGHT BUDGET INTO A MEMORABLE JINGLE.
WE DO IT ALL, WE TAKE PRIDE IN OUR WORK WHILE ALWAYS RESPECTING THE PROCESS.`,leftBorder:"#FFF500",leftImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6c229cc0cb2a3b8471c79_2024_vibe_Presse_Julia_Tiemann-1.webp",rightBorder:"#FF0082",rightImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3e728f16660577db58_4.webp"},{title:"WHERE THE VIBE?",paragraphText:`OUR CREATIVE SPACE AND STUDIO ARE RIGHT IN THE HEART OF HAMBURG, HOFWEG 9.
BUT: VIBE IS MANDATORY, LOCATION IS SECONDARY. WE'RE HAPPY TO HAVE ACCESS TO MULTIPLE CREATIVE SPACES IN HAMBURG, BERLIN AND MUNICH.
OUR CREATIVES ARE BASED IN GERMANY, ITALY, PORTUGAL, UK, BRAZIL, THE NORDICS AND THE U.S, WHICH GIVES US AN ADVANTAGE WHEN WORKING WITH TIGHT DEADLINES (6-9 HOURS TIME DIFFERENCE IS EAAASY).
OR AS KID CUDI ONCE SAID: DAY'N'NITE.`,leftBorder:"#FFF500",leftImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6c229190f166a69becdd7_2024_vibe_Presse_Julia_Tiemann-9.webp",rightBorder:"#FF0082",rightImage:"https://cdn.prod.website-files.com/64f07b5afe4b3cbdb047d7f2/66d6be3e3964c1900f6a331d_2.webp"}],y=()=>{window.innerWidth<990?O():C(),window.addEventListener("resize",()=>{window.innerWidth<990?L||O():N||C()})},C=()=>{N=!0;const e={leftImageBorder:document.getElementById("left_pixel_border"),leftPixelCover:document.getElementById("left_pixel_cover"),leftPixels:document.getElementsByClassName("left_pixel"),rightPixels:document.getElementsByClassName("right_pixel"),rightPixelBorder:document.getElementById("right_pixel_border"),rightPixelCover:document.getElementById("right_pixel_cover"),leftImage:document.getElementById("left_image"),rightImage:document.getElementById("right_image"),selectorContainer:document.getElementById("selector_container"),textContainer:document.getElementById("paragraph_text"),upArrowButtons:Array.from(document.getElementsByClassName("up_arrow")),downArrowButtons:Array.from(document.getElementsByClassName("down_arrow")),iconLeft:document.getElementsByClassName("icon_left"),iconRight:document.getElementsByClassName("icon_right")};let c=0;function o(t){const i=document.createElement("img");return i.src="https://uploads-ssl.webflow.com/64f07b5afe4b3cbdb047d7f2/66c7286ea8dc074851181ba1_Union.svg",i.classList.add(`${t}-arrow`),i}function n(t){t.prepend(o("left")),t.appendChild(o("right"))}function d(t){var i,r;(i=t.querySelector(".left-arrow"))==null||i.remove(),(r=t.querySelector(".right-arrow"))==null||r.remove()}function I(t){const i=Array.from(e.selectorContainer.getElementsByClassName("selector_text_wrapper"));i[c].classList.remove("selected_text_wrapper"),d(i[c]),i[t].classList.add("selected_text_wrapper"),n(i[t]),c=t}async function g(t){const{paragraphText:i,leftImage:r,rightImage:f,leftBorder:a,rightBorder:E}=s[t];e.leftImageBorder.style.backgroundColor=a,e.leftImageBorder.style.borderColor=a,e.rightPixelBorder.style.backgroundColor=E,e.rightPixelBorder.style.borderColor=E,Array.from(e.leftPixels).forEach(m=>{m.style.backgroundColor=a,m.style.opacity=1}),Array.from(e.rightPixels).forEach(m=>{m.style.backgroundColor=E,m.style.opacity=1}),e.textContainer.innerText=i,e.leftImage.src=r,e.rightImage.src=f,e.leftImage.classList.remove("fade-out"),e.leftImage.classList.add("fade-in"),e.rightImage.classList.remove("fade-out"),e.rightImage.classList.add("fade-in"),e.textContainer.classList.remove("fade-out"),e.textContainer.classList.add("fade-in")}function l(t){e.textContainer.classList.add("fade-out"),e.leftImage.classList.add("fade-out"),e.rightImage.classList.add("fade-out"),setTimeout(()=>{g(t),h.to(".left_pixel",{opacity:0,duration:.4,stagger:{each:.125,from:"random",grid:"auto"},ease:"power1.inOut"}),h.to(".right_pixel",{opacity:0,duration:.4,stagger:{each:.125,from:"random",grid:"auto"},ease:"power1.inOut"})},1200),e.textContainer.classList.remove("fade-in"),e.leftImage.classList.remove("fade-in"),e.rightImage.classList.remove("fade-in")}function p(t){const i=(c+t+s.length)%s.length;I(i),l(i)}function A(){e.selectorContainer&&s.forEach((r,f)=>{const a=document.createElement("div");a.innerText=r.title,a.classList.add("selector_text_wrapper"),f===c&&(a.classList.add("selected_text_wrapper"),n(a)),a.addEventListener("click",()=>{I(f),l(f)}),e.selectorContainer.appendChild(a)}),g(0),[e.textContainer,e.leftImage,e.rightImage].forEach(r=>r.classList.add("content","fade-in"));var t=[10,10];function i(r){r=r||{};const f=r.parent||document.body,a=f.getBoundingClientRect(),E=r.grid[0]||5,m=r.grid[1]||5,B=a.width,_=a.height,w=r.gutter||1,R=r.className||"",u=document.createElement("div");u.style.cssText=`
        width: ${B}px;
        height: ${_}px;
        display: grid;
        grid-template-columns: repeat(${m}, 1fr);
        grid-template-rows: repeat(${E}, 1fr);
        gap: ${w}px;
      `;for(let T=0;T<E*m;T++){const b=document.createElement("div");b.className=R,b.setAttribute("data-index",T),r.onCellClick&&b.addEventListener("click",r.onCellClick),u.appendChild(b)}return f.appendChild(u),u}i({grid:t,className:"left_pixel",gutter:7,parent:e.leftPixelCover}),i({grid:t,className:"right_pixel",gutter:7,parent:e.rightPixelCover}),h.to(e.iconLeft,{y:-15,duration:2,repeat:-1,yoyo:!0,ease:"power1.inOut"}),h.to(e.iconRight,{y:20,duration:3,repeat:-1,yoyo:!0,ease:"power1.inOut"})}A(),e.upArrowButtons.forEach(t=>t.addEventListener("click",()=>p(-1))),e.downArrowButtons.forEach(t=>t.addEventListener("click",()=>p(1)))},O=()=>{L=!0;const e=document.getElementById("mobile_left_arrow"),c=document.getElementById("mobile_right_arrow"),o=document.getElementById("mobile_selector_text"),n=document.getElementById("mobile_image"),d=document.getElementById("mobile_paragraph");function I(){o&&n&&d&&(o.innerText=s[0].title,d.innerText=s[0].paragraphText,n.src=s[0].leftImage,o.classList.add("content","fade-in"),d.classList.add("content","fade-in"),n.classList.add("content","fade-in"))}function g(t){o&&n&&d&&(o.classList.add("fade-out"),d.classList.add("fade-out"),n.classList.add("fade-out"),setTimeout(()=>{o.innerText=s[t].title,d.innerText=s[t].paragraphText,n.src=s[t].leftImage,o.classList.remove("fade-out"),d.classList.remove("fade-out"),n.classList.remove("fade-out"),o.classList.add("fade-in"),d.classList.add("fade-in"),n.classList.add("fade-in")},500),o.classList.remove("fade-in"),d.classList.remove("fade-in"),n.classList.remove("fade-in"))}let l=0;function p(){l=(l+1)%s.length,g(l)}function A(){l=(l-1+s.length)%s.length,g(l)}I(),e.addEventListener("click",A),c.addEventListener("click",p)};export{y as s};
