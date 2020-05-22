<template>
    <div style="height: 500px;">
        <v-layout>
            <v-col >
                <v-row class="mt-18">
                <v-col>
                .
                </v-col>   
                </v-row>
                <v-row class="mt-18">
                <v-col>
                .
                </v-col>   
                </v-row>
                <v-row class="mt-18">
                <v-col>
                .
                </v-col>   
                </v-row>
                <v-row class="mt-18" v-for="song in songs" :key="song.id">
                    <v-col>
                        {{ song.title | blanked }}
                    </v-col>   
                </v-row>
                <!--<v-row>
                <v-col>
                t o u c h
                </v-col>   
                </v-row>
                <v-row>
                <v-col>
                t o u c h
                </v-col>   
                </v-row>-->
                
            </v-col>
        </v-layout>
     </div>
</template>

<script>
export default {
    data() {
        return {
            songs: [
                {
                    id: 0,
                    title: 'with the wolves',
                    songtext: ''
                },
                {
                    id: 1,
                    title: 'touch',
                    songtext: ''
                },
                {
                    id: 2,
                    title: 'touch2',
                    songtext: ''
                },
            ]
        }
    },

    filters: {
        blanked(value) {
            let sReturn = "";
            for (var i = 0; i < value.length; i++) {
             sReturn += value[i];
             
            if (!(i === value.length -1)) {
                if (value[i] == " ") {
                    sReturn += "\xa0";
                }
                sReturn += " ";
             }
            }
            return sReturn;
        }
    }
}
</script>
