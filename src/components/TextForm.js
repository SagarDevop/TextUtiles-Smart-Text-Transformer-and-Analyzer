import React, { useState } from 'react'

export default function TextForm(props) {
    const handelclearclick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text is cleared","danger")
    }
    const handeltitlecaseclick = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()

        setText(newText)
    }
    const handelcapcclick = () => {
        let newText = text.toLowerCase().replace(/^.|\s\S/g, function (a) { return a.toUpperCase(); });
        setText(newText)
    }
    const handeldwclick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handelUPclick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : ' black' }} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3 " onClick={handelUPclick}>CONVERT TO UPPERCASE</button>
                <button className="btn btn-primary mx-3" onClick={handeldwclick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handelcapcclick}>Capitalized Case</button>
                <button className="btn btn-primary mx-3" onClick={handeltitlecaseclick}>Title Case</button>
                <button className="btn btn-danger mx-3" onClick={handelclearclick}>Clear</button>
            </div>
            <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your text summary </h1>
                <p>{text.split(" ").length} words  and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Meanute in read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter in text box to preview it here"}</p>
            </div>
        </>
    )
}
