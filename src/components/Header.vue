<template>
<v-layout fill-height fluid>
    <v-row>
        <v-col cols="4">
            <v-row>
                <v-col cols="4">
                        <v-btn 
                            @click="$emit('contact')"
                            dark
                        >
                            Contact
                        </v-btn>
                 
                    
                </v-col>
            </v-row>
        </v-col>
        <v-col>
            <div class="logo display-3" style="text-align:center; border:0px solid black; width:100%;">Lukas Glanz</div>
        </v-col>
        <v-col></v-col>
        
    </v-row>
    
    </v-layout>
</template>
<style>
    .logo {
        font-family: 'Zilla Slab Highlight', cursive;
    }
</style>