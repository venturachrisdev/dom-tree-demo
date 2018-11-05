import DOM from "./models/DOM";
import RawElement from './models/RawElement';

class Main {

  static dom: DOM = new DOM();

  static createDOM() {

    const row = Main.dom.createElement("div", {
      parent: Main.dom,
      attrs: {
        id: "FormRow",
        class: "row",
      },
    });

    const colMd6Input = Main.dom.createElement("div", {
      parent: row,
      attrs: {
        id: "FirstCol",
        class: "col-md-6",
      },
    });

    const formGroup1 = Main.dom.createElement("div", {
      parent: colMd6Input,
      attrs: {
        id: "EmailContainer",
        class: "form-group",
      },
    });

    Main.dom.createElement("label", {
      parent: formGroup1,
      attrs: {
        id: "EmailLabel",
        class: "label-control",
        for: "EmailInput",
      },
    });

    Main.dom.createElement("input", {
      parent: formGroup1,
      attrs: {
        id: "EmailInput",
        class: "form-control",
        type: "email",
        placeholder: "Type your email...",
      },
    });

    const colMd6Btn = Main.dom.createElement("div", {
      parent: row,
      attrs: {
        id: "SecondCol",
        class: "col-md-6",
      },
    });

    const formGroup2 = Main.dom.createElement("div", {
      parent: colMd6Btn,
      attrs: {
        id: "ButtonContainer",
        class: "form-group",
      },
    });

    const btn = Main.dom.createElement("button", {
      parent: formGroup2,
      attrs: {
        id: "SubmitBtn",
        class: "btn btn-primary btn-block",
        type: "button",
      },
    });

    btn.addChild(new RawElement("Send"));

  }

  static main(): void {
    this.createDOM();
    console.log("----------------- DOM as HTML -----------------");
    console.log(Main.dom.toString());
    console.log("----------------- Find an element by ID -----------------");
    console.log(Main.dom.findElementById("EmailInput"));
  };

}

Main.main();
