import "../styles/QnAElements.css";
import {useState} from "react";

function QnAElements({title, content}){
    const [open, setOpen] = useState(false);

    return(
        <div className="qa_box" onClick={() => setOpen(!open)}>
            <div className={`qa_title ${open ? "open" : ""}`}>
                {title}
            </div>
            {/* <chevron
                className={`qa_icon ${open ? "rotate" : ""}`}
                size={22}
            /> */}
            <div className={`qa_content_wrapper ${open ? "open" : ""}`}>
                <div className="qa_content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default QnAElements;