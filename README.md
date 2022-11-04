# About This Lib

This lib was created to write text as html on component, "But it doesn't already exist?", yes, exist the method default on react, but this method don't execute script JavaScript, then, i created for this execution!

# How did the idea come about?

In one of the projects I'm working on, the need arose to create posts, which would be used to run HTML and JS;
Where the author, in addition to using the text to create the posts, can create the html to shape the page, in addition to using the js to make it more interactive;

However, React only has the way of writing the html, it does not run the JS, for this and others I created such a project, to write and run the JS;

# How use?

First install the lib:
```bash
$ npm i react-inner-html-js
```

```ts
function MyComponent(){
    const content = `
        <h2>Hello World!</h2>
        <script>
            console.log("JavaScript Work!")
        </script>
    `

    return (
        <div>
            <h1>Post</h1>
            <InnerHTML content={content}/>
        </div>
    )
}
```

This write content on a div, for execute in another tag use: 

```ts
function MyComponent(){
    const content = `
        <h2>Hello World!</h2>
        <script>
            console.log("JavaScript Work!")
        </script>
    `

    // The prop rf is required
    const MySection = ({rf})=> <section ref={rf}></section>

    return (
        <div>
            <h1>Post</h1>
            <InnerHTML Feather={MySection} content={content}/>
        </div>
    )
}
```
