import "../styles/QnAElements.css";
import {useState} from "react";

function QnAElements({id, title, content}){
    const [open, setOpen] = useState(false);
    return(
        <div className="qa_box">
            <button key={id} className="qa_title" onClick={() => setOpen(id)}>
                {title}
            </button>
            {open === id && <div className="qa_content">{content}</div>}
        </div>
    );
}

export default QnAElements;