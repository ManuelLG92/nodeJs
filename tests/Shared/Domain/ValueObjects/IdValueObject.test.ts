import {IdValueObjectStub} from "./IdValueObjectStub";
import {IdValueObject} from "../../../../src/Shared/Domain/ValueObjects";

test("It create id Value Object", async () => {
    const id = IdValueObjectStub.byDefault();
    expect(id.value()).toBe(IdValueObjectStub.DEFAULT_ID);
    expect(id).toBeInstanceOf(IdValueObject);
});

test("It create id Value Object", async () => {

    try {
        IdValueObjectStub.fromValue("invalidUuid");
    } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect((e as unknown as Error)?.message).toEqual("Incorrect Uuid format. \"invalidUuid\"");
    }
});


test("It create id Value Object from generate", async () => {
    const id = IdValueObjectStub.autogenerate();
    expect(id.value()).not.toEqual(IdValueObjectStub.DEFAULT_ID);
    expect(id).toBeInstanceOf(IdValueObject);
});