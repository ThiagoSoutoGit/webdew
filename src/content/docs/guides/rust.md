---
title: Rust programming language
description: A guide to Rust.
---

## 1 - Introduction

Important commands:

| Command               | action                                                   |
|-----------------------|----------------------------------------------------------|
| cargo new new_project | create new rust project with a main.rs in the src folder |
| rustc main.rs         | compile and create an exe file                           |
|                       |                                                          |
|                       |                                                          |
|                       |                                                          |



cargo new project_name

rustc main.rs


## 18 - Patterns and match making


### match Arms

### Conditional if let Expressions

### while let Conditional Loops

### for Loops

In a `for` loop, the value that directly follows the keyword `for` is a pattern.

For example, in `for x in y`, the `x` is the pattern.

```rust
fn main() {
    let v = vec!['a', 'b', 'c'];

    for(index, value) in v.iter().enumerate() {
        println!("{value} is at index {index}");
    }
}

```
result:
```shell
thiagosouto@Thiagos-MacBook-Pro loop-pattern % cargo run
   Compiling loop-pattern v0.1.0 (/Users/thiagosouto/dev/rust/book/chapter-18/for-loop/loop-pattern)
    Finished dev [unoptimized + debuginfo] target(s) in 0.59s
     Running `target/debug/loop-pattern`
a is at index 0
b is at index 1
c is at index 2
```

or we can `rustc main.rs` to create an exec file.

```shell 
Last login: Wed Oct  4 10:25:38 on ttys003
/Users/thiagosouto/dev/rust/book/chapter-18/for-loop/loop-pattern/src/main ; exit;
thiagosouto@Thiagos-MacBook-Pro ~ % /Users/thiagosouto/dev/rust/book/chapter-18/for-loop/loop-pattern/src/main ; exit;
a is at index 0
b is at index 1
c is at index 2

Saving session...
...copying shared history...
...saving history...truncating history files...
...completed.
Deleting expired sessions...      27 completed.

[Process completed]
```


:::tip
We get this error from rust analyzer in nvim, if its not in a function:

```rust 
thiagosouto@Thiagos-MacBook-Pro loop-pattern % cargo run
   Compiling loop-pattern v0.1.0 (/Users/thiagosouto/dev/rust/book/chapter-18/for-loop/loop-pattern)
error: expected item, found keyword `let`
 --> src/main.rs:1:1
  |
1 | let v = vec!['a', 'b', 'c'];
  | ^^^ consider using `const` or `static` instead of `let` for global variables

error: could not compile `loop-pattern` (bin "loop-pattern") due to previous error
```

that if `main.rs`:

```rust
let v = vec!['a', 'b', 'c'];

for(index, value) in v.iter().enumerate() {
    println!("{value} is at index {index}");
}
```
:::


### let Statements

```rust
let x = 5;
```

More formally, a let statement looks like this:

```rust
let PATTERN = EXPRESSION;
```

`x` is a pattern that means **“bind what matches here to the variable x.”** Because the name `x` is the whole pattern, this pattern effectively means **“bind everything to the variable x, whatever the value is.”**

### Function Parameters

Function parameters can also be patterns.


## 19 - Refutability: Whether a Pattern Might Fail to Match

###