import { StyledHeader } from "./Header.styled";
import CurrentTime from "./components/CurrnetTime";

function Header() {
  return (
    <>
      <StyledHeader>
        <h1>My To-Do List</h1>
        <CurrentTime />
      </StyledHeader>
    </>
  );
}

export default Header;
