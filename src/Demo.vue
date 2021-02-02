<template>
    <h1>SD-Components</h1>
    <hr/>

    <div>
        <h2>Button.vue</h2>
        <h3>Primary</h3>
        <SDButton :primary="true">Primary button</SDButton>
        <h3>Progressive</h3>
        <SDButton :progressive="true">Progressive button</SDButton>
        <h3>Disabled</h3>
        <SDButton :disabled="true">Disabled button</SDButton>
        <h3>Destructive</h3>
        <SDButton :destructive="true">Destructive button</SDButton>
        <h3>Frameless</h3>
        <SDButton :frameless="true">Frameless button</SDButton>
        <h3>With Icons</h3>
        <SDButton :icon="sdIconSearch">Icon button</SDButton>
        <br/>
        <br/>
        <SDButton :icon="sdIconSearch" :invisibleText="true">Icon button with hidden text</SDButton>
        &nbsp;
        <SDButton :icon="sdIconCamera" :primary="true" :invisibleText="true">Icon button</SDButton>
        &nbsp;
        <SDButton :icon="sdIconError" :primary="true" :destructive="true" :invisibleText="true">Icon button</SDButton>
        <hr/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { sdIconCamera, sdIconError, sdIconSearch } from './icons';
import SDButton from './components/Button.vue';

export default defineComponent( {
    components: { SDButton },
    
    data() {
        return {
            sdIconCamera,
            sdIconError,
            sdIconSearch
        }
    }
} );

</script>

<style>
#demo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 1rem;
}
</style>
