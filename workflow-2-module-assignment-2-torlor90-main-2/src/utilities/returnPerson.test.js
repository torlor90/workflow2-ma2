import { returnPerson } from "./returnPerson";

test("test return name",()=>{
    expect(returnPerson()).toHaveProperty("name") ;
});