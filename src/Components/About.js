import React from 'react';

export default function About(props) {
    // const [myStyle, setStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
    let myStyle = {
        color: props.mode === 'dark'?'white': '#2a2f47',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
        }
    return (
        <div className="container" style={{color: props.mode === 'dark'?'white': '#2a2f47'}}>
            <h1 className="my-3">About Us</h1>
            <div class="accordion" id="accordionExample" >
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                    </div>
                </div>
                </div>
            {/* <div id="accordion" style={myStyle}>
                <div className="card" >
                <div className="card-header" id="headingOne" style={myStyle}>
                    <h5 className="mb-0">
                    <button className="btn btn-link" style={myStyle}  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse show" style={myStyle} aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-header" id="headingTwo" style={myStyle}>
                    <h5 className="mb-0">
                    <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" style={myStyle} aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.                    </div>
                </div>
                </div>
                <div className="card">
                <div className="card-header" id="headingThree" style={myStyle}>
                    <h5 className="mb-0">
                    <button className="btn btn-link collapsed" style={myStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h5>
                </div>
                <div id="collapseThree" className="collapse" style={myStyle} aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
                </div>
            </div> */}
        </div>
    )
}
