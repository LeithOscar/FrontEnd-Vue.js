# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.



## Tutorial

#Create a Vite project

Is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts

```bash
npm create vite
```

Set name of project
Chosse 'vue + ts'
Go to the ptoject folder and install his dependecies ' npm install'


## Pinia

Web [Pinia](https://pinia.vuejs.org/) to get more info.

Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple export const state = reactive({})....

## Basic syntax

Attribute 'Setup'

```bash
<script setup></script>
```
The code inside is compiled as the content of the component's setup() function. This means that unlike normal <script>, which only executes once when the component is first imported, code inside <script setup> will execute every time an instance of the component is created...