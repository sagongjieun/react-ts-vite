import * as React from "react";
import { css } from "@emotion/react";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoToggle from "./components/TodoToggle";
import TodoList from "./components/TodoList";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div css={mainWrapper}>
      <TodoTitle />
      <TodoInput />
      <TodoToggle />
      <div css={divideLine}></div>
      <TodoList />
    </div>
  );
}

const mainWrapper = css`
  width: 807px;
  height: 670px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const divideLine = css`
  width: 760px;
  border: 1px solid #989595;
  margin-bottom: 30px;
`;
