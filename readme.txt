Takeaways:

1. you can use functions for compartmentalization like this:

  function sayHello() {
    alert("hello world");
  }

  $("button").click(sayHello);


2. When using "append", you need to add an actual HTML element ("<li></li>")


3. when using "first"/"last", you're targeting a sibling, not a child


4. As expected, binding became a problem for the newly-added <li>, so we need "on" instead of "click"
  (note how we need to target the parent)

  $("ul").on("click", "li", sayHello);