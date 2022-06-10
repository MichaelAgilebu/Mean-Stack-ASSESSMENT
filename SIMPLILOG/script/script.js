const addBtn = document.getElementById('addBtn');
const createBtn = document.getElementById('createBtn');
const homeBtn = document.getElementById('homeBtn');
const postsElement = document.getElementById('posts');
const form = document.getElementById('post-form');
const filterBtn = document.getElementById('button-search');
const aboutEl = document.getElementById('row2');
const firstEl = document.getElementById('row1');
const aboutBtn = document.getElementById('aboutBtn');

// event listeners

addBtn.addEventListener('click', () => {
    firstEl.style.display = "flex";
    postsElement.style.display = "none";
    form.style.display = "block";
    aboutEl.style.display = "none";
});

aboutBtn.addEventListener('click', () => {
    firstEl.style.display = "none";
    aboutEl.style.display = "block";
});

homeBtn.addEventListener('click', () => {
    firstEl.style.display = 'flex';
    form.style.display = "none";
    postsElement.style.display = "block";
    aboutEl.style.display = "none";
});

filterBtn.addEventListener('click', function () {
    const field = document.getElementById('filterPosts');
    const term = field.value.toLowerCase();
    const posts = document.querySelectorAll('#posts article');
    let count = 0;

    posts.forEach(post => {
        const title = post.querySelector('h2').innerText.toLowerCase();
        const body = post.querySelector('section p').innerText.toLowerCase();

        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            count++;
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
        if (count == 0) {
            document.getElementById('searchMessage').style.display = "block";
        } else {
            document.getElementById('searchMessage').style.display = "none";
        }
    });
    field.value = '';
    // disable filter function and reset to default view after 5 seconds.
    setTimeout(() => {
        posts.forEach(post => {
            post.style.display = "block";
        })
    }, 5000);
});

createBtn.addEventListener('click', () => {
    // get the values from the fields
    let postTitle = document.getElementById('post-title').value.trim().length > 0 ? document.getElementById('post-title').value.trim() : false; // Using ternary operator to check if there is a valid title.
    let postBody = document.getElementById('post-body').value.trim().length > 0 ? document.getElementById('post-body').value : false; // Checking if there is a body, otherwise defaulting to false.
    let authorName = document.getElementById('authorName').value.trim().length > 0 ? document.getElementById('authorName').value : "Anonymous"; // Checking if the name of the author has been passed else defaulting it to "Anonymous".

    if (postTitle && postBody) {
        // get today's date
        let today = new Date();
        let options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
        let day = today.toLocaleDateString("en-GB", options);

        // creating the article
        let articleEl = document.createElement('article');
        articleEl.innerHTML = `<h2 class = "fw-bolder mb-2">${postTitle}</h2>
                        <div class = "text-muted fst-italic mb-2"> ${day}; ${authorName} </div>
                        <section class = "mb-4"> <p class="fs-5"> ${postBody} </p> </section>`;

        // assigning the article to parent
        postsElement.appendChild(articleEl);

        // setting default display settings
        form.style.display = "none";
        postsElement.style.display = "block";
        // resetting the text fields.
        document.getElementById('post-title').value = '';
        document.getElementById('post-body').value = '';
        document.getElementById('authorName').value = '';

    } else {
        window.alert("Must have Title and Body");
    }

});

class View {
    constructor() {}
  
    // Create an element with an optional CSS class
    createElement(tag, className) {
      const element = document.createElement(tag)
      if (className) element.classList.add(className)
  
      return element
    }
  
    // Retrieve an element from the DOM
    getElement(selector) {
      const element = document.querySelector(selector)
  
      return element
    }
  }

  class View {
    constructor() {
      // The root element
      this.app = this.getElement('#root')
  
      // The title of the app
      this.title = this.createElement('h1')
      this.title.textContent = 'Todos'
  
      // The form, with a [type="text"] input, and a submit button
      this.form = this.createElement('form')
  
      this.input = this.createElement('input')
      this.input.type = 'text'
      this.input.placeholder = 'Add todo'
      this.input.name = 'todo'
  
      this.submitButton = this.createElement('button')
      this.submitButton.textContent = 'Submit'
  
      // The visual representation of the todo list
      this.todoList = this.createElement('ul', 'todo-list')
  
      // Append the input and submit button to the form
      this.form.append(this.input, this.submitButton)
  
      // Append the title, form, and todo list to the app
      this.app.append(this.title, this.form, this.todoList)
    }
    // ...
  }
  