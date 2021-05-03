
      
  window.watsonAssistantChatOptions = {
      integrationID: "d8ed8449-f5d4-4867-8f1a-4beeae387f8b", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "26fd3ef0-c511-4f8b-aa3e-c0d9bb5c6b7c", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });

    

$(document).ready(function () {
  //toggler btn
  
    $('.navbar-toggler').click(function()
{
      $('.navbar-toggler').toggleClass('change')
      
      
    })
  
  //sticky navbar less padding
  
  $(window).scroll(function(){
    
    let positon = $(this).scrollTop();
   
    
    if(positon>= 718){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
      
    }
    else{
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }     
  })
  
  //smooth scroll
  
  $('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault();
    
    
    let target = $(this).attr('href');
    
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000);
    
    
  })
  
  //back to top
  
  $(window).scroll(function(){
    
    let positon = $(this).scrollTop();
   
    
    if(positon>= 718){
      $('#back-to-top').addClass('scrollTop');
     
      
    }
    else{
    $('#back-to-top').removeClass('scrollTop');
    }     
  })
  
  
  
  
  
  
  
  
  
  
  

  //ripples
  $("#header, .info").ripples({
    dropRadius: 20,
    perturbance: 0.6,

  });
//magnific popup
  
  $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    
    
    gallery:{
      enabled: true
    }
    
  // other options
});
  
  
  
});

//Chatbot Integration

