<script>
    import { onMount } from "svelte";
    import { updateCodeStore } from "../code-store.js";

    import { flows } from "../components/graphs";
    console.log(flows)
    import Editor from "../components/Editor.svelte";
    import Config from "../components/Config.svelte";
    import View from "../components/View.svelte";
    import Card from "../components/Card.svelte";
    import Tag from "../components/Tag.svelte";
    import Links from "../components/Links.svelte";
    import { fromUrl } from "../code-store.js";
    // import pkg from '@mermaid-js/mermaid/package.json'
    import pkg from "@mermaid/package.json";
    export let mermaidVersion = pkg.version;
    onMount(async () => {
        //ga("send", "pageview");
        //ga("send", "event", "version", mermaidVersion, mermaidVersion);
        fromUrl(params.data);
    });
    // export let code = '';
    // export let classes = '';
    // export let error = {};
    // export let token = '';
    // export let expected = '';
    export let params = {};
    function loadDiagram(code){
        let newState = {
            code,
            mermaid: { theme: "default" },
            updateEditor: true,
        };
        updateCodeStore(newState);
    }
</script>

<style>
    #body {
        font-family: "Roboto", sans-serif;
        background-color: #fcfbfc;
    }
    #editor-root {
        display: flex;
        height: 100%;
    }
    #col1 {
        width: 35%;
    }
    #col2 {
        width: 65%;
        padding-left: 32px;
    }
    #app-title {
        font-family: "Playfair Display", serif;
        font-size: 32px;
        font-weight: 700;
        margin: 0;
        color: #1e60ab;
        opacity: 0.8;
    }
    #title-container {
        width: fit-content;
        margin: 0 auto 16px;
        padding-bottom: 16px;
    }
    #power {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 4rem;
    }
    #sampleLoader {
        padding-bottom: 10px;
        padding-left: 10px;
        border-bottom: 1px solid lightgray;
    }
    .button-container {
        margin-top: 5px;
    }
</style>

<div id="body">
    <div id="title-container">
        <h1 id="app-title">Workflows</h1>
    </div>
    <div id="editor-root">
        <div id="col1">
            <Card title="Code" noPadding="true">
                <div id="sampleLoader">
                    <span id="sampleLoaderTitle">Sample Diagrams</span>
                    <br />
                    <div class="button-container">
                        <select>
                        {#each flows as flow}
                            <option on:click={() => loadDiagram(flow.code)}>{flow.title}</option>
                        {/each}
                        </select>
                        
                    </div>
                </div>
                <Editor data={params.data} />
            </Card>
            <!--
            <Card title="Mermaid Configuration">
                <Config />
            </Card>-->
<Card title="Actions">
                        <Links />
                    </Card>
                    
        </div>
        <div id="col2">
            <Card title="Preview">
                <View />
            </Card>
        </div>
    </div>
    <div id="power">
        Powered by mermaid
        <Tag color="green">{mermaidVersion}</Tag>
    </div>
</div>
