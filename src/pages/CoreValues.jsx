import "../styles/CoreValues.css";
import CoreValuesElements from "../components/CoreValuesElements";
import img1 from "../../public/growth.svg";
import img2 from "../../public/sharing.svg";
import img3 from "../../public/challenge.svg";
import img4 from "../../public/collaboration.svg";
import img5 from "../../public/execution.svg";
import img6 from "../../public/responsebility.svg";

const coreValues = [
  {
    image: img1,
    title: "GROWTH",
    content:
      "지속적인 학습과 기술을 같이 배우며\n어제보다 더 나은 개발자와 디자이너로 함께 성장합니다.",
  },
  {
    image: img2,
    title: "SHARING",
    content:
      "내가 가진 지식과 경험을 아낌없이 나누어\n팀 전체의 역량을 끌어올립니다.",
  },
  {
    image: img3,
    title: "CHALLENGE",
    content:
      "새로운 기술과 문제에 두려움 없이 도전하며\n공모전과 프로젝트를 통해 한계를 넓혀갑니다.",
  },
  {
    image: img4,
    title: "COLLABORATION",
    content:
      "서로의 강점을 존중하고 적극적으로 소통하여\n혼자가 아닌 팀으로 더 나은 결과를 만듭니다.",
  },
  {
    image: img5,
    title: "EXECUTION",
    content:
      "아이디어에 그치지 않고 끝까지 구현하며\n실제로 동작하는 결과물로 실력을 증명합니다.",
  },
  {
    image: img6,
    title: "RESPONSEBILITY",
    content:
      "각자의 역할에 책임을 가지고 임하며\n팀과 프로젝트에 신뢰를 더합니다.",
  },
];

function CoreValues() {
  return (
    <div className="coreValues">
      <h1 className="title">CORE VALUES</h1>
      <p className="orange">MAS가 추구하는 핵심 가치</p>
      <div className="corevalues_items">
        {coreValues.map((item) => (
          <CoreValuesElements
            key={item.title}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default CoreValues;
