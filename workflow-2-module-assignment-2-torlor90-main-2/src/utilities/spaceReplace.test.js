import { spaceReplace } from "./spaceReplace.js"

test("test replace space", ()=>{
    expect(spaceReplace("Tor Eric")).toBe("Tor-Eric");
});