import React from "react";

export default function MySelect() {
  return (
    <fieldset className="border border-black py-1 px-2 rounded-sm">
      <legend>Elije TPV</legend>
      <select name="languages" id="lang" className="w-full">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
    </fieldset>
  );
}
