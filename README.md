in-progress
===========

Track operations in progress

Installation
------------

```sh
$ component install CamShaft/in-progress
```

API
---

```js
var start = require('in-progress');

start.on('update', function(count) {
  console.log(count);
  // Prints:
  // 1
  // 2
  // 3
  // 2
  // 1
  // 0
});

var end1 = start();
var end2 = start();
var end3 = start();

// do a bunch of work

end2();
end3();
end1();
```

## License

MIT
