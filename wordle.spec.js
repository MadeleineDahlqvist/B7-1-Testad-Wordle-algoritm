import { describe, expect, it } from "@jest/globals";

import wordle from "./wordle.js";

/* Teststrategin:
1. Skapa testerna
2. Se till att testerna hittar problem i algoritmen
3. Skapa algoritmen
4. Kör testerna och försök lösa problemen som testen visar att algoritmen har
5. När alla test har lyckats vet jag att algoritmen är korrekt
*/

describe("wordle()", () => {
  it("find letter in correct place but with the wrong word", () => {
    const output = wordle("money", "local");
    expect(output).toEqual([
      { letter: "m", result: "incorrect" },
      { letter: "o", result: "correct" },
      { letter: "n", result: "incorrect" },
      { letter: "e", result: "incorrect" },
      { letter: "y", result: "incorrect" },
    ]);
  });
  it("find the correct word", () => {
    const output = wordle("local", "local");
    expect(output).toEqual([
      { letter: "l", result: "correct" },
      { letter: "o", result: "correct" },
      { letter: "c", result: "correct" },
      { letter: "a", result: "correct" },
      { letter: "l", result: "correct" },
    ]);
  });
  it("find misplaced letters with the wrong word", () => {
    const output = wordle("crash", "local");
    expect(output).toEqual([
      { letter: "c", result: "misplaced" },
      { letter: "r", result: "incorrect" },
      { letter: "a", result: "misplaced" },
      { letter: "s", result: "incorrect" },
      { letter: "h", result: "incorrect" },
    ]);
  });
  it("find misplaced and correct letters with the wrong word", () => {
    const output = wordle("label", "local");
    expect(output).toEqual([
      { letter: "l", result: "correct" },
      { letter: "a", result: "misplaced" },
      { letter: "b", result: "incorrect" },
      { letter: "e", result: "incorrect" },
      { letter: "l", result: "correct" },
    ]);
  });
  it("find misplaced and correct letters with the wrong word", () => {
    const output = wordle("hallå", "cykla");
    expect(output).toEqual([
      { letter: "h", result: "incorrect" },
      { letter: "a", result: "misplaced" },
      { letter: "l", result: "incorrect" },
      { letter: "l", result: "correct" },
      { letter: "å", result: "incorrect" },
    ]);
  });
});
