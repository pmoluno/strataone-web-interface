AOS.init();




$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
});

$(".sign-in-btn").on("click", function (event) {
  event.preventDefault();
  login();
});

$(".sign-up-btn").on("click", function (event) {
  event.preventDefault();
  register();
});
function login(){
  $(".sign-in-btn").html("Signing in...");
  let email = $(".logemail").val();
  let password = $(".logpassword").val();
  $.ajax({
    type: "POST",
    url: "/sign-in",
    timeout: 5000,
    data: {
      logemail: email,
      logpassword: password,
    },
    dataType: "json",
    success: function (data) {
      if(data.message == "Sign in successful."){
        $(".sign-in-btn").html("Sign in");
        window.open("/dashboard", "_self");
      }else{
            $(".sign-in-btn").html("Sign in");
            $(".login-message").html("<p>" + data.message + "</p>");
      }     
    },
  });
}
function register(){
  $(".sign-up-btn").html("Signing up...");
  let name = $(".regname").val();
  let email = $(".regemail").val();
  let password = $(".regpassword").val();
  $.ajax({
    type: "POST",
    url: "/sign-up",
    timeout: 5000,
    data: {
      email: email,
      username: name,
      password: password,
    },
    dataType: "json",
    success: function (data) {
      if(data.message == "Registration successful."){
        $(".sign-up-btn").html("Sign Up");
        window.open("/dashboard", "_self");
      }else{
            $(".sign-up-btn").html("Sign Up");
            $(".register-message").html("<p>" + data.message + "</p>");
      }     
    },
  });
}




const body = document.body;

const MathUtils = {
  lineEq: (y2, y1, x2, x1, currentVal) => {
    // y = mx + b
    var m = (y2 - y1) / (x2 - x1),
      b = y1 - m * x1;
    return m * currentVal + b;
  },
  lerp: (a, b, n) => (1 - n) * a + n * b,
  getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
};

const getMousePos = e => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posx, y: posy };
};

let winsize;
const calcWinsize = () =>
  (winsize = { width: window.innerWidth, height: window.innerHeight });
calcWinsize();
window.addEventListener("resize", calcWinsize);

let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };
window.addEventListener("mousemove", ev => (mousepos = getMousePos(ev)));

// Custom cursor
class Cursor {
  constructor(el) {
    this.DOM = { el: el };
    this.DOM.circle = this.DOM.el.querySelector(".js-cursor-inner");
    this.DOM.arrows = {
      right: this.DOM.el.querySelector(".js-cursor-right"),
      left: this.DOM.el.querySelector(".js-cursor-left")
    };
    this.bounds = this.DOM.circle.getBoundingClientRect();
    this.lastMousePos = { x: 0, y: 0 };
    this.scale = 1;
    this.lastScale = 1;
    requestAnimationFrame(() => this.render());
  }
  render() {
    this.lastMousePos.x = MathUtils.lerp(
      this.lastMousePos.x,
      mousepos.x - this.bounds.width / 2,
      0.2
    );
    this.lastMousePos.y = MathUtils.lerp(
      this.lastMousePos.y,
      mousepos.y - this.bounds.height / 2,
      0.2
    );
    this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
    this.DOM.circle.style.transform = `translateX(${
      this.lastMousePos.x
    }px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
    requestAnimationFrame(() => this.render());
  }
  enter() {
    this.scale = 1.9;
  }
  leave() {
    this.scale = 1;
  }
  click() {
    this.lastScale = 0.4;
  }
  showArrows() {
    TweenMax.to(Object.values(this.DOM.arrows), 1, {
      ease: Expo.easeOut,
      startAt: { x: i => (i ? 10 : -10) },
      opacity: 1,
      x: 0
    });
  }
  hideArrows() {
    TweenMax.to(Object.values(this.DOM.arrows), 1, {
      ease: Expo.easeOut,
      x: i => (i ? 10 : -10),
      opacity: 0
    });
  }
}

// Custom mouse cursor
const cursor = new Cursor(document.querySelector(".js-cursor"));

// Activate the enter/leave/click methods of the custom cursor when hovering in/out on every <a> (and the close content ctrl)
const links = document.querySelectorAll(".js-link");

[...links].forEach(link => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
  });



// $(document).ready(function() {
//   window.onload = function () {
//   $('.loader_bg').fadeOut(500, function(){ $('.loader_bg').remove(); } );
//   }
// });

// document.addEventListener("touchstart", onTouchStart, { passive: true });


$('#subscribe-form').submit(function (e) {
  e.preventDefault();

  const email = $('.email-input').val();

  $.ajax({
    type: 'POST',
    url: '/mail',
    data: JSON.stringify({ email }),
    contentType: 'application/json',
    success: function (response) {
      $('#mail-message').html(`${response.message}`);
      $('.email-input').val('');
    },
    error: function (error) {
      $('#mail-message').html("Unable to Subscribe!");
    }
  });
});

$('#message-form').submit(function (e) {
  e.preventDefault();

  const name = $('#name').val();
  const email = $('#email').val();
  const reason = $('#reason').val();
  const message = $('#message').val();

  $.ajax({
    type: 'POST',
    url: '/message',
    data: JSON.stringify({ name, email, reason, message }),
    contentType: 'application/json',
    success: function (response) {
      $('#request-message').html(`${response.message}`);
      $('#name').val("");
      $('#email').val("");
     $('#message').val("");
    },
    error: function (error) {
      $('#request-message').html(`${error.responseJSON.error}`);
    }
  });
});




// Select the element(s) with the class 'container'
var containers = document.querySelectorAll('.ql-code-block');

// Iterate over the selected elements
containers.forEach(function(container) {
    // Create a new button element
    var button = document.createElement('button');
    
    // Set the button's text content
    button.innerHTML = '<i class="far fa-copy"></i> Copy code';
    button.classList.add("top-right-copy-button");
    
    // Set any additional attributes or properties for the button, if needed
    
    // Append the button to the selected element
    container.appendChild(button);
});


// Select all buttons with the class 'top-right-copy-button'
var copyButtons = document.querySelectorAll('.top-right-copy-button');

// Iterate over each button
copyButtons.forEach(function(button) {
    // Add click event listener to each button
    button.addEventListener('click', function() {
      button.innerHTML = '';
        // Find the parent container of the clicked button
        var container = button.closest('.ql-code-block');
        
        // Get the text content of the container
        var textContent = container.textContent.trim();
        
        // Create a temporary textarea element
        var textarea = document.createElement('textarea');
        
        // Set the value of the textarea to the text content of the container
        textarea.value = textContent;
        
        // Append the textarea to the document body
        document.body.appendChild(textarea);
        
        // Select the content of the textarea
        textarea.select();
        
        // Copy the selected content
        document.execCommand('copy');
        
        // Remove the textarea from the document body
        document.body.removeChild(textarea);
        
        // Alert the user that the content has been copied
        button.innerHTML = '<i class="fas fa-check"></i> Copied';
    });
});


