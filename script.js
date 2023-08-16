  
let qText=document.getElementById("text");
let auther=document.getElementById("auther");
let twitter=document.getElementById("twitter");
let next=document.getElementById("next");

let loader=document.getElementById("load");
let quotContiner=document.querySelector(".continer");




let apiQuotes=[];

 function loading(){
     loader.hidden= false;
     quotContiner.hidden= true;

 }
 
  function complete(){
    quotContiner.hidden= false;
      loader.hidden= true;
      
  }
   // display quotes

 function newQuote(){
     loading();

   const quote= apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
      
  
   qText.textContent=quote.text;
  if(!quote.author){
      auther.textContent= "unknown"

  }else{
       auther.textContent=quote.author;
    }

  complete();
    // console.log(quote);
}
// get quote from api


async function getQuotes(){
    loading();
    const apiUrl= 'https://type.fit/api/quotes';
    try{
       const response= await fetch(apiUrl);
       apiQuotes= await response.json();
    //    console.log(apiQutes[23]);

   newQuote();
    }catch(error){
        // error catching
    }
}
//tweet function
function tweet(){
     const twitterUrl=`https://twitter.com/intent/tweet?text= ${qText.textContent} - ${auther.textContent}`;
     window.open(twitterUrl,'_blank')
}
 getQuotes();

next.addEventListener("click", getQuotes);
twitter.addEventListener("click", tweet);