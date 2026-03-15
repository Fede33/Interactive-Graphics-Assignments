# Interactive Graphics — Assignment 1  
## 2D Transformations for UAV Simulation

This repository contains the first assignment for the **Interactive Graphics** course.

The goal of this project is to implement **2D geometric transformations in JavaScript** using **3×3 transformation matrices**. The implementation is part of a simple **UAV (drone) simulation** where the drone can move, rotate, and scale over a textured ground.

The assignment is based on the materials used in Prof. **Cem Yuksel's "Introduction to Computer Graphics"** course.

---

## Project Overview

You are given a small web-based UAV simulation implemented in **HTML + JavaScript**.

The simulation renders:

- a **drone**
- its **rotating propellers**
- a **shadow**
- a **ground texture**

The missing part of the application consists of implementing two transformation functions in JavaScript:

- `GetTransform`
- `ApplyTransform`

Once implemented correctly, the UAV moves correctly in the scene and the propellers rotate around their local positions.

---

## Implemented Functions

### `GetTransform(positionX, positionY, rotation, scale)`

This function returns a **3×3 transformation matrix** in **column-major order**.

The transformation applies:

1. **Scaling**
2. **Rotation**
3. **Translation**

The rotation is provided in **degrees** and converted internally to **radians**.

Example implementation logic:

- compute rotation in radians
- build the transformation matrix
- return it as a **1D array of 9 values**

---

### `ApplyTransform(trans1, trans2)`

This function combines two transformation matrices.

It performs **matrix multiplication** between two **3×3 matrices** stored in **column-major order**.

The returned matrix corresponds to applying:
[ m11 m21 m31
m12 m22 m32
m13 m23 m33 ]


Stored in JavaScript as:
array[0] array[3] array[6]
array[1] array[4] array[7]
array[2] array[5] array[8]


---

## Controls

The UAV can be controlled using the keyboard:

| Key | Action |
|----|----|
| **W / Arrow Up** | Zoom in |
| **S / Arrow Down** | Zoom out |
| **A / Arrow Left** | Rotate counter-clockwise |
| **D / Arrow Right** | Rotate clockwise |
| **Q / Page Up** | Increase altitude and speed |
| **E / Page Down** | Decrease altitude and speed |
| **H** | Show / hide help |

---

## Useful Development Tip

Press **F4** to reload the `project1.js` file **without refreshing the page**.

This allows quick testing of changes to the transformation functions.

---

## Technologies Used

- **JavaScript**
- **HTML5**
- **2D graphics transformations**
- **matrix algebra for computer graphics**

---

## Learning Objectives

This assignment focuses on:

- understanding **2D transformation matrices**
- implementing **scale, rotation, and translation**
- working with **column-major matrix representation**
- performing **matrix multiplication**
- applying **hierarchical transformations** in computer graphics
- understanding **local vs global transformations**

---

## Expected Result

When the transformation functions are implemented correctly:

- the UAV moves smoothly in the scene
- propellers rotate around their correct positions
- the shadow follows the UAV
- all transformations behave consistently during rotation and scaling
