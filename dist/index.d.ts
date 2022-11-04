namespace Inner{
    type Feather = ({rf}: {rf: React.MutableRefObject}) => JSX.Element

    type InnerHTML = ({content, Feather}: {content: string, Feather: Feather}) => JSX.Element 

    export default InnerHTML
}


const InnerHTML:Inner.default;

export default InnerHTML