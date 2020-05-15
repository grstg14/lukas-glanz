<template>
<v-layout fill-height fluid>
    <v-row>
        <v-col cols="4">
            <v-roW>
                <v-col cols="4" @click="$emit('contact')">Contact</v-col>
               
            </v-row>
        </v-col>
        <v-col><div class="logo display-3" style="text-align:center; border:0px solid black; width:100%;">Lukas Glanz</div></v-col>
        <v-col></v-col>
        
    </v-row>
    
    </v-layout>
</template>
<style>
    .logo {
        font-family: 'Zilla Slab Highlight', cursive;
    }
</style>