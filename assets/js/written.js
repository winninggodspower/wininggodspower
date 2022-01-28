const body = document.querySelector("body");
let scroll = false
const lis = document.addEventListener("scroll",findScroll)
function findScroll(){
				if(window.scrollY > 70) {
								scroll = true;
				}else {
								scroll = false
				}
					
}

function TextAnimate(element,speed) {
				const text = element.text();
				let index = 0;
				element.css("display", "block");
				element.empty();
				const a = setInterval(()=>{
								if(index < text.length) {
										
										element.append(text[index])
										
								}else {
								   fade.fadeIn(1000)
										clearInterval(a);
										removeEventListener(lis,findScroll)
										if(scroll===false) {
														window.scroll(0,80)
										}
								}
								
								index++					
				}, speed)
}

$(document).ready(()=>{
const intro = $("article p:first");
intro.css("display", "none");

setTimeout(()=>{

		TextAnimate(intro,110)
		},3000)
    
    })

//function that plays the audio
function playMusic() {
				const audio = new Audio('../VoiceOver.mp3')
				audio.currentTime = 0;
				audio.play()
}

playMusic()

//handling the size of the image

const img = $("span img");
const width = img.css("width");


const fade = $("a#work");
fade.hide()



//setting up the fadein on the projects
const pos = {
				right:"70%",
				left: "-70%",
}
    
const projects = $('[data-side]');
let options = {

  root: null, // relative to document viewport 

  rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed

  threshold: 0 // visible amount of item shown in relation to root

};



const  observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
      
       var element =$(entry.target);
       let side = element.attr("data-side")
       
      
        if(entry.intersectionRatio > 0) {       
           
           element.addClass("animate");
           setTimeout(()=>{          				element.css("transform","translatex(0%)")
           		element.css("opacity","1")
           },600)
                }
        else {
                    
         element.removeClass("animate"); element.css("transform",`translatex(${pos[side]})`);
         element.css("opacity",".1")
              }
          })

        }, options)

 projects.each( (index, project)=> {
       observer.observe(project)
       
       
 
   })
    
