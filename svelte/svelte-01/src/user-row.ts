import { mount } from "svelte";
import "./app.css";
import UserRowApp from "./lib/UserRowApp.svelte";

const app = mount(UserRowApp, {
  target: document.getElementById("app")!,
});

export default app;
