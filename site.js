
const AFFILIATE_LINK = "https://admin.rewardoo.com/track/e5cd75GWpnwD1N3Rheo_axUrHQ1vyWkN61szWbOjqJLQsLKvv6pUHDLSbORGdER4L4Bw4ZsQ4SpgxeH0_c?source=inner&url=https%3A%2F%2Fwww.greyhound.com";

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-affiliate]").forEach(a=>{
    if(AFFILIATE_LINK !== "YOUR_GREYHOUND_AFFILIATE_LINK"){
      a.href=AFFILIATE_LINK;
      a.target="_blank";
      a.rel="sponsored nofollow noopener";
    }else{
      a.href="#affiliate-note";
      a.addEventListener("click",e=>{
        e.preventDefault();
        document.querySelector("#affiliate-note")?.scrollIntoView({behavior:"smooth"});
      });
    }
  });
  document.querySelector("#trip-form")?.addEventListener("submit",e=>{
    e.preventDefault();
    document.querySelector("#formmsg").style.display="block";
  });
});
