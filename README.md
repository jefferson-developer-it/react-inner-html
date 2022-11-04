# About This Lib

This lib was created to write text as html on component, "But it doesn't already exist?", yes, exist the method default on react, but this method don't execute script JavaScript, then, i created for this execution!

# How use?

First install the lib:
```bash
$ npm i react-inner-html-js
```

```js
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

```js
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

#   r e a c t - i n n e r - h t m l 
 
 