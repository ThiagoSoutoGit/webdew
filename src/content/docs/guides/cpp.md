---
title: C++ knowledge
description: Some tools for C++.
---


# Template Metaprogramming

Template metaprogramming is the aplication of compile time reflection. Given metaprograming as exec -> exec -> exec

The code will look at its own structure


## Example

Consider the code:

```cpp
#include <iostream>

void print3(int a, int b, int c) {
    std::cout << a << " : " << b << " : " << c << "\n";
}

int main() {
    print3(1, 2, 3);
}
```
with this output:
``` 
1 : 2 : 3
```

Now use template instead so you can get more types in.

```cpp 
#include <iostream>

template<typename A, typename B, typename C>
void print3(A a, B b, C c) {
    std::cout << a << " : " << b << " : " << c << "\n";
}

int main() {
    print3(1, 2, 3);
    std::string hello = "HELLO";
    print3(hello, 3, hello);
}
```

output

```
1 : 2 : 3
HELLO : 3 : HELLO
```