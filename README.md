# dom-tree-demo
This is an educational project to code the logic behind the DOM (sort of) just for fun

You'll need
* NodeJS
* Typescript (ts-node)

Run with
```
$ npm install -g ts-node
$ ts-node index.ts
```

DOM output:
```html
<div id="FormRow" class="row" >
  <div id="FirstCol" class="col-md-6" >
  <div id="EmailContainer" class="form-group" >
  <label id="EmailLabel" class="label-control" for="EmailInput" ></label>
  <input id="EmailInput" class="form-control" type="email" placeholder="Type your email..." ></input>
</div>
</div>
  <div id="SecondCol" class="col-md-6" >
  <div id="ButtonContainer" class="form-group" >
  <button id="SubmitBtn" class="btn btn-primary btn-block" type="button" >
  Send
</button>
</div>
</div>
</div>

```
