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


## 1 - Tetris

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