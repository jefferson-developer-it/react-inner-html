import {useEffect, useRef, useState} from "react"

export default function InnerHTML({content, Feather}){
    const reference = useRef();
    const [ct, setCt] = useState(content);

    useEffect(()=>{
        if(reference.current){
            reference.current.innerHTML = ct;
        }
    }, [reference, ct])

    useEffect(()=>{
        if(ct && reference.current){
            const scripts = new Set([...reference.current?.children].map(v=>{
                return v.localName === "script"? v: ""
            }));

            scripts.delete("");

            for(const script of scripts){
                const rg = /<script (.*)>/
                if(!script.src){
                    let cont = script.outerHTML.replaceAll("</script>", "");
                    const ex = rg.exec(cont.replace("\n", ""))
                    cont = ex? cont.replace(ex[0], ""): cont.replace("<script>", "")

                    eval(cont)    
                }else{
                    (async()=>{
                        const res = await fetch(script.src);
                        eval(await res.text())
                    })()
                }
            }
        }
    }, [reference.current?.children, ct])

    useEffect(()=>{
        if(!ct || ct !== content) setCt(content)
    }, [content, ct])


    return <Feather rf={reference}/>
}

InnerHTML.defaultProps = {
    Feather: ({rf})=> (<div ref={rf}></div>)
}