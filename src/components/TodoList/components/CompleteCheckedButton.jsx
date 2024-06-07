import { StyledButton } from "./CompleteCheckedButton.styled";

function CompleteCheckedButton({ checkedList, setTodoList }) {
  const buttonClickHandler = () => {
    if (checkedList.length) {
      const confirm = window.confirm(
        `총 ${checkedList.length}개의 작업을 선택하였습니다.\n해당 작업들을 완료 처리 하시겠습니까?`
      );
      if (confirm) {
        setTodoList((prev) =>
          prev.map((el) => {
            if (checkedList.includes(Number(el.createdAt))) {
              el.completedAt = new Date();
            }
            return el;
          })
        );
        alert("해당 작업들이 완료 처리 되었습니다.");
      }
    } else {
      alert("선택된 작업이 없습니다.");
    }
  };
  return <StyledButton onClick={buttonClickHandler}>작업 완료</StyledButton>;
}

export default CompleteCheckedButton;
