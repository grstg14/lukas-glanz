<template>
    <div style="max-width:250px;">
        <div v-if="displayID!==null">
            <transition name="fade" mode="out-in">
                <v-layout
                :key="displayID"
                >
                    <v-col>
                        <v-row justify="end" class="mb-2">
                            <v-btn-toggle
                                :key="displayID"
                                borderless
                                dense
                                dark
                                color="black"
                            >
                                <v-btn 
                                    @click="previous()"
                                    tile
                                    x-small
                                    icon
                                    dark
                                    :disabled="displayID===0"
                                ><v-icon x-small>mdi-chevron-left</v-icon></v-btn>              
                                <v-btn 
                                    @click="next()"
                                    tile 
                                    x-small 
                                    icon
                                    dark
                                    :disabled="displayID===news.length-1"
                                ><v-icon x-small>mdi-chevron-right</v-icon></v-btn>  
                            </v-btn-toggle>
                        </v-row>
                        <v-row>
                            <p :key="displayID" v-line-clamp:20="1" class="font-weight-bold" @change="changeNewsText()">
                                {{ news[displayID].title }} 
                            </p>
                        </v-row>
                        <v-row>
                            <p :key="displayID" :v-line-clamp:20="dispLines">
                                {{ news[displayID].text }} 
                            </p>
                        </v-row>
                        
                    </v-col>
                </v-layout>
            </transition>
       </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            dispLines:5,
            displayID: 0,
            news: [
                {
                    id: 0,
                    title: 'newstitle, newstitle, newstitle, newstitle',
                    text: 'Some long text that needs to be truncated to a fixed number, which is 2 in this case. And if the browser doesnt support then a line-height of 20px is going to be used in order to truncate this text, thus calculating its max-height.'
                },
                {
                    id: 1,
                    title: 'second news',
                    text: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that’s what you see at a toy store. And you must think you’re in a toy store, because you’re here shopping for an infant named Jeb.“'
                }
            ]
        }
    },
    methods: {
        previous() {
            if (this.displayID !== 0) {
                this.displayID -= 1;
                this.changeNewsText();
            }
        },
        next() {
            if (this.displayID <= this.news.length -1) {
                this.displayID += 1;
                this.changeNewsText();
            }
        },

        changeNewsText() {
           this.show=false;
        }
    }
}
</script>
<style scoped>
   .truncate {
        height:250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .fade-enter-active, .fade-leave-active {
    /*transition: opacity .35s;*/
    transition: filter .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    /*opacity: 0;*/
    filter:blur(10px);
    }
</style>