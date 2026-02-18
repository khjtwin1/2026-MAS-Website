import "../styles/QnA.css";
import QnAElements from "../components/QnAElements.jsx";
import qnaList from "../../data/qnaList.js";

function QnA() {
  return (
    <section id="qna">
        <div className="qa_intro">
        <h1>Q&A</h1>
        <p>함께 가치를 만들어갈 여러분들을 기다립니다.</p>
        </div>
        {qnaList.map((item) => (
          <QnAElements
          key={item.id}
          title={item.title}
          content={item.content}
          />
        ))}
    </section>
  );
}
export default QnA;