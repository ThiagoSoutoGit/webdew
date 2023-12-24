---
title: Rust programming language
description: 16 games in Rust.
---


## 16 games in Rust

## Installation

### Bevy

```cargo
cargo add bevy
```


## 1 - Tetris - SFML

```rust
use bevy::{prelude::*, window::WindowResolution};

fn main() {
    App::new()
        .insert_resource(ClearColor(Color::WHITE))
        .add_plugins(DefaultPlugins.set(WindowPlugin {
            primary_window: Some(Window {
                title: "Tetris".to_string(),
                resolution: WindowResolution::new(320., 480.).with_scale_factor_override(1.0),
                ..default()
            }),
            ..default()
        }))
        .add_systems(Startup, setup)
        .run();
}

fn setup(mut commands: Commands) {
    commands.spawn(Camera2dBundle::default());
}
```


:::tip
A system that changes the clear color to white or black when the space key is pressed.

```rust 
use bevy::{prelude::*, window::WindowResolution};

fn main() {
    App::new()
        .insert_resource(ClearColor(Color::WHITE))
        .add_plugins(DefaultPlugins.set(WindowPlugin {
            primary_window: Some(Window {
                title: "Tetris".to_string(),
                resolution: WindowResolution::new(320., 480.).with_scale_factor_override(1.0),
                ..default()
            }),
            ..default()
        }))
        .add_systems(Startup, setup)
        .add_systems(Update, change_clear_color)
        .run();
}

fn setup(mut commands: Commands) {
    commands.spawn(Camera2dBundle::default());
}

fn change_clear_color(input: Res<Input<KeyCode>>, mut clear_color: ResMut<ClearColor>) {
    if input.just_pressed(KeyCode::Space) {
        if clear_color.0 == Color::WHITE{
            clear_color.0 = Color::BLACK;
        } else { clear_color.0 = Color::WHITE }
    }
}
```
:::

:::danger
```
error: linking with `cc` failed: exit status: 1
|
= note: LC_ALL="C" PATH="/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/Users/thiagosouto/.cargo/bin:/Users/thiagosouto/Library/Application Support/JetBrains/Toolbox/scripts" VSLANG="1033" ZERO_AR_DATE="1" "cc" "-arch" "arm64" "/var/folders/y2/4h61bd0s3s5fdwgbw9psn8jw0000gn/T/rustcbZMHNg/symbols.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.12jn8xkuvrcpf63h.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.1avhjl7vvaogsmp0.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.1hbqnon95pt2lzmc.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.1roggr7finpaec9p.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.24h3w9l4svycg3mp.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.27s88dfyoqn99cts.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.2h9xvj133qw9dc6.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.3s0lbpaaiku81u0l.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.3t1ht98jnhz09q2m.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.3tckvvoxni63ou44.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.44mvso2lpt7805q7.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.46zg96jkdqdwacvc.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.4iowaywuorgsde3x.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.4lj3xk4hpk598yrq.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.4v4tfr17f1mv4v2v.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.4ycmsw9bsjaettpy.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.57lnbjcipz2ofq2k.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.5cg65ctwe32gy4ij.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.qrevf2aiapw6mjl.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.sjpf0j3j68wvqec.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.wvaeditb1a7b5mt.rcgu.o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f.3xigsj0k21osbk8e.rcgu.o" "-L" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps" "-L" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/build/sfml-ba94d053b3f1e68c/out" "-L" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/build/link-cplusplus-2813526b0e56d787/out" "-L" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/libsfml-3dfe3c5b5ef2a221.rlib" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/libbitflags-52378a747ecaca4c.rlib" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/libonce_cell-177558d6638cf11e.rlib" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/libwidestring-bbdddd7a525a3d53.rlib" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/libnum_traits-5e148b30b97356c1.rlib" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/liblink_cplusplus-1b72f3175df26ce3.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libstd-3d2f8249df972181.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libpanic_unwind-71f458d6ad9754d3.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libobject-80ca13cc75b9f1f8.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libmemchr-f61e6e34bb7e3d2c.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libaddr2line-0e0bd047a1477984.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libgimli-2e16542b46c8c2c1.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/librustc_demangle-715d432050230d26.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libstd_detect-07347eb75450f6dc.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libhashbrown-9def065c9187ef49.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/librustc_std_workspace_alloc-a77178b509a93e9e.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libminiz_oxide-e52109799d3633b0.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libadler-71de85e71b396682.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libunwind-9d1db45aded26b54.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libcfg_if-dc8bc139addbc9a1.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/liblibc-43ed22d1545fab87.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/liballoc-dfb3f449d0391fb9.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/librustc_std_workspace_core-921be82af751e98a.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libcore-ad57bf2066878332.rlib" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib/libcompiler_builtins-7bc3106ba9bea571.rlib" "-lc++" "-lsfml-system" "-lsfml-audio" "-lsfml-window" "-lsfml-graphics" "-lc++" "-lSystem" "-lc" "-lm" "-L" "/Users/thiagosouto/.rustup/toolchains/stable-aarch64-apple-darwin/lib/rustlib/aarch64-apple-darwin/lib" "-o" "/Users/thiagosouto/dev/rust/games/01-tetris/tetris/target/debug/deps/tetris-00fd43559d6b5b8f" "-Wl,-dead_strip" "-nodefaultlibs" "-undefined" "dynamic_lookup"
= note: ld: library not found for -lsfml-system
clang: error: linker command failed with exit code 1 (use -v to see invocation) 
```

:::

## 1 - Tetris - Bevy