# 🚗 Scroll-Driven Hero Section Animation – Itzfizz Assignment

## 📌 Overview

This project recreates a scroll-driven hero section animation inspired by the provided reference demo.

The goal was to build a smooth, premium-feeling animation using modern frontend technologies while maintaining performance and clean structure.

As the user scrolls:

- The hero section stays pinned.
- A car moves horizontally across the screen.
- A black strip moves with the car.
- A green background is revealed behind the car.
- Impact statistics animate in with staggered motion.

---

## 🎯 Features

### 1️⃣ Hero Layout

- Full-screen hero section
- Letter-spaced headline: `WELCOME ITZFIZZ`
- Animated statistics displayed below the title

### 2️⃣ Scroll-Based Animation

- Section pinned using GSAP ScrollTrigger
- Car movement tied directly to scroll progress
- Black strip moves along with the car
- Green background revealed dynamically
- Smooth scrub-based animation (not time-based autoplay)

### 3️⃣ Animated Stats

- Stats appear with staggered animation
- Fade + upward motion
- Triggered at specific scroll progress

### 4️⃣ Performance Optimized

- Uses `transform` for movement (no layout thrashing)
- No heavy scroll listeners
- GSAP ScrollTrigger for efficient scroll syncing

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger

---

## 📂 Project Structure
