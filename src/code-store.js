import { writable } from 'svelte/store';
// import mermaid from '@mermaid-js/mermaid';
import mermaid from '@mermaid';
import { Base64 } from 'js-base64'
import {push, pop, replace} from 'svelte-spa-router'
import {flows} from './components/graphs'

export const codeStore = writable(undefined);
export const fromUrl = data => {
  let code;
  let state;
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches && false
  try {
    let stateStr = Base64.decode(data)
    state = JSON.parse(stateStr);

    console.log('state from url', state)

    if (state.code === undefined) { // not valid json
//      state = { code: '', mermaid: { theme: themeFromUrl } }
		}
		code = state.code;
  } catch (e) {
    // console.error('Init error', e);
		code = `graph LR
S0(Start)
T1(Task 1)
E0(End)

S0-->T1
T1-->E0`;
		state = { code, mermaid: { theme: isDarkMode?'dark':'default' } };
  }

  codeStore.set(state);

};
export const updateCodeStore = newState => {
  codeStore.set(newState);
  replace('/edit/')// + Base64.encodeURI(JSON.stringify(newState)))
};
