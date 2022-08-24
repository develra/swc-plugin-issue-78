import styled from "styled-components";
import { createRoot } from "ReactDOM";

const StyledH1 = styled(h1)`
  color: red;
`;

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <StyledH1>Hello, world!</StyledH1>
  </div>
);
