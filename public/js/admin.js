function theupdateDetails() {
  $(".update-button-post").html("updating...");
  const postid = $("#postid").val();
  const title = $("#title").val();
  const description = $("#description").val();
  const category = $("#category").val();
  const content = $(".ql-editor").html();
  $.ajax({
    type: "PUT",
    url: `/dashboard/articles/edit/${postid}`,
    timeout: 5000,
    data: {
      postid: postid,
      title: title,
      content: content,
      category: category,
      description: description,
    },
    dataType: "json",
    success: function (data) {
      if(data.message == "Successful."){
      $(".update-button-post").html("Post Updated!");
        window.open("/dashboard/articles", "_self");
      }else{
        $(".update-button-post").html(data.message);
      }
    },
  });
}

$(".update-button-post").on("click", function (event) {
  event.preventDefault();
  theupdateDetails();
});

let quill = new Quill('#editor-container', {
  modules: {
    syntax: true,              // Include syntax module
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']                                         // remove formatting button
    ]
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'  // or 'bubble'
});

// const Delta = Quill.import('delta');
// quill.setContents(
//   new Delta()
//     .insert('const language = "JavaScript";')
//     .insert('\n', { 'code-block': 'javascript' })
//     .insert('console.log("I love " + language + "!");')
//     .insert('\n', { 'code-block': 'javascript' })
// );
var toolbar = quill.getModule('toolbar');
toolbar.addHandler('image', function() {
  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.setAttribute('multiple', ''); // Allow multiple file selection
  input.onchange = function() {
    var files = Array.from(input.files);
    files.forEach(file => {
      var formData = new FormData();
      formData.append('image', file);
      
      fetch('/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.imageUrl;
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);
      })
      .catch(error => console.error('Error:', error));
    });

    // Reset the input to allow selecting/uploading more images
    input.value = '';
  };
  input.click();
});

   quill.on('text-change', function(delta, oldDelta, source) {
        document.getElementById("quill-content").value = quill.root.innerHTML;
    });

