import { mount } from "svelte";
import "./app.css";
import Derived from "./lib/Derived.svelte";

const app = mount(Derived, {
  target: document.getElementById("app")!,
});

export default app;
